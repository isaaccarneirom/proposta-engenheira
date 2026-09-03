import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete commercial proposal", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(
    html,
    /<title>Proposta comercial \| Presença digital profissional<\/title>/i,
  );
  assert.match(html, /Sua presença profissional também precisa transmitir/);
  assert.match(html, /Landing Page Profissional/);
  assert.match(html, /Site Institucional \+ Link Bio/);
  assert.match(html, /Condições de pagamento/);
  assert.match(html, /O que precisamos para começar/);
  assert.match(html, /https:\/\/wa\.me\/5511958247301/);
  assert.doesNotMatch(html, /Nome da Engenheira/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("keeps the WhatsApp value configurable", async () => {
  const [page, layout, packageJson, envExample] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../.env.example", import.meta.url), "utf8"),
  ]);

  assert.match(
    page,
    /const WHATSAPP_NUMBER =\s+process\.env\.NEXT_PUBLIC_WHATSAPP_NUMBER/,
  );
  assert.match(envExample, /^NEXT_PUBLIC_WHATSAPP_NUMBER=5511958247301$/m);
  assert.match(layout, /lang="pt-BR"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});

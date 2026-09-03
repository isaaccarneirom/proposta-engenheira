# Proposta comercial interativa

Página única para apresentar e comparar duas soluções de presença digital:
Landing Page Profissional e Site Institucional com Link Bio.

## Configuração

Copie `.env.example` para `.env.local` e preencha o número do WhatsApp com DDI
e DDD, usando apenas números:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5511958247301
```

## Desenvolvimento

Requer Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm test
```

O comando de teste executa o build de produção e valida o HTML renderizado da
proposta.

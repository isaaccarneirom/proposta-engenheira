"use client";

import type { PointerEvent, ReactNode } from "react";

const MAGNETIC_STRENGTH = 0.22;

function resetMagneticPosition(element: HTMLAnchorElement) {
  element.style.setProperty("--magnetic-x", "0px");
  element.style.setProperty("--magnetic-y", "0px");
  delete element.dataset.magneticActive;
}

export function MagneticLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const deltaX = event.clientX - (rect.left + rect.width / 2);
    const deltaY = event.clientY - (rect.top + rect.height / 2);

    element.dataset.magneticActive = "true";
    element.style.setProperty("--magnetic-x", `${deltaX * MAGNETIC_STRENGTH}px`);
    element.style.setProperty("--magnetic-y", `${deltaY * MAGNETIC_STRENGTH}px`);
  }

  return (
    <a
      className="magnetic-button"
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => resetMagneticPosition(event.currentTarget)}
      onBlur={(event) => resetMagneticPosition(event.currentTarget)}
    >
      <span className="magnetic-button-surface">
        <span>{children}</span>
        <i className="bi bi-arrow-down" aria-hidden="true" />
      </span>
    </a>
  );
}

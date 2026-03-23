"use client";

import { useEffect } from "react";

export function CmsHeadInjection({ html }: { html: string }) {
  useEffect(() => {
    const trimmed = html.trim();
    if (!trimmed) return;

    const tpl = document.createElement("template");
    tpl.innerHTML = trimmed;
    const nodes = Array.from(tpl.content.childNodes);
    const appended: ChildNode[] = [];

    for (const node of nodes) {
      document.head.appendChild(node);
      appended.push(node);
    }

    return () => {
      for (const node of appended) {
        node.parentNode?.removeChild(node);
      }
    };
  }, [html]);

  return null;
}

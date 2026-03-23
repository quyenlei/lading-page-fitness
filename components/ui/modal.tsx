"use client";

import { cn } from "@/lib/utils/common";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const overlayClass =
  "fixed inset-0 z-200 flex items-center justify-center bg-black/50 px-4 md:px-0";

const panelDefault =
  "relative mx-auto w-full max-w-125 overflow-hidden rounded-xl bg-white shadow-xl";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  ariaLabel: string;
  children: React.ReactNode;
  containerClassName?: string;
  portal?: boolean;
  overlayClassName?: string;
};

export function Modal({
  open,
  onClose,
  ariaLabel,
  children,
  containerClassName = panelDefault,
  portal = false,
  overlayClassName,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const node = (
    <div
      className={overlayClassName ?? overlayClass}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={containerClassName}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return portal && typeof document !== "undefined"
    ? createPortal(node, document.body)
    : node;
}

export function ModalHeader({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="flex h-8 w-8 items-center justify-center rounded text-stone-700 transition-colors hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-900/30"
      >
        <span className="text-xl leading-none" aria-hidden>
          ×
        </span>
      </button>
    </div>
  );
}

export function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-5">{children}</div>;
}

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3 border-t border-gray-100 px-6 py-4">
      {children}
    </div>
  );
}

const btn =
  "rounded-md px-4 py-2 text-xs font-medium uppercase focus:outline-none focus:ring-2 focus:ring-offset-1";

export function ModalCancelButton({
  onClick,
  children = "Cancel",
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(btn, "bg-gray-100 text-emerald-900 hover:bg-gray-200/60 focus:ring-gray-900")}
    >
      {children}
    </button>
  );
}

export function ModalSubmitButton({
  disabled,
  children,
}: {
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        btn,
        "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-70"
      )}
    >
      {children}
    </button>
  );
}

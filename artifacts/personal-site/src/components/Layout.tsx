import type { ReactNode } from "react";
import Nav from "@/components/Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <div className="mx-auto max-w-2xl px-6">
        <Nav />
        <main>{children}</main>
        <footer className="mt-32 pt-8 pb-12 border-t border-[#1f1f1f] text-xs text-[#666666]">
          Walker Underwood — Blue Ridge, GA
        </footer>
      </div>
    </div>
  );
}



"use client";
import NavBar from "@/components/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">

      <NavBar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
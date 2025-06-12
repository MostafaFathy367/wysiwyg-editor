import { Geist, Geist_Mono } from "next/font/google";
import MyEditor from "../components/editor-demo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <MyEditor />
      </main>

    </div>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full items-center justify-center border-t border-t-zinc-100 bg-zinc-50 py-5">
      <a
        className="flex items-center justify-center gap-2 no-underline"
        href={`https://vercel.com?utm_source=upstash&utm_medium=example&utm_campaign=${process.env.packageName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Powered by</span>
        <Image src="/upstash.svg" alt="Upstash Logo" width={90} height={26} />
      </a>
    </footer>
  );
}

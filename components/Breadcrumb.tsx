import Image from "next/image";

export default function Breadcrumb() {
  const packageName = process.env.packageName;
  const packageUrl = process.env.packageUrl;

  return (
    <div className="flex items-center gap-1.5">
      <Image src="/github.svg" alt="GitHub Logo" width={20} height={20}/>
      <span className="text-zinc-300">/</span>
      <a
        className="hover:underline"
        href="https://github.com/upstash"
        target="_blank"
        rel="noopener noreferrer"
      >
        upstash
      </a>
      <>
        <span className="text-zinc-300">/</span>
        <a
          className="hover:underline"
          href={packageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {packageName}
        </a>
      </>
    </div>
  );
}

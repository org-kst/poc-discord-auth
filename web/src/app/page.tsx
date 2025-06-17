import Link from "next/link";

export default function Home() {
  return (
    <div>
      <button>
        <Link href="/api/oauth/discord/redirect">Discord認可</Link>
      </button>
    </div>
  );
}

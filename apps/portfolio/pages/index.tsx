import Link from 'next/link';

export default function StyleGuide() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <h1>Jason Ruesch</h1>
      <Link href="/style-guide">
        <a className="hover:text-cta underline">Style Guide</a>
      </Link>
    </div>
  );
}

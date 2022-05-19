import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <Image
        layout="raw"
        width="224"
        height="30"
        src="/logo.svg"
        alt="Jason Ruesch"
        className="block dark:hidden"
      />
      <Image
        layout="raw"
        width="224"
        height="30"
        src="/logo-dark.svg"
        alt="Jason Ruesch"
        className="hidden dark:block"
      />
      <Link href="/style-guide">
        <a className="hover:text-cta underline">Style Guide</a>
      </Link>
    </div>
  );
}

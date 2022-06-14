import { useRouter } from 'next/router';
import Link from 'next/link';

import classNames from 'classnames';

const Header = () => {
  const { route } = useRouter();

  return (
    <header className="fixed top-0 left-0 z-[9] flex w-full items-center justify-center bg-[#eeeeee]">
      <Link href="/">
        <a
          className={classNames('cursor-pointer p-5 text-black no-underline', {
            '!underline': route === '/',
          })}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={classNames('cursor-pointer p-5 text-black no-underline', {
            '!underline': route === '/about',
          })}
        >
          About
        </a>
      </Link>
    </header>
  );
};

export default Header;

import { ChevronRightIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { Layout } from '../components';

export default function Home() {
  return (
    <Layout shouldCenterPage isHome>
      <div>
        <h1
          className={classNames(
            'font-heading text-center text-3xl font-bold',
            'lg:text-4xl',
          )}
        >
          Hi! I&apos;m
          <br />
          <span className="text-primary">Jason Ruesch</span>
          <br />
          and I am a<br />
          <span className="text-secondary">Software Engineer</span>
          <br />
          focusing on
          <br />
          Web Development and Design
        </h1>

        <div className="mx-auto mt-4 flex w-24 justify-center">
          <Link href="/about" scroll={false}>
            <a
              className={classNames(
                'text-link flex w-24 justify-end text-sm font-medium',
                'hover:text-link-hover',
              )}
              aria-label="Learn more about me"
            >
              <div className="w-12">
                <ChevronRightIcon className="h-12 w-12" aria-hidden="true" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

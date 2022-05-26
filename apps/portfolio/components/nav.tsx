import { HomeIcon, TemplateIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <span className="material-symbols-outlined">person</span>,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <span className="material-symbols-outlined">send</span>,
  },
  {
    name: 'Style Guide',
    href: '/styleguide',
    icon: <TemplateIcon />,
  },
];
const externalNavigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/jasonruesch',
    icon: (
      <span className="iconify h-full w-full" data-icon="mdi:github"></span>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jasonruesch/',
    icon: (
      <span className="iconify h-full w-full" data-icon="mdi:linkedin"></span>
    ),
  },
];

export function Nav({
  className,
  isSidenav = false,
  includeTopBorder = false,
  onNavItemClick,
}: {
  className?: string;
  isSidenav?: boolean;
  includeTopBorder?: boolean;
  onNavItemClick?: () => void;
}) {
  const { route } = useRouter();

  return (
    (isSidenav && (
      <nav
        className={classNames(
          'flex flex-1 flex-col divide-y divide-neutral-500 overflow-y-auto px-2 lg:px-4',
          className
        )}
        aria-label="Sidenav"
      >
        <div
          className={classNames('space-y-1 pt-6', {
            'mt-5 border-t border-t-neutral-500': includeTopBorder,
          })}
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={classNames(
                  'group flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-neutral-100 hover:bg-neutral-600 hover:text-white',
                  {
                    'bg-neutral-800 !text-white hover:bg-neutral-800':
                      route === item.href,
                  }
                )}
              >
                <div
                  className="mr-4 h-6 w-6 flex-shrink-0 text-neutral-200"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-5 pt-6">
          <div className="space-y-1">
            {externalNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-neutral-100 hover:bg-neutral-600 hover:text-white"
                onClick={onNavItemClick}
              >
                <div
                  className="mr-4 h-6 w-6 flex-shrink-0 text-neutral-200"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    )) || (
      <nav className={classNames('space-x-4', className)}>
        {navigation
          .filter((item) => item.href !== '/')
          .map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="hover:text-cta hidden lg:inline">{item.name}</a>
            </Link>
          ))}
      </nav>
    )
  );
}

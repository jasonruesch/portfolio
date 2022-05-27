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
          'divide-divider flex flex-1 flex-col divide-y overflow-y-auto px-2 lg:px-4',
          className
        )}
        aria-label="Navigation"
      >
        <div
          className={classNames('space-y-1 pt-6', {
            'border-t-divider mt-5 border-t': includeTopBorder,
          })}
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={classNames(
                  'hover:bg-sidebar-link-hover text-sidebar-link flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 hover:text-white',
                  {
                    '!bg-sidebar-link-active !text-white': route === item.href,
                  }
                )}
              >
                <div
                  className="text-sidebar-link-icon mr-4 h-6 w-6 flex-shrink-0"
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
                className="hover:bg-sidebar-link-hover text-sidebar-link group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 hover:text-white"
                onClick={onNavItemClick}
              >
                <div
                  className="text-sidebar-link-icon mr-4 h-6 w-6 flex-shrink-0"
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
      <nav
        className={classNames('space-x-4', className)}
        aria-label="Navigation"
      >
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

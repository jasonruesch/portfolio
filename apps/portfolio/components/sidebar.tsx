import { ColorSwatchIcon, DocumentTextIcon } from '@heroicons/react/outline';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Colors', href: '#colors', icon: ColorSwatchIcon },
  {
    name: 'Typography',
    href: '#typography',
    icon: DocumentTextIcon,
  },
  { name: 'Shadows', href: '#shadows', icon: DocumentTextIcon },
];
// const secondaryNavigation = [
//   { name: 'Buttons', href: '#buttons', icon: TemplateIcon },
//   { name: 'Links', href: '#links', icon: LinkIcon },
//   { name: 'Badges', href: '#badges', icon: TemplateIcon },
//   { name: 'Inputs', href: '#inputs', icon: TemplateIcon },
//   { name: 'Avatars', href: '#avatars', icon: TemplateIcon },
//   { name: 'Icons', href: '#icons', icon: TemplateIcon },
// ];

export default function Sidebar({ handleNavItemClick }) {
  return (
    <>
      <div className="flex flex-shrink-0 items-center px-4">
        <Link href="/">
          <a>
            <Image
              layout="raw"
              width="224"
              height="30"
              className="h-8 w-auto"
              src="/logo.svg"
              alt="Jason Ruesch"
            />
          </a>
        </Link>
      </div>
      <nav
        className="mt-5 flex flex-1 flex-col divide-y divide-neutral-500 overflow-y-auto"
        aria-label="Sidebar"
      >
        <div className="space-y-1 px-2">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavItemClick}
              className={cn(
                index === -1
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-100 hover:bg-neutral-600 hover:text-white',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6'
              )}
              aria-current={index === -1 ? 'page' : undefined}
            >
              <item.icon
                className="mr-4 h-6 w-6 flex-shrink-0 text-neutral-200"
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </div>
        {/* <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-neutral-100 hover:bg-neutral-600 hover:text-white"
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 text-neutral-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div> */}
      </nav>
    </>
  );
}

import {
  ColorSwatchIcon,
  // TemplateIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
  { name: 'Colors', id: 'colors', icon: <ColorSwatchIcon /> },
  {
    name: 'Typography',
    id: 'typography',
    icon: <span className="material-symbols-outlined">text_fields</span>,
  },
  {
    name: 'Shadows',
    id: 'shadows',
    icon: <span className="material-symbols-outlined">ev_shadow</span>,
  },
];
const secondaryNavigation = [
  // { name: 'Buttons', id: 'buttons', icon: TemplateIcon },
  // { name: 'Links', id: 'links', icon: TemplateIcon },
  // { name: 'Badges', id: 'badges', icon: TemplateIcon },
  // { name: 'Inputs', id: 'inputs', icon: TemplateIcon },
  // { name: 'Avatars', id: 'avatars', icon: TemplateIcon },
  // { name: 'Icons', id: 'icons', icon: TemplateIcon },
];

export default function Sidebar({ onNavItemClick }) {
  return (
    <>
      <div className="flex h-16 flex-shrink-0 items-center px-4">
        <Link href="/">
          <a>
            <Image
              layout="raw"
              width="224"
              height="30"
              src="/logo-dark.svg"
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
          {navigation.map((item) => (
            <ScrollLink
              key={item.id}
              activeClass="bg-neutral-800 text-white hover:bg-neutral-800"
              to={item.id}
              spy={true}
              hashSpy={true}
              smooth={true}
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
            </ScrollLink>
          ))}
        </div>
        <div className="mt-6 pt-6">
          <div className="space-y-1 px-2">
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-neutral-100 hover:bg-neutral-600 hover:text-white"
                onClick={onNavItemClick}
              >
                <item.icon
                  className="mr-4 h-6 w-6 text-neutral-200"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

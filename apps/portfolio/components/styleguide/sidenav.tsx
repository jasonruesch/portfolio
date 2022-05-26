import { ColorSwatchIcon, TemplateIcon } from '@heroicons/react/outline';
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
  {
    name: 'Buttons',
    id: 'buttons',
    icon: <span className="material-symbols-outlined">smart_button</span>,
  },
  {
    name: 'Links',
    id: 'links',
    icon: <span className="material-symbols-outlined">link</span>,
  },
  {
    name: 'Badges',
    id: 'badges',
    icon: <span className="material-symbols-outlined">verified</span>,
  },
  {
    name: 'Inputs',
    id: 'inputs',
    icon: <span className="material-symbols-outlined">edit</span>,
  },
  {
    name: 'Avatars',
    id: 'avatars',
    icon: <span className="material-symbols-outlined">account_circle</span>,
  },
  { name: 'Icons', id: 'icons', icon: <TemplateIcon /> },
];

export function Sidenav({
  className,
  onNavItemClick,
}: {
  className?: string;
  onNavItemClick?: () => void;
}) {
  return (
    <div className={className}>
      <nav
        className="flex flex-1 flex-col divide-y divide-neutral-500 overflow-y-auto px-2 lg:px-4"
        aria-label="Sidenav"
      >
        <div className="space-y-1 pt-6">
          {navigation.map((item) => (
            <ScrollLink
              key={item.id}
              activeClass="bg-neutral-800 !text-white hover:bg-neutral-800"
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
        <div className="mt-5 pt-6">
          <div className="space-y-1">
            {secondaryNavigation.map((item) => (
              <ScrollLink
                key={item.id}
                activeClass="bg-neutral-800 !text-white hover:bg-neutral-800"
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
        </div>
      </nav>
    </div>
  );
}

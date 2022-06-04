import { ColorSwatchIcon, TemplateIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
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

const SidebarLink = ({ name, id, icon, onNavItemClick, offset }) => (
  <ScrollLink
    className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium leading-6 hover:bg-neutral-400/20 dark:hover:bg-neutral-100/20"
    activeClass="!bg-primary !text-on-primary"
    to={id}
    spy={true}
    hashSpy={true}
    smooth={true}
    onClick={onNavItemClick}
    offset={offset}
  >
    <div className="mr-4 h-6 w-6 flex-shrink-0" aria-hidden="true">
      {icon}
    </div>
    {name}
  </ScrollLink>
);

export function Sidenav({
  className,
  onNavItemClick,
}: {
  className?: string;
  onNavItemClick?: () => void;
}) {
  return (
    <nav
      className={classNames(
        'flex flex-1 flex-col divide-y divide-black divide-opacity-20 overflow-y-auto px-2 dark:divide-white dark:divide-opacity-20 lg:px-4',
        className
      )}
      aria-label="Side Navigation"
    >
      <div className="space-y-1 pt-6">
        {navigation.map((item, index) => (
          <SidebarLink
            key={item.id}
            id={item.id}
            name={item.name}
            icon={item.icon}
            onNavItemClick={onNavItemClick}
            offset={index > 0 ? -32 : 0}
          />
        ))}
      </div>
      <div className="mt-5 pt-6">
        <div className="space-y-1">
          {secondaryNavigation.map((item) => (
            <SidebarLink
              key={item.id}
              id={item.id}
              name={item.name}
              icon={item.icon}
              onNavItemClick={onNavItemClick}
              offset={-32}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

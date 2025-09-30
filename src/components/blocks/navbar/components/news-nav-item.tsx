// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";

// CUSTOM DATA
import { aboutNavigation } from "data/navigation";

export default function NewsNavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="News" className="nav-link dropdown-toggle" />

      <ul className="dropdown-menu">
        {aboutNavigation.map(({ id, url, title }) => {
          return (
            <ListItemLink
              key={id}
              href={url}
              title={title}
              linkClassName="dropdown-item"
            />
          );
        })}
      </ul>
    </li>
  );
}

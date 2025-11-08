// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";

// CUSTOM DATA
import { onlineAcademyNavigation } from "data/navigation";

export default function OnlineAcademyNavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink
        title="Online Academy"
        className="nav-link dropdown-toggle"
      />

      <ul className="dropdown-menu">
        {onlineAcademyNavigation.map(({ id, url, title, target }) => (
          <li key={id} className="nav-item">
            <a 
              href={url} 
              className="dropdown-item"
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";

export default function AboutNavItem() {
  return (
    <li className="nav-item">
      <NextLink 
        href="/about-aaroh" 
        title="AboutUs" 
        className="nav-link" 
      />
    </li>
  );
}

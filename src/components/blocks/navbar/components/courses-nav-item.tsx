import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// CUSTOM DATA
import { courses } from "data/navigation";

export default function CoursesNavItem() {
  return (
    <li className="nav-item dropdown dropdown-mega">
      <DropdownToggleLink
        title="Courses"
        className="nav-link dropdown-toggle"
      />

      <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
        <li className="mega-menu-content mega-menu-scroll">
          <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-5 gy-lg-2 list-unstyled">
            {courses.map(({ id, title, url, thumnail }) => (
              <li className="col" key={id}>
                <Link href={url} className="dropdown-item">
                  <img
                    alt={title}
                    src={`/img/thumbnails/${thumnail}.jpg`}
                    srcSet={`/img/thumbnails/${thumnail}@2x.jpg 2x`}
                    className="rounded lift d-none d-lg-block"
                  />
                  <span className="d-lg-none">{title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <span className="d-none d-lg-flex">
            <i className="uil uil-direction" />
            <strong>Scroll to view more</strong>
          </span>
        </li>
      </ul>
    </li>
  );
}

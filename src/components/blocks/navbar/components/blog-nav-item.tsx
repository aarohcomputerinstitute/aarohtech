import Link from 'next/link';

export default function BlogNavItem() {
  return (
    <li className="nav-item">
      <Link href="/blogs" className="nav-link">
        Blogs
      </Link>
    </li>
  );
}

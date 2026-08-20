

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          My Blog
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  );
}
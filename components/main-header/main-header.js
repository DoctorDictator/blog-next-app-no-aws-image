import Link from "next/link";

import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          Para Posts
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/posts">Posts</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
            {/* <li>
            <Link href="/meals">Browse Meals</Link>
          </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

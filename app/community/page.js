import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Writing</span>
        </h1>
        <p>Join our community and share your ideas</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <p>Share & discover ideas</p>
          </li>
          <br />
          <li>
            <p>Find new friends & like-minded people</p>
          </li>
          <br />
          <li>
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}

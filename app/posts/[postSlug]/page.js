import Image from "next/image";
import { notFound } from "next/navigation";

import { getPost } from "@/lib/posts";
import classes from "./page.module.css";

export async function generateMetadata({ params }) {
  const post = getPost(params.postSlug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
  };
}

export default function postDetailsPage({ params }) {
  const post = getPost(params.postSlug);

  if (!post) {
    notFound();
  }

  post.body = post.body.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={post.image} alt={post.title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{post.title}</h2>
          <p className={classes.creator}>
            by <a href={`mailto:${post.email}`}>{post.creator}</a>
          </p>
        </div>
      </header>
      <main>
        <p
          className={classes.body}
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        ></p>
      </main>
    </>
  );
}

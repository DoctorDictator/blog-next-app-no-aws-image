import Link from "next/link";
import classes from "./page.module.css";
import PostsGrid from "@/components/posts/posts-grid";
import { getPosts } from "@/lib/posts";
import { Suspense } from "react";
import PostsLoadingPage from "./loading-out";
async function Posts() {
  const posts = await getPosts();

  return <PostsGrid posts={posts} />;
}

export default function PostsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Content, created <span className={classes.highligh}>by you</span>
        </h1>
        <p>Write about your ideas. Share your knowledge with others</p>
        <p className={classes.cta}>
          <Link href="/posts/add">Share Your Ideas</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<PostsLoadingPage />}>
          <Posts />
        </Suspense>
      </main>
    </>
  );
}

import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
import ImageSlideshowWrapper from "@/components/images/ImageSlideshowWrapper";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshowWrapper />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Para Posts for Bloggers</h1>
            <p>Share your knowledge with the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/posts">See All Posts</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Para Posts is a vibrant platform for thinkers and creators to share
            their knowledge, ideas, and insights with a global audience. It’s a
            space to explore fresh perspectives, spark meaningful discussions,
            and connect with others passionate about learning and innovation.
          </p>
          <p>
            Para Posts is a hub for discovering new ideas and engaging with a
            community of curious minds.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Para Posts?</h2>
          <p>
            Para Posts empowers individuals to share their expertise and unique
            viewpoints through blogging. It’s a place to dive into
            thought-provoking content, uncover new concepts, and build
            connections with others who value knowledge and creativity.
          </p>
          <p>
            Para Posts is your go-to destination for inspiration, learning, and
            connecting with a community of idea enthusiasts.
          </p>
        </section>
      </main>
    </>
  );
}

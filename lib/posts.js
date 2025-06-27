import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("posts.db");

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM posts").all();
}

export function getPost(slug) {
  return db.prepare("SELECT * FROM posts WHERE slug = ?").get(slug);
}
export async function getPostImages() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const images = db.prepare("SELECT image, title FROM posts").all();
    return images.map((post) => ({
      image: post.image,
      alt: post.title,
    }));
  } catch (error) {
    console.error("Error fetching post images:", error);
    return [];
  }
}
export async function savePost(post) {
  post.slug = slugify(post.title, { lower: true });
  post.body = xss(post.body);
  const extension = post.image.name.split(".").pop();
  const filename = `${post.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await post.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image Failed");
    }
  });

  post.image = `/images/${filename}`;
  db.prepare(
    `
    INSERT INTO posts (title,body,creator,email,image,slug)
    VALUES (@title,@body,@creator,@email,@image,@slug)
    `
  ).run(post);
}

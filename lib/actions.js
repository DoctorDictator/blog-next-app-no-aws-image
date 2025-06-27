"use server";

import { redirect } from "next/navigation";

import { savePost } from "./posts";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function sharePost(prevState, formData) {
  const post = {
    title: formData.get("title"),
    body: formData.get("body"),
    image: formData.get("image"),
    creator: formData.get("name"),
    email: formData.get("email"),
  };

  if (
    isInvalidText(post.title) ||
    isInvalidText(post.body) ||
    isInvalidText(post.creator) ||
    isInvalidText(post.email) ||
    !post.email.includes("@") ||
    !post.image ||
    post.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await savePost(post);
  revalidatePath("/posts");
  redirect("/posts");
}

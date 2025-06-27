import { getPostImages } from "@/lib/posts";
import ImageSlideshow from "./image-slideshow";

export default async function ImageSlideshowWrapper() {
  try {
    const images = await getPostImages();
    return <ImageSlideshow images={images || []} />;
  } catch (error) {
    console.error("Error in ImageSlideshowWrapper:", error);
    return <ImageSlideshow images={[]} />;
  }
}

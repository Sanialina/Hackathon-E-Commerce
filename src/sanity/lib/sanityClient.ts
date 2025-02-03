import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create the Sanity client
export const sanityClient = createClient({
  projectId: "yu8g6rg9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

// Create the image builder for image URLs
const builder = imageUrlBuilder(sanityClient);

// urlFor method to get image URLs from asset reference
export const urlFor = (source: { _ref: string }) => builder.image(source);

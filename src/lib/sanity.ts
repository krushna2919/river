import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "l40ee2px",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type ImageSource = Parameters<typeof builder.image>[0];

export const urlFor = (source: ImageSource) => builder.image(source);

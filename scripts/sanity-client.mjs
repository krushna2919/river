import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "l40ee2px",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

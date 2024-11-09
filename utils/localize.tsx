import delve from "dlv";
import { getStrapiURL } from ".";

export function getLocalizedParams(query: any) {
  const slug = delve(query, "slug") as any

  return { slug: slug || "" };
}

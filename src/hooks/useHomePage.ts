import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";

export interface HomeImage {
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

export interface HomePageData {
  hero?: {
    headline?: string;
    ctaLabel?: string;
    ctaHref?: string;
    scrollLabel?: string;
    videoSrc?: string;
  };
  ourStory?: {
    eyebrow?: string;
    title?: string;
    body?: string;
    image?: HomeImage;
    imageAlt?: string;
    linkLabel?: string;
    linkHref?: string;
  };
  impact?: {
    eyebrow?: string;
    title?: string;
    stats?: { _key: string; icon: string; number: string; label: string }[];
    linkLabel?: string;
    linkHref?: string;
  };
  nytSpotlight?: {
    publication?: string;
    heading?: string;
    quotes?: string[];
    ctaLabel?: string;
    statValue?: string;
    statCaption?: string;
  };
  methodology?: {
    eyebrow?: string;
    title?: string;
    body?: string;
    image?: HomeImage;
    imageAlt?: string;
    linkLabel?: string;
    linkHref?: string;
  };
  donateCta?: {
    title?: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  caseStudiesSection?: {
    heading?: string;
    caseStudies?: { _key: string; title: string; image: HomeImage; href: string }[];
    blogPosts?: { _key: string; title: string; image: HomeImage; href: string }[];
    caseStudiesViewAllHref?: string;
    blogViewAllHref?: string;
  };
}

const QUERY = `*[_type == "homePage" && _id == "page-home"][0]`;

export function useHomePage() {
  return useQuery<HomePageData | null>({
    queryKey: ["homePage"],
    queryFn: () => sanityClient.fetch(QUERY),
    staleTime: 1000 * 60 * 5,
  });
}

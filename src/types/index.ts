export type ContentType = "news" | "article" | "blog" | "podcast";

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
  role?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface BaseContent {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  coverImage: string;
  category: Category;
  author: Author;
  publishedAt: string;
  type: ContentType;
  readingMinutes?: number;
  tags?: string[];
}

export type Article = BaseContent;
export type NewsItem = BaseContent;
export type BlogPost = BaseContent;

export interface Podcast {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  host: Author;
  duration: string;
  publishedAt: string;
  episodeNumber: number;
  category: Category;
}

export interface BreakingHeadline {
  id: string;
  text: string;
  href: string;
}

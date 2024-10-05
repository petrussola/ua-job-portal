type OpeningFrontmatterProps = {
  layout: string;
  title: string;
  pubDate: string;
  company: string;
  companyDescription: string;
  location: string;
  author: string;
  url: string;
  tags: string[];
  isActive: boolean;
  isOpening: boolean;
};

export type OpeningProps = {
  frontmatter: OpeningFrontmatterProps;
  file: string;
  url: string;
};

type BlogpostFrontmatterProps = {
  layout: string;
  title: string;
  pubDate: string;
  companyDescription: string;
  tags: string[];
  isOpening: boolean;
};

export type BlogpostProps = {
  frontmatter: BlogpostFrontmatterProps;
  file: string;
  url: string;
};

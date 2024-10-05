type OpeningFrontmatterProps = {
  layout: string;
  title: string;
  pubDate: string;
  companyDescription: string;
  location: string;
  author: string;
  url: string;
  tags: string[];
  isActive: boolean;
};

export type OpeningProps = {
  frontmatter: OpeningFrontmatterProps;
  file: string;
  url: string;
};

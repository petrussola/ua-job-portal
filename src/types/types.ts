type JobListingFrontmatterProps = {
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

export type JobListingProps = {
  frontmatter: JobListingFrontmatterProps;
  file: string;
  url: string;
};

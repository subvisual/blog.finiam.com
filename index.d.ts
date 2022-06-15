export type BlogPostPreview = {
  title: string;
  slug: {
    current: string;
  };
  keywords: string;
  longDescription: string;
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  featuredImage: {
    asset: {
      url: string;
    };
  };
  featuredImageAlt: string;
  category: string;
  publishedAt: string;
};

export type BlogIndexProps = {
  data: BlogPostPreview[];
};

export type BlogPostMain = {
  title: string;
  keywords: string;
  author: {
    name: string;
    role: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  featuredImage: {
    asset: {
      url: string;
    };
  };
  featuredImageAlt: string;
  category: string;
  publishedAt: string;
  body: string;
};

export type BlogPostProps = {
  data: BlogPostMain[];
};

export type CategoryProps = {
  data: BlogPostPreview[];
};

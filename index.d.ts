export type PostPreview = {
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

export type PostsPreview = {
  data: BlogPostPreview[];
};

export type PostMain = {
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

export type PostsMain = {
  data: BlogPostMain[];
};

export type PostCategories = {
  allPost: {
    category: string;
  }[];
};

export type SlugContext = {
  params: {
    slug: string;
  };
};

export type CategoryContext = {
  params: {
    category: string;
  };
};

export type PostSlugs = {
  allPost: {
    slug: {
      current: string;
    };
  }[];
};

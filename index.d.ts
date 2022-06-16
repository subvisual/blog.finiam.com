type PostPreview = {
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

type PostsPreview = {
  data: PostPreview[];
};

type PostMain = {
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

type PostsMain = {
  data: PostMain[];
};

type PostCategories = {
  allPost: {
    category: string;
  }[];
};

type SlugContext = {
  params: {
    slug: string;
  };
};

type CategoryContext = {
  params: {
    category: string;
  };
};

type PostSlugs = {
  allPost: {
    slug: {
      current: string;
    };
  }[];
};

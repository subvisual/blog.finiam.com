import fs from "fs";
import { Feed } from "feed";

type Post = {
  title: string;
  slug: {
    current: string;
  };
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
  publishedAt: string;
};

const generateRssFeed = async (posts: Post[]) => {
  const siteURL = "https://blog.finiam.com";
  const date = new Date();

  const author = {
    name: "Finiam",
    email: "contact@finiam.com",
    link: "https://twitter.com/wearefiniam",
  };

  const feed = new Feed({
    title: "Finiam' blog",
    description: "This is Finiam's blog!",
    id: siteURL,
    link: siteURL,
    language: "en",
    image:
      "https://uploads-ssl.webflow.com/625fdbdd8d4bae7f7da9b1ba/627297235701e55b099f859e_meta-image.png",
    favicon: `${siteURL}/assets/favicon.svg`,
    copyright: `All rights reserved ${date.getFullYear()}, Finiam`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },

    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug.current}`;

    feed.addItem({
      title: post.title,
      id: post.slug.current,
      link: url,
      description: post.longDescription,
      author: [{ name: post.author.name }],
      contributor: [author],
      date: new Date(post.publishedAt),
      image: post.featuredImage.asset.url,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};

export default generateRssFeed;

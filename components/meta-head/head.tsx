import Head from "next/head";

const SOCIAL_IMG_SRC =
  "https://uploads-ssl.webflow.com/625fdbdd8d4bae7f7da9b1ba/627297235701e55b099f859e_meta-image.png";

export default function MetaHead({
  title,
  description,
  image,
  keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}) {
  const meta = {
    title: title || "Blog - Finiam",
    description: description || "Finiam's blog",
    image: image || SOCIAL_IMG_SRC,
    keywords:
      keywords ||
      "blog, finiam, fintech, design, development, startup, team, agency, digital, software, development, web3, blockchain, defi",
  };

  return (
    <Head>
      <title>{meta.title}</title>

      <link rel="icon" href="/assets/favicon.svg" />
      <meta name="keywords" content={meta.keywords} />
      <meta name="description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" key="unnamed og:image" content={meta.image} />
      <meta
        name="image"
        property="og:image"
        key="named og:image"
        content={meta.image}
      />
      <meta property="og:description" content={meta.description} />
      <script
        data-goatcounter="https://blogfiniam.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
    </Head>
  );
}

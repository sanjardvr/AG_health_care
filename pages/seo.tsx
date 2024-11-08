import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  image?: any;
  keywords?: string;
};

export default function SEO({ title, description, image, keywords }: Props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title ? `${title}` : "Master9"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Master9" key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:site_name" content="Skibidi Rizzlers from Ohio" key="ogsitename" />
      <meta
        property="og:image"
        content={image || "/favicon-512x512.png"}
        key="ogimage"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={title ? `${title}` : `Master9`}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Master9" />
      <meta name="twitter:creator" content="Master9" />
      <meta name="twitter:image" content={image || "/favicon-512x512.png"} />
      {/* <link rel="canonical" href="https://..." /> */}
   
      <link rel="manifest" href="/site.webmanifest" />     
    </Head>
  );
}

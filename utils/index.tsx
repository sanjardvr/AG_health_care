var pluralize = require("pluralize");

export function getStrapiMedia(url: string) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return `https://1991-63-176-105-72.ngrok-free.app${url}`;
}

export function getStrapiURL(path: string) {
  return `https://1991-63-176-105-72.ngrok-free.app/api${path}`;
}

export function handleRedirection(preview: any, custom: any) {
  if (preview) {
    return {
      redirect: {
        destination: `/api/exit-preview`,
        permanent: false,
      },
    };
  } else if (custom) {
    return {
      redirect: {
        destination: `/${custom}`,
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }
}

export function getData(slug: any, apiID: string, kind: string, preview: any) {
  const previewParams = preview
    ? "&publicationState=preview&published_at_null=true"
    : "";

  if (kind == "collectionType") {
    let prefix = `/${pluralize(apiID)}`;
    if (apiID == "page") {
      prefix = ``;
    } else if (apiID == "article") {
      prefix = `/news-contents`;
    }
    const slugToReturn = `${prefix}/${slug}`;
    const apiUrl = `/${pluralize(
      apiID
    )}?filters[slug][$eq]=${slug}${previewParams}&populate[blocks][populate]=members.picture,header,buttons.link,faq,featuresCheck,cards,pricingCards.perks,articles,restaurants,author.picture,images,cards.image,image&populate=localizations&populate[seo][populate]=metaSocial.image`;

    return {
      data: getStrapiURL(apiUrl),
      slug: slugToReturn,
    };
  } else {
    const apiUrl = `/${apiID}?${previewParams}&populate[blocks][populate]=*,buttons.link&populate=localizations&populate[header]=*&populate[seo]=metaSocial`;

    if (apiID.includes("-page")) {
      const slugToReturn =
        apiID == "blog-page"
          ? `/${apiID.replace("-page", "")}`
          : `/${apiID.replace("-page", "s")}`;
      return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
      };
    } else {
      return {
        data: getStrapiURL(apiUrl),
        slug: `/${apiID}`,
      };
    }
  }
}




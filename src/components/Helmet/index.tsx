import React, { useEffect } from "react";

export type MetaTagType = {
  name: string;
  content: string;
};

type PropsType = {
  title?: string;
  meta?: MetaTagType[] | ((prevMeta: MetaTagType[]) => MetaTagType[]);
};

export const Helmet: React.FC<PropsType> = ({ title, meta }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (meta) {
      const metaTags = typeof meta === "function" ? meta([]) : meta;

      metaTags.forEach((tag) => {
        const metaTag = document.createElement("meta");
        Object.entries(tag).forEach(([key, value]) => {
          metaTag.setAttribute(key, value);
        });
        document.head.appendChild(metaTag);
      });
    }

    return () => {
      if (meta) {
        const metaTags = typeof meta === "function" ? meta([]) : meta;

        metaTags.forEach((tag) => {
          const existingTag = document.head.querySelector(
            `meta[name="${tag.name}"]`
          );
          if (existingTag) {
            document.head.removeChild(existingTag);
          }
        });
      }
    };
  }, [title, meta]);

  return null;
};

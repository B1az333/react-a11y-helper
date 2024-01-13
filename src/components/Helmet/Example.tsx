import React from "react";
import { Helmet } from "components/Helmet";

export const ExampleHelmet1: React.FC = () => {
  const metaTags = [
    { name: "description", content: "Це моє описання сторінки 2" },
  ];

  return (
    <div>
      <Helmet title="Заголовок 1" meta={(prevMeta) => [...prevMeta, ...metaTags]} />
      <h1>Вміст сторінки 1</h1>
      {/* Решта вмісту сторінки */}
    </div>
  );
};

export const ExampleHelmet2: React.FC = () => {
  const metaTags = [
    { name: "keywords", content: "реакт, веб-розробка, доступність" },
  ];

  return (
    <div>
      <Helmet
        title="Заголовок 2"
        meta={(prevMeta) => [...prevMeta, ...metaTags]}
      />
      <h1>Вміст сторінки 2</h1>
      {/* Решта вмісту сторінки */}
    </div>
  );
};

import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const myRequest = fetch(
  `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=&rating=g`,
);

const createImageInsideDOM = (url: string) => {
  const imageElement = document.createElement("img");
  imageElement.src = url;
  document.body.append(imageElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((error) => {
    console.error(error);
  });

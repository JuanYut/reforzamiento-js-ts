import type { GiphyRandomResponse } from "../data/giphy.response";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const createImageInsideDOM = (url: string) => {
  const imageElement = document.createElement("img");
  imageElement.src = url;
  document.body.append(imageElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=&rating=g`,
    );

    if (!response.ok) {
      throw new Error("Error al obtener GIF URL.");
    }

    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
  } catch (error) {
    console.error(`API Error: ${error}`);
    throw error;
  }
};

// Ambos codigos de abajo son iguales:
// getRandomGifUrl().then((url) => createImageInsideDOM(url));
getRandomGifUrl().then(createImageInsideDOM);

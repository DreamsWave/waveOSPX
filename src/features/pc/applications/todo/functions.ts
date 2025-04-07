export const getTodo = async () => {
  const originUrl = import.meta.env.VITE_ORIGIN_URL;
  if (!originUrl) {
    throw new Error("VITE_ORIGIN_URL is not set");
  }
  const url = `${originUrl}/.netlify/functions/getTodo`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  return data;
};

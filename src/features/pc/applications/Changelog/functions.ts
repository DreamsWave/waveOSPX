export const getChangelog = async () => {
  const url = import.meta.env.VITE_GH_CHANGELOG_URL;
  if (!url) {
    throw new Error("VITE_GH_CHANGELOG_URL is not set");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const decodedContent = atob(data.content);
  return decodedContent;
};

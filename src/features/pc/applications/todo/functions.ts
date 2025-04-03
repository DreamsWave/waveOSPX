export const getTodo = async () => {
  const token = import.meta.env.VITE_GH_OBSIDIAN_TOKEN;
  const url = import.meta.env.VITE_GH_OBSIDIAN_TODO_URL;
  if (!token || !url) {
    throw new Error("GH_OBSIDIAN_TOKEN or GH_OBSIDIAN_URL is not set");
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Token ${token}`,
      Accept: "application/vnd.github.v3.raw",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const data = await response.text();
  return data;
};

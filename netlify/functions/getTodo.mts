import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const token = Netlify.env.get("GH_TOKEN");
  const url = Netlify.env.get("GH_TODO_URL");
  if (!token || !url) {
    throw new Error("GH_TOKEN or GH_TODO_URL is not set");
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
  return new Response(data, {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

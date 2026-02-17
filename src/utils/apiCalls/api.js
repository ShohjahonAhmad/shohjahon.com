const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getCareer() {
  const res = await fetch(`${baseUrl}/career`);

  if (!res.ok) {
    throw {
      message: "Failed to fetch career data",
      code: 500,
      statusText: "Internal Server Error",
    };
  }

  const data = await res.json();
  return data;
}

export async function getPortfolio() {
  const res = await fetch(`${baseUrl}/projects`);

  if (!res.ok) {
    throw {
      message: "Failed to fetch porfolio data",
      code: 500,
      statusText: "Internal Server Error",
    };
  }

  const data = await res.json();
  return data;
}

export async function getLeetCode() {
  const leetcodeRes = await fetch(`${baseUrl}/leetcode`);

  if (!leetcodeRes.ok) {
    throw {
      message: "Failed to fetch home data",
      code: 500,
      statusText: "Internal Server Error",
    };
  }

  const solved = (await leetcodeRes.json()).results[0].count;

  return solved;
}

export async function createBlog(title, slug, json) {
  const res = await fetch(`${baseUrl}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, slug, content: json }),
  });

  if (!res.ok) {
    const errBody = await res.json();
    const message = errBody?.error;
    throw new Error(message || "Failed to post the blog");
  }
  const blog = await res.json().blog;

  return blog;
}

export async function getBlogs() {
  const res = await fetch(`${baseUrl}/blogs`);

  if (!res.ok) {
    const errBody = await res.json();
    const message = errBody?.error ?? errBody?.message;
    throw new Error(message || "Failed to retrieve blogs");
  }

  const blogs = await res.json();
  return blogs.blogs;
}

export async function getBlog(slug) {
  const res = await fetch(`${baseUrl}/blogs/${slug}`);

  if (!res.ok) {
    const errBody = await res.json();
    const message = errBody?.error ?? errBody?.message;
    throw new Error(message || "Failed to retrieve blogs");
  }

  const blog = await res.json();

  return blog.blog;
}

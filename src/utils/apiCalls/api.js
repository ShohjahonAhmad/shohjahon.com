const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getCareer() {
  const res = await fetch(`${baseUrl}/career`);

  if (!res) {
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

  if (!res) {
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

  if (!leetcodeRes) {
    throw {
      message: "Failed to fetch home data",
      code: 500,
      statusText: "Internal Server Error",
    };
  }

  const solved = (await leetcodeRes.json()).results[0].count;

  return solved;
}

import {
  getBlog,
  getBlogs,
  getCareer,
  getLeetCode,
  getPortfolio,
} from "../utils/apiCalls/api";
import { defer, redirect } from "react-router-dom";

export async function loader() {
  try {
    const careerData = getCareer();
    const solved = getLeetCode();
    const portfolio = getPortfolio();
    const blogsData = getBlogs();

    return defer({ careerData, solved, portfolio, blogsData });
  } catch (err) {
    throw {
      message: err.message || "Something went wrong",
      code: err.code || 500,
      statusText: err.statusText || "Internal Server Error",
    };
  }
}

export async function loaderBlog({ params }) {
  try {
    const { slug } = params;
    const blog = getBlog(slug);

    return defer({ blog });
  } catch (err) {
    throw {
      message: err.message || "Something went wrong",
      code: err.code || 500,
      statusText: err.statusText || "Internal Server Error",
    };
  }
}

export async function blogWriterGuard({ request }) {
  const url = new URL(request.url);
  const login = url.searchParams.get("login");
  const password = url.searchParams.get("password");

  if (login !== "peaceful" || password !== "spandau") {
    throw redirect("/");
  }

  return null;
}

// export async function loaderBlogs() {
//   try {
//     return defer({ blogsData });
//   } catch (err) {
//     throw {
//       message: err.message || "Something went wrong",
//       code: err.code || 500,
//       statusText: err.statusText || "Internal Server Error",
//     };
//   }
// }

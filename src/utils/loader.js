import { getCareer, getLeetCode, getPortfolio } from "../utils/apiCalls/api";
import { defer } from "react-router-dom";

export async function loader() {
  try {
    const careerData = getCareer();
    const solved = getLeetCode();
    const portfolio = getPortfolio();

    return defer({ careerData, solved, portfolio });
  } catch (err) {
    throw {
      message: err.message || "Something went wrong",
      code: err.code || 500,
      statusText: err.statusText || "Internal Server Error",
    };
  }
}

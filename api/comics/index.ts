import { NowRequest, NowResponse } from "@vercel/node";
import { allowCors, getComics } from "../../utils";

const comics = async (req: NowRequest, res: NowResponse) => {
  try {
    const comics = await getComics()
    res.json(comics)
  } catch (error) {
    // unknown error
    res.status(500).json({
      detail: "An unknown error occurred.",
      error: error.message,
    });
  }
};

export default allowCors(comics);

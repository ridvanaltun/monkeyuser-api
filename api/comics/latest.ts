import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
import { allowCors, getComics } from '../../utils'

const latest = async (req: NowRequest, res: NowResponse) => {
  try {
    const comics = await getComics()
    const comic = comics[0]

    // show comics directly
    if (req.query.img === 'true') {
      const buffer = await axios.get(comic.image_url, { responseType: 'arraybuffer' })
      const bufferData = Buffer.from(buffer.data, "utf-8")
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': bufferData.length
      });
      res.write(bufferData)
      return res.end();
    }

    res.json(comic)
  } catch (error) {
    // unknown error
    res.status(500).json({
      detail: "An unknown error occurred.",
      error: error.message,
    });
  }
}

export default allowCors(latest)

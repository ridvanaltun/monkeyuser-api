import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
import { allowCors, getComics } from '../../utils'

const random = async (req: NowRequest, res: NowResponse) => {
  try {
    const comics = await getComics()
    const comicsCount = comics.length

    // generate random number between comics
    const randomNumber = Math.floor(Math.random() * comicsCount) + 1

    // comic
    const comic = comics[randomNumber]

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

export default allowCors(random)

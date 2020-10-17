import { NowRequest, NowResponse } from '@vercel/node'
import { allowCors } from '../utils'

const index = (req: NowRequest, res: NowResponse) => {
  const url =
    req.headers['x-forwarded-proto'] +
    '://' +
    req.headers['x-forwarded-host'] + '/api'

  return res.json({
    status: 200,
    message: 'It is alive!',
    endpoints: [`${url}/comics`, `${url}/comics/1`, `${url}/comics/latest`, `${url}/comics/random`],
  })
}

export default allowCors(index)
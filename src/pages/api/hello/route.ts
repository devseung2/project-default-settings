import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// type ResponseData = {
//   message: string
// }

// export async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//   // QueryString params
//   // const { searchParams } = new URL(req.url)
//   // const email = searchParams.get('email')

//   if (req.method === 'GET') {
//     // return res.json({ message: 'Hello!' })
//     const result = await FETCH_USERS()

//     return result
//   }


export const FETCH_USERS = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)

  return data
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    // Receive and echo back the posted data
    const data = req.body;
    return res.status(200).json({ name: data?.name || 'No name provided' });
  }
  res.status(200).json({ name: `{"blocks":[{"key":"abcde","text":"Mostafa Fathy","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":13,"style":"BOLD"},{"offset":8,"length":5,"style":"ITALIC"}],"entityRanges":[],"data":{}}],"entityMap":{}}
` });
}

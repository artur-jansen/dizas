import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { path } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/${path}`;
  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
};

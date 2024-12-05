import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import Cors from 'cors';

// Inicializar o middleware CORS
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: 'https://dizasstore.com.br',
  allowedHeaders: ['Content-Type', 'Authorization'],
});

// Helper para esperar o middleware
function runMiddleware(req: VercelRequest, res: VercelResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async (req: VercelRequest, res: VercelResponse) => {
  await runMiddleware(req, res, cors);

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) {
    res.status(500).json({ error: 'Instagram access token is not set' });
    return;
  }

  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Instagram posts' });
  }
};
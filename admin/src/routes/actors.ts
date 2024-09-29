import { Request, Response, NextFunction } from 'express';
import getClient from '../db/dbClient';
import express from 'express';

const router = express.Router();

const query = 'SELECT * FROM actor';

router.get('/', async function (_req: Request, res: Response, next: NextFunction) {
  const client = await getClient();
  try {
    const result = await client.query(query);
    const actors = result.rows;
    res.render('actors', { title: '声優一覧', actors });
  } catch (err) {
    next(err);
  }
});

export default router;

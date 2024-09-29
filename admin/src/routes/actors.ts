import { Request, Response, NextFunction } from 'express';
import getClient from '../db/dbClient';
import express from 'express';

const router = express.Router();

const query = 'SELECT * FROM actor';

router.get('/', async function (_req: Request, res: Response, next: NextFunction) {
  const client = await getClient();
  client
    .query(query)
    .then((result: { rows: any[] }) => {
      const actors = result.rows;
      res.render('actors', { actors });
    })
    .catch((err: any) => next(err));
});

export default router;

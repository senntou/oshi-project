import { Request, Response, NextFunction } from 'express';
import getClient from '../db/dbClient';
import express from 'express';

const router = express.Router();

const query = 'SELECT * FROM agency';

router.get('/', async function (_req: Request, res: Response, next: NextFunction) {
  const client = await getClient();
  try {
    const result = await client.query(query);
    const agencies = result.rows;
    res.render('agencies', { title: '事務所一覧', agencies });
  } catch (err) {
    next(err);
  }
});

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
  const client = await getClient();
  try {
    const { name } = req.body;
    await client.query('INSERT INTO agency(name) VALUES($1)', [name]);
    res.redirect('/agencies');
  } catch (err) {
    next(err);
  }
});

export default router;

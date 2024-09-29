import { Request, Response, NextFunction } from 'express';
import getClient from '../db/dbClient';
import express from 'express';
import { create } from 'domain';
import { createActor } from '../repositories/actors';

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

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
  const { name, agencyId, gender } = req.body;
  await createActor(name, agencyId, gender);
  res.redirect(`/agencies/${agencyId}/actors`);
});

export default router;

import { Request, Response, NextFunction } from 'express';
import getClient from '../db/dbClient';
import express from 'express';

const router = express.Router();

const getQuery = 'SELECT * FROM agency';

router.get('/', async function (_req: Request, res: Response, next: NextFunction) {
  const client = await getClient();
  try {
    const result = await client.query(getQuery);
    const agencies = result.rows;
    res.render('agencies', { title: '事務所一覧', agencies });
  } catch (err) {
    next(err);
  }
});

const postQuery = 'INSERT INTO agency(name) VALUES($1)';

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
  const client = await getClient();
  try {
    const { name } = req.body;
    await client.query(postQuery, [name]);
    res.redirect('/agencies');
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const query = `
  SELECT
    actor.id,
    actor.name
  FROM
    actor
    JOIN agency ON actor.agency_id = agency.id
  WHERE
    agency.id = $1
  `;

  const client = await getClient();
  try {
    const result = await client.query(query, [req.params.id]);
    const actors = result.rows;
    res.render('agencyDetail', { title: '事務所詳細', actors });
  } catch (err) {
    next(err);
  }
});

export default router;

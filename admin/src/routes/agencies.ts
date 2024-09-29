import { Request, Response, NextFunction } from 'express';
import getClient from '../db/dbClient';
import express from 'express';
import {
  createAgency,
  deleteAgency,
  getActorsByAgencyId,
  getAgencyById,
  updateAgency,
} from '../repositories/agencies';

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

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { name } = req.body;
    await createAgency(name);
    res.redirect('/agencies');
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { name } = req.body;
    const { id } = req.params;
    await updateAgency(name, id);
    res.redirect(`/agencies`);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await deleteAgency(id);
    res.redirect('/agencies');
  } catch (err) {
    next(err);
  }
});

router.get('/:id/actors', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const actors = await getActorsByAgencyId(req.params.id);
    const agency = await getAgencyById(req.params.id);
    res.render('agencyDetail', { agency, actors });
  } catch (err) {
    next(err);
  }
});

export default router;

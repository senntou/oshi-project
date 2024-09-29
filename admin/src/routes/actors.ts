import { Request, Response, NextFunction } from 'express';
import getClient from '../db/dbClient';
import express from 'express';
import { createActor, deleteActor, updateActor } from '../repositories/actors';

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
  const { lastName, firstName, lastNameKana, firstNameKana, agencyId, gender } = req.body;
  const name = `${lastName}${firstName}`;
  const nameKana = `${lastNameKana}${firstNameKana}`;

  if (!firstName || !firstNameKana) {
    res.status(400).send('名は必須です');
    return;
  }
  await createActor(
    name,
    nameKana,
    firstName,
    lastName,
    firstNameKana,
    lastNameKana,
    agencyId,
    gender
  );
  res.redirect(`/agencies/${agencyId}/actors`);
});

router.put('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const { firstName, lastName, firstNameKana, lastNameKana } = req.body;
  const name = `${lastName}${firstName}`;
  const nameKana = `${lastNameKana}${firstNameKana}`;

  try {
    await updateActor(id, name, nameKana, firstName, lastName, firstNameKana, lastNameKana);
    res.redirect('/actors');
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  try {
    await deleteActor(id);
    res.redirect('/actors');
  } catch (err) {
    next(err);
  }
});

export default router;

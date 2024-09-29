import getClient from '../db/dbClient';
import { GenderType } from '../types/gender';

const createActorQuery = 'INSERT INTO actor(name, agency_id, gender) VALUES($1, $2, $3)';
const createActor = async (name: string, agencyId: string, gender: GenderType) => {
  const client = await getClient();
  try {
    const result = await client.query(createActorQuery, [name, agencyId, gender]);
  } catch (err) {
    throw err;
  }
};

export { createActor };

import getClient from '../db/dbClient';
import { GenderType } from '../types/gender';

const createActorQuery = `
INSERT INTO 
  actor(name, name_kana, first_name, last_name, first_name_kana, last_name_kana, agency_id, gender)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;
const createActor = async (
  name: string,
  nameKana: string,
  firstName: string,
  lastName: string,
  firstNameKana: string,
  lastNameKana: string,
  agencyId: string,
  gender: GenderType
) => {
  const client = await getClient();
  try {
    const result = await client.query(createActorQuery, [
      name,
      nameKana,
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      agencyId,
      gender,
    ]);
  } catch (err) {
    throw err;
  }
};

const updateActorQuery = `
UPDATE actor 
  SET name = $1,
  name_kana = $2,
  first_name = $3,
  last_name = $4,
  first_name_kana = $5,
  last_name_kana = $6
WHERE id = $7
`;
const updateActor = async (
  id: string,
  name: string,
  nameKana: string,
  firstName: string,
  lastName: string,
  firstNameKana: string,
  lastNameKana: string
) => {
  const client = await getClient();
  try {
    await client.query(updateActorQuery, [
      name,
      nameKana,
      firstName,
      lastName,
      firstNameKana,
      lastNameKana,
      id,
    ]);
  } catch (err) {
    throw err;
  }
};

const deleteActorQuery = 'DELETE FROM actor WHERE id = $1';
const deleteActor = async (id: string) => {
  const client = await getClient();
  try {
    await client.query(deleteActorQuery, [id]);
  } catch (err) {
    throw err;
  }
};

export { createActor, updateActor, deleteActor };

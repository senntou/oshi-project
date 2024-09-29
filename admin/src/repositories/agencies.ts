import getClient from '../db/dbClient';

const getActorsQuery = `
  SELECT
    actor.id,
    actor.name,
    actor.name_kana,
    actor.first_name,
    actor.last_name,
    actor.first_name_kana,
    actor.last_name_kana,
    actor.gender
  FROM
    actor
    JOIN agency ON actor.agency_id = agency.id
  WHERE
    agency.id = $1
  `;
const getActorsByAgencyId = async (id: string) => {
  const client = await getClient();
  try {
    const result = await client.query(getActorsQuery, [id]);
    return result.rows;
  } catch (err) {
    throw err;
  }
};

const getAgencyQuery = 'SELECT agency.id, agency.name FROM agency WHERE id = $1';
const getAgencyById = async (id: string) => {
  const client = await getClient();
  try {
    const result = await client.query(getAgencyQuery, [id]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

const createAgencyQuery = 'INSERT INTO agency(name) VALUES($1)';
const createAgency = async (name: string) => {
  const client = await getClient();
  try {
    await client.query(createAgencyQuery, [name]);
  } catch (err) {
    throw err;
  }
};

const updateAgencyQuery = 'UPDATE agency SET name = $1 WHERE id = $2';
const updateAgency = async (name: string, id: string) => {
  const client = await getClient();
  try {
    await client.query(updateAgencyQuery, [name, id]);
  } catch (err) {
    throw err;
  }
};

const deleteAgencyQuery = 'DELETE FROM agency WHERE id = $1';
const deleteAgency = async (id: string) => {
  const client = await getClient();
  try {
    await client.query(deleteAgencyQuery, [id]);
  } catch (err) {
    throw err;
  }
};

export { getActorsByAgencyId, getAgencyById, createAgency, updateAgency, deleteAgency };

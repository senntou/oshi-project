import { Client } from 'pg';

let client: Client | null = null;

const getClient = async (): Promise<Client> => {
  if (client) {
    return client;
  }

  const env = process.env;
  console.log(env);
  client = new Client({
    user: env.POSTGRES_USER,
    host: 'localhost',
    database: env.POSTGRES_DB,
    password: env.POSTGRES_PASSWORD,
    port: 5432,
  });

  await client.connect();
  return client;
};

export default getClient;

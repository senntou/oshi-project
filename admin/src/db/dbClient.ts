import { Client } from 'pg';

let client: Client | null = null;

const getClient = async (): Promise<Client> => {
  if (client) {
    return client;
  }

  client = new Client({
    user: 'root',
    host: 'localhost',
    database: 'mydb',
    password: 'password',
    port: 5432,
  });

  await client.connect();
  return client;
};

export default getClient;

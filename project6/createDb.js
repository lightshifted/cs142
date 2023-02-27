const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost/cs142project6';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

main();

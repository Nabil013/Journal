import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('journalDB');
    const { section, html, selection } = req.body;

    await db.collection('journalData').updateOne(
      { sectionId: section },
      { $set: { html, selection, updatedAt: new Date() } },
      { upsert: true }
    );

    res.status(200).json({ success: true, message: 'Saved to Cloud!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
}

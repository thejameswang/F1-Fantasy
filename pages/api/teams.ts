import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

type Team = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;
  const db = client.db('f1-fantasy-league');

  switch (req.method) {
    case 'POST':
      const team: Team = req.body;
      await db.collection('teams').insertOne(team);
      res.status(201).json(team);
      break;
    case 'GET':
      const teams = await db.collection('teams').find({}).toArray();
      res.status(200).json(teams);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
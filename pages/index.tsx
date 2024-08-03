import React from 'react';
import { useState, useEffect, FormEvent } from 'react';

type Team = {
  name: string;
};

export default function Home() {
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState<Team[]>([]);

  const fetchTeams = async () => {
    const res = await fetch('/api/teams');
    const data: Team[] = await res.json();
    setTeams(data);
  };

  const addTeam = async (e: FormEvent) => {
    e.preventDefault();
    await fetch('/api/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: teamName }),
    });
    setTeamName('');
    fetchTeams();
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      <h1>F1 Fantasy League</h1>
      <form onSubmit={addTeam}>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter team name"
        />
        <button type="submit">Add Team</button>
      </form>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}
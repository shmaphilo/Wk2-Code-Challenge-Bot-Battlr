import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [availableBots, setAvailableBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setAvailableBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ enlisted: true })
      })
        .then(response => response.json())
        .then(data => {
          setEnlistedBots([...enlistedBots, data]);
        })
        .catch(error => console.error('Error enlisting bot:', error));
    }
  };

  const releaseBot = (bot) => {
    if (enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ enlisted: false })
      })
        .then(() => {
          const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
          setEnlistedBots(updatedEnlistedBots);
        })
        .catch(error => console.error('Error releasing bot:', error));
    }
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
        setEnlistedBots(updatedEnlistedBots);
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <BotCollection bots={availableBots} onEnlist={enlistBot} />
      <YourBotArmy bots={enlistedBots} onRelease={releaseBot} onDischarge={dischargeBot} />
    </div>
  );
};

export default App;

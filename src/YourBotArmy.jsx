import React from 'react';

const YourBotArmy = ({ bots, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {bots.map((bot) => (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => onDischarge(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;

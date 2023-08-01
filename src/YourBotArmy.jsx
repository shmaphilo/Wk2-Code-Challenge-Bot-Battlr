import React from 'react';

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div>
      <h2>My Bot Army</h2>
      <div className='row'>
        {bots.map((bot) => (
          <div key={bot.id} className='col-2 m-1 bot-card'>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => onRelease(bot)}>Release</button>
            <button onClick={() => onDischarge(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;



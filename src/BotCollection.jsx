import React from 'react';

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div>
      <h2>Available Bots</h2>
      <div>
        {bots.map((bot) => (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
          
            {!bot.enlisted ? (
              <button onClick={() => onEnlist(bot)}>Enlist</button>
            ) : (
              <p>Enlisted</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;

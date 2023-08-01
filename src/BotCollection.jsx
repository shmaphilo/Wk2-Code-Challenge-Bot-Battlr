import React from 'react';

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div>
      <h2> The Available Bots</h2>
      <div className='row'>
        {bots.map((bot) => (
          <div key={bot.id} className='col-2 m-1 bot-card'>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            {bot.enlisted ? (
              <button onClick={() => onEnlist(bot)} disabled>Enlisted</button>
            ) : (
              <button onClick={() => onEnlist(bot)}>Enlist</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;





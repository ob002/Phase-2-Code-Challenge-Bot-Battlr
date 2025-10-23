import React from "react";

function BotCard({ bot, onAdd, onDelete, isArmy }) {
  const handleClick = () => {
    onAdd(bot);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-800 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform cursor-pointer text-center relative"
      > 
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-24 h-24 mx-auto rounded-full border-4 border-teal-500 mb-4"
     />


      <div className="mt-4 text-sm flex flex-col items-center" >
        <h3 className="text-lg font-semibold text-teal-300" >{bot.name}</h3>
        <p className="text-gray-400">{bot.bot_class}</p>

        <div className="flex justify-center gap-4 text-gray-400" >
          <span className="flex items-center gap-1">
           <i className="fa-solid fa-heart-pulse text-red-500"></i>
           {bot.health}
          </span>

          <span className="flex items-center gap-1">
           <i className="fa-solid fa-bolt-lightning text-yellow-400"></i>
           {bot.damage}
          </span>

          <span className="flex items-center gap-1">
            <i className="fa-solid fa-shield-halved text-blue-400"></i>
            {bot.armor}
          </span>

        </div>
      </div>


      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(bot);
        }}
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg text-xs"
      >
        X
      </button>

      <p className="mt-2 text-xs text-gray-500">
        {isArmy ? "Click to remove" : "Click to enlist"}
      </p>
    </div>
  );
}

export default BotCard;
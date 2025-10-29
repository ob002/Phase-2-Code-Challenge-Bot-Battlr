import React from "react";

function Botcard({ bot, onAdd, onDelete, isArmy }) {
  const handleClick = () => {
    onAdd(bot);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer text-center relative border border-gray-500"
      > 
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-24 h-24 mx-auto mb-4"
     />


      <div className="mt-4 text-sm flex flex-col items-center" >
        <h3 className="text-lg font-semibold text-cyan-400" >{bot.name}</h3>
        <p className="text-gray-300">{bot.bot_class}</p>

        <div className="flex justify-center gap-4 text-gray-300" >
          <span className="flex items-center gap-1">
           Health: 
           {bot.health}
          </span>

          <span className="flex items-center gap-1">
            Damage:{bot.damage}
          </span>

          <span className="flex items-center gap-1">
            Armor: {bot.armor}
          </span>

        </div>
      </div>


      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(bot);
        }}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
      >
        X
      </button>

      <p className="mt-2 text-xs text-gray-400">
        {isArmy ? "Click to remove" : "Click to enlist"}
      </p>
    </div>
  );
}

export default Botcard;
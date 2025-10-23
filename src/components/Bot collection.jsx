import React from "react"
import BotCard from "./BotCard";

function BotCollection({ bots, handleOnClick, handleDelete }) {
  
  return (

    <div className="w-full bg-gray-800/40 p-6 rounded-2xl shadow-lg">
      
      <h2 className="text-xl font-bold mb-4 text-amber-300 text-center">
        Available Bots
      </h2>

      {bots.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bots.map((bot) => (

            <BotCard
              key={bot.id}
              bot={bot}
              onAdd={() => handleOnClick(bot)}
              onDelete={() => handleDelete(bot)}
              isArmy={false}
            />
          
          ))}
        </div>
      ) : (

        <p className="text-gray-400 text-center">Loading bots...</p>
      
      )}
    </div>
  );
}

export default BotCollection;
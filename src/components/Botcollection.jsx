import React from "react"
import Botcard from "./Botcard";

function BotCollection({ bots, handleOnClick, handleDelete }) {
  
  return (

    <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600">
      
      <h2 className="text-xl font-bold mb-4 text-cyan-400 text-center">
        Available Bots
      </h2>

      {bots.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bots.map((bot) => (

            <Botcard
              key={bot.id}
              bot={bot}
              onAdd={() => handleOnClick(bot)}
              onDelete={() => handleDelete(bot)}
              isArmy={false}
            />
          
          ))}
        </div>
      ) : (

        <p className="text-gray-300 text-center">Loading bots...</p>
      
      )}
    </div>
  );
}

export default BotCollection;
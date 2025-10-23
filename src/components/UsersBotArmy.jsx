import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, handleDelete, handleOnClick }) {

  return (

    <div className="w-full bg-emerald-800/30 p-6 rounded-2xl shadow-lg">
      
      <h2 className="text-xl font-bold mb-4 text-teal-300 text-center">
        <i className="fa-solid fa-shield-halved text-blue-400"></i> Your Bot Army
      </h2>

      {botArmy.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {botArmy.map((bot) => (

            <BotCard
              key={bot.id}
              bot={bot}
              onAdd={() => handleOnClick(bot)}
              onDelete={() => handleDelete(bot)}
              isArmy={true}
            />

          ))}

        </div>
      ) : (

        <p className="text-gray-400 text-center">No bots in your army yet.</p>
     
      )}
      
    </div>
  );
}

export default YourBotArmy;
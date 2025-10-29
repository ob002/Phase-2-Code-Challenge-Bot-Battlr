import React from "react";
import Botcard from "./Botcard";

function UsersBotArmy({ botArmy, handleDelete, handleOnClick }) {

  return (

    <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg border border-cyan-600">
      
      <h2 className="text-xl font-bold mb-4 text-cyan-400 text-center">
       Your Bot Army
      </h2>

      {botArmy.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {botArmy.map((bot) => (

            <Botcard
              key={bot.id}
              bot={bot}
              onAdd={() => handleOnClick(bot)}
              onDelete={() => handleDelete(bot)}
              isArmy={true}
            />

          ))}

        </div>
      ) : (

        <p className="text-gray-300 text-center">No bots in your army yet.</p>
     
      )}
      
    </div>
  );
}

export default UsersBotArmy;
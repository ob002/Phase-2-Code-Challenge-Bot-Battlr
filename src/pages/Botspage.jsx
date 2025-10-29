import React, { useEffect, useState } from "react";
import UsersBotArmy from "../components/UsersBotArmy";
import Botcollection from "../components/Botcollection";


function Botspage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  // Fetch bots from server
  useEffect(() => {
    async function fetchBots() {
      try {

        const response = await fetch("http://localhost:8001/bots");

        if (!response.ok) throw new Error("Failed to fetch bots");

        const data = await response.json();
        setBots(data);

        // console.log(data);
      } catch (error) {

        console.error("Error fetching bots:", error);
      }
    }

    fetchBots();
  }, []);

  // Add or remove bot from army
  const handleOnClick = (bot) => {

    const inArmy = botArmy.some((b) => b.id === bot.id);

    if (inArmy) {

      setBotArmy((prev) => prev.filter((b) => b.id !== bot.id));

    } else {

      setBotArmy((prev) => [...prev, bot]);

    }
  };

  // Delete bot from server and local lists
  const handleDelete = async (bot) => {
    try {

      await fetch(`http://localhost:8001/bots/${bot.id}`, {

        method: "DELETE"
      
      });

      setBots((prev) => prev.filter((b) => b.id !== bot.id));
      setBotArmy((prev) => prev.filter((b) => b.id !== bot.id));

    } catch (error) {
      console.error( error );
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center p-6 space-y-8 w-full">

      <h1 className="text-4xl font-bold text-cyan-400 tracking-wider text-center">
        BOT BATTLR
      </h1>

       <UsersBotArmy 
        botArmy={botArmy}
        handleDelete={handleDelete}
        handleOnClick={handleOnClick}
      />

      <Botcollection 
        bots={bots}
        handleDelete={handleDelete}
        handleOnClick={handleOnClick}
      />
      
    </div>
  );
}

export default Botspage;

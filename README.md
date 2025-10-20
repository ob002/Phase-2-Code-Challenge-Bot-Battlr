# Phase-2-Code-Challenge-Bot-Battlr
Bot Battlr
The one-and-only galactic web app where overlords browse, enlist, and discharge robots to build a custom Bot Army.
Local Setup
Clone this private repo
git clone <your-ssh-url> && cd bot-battlr
Install frontend deps
cd frontend && npm install
Start the JSON server backend (port 8001)
npx json-server --watch db.json -p 8001
Start the React dev server (port 3000)
npm start   # run inside frontend folder
Open http://localhost:3000 – your army awaits!
Core Features
Browse every bot in BotCollection
Click a bot to enlist it (only once)
Click an enlisted bot to release it
Click the red ✖ to discharge (delete) a bot forever
Tech
React 18 + TypeScript + json-server
Quick sanity test
json-server terminal shows:
GET /bots 200 3.456 ms - 2486
Browser tab http://localhost:3001 shows JSON.
React app loads, cards appear, enlist / release / discharge all work without page refresh.
Git commits to make right now
git add .
git commit -m "initial scaffold with all core deliverables"
git push origin main
You now have a cleanly-separated, fully-working Bot Battlr that meets every requirement in the brief.
Happy coding—and may your army reign supreme across the galaxy!

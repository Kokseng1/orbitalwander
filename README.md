Features and Timeline

Early May to Mid May: Get familiar with the tech stacks and technologies used and plan out how we are going to implement a basic list of features.
Mid May to End May: Begin implementing basic features and get a major part done (frontend or database) by end May.
Early June to Mid June: Continue working on existing features and adding new features.
Mid June to End June: Finalise work and aim to push out a basic working demo by the end June.
Early July to Mid July: Improve the demo to make it more visually appealing, reduce bugs and improve game content and functionality.
Mid July to Early August: Focus on enhancing game features/add new levels and reduce bugs.

Key features : Player able to make their own decisions based on the scenario their character is in, and the game world will be impacted by said decisions, leading to different end states

Storyline based on actionsGeneral game logic such as event outcomes based on decision (player-NPC interaction etc). Each decision the players make will put you in a derived scenario. This makes the game more ‘custom’ as players will feel like their actions really affect the game, instead of just reading a pre-determined script. Their actions may or may not always produce the commonly expected outcome. This can keep the players guessing, and make the game not as straightforward.

Score system depending on how fast and well you made it out of the maze, and records the pathway taken on that run. This lets more advanced who might otherwise complete the game with ease find a new challenge ; themselves. It is also useful for other players to track their progress as they explore different pathways to complete the game. The score is saved in each player’s account, and they can see the date, time and scores of previous runs.

Interface that lets players input their desired action. For each scenario, players will be able to choose an action to take from a list of given actions. Choosing (by clicking on the text) any one of those will take the player to the next scenario.
 
Map/maze traversing logic. This feature differentiates our game from usual text based games, and also allows for more ‘customized’ story telling. Maze traversing can also add more depth to the game, further captivating the player. The maze will be represented as a map on the players screen, and the player will be able to see their current location, but they can only see parts of the maze which they have traversed before.

Interaction with NPCs, items and environment
NPCs
Will make the bulk of the storyline. Interactions can include battles (no fight mechanics, just a click and a dice roll), receiving/trading items, following them, or just getting information from them (about the maze, potential items/other NPCs etc)
Items
Items can be obtained as battle loot, found around the maze or received from an NPC. Items will give you exclusive interactions with certain NPCs, affect some battles and maze terrain information. Not all items are beneficial, some are useless and some are malicious.

Players will be able to see the list of items they are currently carrying in their inventory
Environment
Certain items or NPC interactions will give the opportunity for terrain manipulation, such as creating/destroying a wall or bypassing a wall (one-time). These changes will be reflected in the maze map


Since the maze navigation is a major feature, the storyline won’t be the main/only focus and does not have to be as detailed. The gameplay will focus more on the player’s movements within the maze and order of choices. For any given point in the maze, visiting it at different points of the story will yield different texts. For example, you might revisit the starting point after a certain task or possessing a certain item will lead you to somewhere else. We plan on doing this either using React’s useContext or just passing the story progression as props throughout the links.

The storyline might go something like :
Player meets the maze warden at the start, and gets offered an item.
The next NPC they meet (only possible outcome) will be friend or foe, dependant on whether the player accepted the warden’s item
And so on, with only minimal/surface level lore linking between each NPC/item.
There will only be 2 possible game outcomes : winning by navigating out of the maze, and game over by losing to a hostile NPC. Even if all the hostile NPCs are defeated but the player cannot find their way out of the maze, the game will not end.


Tech Stack 

[Please list down the technologies that you are planning to use.]

React for frontend
Node.js for backend
SQL database
Unity for game feature enhancement (if time permits)



Qualifications

We both have a bit of web development experience, both from external projects and CS mods.

Version Control
We used git and github for our version control. We each created our own branches locally and tested locally + ensuring it passes tests, before uploading to main on github. 

Testing
We tested our system vigorously locally using various testing libraries and style checkers like ESLint and React snapshot tests before uploading to github. We did rigorous code review and testing before pushing any commits.

Prototype : https://github.com/Kokseng1/orbitalwander
How to test prototype 
Open your terminal and run “git clone https://github.com/Kokseng1/orbitalwander “ (you might need to install git for this step)
In you terminal, go into the orbitalwander folder
Run “npm install” (you might need to install node.js for this step)
Run “npm start”

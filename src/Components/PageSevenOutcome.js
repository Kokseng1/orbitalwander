function wipeStorage() {
    localStorage.clear();
}

var text = "You decide to stand your ground and battle it out with the mage. However, without a staff, you are at a disadvantage. The mage unleashes a barrage of spells, and you struggle to dodge and defend yourself. Eventually, one of the spells hits you, and you fall to the ground, defeated. As you lay there, you realize that if only you had taken the weak training staff in the beginning, you might have had a chance. But now, it’s too late.";
if (localStorage.getItem("staff") === "true" || localStorage.getItem("wand2") === "true") {
    var text = "You decide to take your chances and engage in battle with the other mage. You raise your staff and prepare to defend yourself. The other mage is quick and skilled, launching a series of attacks that you struggle to fend off. You try to counterattack, but your staff is weak and your spells are not as powerful as his. The battle is intense and exhausting, but in the end, the other mage emerges victorious. He stands over you, triumphant, as you lay on the ground, defeated. The last thing you see before losing consciousness is the other mage making his escape from the maze, leaving you behind";
    const chance = Math.random();
    if (chance < 0.1 ||  localStorage.getItem("wand2") === "true") {
        text = "You decide to fight, despite the odds being against you. You grip your weak training staff tightly and prepare to defend yourself. The mage unleashes a barrage of spells, and you struggle to dodge and deflect them with your staff. Just as it seems like you are about to lose, you notice a small opening in the mage’s defense. You take the chance and strike, hitting him with a powerful blow. To your surprise, he falls to the ground, defeated. It seems that luck was on your side this time, and you were able to overcome the odds.You exit the maze and step into the sunlight. You have won the game.";
    }
}



export default function PageSevenOutcome() {
    return (
        <div class="PagesSevenOutcome">
            <div class="Heading">
                {text}
            </div>
            <div class="Options">
            <a href="/Text" onClick={() => wipeStorage()}>Restart</a>
        </div>
        </div>
    );
}
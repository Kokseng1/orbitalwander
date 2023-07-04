export default function PageFiveL() {
    function wipeStorage() {
        localStorage.clear();
    }

    var text = <a>
        As you tiptoe through the bend, you can hear the sound of your own breath and the 
        crunching of leaves under your feet. You’re carrying a heavy rock that you found 
        earlier, hoping it might come in handy. Suddenly, you hear a loud growl and turn to 
        see a massive troll looming over you. You try to run, but the weight of the rock slows
         you down. The troll catches up to you and with one swift blow, finishes you off. 
         If only you hadn’t chosen to lug that heavy rock around…
</a>

    if (localStorage.getItem("rock") === null)  {
        text = <a>
            You carefully tiptoe towards the troll, trying to remain as quiet as possible.
            Your heart is pounding in your chest as you inch closer and closer. Suddenly, 
            your foot catches on a rock and you stumble forward, crashing to the ground with 
            a loud thud. The troll’s head snaps up and he spots you immediately. With a roar 
            of anger, he charges towards you. You try to scramble to your feet, but it’s too
            late. The troll towers over you, his club raised high. In one swift motion, he 
            brings it down and finishes you off."
            </a>
    }
    

    return (
        <div class="PagesFiveL">
            <div class="Heading">
                {text}    
            </div>
            <div class="Options">
            <a href="/Text" onClick={() => wipeStorage()}>Restart</a>
        </div>
        </div>
    );
}
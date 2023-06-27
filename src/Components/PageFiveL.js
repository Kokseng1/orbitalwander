export default function PageFiveL() {
    function wipeStorage() {
        localStorage.clear();
    }

    return (
        <div class="PagesFiveL">
            <div class="Heading">
                As you tiptoe through the bend, you can hear the sound of your own breath and the crunching of leaves under your feet. You’re carrying a heavy rock that you found earlier, hoping it might come in handy. Suddenly, you hear a loud growl and turn to see a massive troll looming over you. You try to run, but the weight of the rock slows you down. The troll catches up to you and with one swift blow, finishes you off. If only you hadn’t chosen to lug that heavy rock around… 
            </div>
            <div class="Options">
            <a href="/Text" onClick={() => wipeStorage()}>Restart</a>
        </div>
        </div>
    );
}
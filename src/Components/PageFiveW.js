export default function PageFiveW() {
    var text = <a>
        As you tiptoe through the dark forest, you can hear the sound of your own breath and 
        the crunching of leaves under your feet. You’re traveling light, having left behind
        the heavy rock you found earlier. Suddenly, you hear a loud growl and turn to see a 
        massive troll looming over you. You freeze for a moment, then dart past the troll as
        quickly as you can. Without the weight of the rock to slow you down, you’re able to
        outrun the troll and escape to safety.
           </a>
            
    if (localStorage.getItem("rock") === "true") {
        text = <a>
            You grip the heavy rock tightly in your hands as you make your way towards the
            troll. With each step, you carefully place your feet, avoiding any loose stones or
            twigs that might give away your position. The troll is just ahead, its back 
            turned to you. You take a deep breath and make a final dash towards safety. The
            troll turns at the sound of your footsteps, but it’s too late. You’ve already
            slipped past him, the rock still clutched in your hands. You let out a sigh of
            relief as you continue on your journey, grateful to have evaded the troll’s
            grasp."
            </a>;
    }

    return (
        <div class="PagesFiveW">
            <div class="Heading">
            {text}
            </div>
            <div class="Options">
            <a href="PageSix">Continue</a>
        </div>
        </div>
    );
}
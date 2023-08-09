//go straight from pagefour
//if didnt takeRock from pageTwo, 90% chance of safe passing, else 10%
//if not first time visiting, will be ordinary path with no interactions

export default function PageFive() {
    var next = "PageFiveW";
    var chance = Math.random();
    var text = <div class="Heading">
    After a long walk in what seems like a never ending straight path, you finally come across a turn.
    However, there seems to be a troll loitering around the bend, could it be there to guard it?
    There is no way you can win it in a head on battle, but there might be a chance you can sneak pass it. Do you want to take your chances?    
    </div>

    if ((localStorage.getItem("rock") === "true" && chance>0.1) || (localStorage.getItem("rock") === null && chance<0.1)) {
        next = "PageFiveL";   
    }

    if (localStorage.getItem("Five") === "true") {
        return (
            <div class="PageFive">
                This is the junction in which the troll was at. However there is no sign of it now.
                <div class="Options">
                <a href="PageThree">Head west</a>
            <br/>
                <a href="PageSix">Head east</a>
            </div>
            </div>
        );
    }

    localStorage.setItem("Five", "true");
    return (
        <div class="PageFive">
            {text}
            <div class="Options">
            <a href={next}>Try to sneak pass it</a>
        <br/>
            <a href="PageThree">Turn back</a>
        </div>
        </div>
    );
}
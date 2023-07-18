//go straight from pagefour
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
        text = <div class="Heading">
        you come across a turn.
        However, there seems to be a troll loitering around the bend, could it be there to guard it?
        There is no way you can win it in a head on battle, but there might be a chance you can sneak pass it. Do you want to take your chances?    
    </div>
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
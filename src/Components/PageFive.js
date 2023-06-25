//go straight from pagefour
export default function PageFive() {
    if (localStorage.getItem("rock") === "true") {
        return (
            <div class="PageFive">
                <div class="Heading">
                    After a long walk in what seems like a never ending straight path, you finally come across a turn.
                    However, there seems to be a troll loitering around the bend, could it be there to guard it?
                    There is no way you can win it in a head on battle, but there might be a chance you can sneak pass it. Do you want to take your chances?    
                </div>
                <div class="Options">
                <a href="PageFiveL">Try to sneak pass it</a>
            <br/>
                <a href="PageFour">Turn back</a>
            </div>
            </div>
        );
    }

    return (
        <div class="PageFive">
            <div class="Heading">
                After a long walk in what seems like a never ending straight path, you finally come across a turn.
                However, there seems to be a troll loitering around the bend, could it be there to guard it?
                There is no way you can win it in a head on battle, but there might be a chance you can sneak pass it. Do you want to take your chances?    
            </div>
            <div class="Options">
            <a href="PageFiveW">Try to sneak pass it</a>
        <br/>
            <a href="PageFour">Turn back</a>
        </div>
        </div>
    );
}
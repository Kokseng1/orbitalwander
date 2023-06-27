//bottom left
function addRock() {
    localStorage.setItem("rock", "true");
}

export default function PageTwo() {
    return (
        <div class="PagesTwo">
            <div class="Heading">
            The traveler heads south and continues walking for a short distance until they reach a dead end. In front of them, a large rock sticks out from the ground. Upon closer inspection, they notice an undecipherable inscription etched into its surface. The rock is big and heavy, and it would take great effort to lug it around. It might be just an ordinary rock that people have messed with before by etching stuff onto it, or it might prove to be something special later on.
            </div>
            <div class="Options">
                <a href="PageOne" onClick={() => addRock()}>Lug the rock along and continue back the way you came</a>
        <br/>
            <a href="PageOne">Ignore it and continue back the way you came</a>
        </div>
        </div>
    );
}
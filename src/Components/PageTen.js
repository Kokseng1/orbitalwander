//with wand2 from pageNine, 100% chance win
//with staff from warden, 50% chance win
//no staff, 0% win

const chance = Math.random()

var text = (
<div class="heading">
You walk for a great distance, the path is long but it only has only 1 route. As you are nearing the end, another mage crosses path with you. She seems to be well equipped and does not show signs of hostility. "There's nothing worthwhile down this road, don't bother with it"
</div>
)

var options = <div class="options">
<a href="PageTen" onClick={() => makeHostile()}>"Maybe you missed something, I want it to see for myself"</a>
<br/>
<a href="PageEight">"Thanks for the heads up, guess I'll look somewhere else then"</a>
</div>

function makeHostile() {
    localStorage.setItem("hostile", "true")
}

function win() {
    return (
        (localStorage.getItem("hostile") === "true" && localStorage.getItem("wand2") === "true") ||
        (localStorage.getItem("staff") === "true" && chance < 0.5)
    )
}

if (localStorage.getItem("hostile") === "true") {
    if (win) {
        text =  (
            <div class="heading">
                "YOU WILL GO NO FURTHER!" The shapeshifter reveals its true form and lunges at you. You instinctively cast a bind on her and it worked, stopping her in her tracks.
                She does not speak but continues to struggle towards you in futility, you are confident that the bind will be more than enough to keep
                her at bay so you continue ahead.
            </div>
            )

        options = <div class="options">
        <a href="PageTenWin">Continue</a>
        </div>
    } else {
        text =  (
            <div class="heading">
                "YOU WILL GO NO FURTHER!" The shapeshifter reveals its true form and lunges at you. You try to cast a bind on her but it failed, your makeshift equipment just isn't enough to
                do the job. With a single swipe, the shapeshifter takes you down...
            </div>
            )

        options = <div class="options">
        <a href="/Text">Restart</a>
        </div>
    }
}

export default function PageTen() {
    return (
        <div class="PagesTen">
            {text}
            {options}
        </div>
    )
}
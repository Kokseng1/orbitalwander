
function addWand2() {
    localStorage.setItem("wand2", "true")
}

var text = "You take the less promising road, hoping to find something worthwhile. As you turn the corner, you stumble upon an unconscious mage, he seems to have been knocked out by another stronger fighter. Trying to help him up does no good as he is too severely wounded. His wand lies not far from him, and you remember how in need you are of a good wand."
var options = (
    <div class="Options">
    <a href="PageEight" onClick={() => addWand2()}>Pick up the wand and head back</a>
    <br/>
    <a href="PageEight">Head back empty handed</a>
    </div>)

if (localStorage.getItem("wand2") === "true") {
    text = "The mage is still lying unconscious, there seems to be nothing else to be done here"
    options = <a href="PageEight">Head back</a>
}


export default function PageNine() {
    return (
        <div class="PagesNine">
        <div class="Heading">
        {text}
        </div>
        {options}
    </div>
    )
}
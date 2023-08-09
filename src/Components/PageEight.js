var text = "You arrive at yet another junction. To the north a winding road looks like it leads to nowhere. The path heading south seems like it could lead to more adventure. The west leads back to the travelled path"

export default function PageEight() {
    return (
        <div class="PagesEight">
        <div class="Heading">
        {text}
        </div>
        <div class="Options">
        <a href="PageNine">North</a>
        <br/>
        <a href="PageTen">South</a>
        <br/>
        <a href="PageSix">West</a>
    </div>
    </div>
    )
}
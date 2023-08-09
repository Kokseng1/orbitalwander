var body = (<div class="PagesSix">
<div class="Heading">
You continue walking and eventually arrive at a T junction, you take a moment to consider your options. To the
north, the path seems to be well-trodden and wide, with tall trees lining the
sides. To the south, the path is narrower and overgrown with vegetation, giving 
it a wild and untamed appearance. You weigh the pros and cons of each path in your
mind. The the north, the path seems safer and more traveled, but it could also be
more predictable and less exciting. The south, on the other hand, could lead to 
unexpected adventures and discoveries, but it could also be more dangerous. In the
 end, the choice is yours. Do you take the safe and well-trodden path to the north, 
or do you venture into the unknown on the south path?    
</div>
<div class="Options">
<a href="/PageSeven">North</a>
<br/>
<a href="/PageEight">South</a>
</div>
</div>)

if (localStorage.getItem("PageSix") === "true") {
    body = (
        <div class="PagesSix">
            <div class="Heading">
            You find yourself back at the familiar T junction. You remember the last time you were here, weighing the pros and cons of each path. To the north, the path still seems well-trodden and wide, with tall trees lining the sides. To the south, the path remains narrow and overgrown with vegetation, giving it a wild and untamed appearance. To the west is a well travelled path. You wonder if anything has changed since your last visit.    
            </div>
            <div class="Options">
            <a href="/PageSeven">North</a>
            <br/>
            <a href="/PageEight">South</a>
            <br/>
            <a href="/PageFive">West</a>
        </div>
        </div>
    )
}

export default function PageSix() {
    localStorage.setItem("PageSix", "true")

    return (
        body
    );
}
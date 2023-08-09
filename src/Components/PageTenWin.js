function wipeStorage() {
    localStorage.clear();
}


export default function PageTenWin() {
    return (
        <div class="PagesTen">
        <div class="Heading">
            Curious about what the shapeshifter was so hiding so desperately, you walk deeper into the path. At Last, you are greeted with
            a sight of a portal that leads to outside. This is it, you have solved the maze   
        </div> 
        <div class="Options">
            <a href="/Text" onClick={() => wipeStorage()}>Restart</a>
        </div>
    </div>
    );
}
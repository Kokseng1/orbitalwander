//staff gives 10% chance of winning the game at pageSeven

function addStaff() {
    localStorage.setItem("staff", "true");
}

export default function Text() {
    return (
        <div class="PagesText">
        <div class="Heading">
            You arrive at the extrance of the maze empty handed. A maze warden stands in front of an open gate, 
            he does not say a word, but reaches his hand out to offer you a staff. It looks like an amateur's staff they use at training schools. 
        </div> 
        <div class="Options">
            <a href="PageOne" onClick={() => addStaff()}>Accept the staff</a>
        <br/>
            <a href="PageOne">Reject the staff</a>
        </div>
    </div>
    );
}
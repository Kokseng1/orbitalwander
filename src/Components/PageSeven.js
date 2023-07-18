var text =  "You turn and see what seems to be the exit of the maze. However, you meet another mage there, he looks like he is in the same situation as you, thrown into the maze as a test. You approach him cautiously, but he greets you with hostility, suggesting that you are each other’s competition. Seeing that your weak training staff stands little chance against his, he takes the chance and attacks you. Do you flee or attempt to battle it out with the weak staff you were handed by the warden?"
if (localStorage.getItem("staff") === null) {
    text = "You turn and see what seems to be the exit of the maze. However, you meet another mage there, he looks like he is in the same situation as you, thrown into the maze as a test. You approach him cautiously, but he greets you with hostility, suggesting that you are each other’s competition. Seeing that you do not have a staff, he takes the chance and attacks you. Do you flee or attempt to battle it out?"
}

export default function PageSeven() {
    return (
        <div class="PagesSeven">
            <div class="Heading">
            {text}
            </div>
            <div class="Options">
            <a href="PageSix">Flee back to the junction</a>
            <br/>
            <a href="PageSevenOutcome">Fight</a>
        </div>
        </div>
    );
}
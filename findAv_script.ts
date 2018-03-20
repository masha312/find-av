let values:string[] = [];

function addValToArr() {
    let input:HTMLInputElement = document.getElementById("newVal") as HTMLInputElement;
    let inputtedVal: string = input.value;
    if (valIsNeg(inputtedVal)) {
        document.getElementById("notif").innerHTML = "Input has to be greater than or equal to 0";
    } else {
        document.getElementById("notif").innerHTML = inputtedVal + " was added";
        values.push(inputtedVal);
        console.log(values[values.length-1]);
    }
}

function valIsNeg(valToCheck:string):boolean {
    if (Number(valToCheck) < 0) {
        return true;
    } else {
        return false;
    }
}

function calcAverage() {
    let sum:number = 0;
    for (let i in values) {
        sum += Number(values[i]);
        console.log("sum at position " + i + ": " + sum);
    }
    let averageUnfixed:number = sum / values.length;
    let averageFixed = averageUnfixed.toFixed(2);
    console.log(averageFixed);
    document.getElementById("notif").innerHTML = "Average is " + averageFixed.toString();
}

function clearArr() {
    values = [];
    document.getElementById("notif").innerHTML = "All clear."
    console.log("array cleared");

}

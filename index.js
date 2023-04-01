// code your solution here
function superbowlWin(records) {
    const val = records.find(isWin);
    if(val === undefined) {
        return val;
    }
    else {
        return val.year;
    }
}

function isWin(element) {
    return element.result === "W";
}
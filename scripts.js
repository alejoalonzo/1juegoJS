const WIDTH = 1200;
const HEIGT = 581;
let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber (HEIGT)
}
let $map = document.getElementById ("map");
let $distance = document.getElementById("distance");
let clicks = 0

$map.addEventListener("click", function(e){
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = distanceHint;

    if (distance<20) {
        alert (`YEEEESSS IT'S ME!!! you found me in ${clicks} clicks`);
        location.reload();
    }
} )
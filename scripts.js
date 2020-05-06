// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let rocket = document.getElementById("rocket");

    let liftButton = document.getElementById("takeoff");
    liftButton.addEventListener("click", function (event){
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = String(10000);
        };
        return response;
    });

    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = String(0);
        rocket.style.bottom = 0 + 'px';
    });


    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function(event){
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = String(0);
        };
    });


    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";
    let maxUp = document.getElementById("shuttleBackground").offsetHeight - 70;
    let maxDown = 0;
    let maxLeft = 0;
    let maxRight = document.getElementById("shuttleBackground").offsetWidth - 75;

    let up = document.getElementById("up");
    up.addEventListener("click", function(event){
        let move = parseInt(rocket.style.bottom) + 10 + 'px';
        if (parseInt(rocket.style.bottom) + 10 <= maxUp) {
            rocket.style.bottom = move;
            spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) + 10000);
        };
    });

    let down = document.getElementById("down");
    down.addEventListener("click", function(event){
        let move = parseInt(rocket.style.bottom) - 10 + 'px';
        if (parseInt(rocket.style.bottom) - 10 >= maxDown) {
            rocket.style.bottom = move;
            spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) - 10000);
        };
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function(event){
        let move = parseInt(rocket.style.left) - 10 + 'px';
        if (parseInt(rocket.style.left) - 10 >= maxLeft) {
            rocket.style.left = move;
        };
    });

    let right = document.getElementById("right");
    right.addEventListener("click", function(event){
        let move = parseInt(rocket.style.left) + 10 + 'px';
        if (parseInt(rocket.style.left) + 10 <= maxRight) {
            rocket.style.left = move;
        };
    });
}

window.onload = init;

// CURRENT DATE
var d = new Date();
var dateString = d.toDateString();
var timeString = d.toTimeString();
document.getElementById("currdate").innerHTML = dateString;
document.getElementById("currtime").innerHTML = timeString;

// WEB COUNTER - https://dannarchy.com/tut/tut_002

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        console.log("success");
        // document.write(site_data.info.sitename, site_data.info.views)
        document.getElementById("hitcount").innerHTML = site_data.info.views;
        // technically react or vue or svelte or some other would be neater lol
    } else {
        console.log("you wen ti :(");
    }
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=our0boros", true);
xhttp.send();

// RIPPLE EFFECT 

let lastEvent = null;

function createCircle(e, el) {
    if (!e && lastEvent) e = lastEvent;
    if (!e) return;

    const circle = document.createElement("div");
    circle.classList.add("hover-circle");

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    console.log(e.clientX, e.clientY, rect.left, rect.top, x, y)

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    el.appendChild(circle);

    circle.addEventListener("animationend", () => {
        circle.remove();
    });

}

const hoverable = document.querySelectorAll('.hoverable');
console.log(":D", hoverable);

let intervalId = null;

// RIPPLE EFFECT EVENT LISTENER

// hoverable.forEach(element => {
//     element.addEventListener('mouseenter', function(e) {
//         console.log(e.clientX, e.clientY);
//         createCircle(e, element);
//         intervalId = setInterval(() => createCircle(e, element), 800);
//     });

//     element.addEventListener("mousemove", function(e) {
//         lastEvent = e;
//     });

//     element.addEventListener("mouseleave", function() {
//         clearInterval(intervalId);
//         intervalId = null;

//         element.querySelectorAll(".hover-circle").forEach(c => c.remove());
//     })
// });

// SHOW ATTR AND LOG

function displayAttr() {
    var attr = document.getElementById("attributionIFRWrapper")

    if (attr.style.display == 'none') {
        attr.style.display = 'block';
    } else {
        attr.style.display = 'none';
    }
}

function displayUpdates() {
    var updt = document.getElementById("updateIFRWrapper")

    if (updt.style.display == 'none') {
        updt.style.display = 'block';
    } else {
        updt.style.display = 'none';
    }
}
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

// RIPPLE EFFECT

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

// Obvious Method

// const children = Array.from(document.getElementsByClassName("child"));

// children.forEach((child) => {
//     child.addEventListener("click", () => {
//         console.log(child.innerHTML);
//     })
// })


// Event Delegation

const parent = document.getElementById("parent");

parent.addEventListener("click", (event) => {
    if(event.target.className === "child") {
        console.log(event.target.innerHTML);
    }
});
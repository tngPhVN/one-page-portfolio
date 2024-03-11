function toggleList () {
    const mList = document.getElementsByClassName("mobile-list-links")[0]; 
    const mIcon = document.getElementsByClassName("mobile-icon")[0]; 

    // Either add/remove the open class into the mList and mIcon when clicked 
    mList.classList.toggle("open"); 
    mIcon.classList.toggle("open");
}

let i = 0;
let txt = 'a Computer Science recent graduate.';
let speed = 50;

function typeWriter() {
if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

window.addEventListener('DOMContentLoaded', typeWriter);
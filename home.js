document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('button');
    btn.addEventListener('mouseenter', move);
    console.log('btn handler added');
});



function move() {
    const btn = document.getElementById('button');

    const top = Math.random() * (document.defaultView.innerHeight - btn.clientHeight);
    const left = Math.random() * (document.defaultView.innerWidth - btn.clientWidth);
    btn.style.position = 'absolute';
    btn.style.top = `${top}px`;
    btn.style.left = `${left}px`;
}



function my1Function() {
    var x = document.getElementById("myDIV");
    var b = document.getElementById("hbutton");

    if (x.style.display === "none") {
        x.style.display = "block";
        b.innerHTML = "hide ∨ ";
    } else {
        x.style.display = "none";
        b.innerHTML = "more > ";
    }
}                                                                                                                                                                        
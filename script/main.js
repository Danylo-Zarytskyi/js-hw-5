let lb = document.querySelector('.btnl');
let rb = document.querySelector('.btnr');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let bc = document.querySelector('.changebg');
let clear = document.querySelector('.clearbg');

{
    lb.addEventListener('click', (ev) => {
        b1.style.border = "3px solid greenyellow";
        b2.style.border = "3px solid black";

        if(b1.style.border = "3px solid greenyellow") {
            bc.addEventListener('click', (ev) => {
                b1.style.background = "blue";
                
            })
        }
    })

    rb.addEventListener('click', (ev) => {
        b2.style.border = "3px solid greenyellow";
        b1.style.border = "3px solid black";

        if(b2.style.border = "3px solid greenyellow") {
            bc.addEventListener('click', (ev) => {
                b2.style.background = "blue";
                
            })
        }
    })

    clear.addEventListener('click', (ev) => {
        b1.style.background = "none";
        b2.style.background = "none";
    })

}


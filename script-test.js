

 

let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let close = document.getElementById("close");
let open = document.getElementById("open");

function onWindowResize() {
    if (window.innerWidth > 769){
        menu.style.top = "-100%";
        menu.style.opacity = "0";
        gsap.to("#close", { display:"none",duration: 0});
        gsap.to("#open", { display:"none",duration: 0});
    }
    else{
        gsap.to("#open", { display: "flex",duration: 0, });
        gsap.to("#open", { opacity: 1, duration: 0.5, delay: 0.30 });
    }
}
window.addEventListener('resize', onWindowResize, false);


function ToggleHamburger(){

    if (menu.style.top == "25px"){
        menu.style.top = "-100%";
        menu.style.opacity = "0";
        gsap.to("#close", { opacity: 0,duration: 0.25 });
        gsap.to("#close", { display:"none",duration: 0, delay: 0.25});

        gsap.to("#open", { display: "flex",duration: 0, delay: 0.25 });
        gsap.to("#open", { opacity: 1, duration: 0.25, delay: 0.30 });

        //open.style.display = "flex";
        //close.style.display = "none";
    }
    else {
        gsap.to("#open", { opacity: 0,duration: 0.25 });
        gsap.to("#open", { display:"none",duration: 0, delay: 0.25});

        gsap.to("#close", { display: "flex",duration: 0, delay: 0.25 });
        gsap.to("#close", { opacity: 1, duration: 0.25, delay: 0.30 });

        menu.style.top = "25px";
        menu.style.opacity = "1";
    }

}

if (window.GestureEvent && !('touchAction' in document.body.style)) {
    document.body.addEventListener('gesturestart', (e)=>{e.preventDefault()}, {passive: false, capture:true});
  }


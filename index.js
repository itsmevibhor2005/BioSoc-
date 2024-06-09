window.addEventListener("keydown", (e)=>{
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.btn[data-key="${e.keyCode}"]`)
    if(!audio){
        return;
    }
    else{
        audio.currentTime = 0;
        audio.play()
        key.classList.add("playing")
        setTimeout(() => {
            key.classList.remove("playing")
        }, 200);
    }
})
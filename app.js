window.addEventListener('load', function(){
    const sounds = document.querySelectorAll(".sound");
    const drumkit =  document.querySelectorAll(".drumkit div");

    drumkit.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
        })
    })
})
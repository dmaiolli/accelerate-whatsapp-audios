const reqHeader = new Promise((resolve, reject) => {
    setTimeout(() => {
        const header = document.querySelector("._2O84H");
        resolve(header)

        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("twoTimesButton");


        button.addEventListener('click', ()=>{
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 2;
            })
            button.classList.add("active")
        })

        header.appendChild(button)
    }, 5000)
})


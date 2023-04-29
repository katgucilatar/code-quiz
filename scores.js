let highscore = localStorage.getItem('finalScore') && JSON.parse (localStorage.getItem('finalScore'))
if (highscore) {
    for (let index = 0; index < highscore.length; index++) {
        const element = highscore[index];
        let divEl = document.createElement("div")
        divEl.textContent = `${element.initials} - ${element.score}`
        document.getElementById("highscores").append(divEl)
    }
}
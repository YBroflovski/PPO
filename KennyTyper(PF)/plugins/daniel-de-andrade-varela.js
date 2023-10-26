// window.addEventListener("gamestarted", ev => console.log("gamestarted"))
// window.addEventListener("letter", ev => console.log("letter"))
// window.addEventListener("correctletter", ev => console.log("correctletter"))
// window.addEventListener("wrongletter", ev => console.log("wrongletter"))
// window.addEventListener("word", ev => console.log("word"))
// window.addEventListener("correctword", ev => console.log("correctword"))
// window.addEventListener("wrongword", ev => console.log("wrongword"))
// window.addEventListener("endgame", ev => console.log("endgame"))

const score = document.querySelector("main div.score")
const corretTypedLetters = document.createElement("span")
const scoreNumber = document.createElement("span")

let couterCorrectTypedWords = 0

const kennyHurting = new Audio("really.mp3")
const kennyDied = new Audio("screw.mp3")
const kennyHeaven = new Audio("bastards.mp3")

const kenny = document.createElement("img")
kenny.className = "kenny"
kenny.src = "alive.png"

scoreNumber.innerHTML = 0
score.append(scoreNumber, kenny)

window.addEventListener("wrongletter", ev => {
  couterCorrectTypedWords++
  couterCorrectTypedWords.innerText = couterCorrectTypedWords
})

let erros = 0

window.addEventListener("wrongword", ev => {
  erros++

  scoreNumber.innerHTML = erros

  if (erros==3) {
    console.log("ERROU 3")
    kenny.src = "angry.png"
    kennyHurting.play()
    return
  }

  if (erros==8) {
    console.log("ERROU 8")
    kenny.src = "dead.png"
    kennyDied.play()
    return
  }
  
  if (erros==12) {
    console.log("ERROU 12")
    kenny.src = "angel.png"
    kennyHeaven.play()
    return
  }

})

const link = document.createElement("link")
link.rel = 'stylesheet'
link.href = 'plugins/southpark.css'
document.head.append(link)


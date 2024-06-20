const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = ["" , "", "", "" , "", "", "" , "", ""]


let go = "circle"

infoDisplay.textContent = "circle goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement)
    })
}
createBoard()

function addGo(e){
    console.log("clicked", e.target)
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    console.log(go)
    infoDisplay.textContent = "it is now " + go + "'s go"
    e.target.removeEventListener("click", addGo)
    checkScore()
}
 
function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    console.log(allSquares)
    const winningCombos = [
        [0,1,2], [0,3,6], [3,4,5],[6,7,8], [1,4,7], [2,5,8],[0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
       const circleWins = array.every(cell => 
        allSquares[cell].firstChild?.classList.contains("circle"))
        if (circleWins){
            infoDisplay.textContent = " GAME OVER CIRCLE WINS!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell => 
         allSquares[cell].firstChild?.classList.contains("cross"))
         if (crossWins){
             infoDisplay.textContent = "GAME OVER CROSS WINS!"
             allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
         }
     })
    
   
}
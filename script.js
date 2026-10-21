let allDiv = document.querySelectorAll(".div")

let paragraphOne = document.querySelector(".paragraph-one")

let paragraph = document.querySelector(".paragraph")

let resetBtn = document.querySelector(".button")

let userTurn = "x"

paragraphOne.innerText = `your turn - place an ${userTurn}`

let winningCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

let gameOver = false

for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].addEventListener("click", () => {

        if (gameOver == true) {
            return
        }
        if (allDiv[i].innerText != "") {
            return
        }
        allDiv[i].innerText = userTurn

        checkWin()
        checkDraw()
        function changeTurn() {
            if (userTurn == "x") {

                userTurn = "o"
            }
            else {

                userTurn = "x"
            }
            paragraphOne.innerText = `your turn - place an ${userTurn}`
        }
        changeTurn()

    })

}

resetBtn.addEventListener("click", () => {
    for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].innerText = ""
        paragraph.innerText = ""
      
        gameOver = false
        allDiv[i].classList.remove("box-one")

    }

})

function checkWin() {
    for (let i = 0; i < winningCombination.length; i++) {
        let a = winningCombination[i][0]
        let b = winningCombination[i][1]
        let c = winningCombination[i][2]

        let valueA = allDiv[a].innerText
        let valueB = allDiv[b].innerText
        let valueC = allDiv[c].innerText

        if (valueA != "" && valueA == "x" && valueA == valueB && valueB == valueC) {
            allDiv[a].classList.add("box-one")
            allDiv[b].classList.add("box-one")
            allDiv[c].classList.add("box-one")
            paragraph.innerText = "x win"
            gameOver = true
            confetti()

        }
        else if (valueA != "" && valueA == "o" && valueA == valueB && valueB == valueC) {
            allDiv[a].classList.add("box-one")
            allDiv[b].classList.add("box-one")
            allDiv[c].classList.add("box-one")
            paragraph.innerText = "o win"
            gameOver = true
            confetti()

        }


    }
}

function checkDraw() {
    if (gameOver == true) {
        return
    }
    let isBoardFull = true
    for (let i = 0; i < allDiv.length; i++) {
        if (allDiv[i].innerText == "") {
            isBoardFull = false
        }

    }
    if (isBoardFull == true) {
        paragraph.innerText = "draw"
    }

}
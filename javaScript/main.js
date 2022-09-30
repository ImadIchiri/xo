let squars = document.querySelectorAll(".square");
let transparent = document.getElementById("transparent");
let transparentLine = document.getElementById("line");
let result = document.getElementById("result");
let gameOver = document.getElementById("game-over");
let replay = document.getElementById("replay");
let player_number = Math.floor(Math.random() * 2 + 1);

// When The Game Start
function whoWillStart() {
  player_number = Math.floor(Math.random() * 2 + 1);
  result.textContent = `Player ${player_number} Will Start ( ${
    player_number === 1 ? "O" : "X"
  } )`;
}

// While You Are Playing
function showPlayerNumber(theSymboal) {
  result.textContent = `Player ${player_number} ( ${theSymboal} )`;
}

// Initialise The Player And Symnol
whoWillStart();

squars.forEach((squar) => {
  squar.addEventListener("click", (e) => {
    if (
      e.currentTarget.firstElementChild === null ||
      e.currentTarget.firstElementChild === null
    ) {
      if (player_number === 1) {
        addCharacter("o", e.currentTarget);
        // Check The Winner Before Changing Rules
        checkWinner();
        player_number = 2;
        showPlayerNumber("x");
      } else {
        addCharacter("x", e.currentTarget);
        // Check The Winner Before Changing Rules
        checkWinner();
        player_number = 1;
        showPlayerNumber("o");
      }
    }
  });
});

function addCharacter(char, position) {
  let character = document.createElement("i");
  character.className = `fa-solid fa-${char} player-${char}`;
  position.append(character);
  position.dataset.character = char;
}

function showWinner(start, end) {
  if (!(start === 0 && end === 0)) {
    transparent.style.display = "block";
    removeAllCasses();
    // Rows
    if (start === 0 && end === 2) {
      transparentLine.classList.add("row-1");
    } else if (start === 3 && end === 5) {
      transparentLine.classList.add("row-2");
    } else if (start === 6 && end === 8) {
      transparentLine.classList.add("row-3");
    }
    // Columns
    else if (start === 0 && end === 6) {
      transparentLine.classList.add("column-1");
    } else if (start === 1 && end === 7) {
      transparentLine.classList.add("column-2");
    } else if (start === 2 && end === 8) {
      transparentLine.classList.add("column-3");
    }
    // Curved
    else if (start === 0 && end === 8) {
      console.log("0--8");
      transparentLine.classList.add("curved-1");
    } else if (start === 2 && end === 6) {
      transparentLine.classList.add("curved-2");
    }
  }

  // Show The Game Over Text
  setTimeout(() => {
    gameOver.style.display = "flex";
  }, 500);
}

replay.addEventListener("click", () => {
  transparent.style.display = "none";
  gameOver.style.display = "none";
  squars.forEach((squar) => {
    squar.innerHTML = "";
    squar.dataset.character = "null";
  });
  whoWillStart();
});

function removeAllCasses() {
   transparentLine.className = "";
  
  /*
    transparentLine.classList.remove("row-1");
    transparentLine.classList.remove("row-2");
    transparentLine.classList.remove("row-3");
    transparentLine.classList.remove("column-1");
    transparentLine.classList.remove("column-2");
    transparentLine.classList.remove("column-3");
    transparentLine.classList.remove("curved-1");
    transparentLine.classList.remove("curved-2");
  */
}

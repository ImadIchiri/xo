// function checkWinner() {
//   //   row 1
//   if (
//     squars[0].dataset.character !== "null" &&
//     squars[1].dataset.character !== "null" &&
//     squars[2].dataset.character !== "null"
//   ) {
//     if (
//       squars[0].dataset.character === squars[1].dataset.character &&
//       squars[1].dataset.character === squars[2].dataset.character
//     ) {
//       showWinner(0, 2);
//     }
//   }
//   //   row 2
//   else if (
//     squars[3].dataset.character !== "null" &&
//     squars[4].dataset.character !== "null" &&
//     squars[5].dataset.character !== "null"
//   ) {
//     if (
//       squars[3].dataset.character === squars[4].dataset.character &&
//       squars[4].dataset.character === squars[5].dataset.character
//     ) {
//       showWinner(3, 5);
//     }
//   }
//   //   row 3
//   else if (
//     squars[6].dataset.character !== "null" &&
//     squars[7].dataset.character !== "null" &&
//     squars[8].dataset.character !== "null"
//   ) {
//     if (
//       squars[6].dataset.character === squars[7].dataset.character &&
//       squars[7].dataset.character === squars[8].dataset.character
//     ) {
//       showWinner(6, 8);
//     }
//   }
//   //   column 1
//   else if (
//     squars[0].dataset.character !== "null" &&
//     squars[3].dataset.character !== "null" &&
//     squars[6].dataset.character !== "null"
//   ) {
//     if (
//       squars[0].dataset.character === squars[3].dataset.character &&
//       squars[3].dataset.character === squars[6].dataset.character
//     ) {
//       showWinner(0, 6);
//     }
//   }
//   //   column 2
//   else if (
//     squars[1].dataset.character !== "null" &&
//     squars[4].dataset.character !== "null" &&
//     squars[7].dataset.character !== "null"
//   ) {
//     if (
//       squars[1].dataset.character === squars[4].dataset.character &&
//       squars[4].dataset.character === squars[7].dataset.character
//     ) {
//       showWinner(1, 7);
//     }
//   }
//   //   column 3
//   else if (
//     squars[2].dataset.character !== "null" &&
//     squars[5].dataset.character !== "null" &&
//     squars[8].dataset.character !== "null"
//   ) {
//     if (
//       squars[2].dataset.character === squars[5].dataset.character &&
//       squars[5].dataset.character === squars[8].dataset.character
//     ) {
//       showWinner(2, 8);
//     }
//   }
//   //   curved line 1
//   else if (
//     squars[0].dataset.character !== "null" &&
//     squars[4].dataset.character !== "null" &&
//     squars[8].dataset.character !== "null"
//   ) {
//     if (
//       squars[0].dataset.character === squars[4].dataset.character &&
//       squars[4].dataset.character === squars[8].dataset.character
//     ) {
//       console.log("Check Winner ==> 0--8");
//       showWinner(0, 8);
//     }
//   }
//   //   curved line 2
//   else if (
//     squars[2].dataset.character !== "null" &&
//     squars[4].dataset.character !== "null" &&
//     squars[6].dataset.character !== "null"
//   ) {
//     if (
//       squars[2].dataset.character === squars[4].dataset.character &&
//       squars[4].dataset.character === squars[6].dataset.character
//     ) {
//       showWinner(2, 6);
//     }
//   } else {
//     showWinner(0, 0);
//   }

//   //   if (
//   //     squars[0].dataset.character !== "null" &&
//   //     squars[1].dataset.character !== "null" &&
//   //     squars[2].dataset.character !== "null" &&
//   //     squars[3].dataset.character !== "null" &&
//   //     squars[4].dataset.character !== "null" &&
//   //     squars[5].dataset.character !== "null" &&
//   //     squars[6].dataset.character !== "null" &&
//   //     squars[7].dataset.character !== "null" &&
//   //     squars[8].dataset.character !== "null"
//   //   ) {
//   //     console.log("Not Empty !!");
//   //     showWinner(0, 0);
//   //   }
// }

function checkWinner() {
  //   Rows
  if (checkSquares(0, 1, 2)) {
    showWinner(0, 2);
  } else if (checkSquares(3, 4, 5)) {
    showWinner(2, 5);
  } else if (checkSquares(6, 7, 8)) {
    showWinner(6, 8);
    // Columns
  } else if (checkSquares(0, 3, 6)) {
    showWinner(0, 6);
  } else if (checkSquares(1, 4, 7)) {
    showWinner(1, 7);
  } else if (checkSquares(2, 5, 8)) {
    showWinner(2, 8);
    // Curved
  } else if (checkSquares(0, 4, 8)) {
    showWinner(0, 8);
  } else if (checkSquares(2, 4, 6)) {
    showWinner(2, 6);
  } else {
    if (
      squars[0].dataset.character !== "null" &&
      squars[1].dataset.character !== "null" &&
      squars[2].dataset.character !== "null" &&
      squars[3].dataset.character !== "null" &&
      squars[4].dataset.character !== "null" &&
      squars[5].dataset.character !== "null" &&
      squars[6].dataset.character !== "null" &&
      squars[7].dataset.character !== "null" &&
      squars[8].dataset.character !== "null"
    ) {
      showWinner(0, 0);
    }
  }
}

function checkSquares(squar1, squar2, squar3) {
  if (
    squars[squar1].dataset.character !== "null" &&
    squars[squar2].dataset.character !== "null" &&
    squars[squar3].dataset.character !== "null"
  ) {
    if (
      squars[squar1].dataset.character === squars[squar2].dataset.character &&
      squars[squar2].dataset.character === squars[squar3].dataset.character
    ) {
//       console.log(`Winner ==> ${squar1} -- ${squar3}`);
      return true;
    }
  }
}

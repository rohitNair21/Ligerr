//Ligerr
//Created 2022 Feb 16
 

// FEN String
// "TLL2LLTLL3TLLL 1"
// "LLTLLTLLTL2LL1LLL1LL1L"
// The last number tells us who's turn it is
// 1 - Tiger
// 0 - Lamb
 
function display(board) {
    // Crate a sample line
    // Design Board
    // Design Board Pieces
    // Design the animations of the pieces
  
    // Develop the connection between the
    // 2d mapping of the pieces to the board
  
    // Visually display Forsyth-Edwards Notation
  
  
    // *** This function will not return anything,
    // it will be a passive function that will only print
    // the current status of the board
  
}
function availableMove(arrayBoard, y, x) {
   // 1 - True
   // 0 - False
   var isValid = 0;
   for (var i=-1; i<2; i+=2)// Horizontal Entries
   {
      if (x + i >= 0 && x + i <= 6 && arrayBoard[y][x+i] == "E")
      {
         isValid = 1;
      }
   }
   for (var j=-1; j<2; j+=2)// Vertial Entries
   {
      if (y == 1)
      {
         // Unique Case y = 1
         if (x == 0)
         {
            if (arrayBoard[y][x+1] == "E" || arrayBoard[y-1][x])
            {
               isValid = 1;
            }
         }else if (x == 5){
            if (arrayBoard[y][x-1] == "E" || arrayBoard[y-1][x])
            {
               isValid = 1;
            }

         }else {
            if (arrayBoard[0][2] == "E" || arrayBoard[y-1][x] == "E")
            {
               isValid = 1;
            }
         }
      }
      if (x + j >= 1 && x + j <= 5 && arrayBoard[y+j][x] == "E")
      {
         isValid = 1;
      }
   }
   return 1;

   
}

function status(arrayBoard) {
   var numberOfTigersTrapper = 0;
   var noOfTigers = 0;
   var noOfLambs = 0;
   for (var i=0; i<5; i++)
   {
      for (var j=0; j<6; j++)
      {
         if (arrayBoard[i][j] == "T")
         {
            noOfTigers++;
            if (availableMove(arrayBoard, i, j) == 0)
            {
               numberOfTigersTrapper++;
            }
         }else if (arrayBoard[i][j] == 'L')
         {
            noOfLambs++
         }
      }
   }

   if (numberOfTigersTrapper == 3)
   {
      return 1;
   }else if (noOfLambs < 6)
   {
      return -1;
   }

  
    // Return the status of the board
    // 1 - Tiger Win
    // 0 - Tie
    // -1 - Lambs Win
  

    // Convert the FEN string into readable game logic.
    // If Tiger can't move -> Lambs Win
    // If Tiger >= Lambs -> Tiger Wins
    // If a move is repeated 3 times -> Tie

}
  
function convertToReadable(board) {
   // for(let x = 0; x = board.length)
  
   // This function will return an array which will map every
   // piece to a 5x6 array. Where only 5 indexes will have the values 0.
   // Denoting that there is a boarder
    
   // [0, 0, L, 0, 0, 0]
   // [L, T, L, L, T, L] 1 - 5 (exclusive) connect to L (top row)
   // [L, T, L, E, E, L]
   // [L, E, L, L, L, E]
   // [0, L, L, E, L, 0]
   // E - Represents an Empty spot.
   "(?<=\\D)(?=\\d)|(?<=\\d)(?=\\D)"
   String regexPattern = "(?!^)";
   String[] splitArray = FEN.split(regexPattern);
   ArrayList<Integer> refinedArray = new ArrayList<Integer>();
   for (int x = 0; x < splitArray.length; x++) {
         if (splitArray[x] == "-?(0|[1-9]\\d*)") {
            int num = Integer.parseInt(splitArray[x]);
            for (int y = 0; y < num; y++) {
               refinedArray.add(1);
            }
         } else if (splitArray[x] == "T") {
            refinedArray.add(2);
         } else if (splitArray[x] == "L") {
            refinedArray.add(3);
         }
   }
   int[][] fenToBoard = {{0, 0, (int) refinedArray.get(0), 0, 0, 0}, {(int) refinedArray.get(1), (int) refinedArray.get(2), (int) refinedArray.get(3), (int) refinedArray.get(4), (int) refinedArray.get(5), (int) refinedArray.get(6)}, {(int) refinedArray.get(7), (int) refinedArray.get(8), (int) refinedArray.get(9), (int) refinedArray.get(10), (int) refinedArray.get(11),
            (int) refinedArray.get(12)}, {(int) refinedArray.get(13), (int) refinedArray.get(14),
            (int) refinedArray.get(15), (int) refinedArray.get(16), (int) refinedArray.get(17), (int) refinedArray.get(18)},
            {0, (int) refinedArray.get(20), (int) refinedArray.get(21), (int) refinedArray.get(22), (int) refinedArray.get(23), 0}};


}

function convertToReadable(arrayBoard) {
   // convert arrayBoard to FEN STRING

   var board = ""
   var spaceCount = 0;
   for (var i=0; i<5; i++)
   {
      for (var j=0; j<6; j++)
      {
         if (arrayBoard[i][j] == "E")
         {
            spaceCount++;
         }else if (arrayBoard[i][j] != "E" && arrayBoard[i][j] != "0")
         {
            if (spaceCount != 0)
            {
               board += spaceCount.toString()
               board += arrayBoard[i][j]
               spaceCount = 0;
            }else {
               board += arrayBoard[i][j]
            }
         }
      }
   }
   return board;

  
}
  

function makemove(board, location) { 
   
   
    // ** This function will not return anything,
    // it will change the arangement of the board
    //

    return board;
  
}
  
 
  
  
function determineoptimal(board) { 
   // ** This function will determine what the most
   // optimal move would be given any current position
  
}
  
 
  
  
 
  
  
function createdatabase() {
  
    // This module will be connected to the SQL database,
  
    // and store the key transport modules that need to be sent
    // to the databse
  
 

    // FEN
    // Time
    // Rating of Player
  
}
  
function gameplay() {
    // Will be the mastermind behind the game
    // Will play the m
  
}

   // [0, 0, L, 0, 0, 0]
   // [L, T, L, L, T, L] 1 - 5 (exclusive) connect to L (top row)
   // [L, T, L, E, E, L]
   // [L, E, L, L, L, E]
   // [0, L, L, E, L, 0]

var test1 = [["0", "0", "L", "0", "0", "0"], ["L", "T", "L", "L", "T", "L"], ["L", "T", "L", "E", "E", "L"], ["L", "E", "L", "L", "L", "E"], ["0", "L", "L", "E", "L", "0"]]
var test2 = [["0", "0", "L", "0", "0", "0"], ["L", "T", "L", "L", "T", "L"], ["L", "T", "L", "E", "T", "L"], ["L", "L", "L", "L", "E", "E"], ["0", "E", "L", "E", "L", "0"]]

console.log(convertToReadable(test1))
console.log(status(test2))

 
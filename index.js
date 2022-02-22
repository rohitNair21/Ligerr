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

      if (x + i >= 0 && x + i <= 5 && arrayBoard[y][x+i] == "E")
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
            if (arrayBoard[y][x+1] == "E" || arrayBoard[y-1][x] == "E")
            {
               isValid = 1;
            }
         }else if (x == 5){
            if (arrayBoard[y][x-1] == "E" || arrayBoard[y-1][x] == "E")
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
   return isValid;

}

function statusOfGame(arrayBoard) {
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
   return 0;
   // Return the status of the board
   // 1 - Tiger Win
   // 0 - No Win Detected
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

   var regexStr = board.match(/[a-z]+|[^a-z]+/gi); // [ 'LLTLLTLLTL', '2', 'LL', '1', 'LLL', '1', 'LL', '1', 'L' ]
   let arrLen = regexStr.length

   var arrayStr = "";
   for (var i=0; i< arrLen; i++)
   {
      // True if Str
      // False if Int
      if (isNaN(regexStr[i]) == true)// string
      {
         let strLen = regexStr[i].length
         for (var count=0; count<strLen; count++)
         {
            arrayStr += regexStr[i][count]
         }
         
      }else if (isNaN(regexStr[i]) == false)// int
      {
         let num = parseInt(regexStr[i])
         for (var count=0; count<num; count++)
         {
            arrayStr += "E"
         }
      }

   }


   let arrayStrLen = arrayStr.length
   arrayBoard = [[], [], [], [], []]


   arrayBoard[0].push("0", "0", arrayStr[0], "0", "0", "0")
   arrayBoard[1].push(arrayStr[1], arrayStr[2], arrayStr[3], arrayStr[4], arrayStr[5], arrayStr[6])
   arrayBoard[2].push(arrayStr[7], arrayStr[8], arrayStr[9], arrayStr[10], arrayStr[11], arrayStr[12])
   arrayBoard[3].push(arrayStr[13], arrayStr[14], arrayStr[15], arrayStr[16], arrayStr[17], arrayStr[18])
   arrayBoard[4].push("0", arrayStr[19], arrayStr[20], arrayStr[21], arrayStr[22], "0")

   return arrayBoard


   // "(?<=\\D)(?=\\d)|(?<=\\d)(?=\\D)"
   // String regexPattern = "(?!^)";
   // String[] splitArray = FEN.split(regexPattern);
   // ArrayList<Integer> refinedArray = new ArrayList<Integer>();
   // for (int x = 0; x < splitArray.length; x++) {
   //       if (splitArray[x] == "-?(0|[1-9]\\d*)") {
   //          int num = Integer.parseInt(splitArray[x]);
   //          for (int y = 0; y < num; y++) {
   //             refinedArray.add(1);
   //          }
   //       } else if (splitArray[x] == "T") {
   //          refinedArray.add(2);
   //       } else if (splitArray[x] == "L") {
   //          refinedArray.add(3);
   //       }
   // }
   // int[][] fenToBoard = {{0, 0, (int) refinedArray.get(0), 0, 0, 0}, {(int) refinedArray.get(1), (int) refinedArray.get(2), (int) refinedArray.get(3), (int) refinedArray.get(4), (int) refinedArray.get(5), (int) refinedArray.get(6)}, {(int) refinedArray.get(7), (int) refinedArray.get(8), (int) refinedArray.get(9), (int) refinedArray.get(10), (int) refinedArray.get(11),
   //          (int) refinedArray.get(12)}, {(int) refinedArray.get(13), (int) refinedArray.get(14),
   //          (int) refinedArray.get(15), (int) refinedArray.get(16), (int) refinedArray.get(17), (int) refinedArray.get(18)},
   //          {0, (int) refinedArray.get(20), (int) refinedArray.get(21), (int) refinedArray.get(22), (int) refinedArray.get(23), 0}};


}

function convertToFen(arrayBoard) {
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
         }
         if (arrayBoard[i][j] != "E" && arrayBoard[i][j] != "0")
         {
            if (spaceCount != 0)
            {
               board += spaceCount.toString()
               board += arrayBoard[i][j]
               spaceCount = 0;
            }else {
               board += arrayBoard[i][j]
            }
         }else if (i == 4 && j == 4)
         {
            if (spaceCount != 0)
            {
               board += spaceCount.toString()
               spaceCount = 0;
            }else {
               board += arrayBoard[i][j]
            }
         }
         
      }
   }
   return board;

  
}
  

function makemove(arrayBoard, location) { 
   if (location == 1)
   {
   }
   
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
   
  
}

   // [0, 0, L, 0, 0, 0]
   // [L, T, L, L, T, L] 1 - 5 (exclusive) connect to L (top row)
   // [L, T, L, E, E, L]
   // [L, E, L, L, L, E]
   // [0, L, L, E, L, 0]

var test1 = [["0", "0", "L", "0", "0", "0"], ["L", "T", "L", "L", "T", "L"], ["L", "T", "L", "E", "E", "L"], ["L", "E", "L", "L", "L", "E"], ["0", "L", "L", "E", "L", "0"]]
var test2 = [["0", "0", "L", "0", "0", "0"], 
             ["L", "T", "L", "L", "T", "L"], 
             ["L", "T", "L", "L", "L", "L"], 
             ["L", "L", "L", "L", "L", "L"], 
             ["0", "L", "L", "L", "L", "0"]]

var test2 = [["0", "0", "E", "0", "0", "0"], 
             ["E", "E", "E", "E", "E", "E"], 
             ["E", "E", "E", "E", "E", "E"], 
             ["E", "E", "E", "E", "E", "E"], 
             ["0", "E", "E", "E", "L", "0"]]
var fen = "LLTLLTLLTL2LL1LLL1LL1L"

// console.log(convertToFen(test2))
// console.log(statusOfGame(test2))
console.log(convertToFen(convertToReadable(fen)))
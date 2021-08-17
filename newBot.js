const beatMap = {
    "R": "P",
    "S": "R",
    "P": "S",
    "D": "W",
    "W": "P"
}
const moves = ["R", "P", "S", "D", "W"];
const nMoves = moves.length;

const nonDynamiteMoves = ["R", "P", "S", "W"];
const nNonDynamiteMoves = nonDynamiteMoves.length;

const nonDynamiteWaterMoves = ["R", "P", "S"];
const nnonDynamiteWaterMoves = nonDynamiteWaterMoves.length;

function randomMove() {
    // Generate a random integer between 0 and 4 (the length of the moves array)
    const randomInt = Math.floor(Math.random() * nMoves);

    return moves[randomInt];
}

function randomNonDynamiteMove() {
    // Generate a random integer between 0 and 3 (the length of the nonDynamiteMoves array)
    const randomInt = Math.floor(Math.random() * nNonDynamiteMoves);

    return nonDynamiteMoves[randomInt];
}

function randomNonDynamiteWaterMove() {
    // Generate a random integer between 0 and 2 (the length of the nonDynamiteWaterMoves array)
    const randomInt = Math.floor(Math.random() * nnonDynamiteWaterMoves);

    return nonDynamiteWaterMoves[randomInt];
}

function howManyDynamites(gamestate) {
    let nDynamites = 0;

    for (let i = 0; i < gamestate.rounds.length; i++) {
        if (gamestate.rounds[i].p1 === "D") {
            nDynamites++;
        }
    }

    return nDynamites;
}

function howManyopponentDynamites(gamestate) {
    let nOppDynamites = 0;

    for (let i = 0; i < gamestate.rounds.length; i++) {
        if (gamestate.rounds[i].p2 === "D") {
            nOppDynamites++;
        }
    }

    return nOppDynamites;
}

class Bot {
    makeMove(gamestate) {
        if (gamestate.rounds.length === 0) {
            return "D";
        } else if (howManyDynamites(gamestate) < 100) 
        {
            //if((gamestate.rounds.length >= 1 && gamestate.rounds.length <300) 
               // || (gamestate.rounds.length >= 590 && gamestate.rounds.length <850))
                //|| (gamestate.rounds.length >= 1005 && gamestate.rounds.length <1250)
                //|| (gamestate.rounds.length >= 1599 && gamestate.rounds.length <1760)
                //if (howManyopponentDynamites(gamestate) < 100)
                    //return randomMove();
               // else
                    //return randomNonDynamiteWaterMove();
            //else
               return beatMap[gamestate.rounds[gamestate.rounds.length - 1].p2];
               
        }
       // else if (gamestate.rounds[gamestate.rounds.length - 1].p2==="W") {
          //  return randomNonDynamiteMove();
        //}
        else
            return randomNonDynamiteMove();
    }
}

module.exports = new Bot();
//console.log(beatMap["P"][1]);

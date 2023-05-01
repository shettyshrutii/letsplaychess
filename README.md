# letsplaychess

## Run tests

1. run `npm run test`


## Run as a Node Process

1. run `npm ci`
2. run `npm run build`
3. run `npm run dev` -- this will start the server at http://localhost:6060

## To get the next chess movements

1. use GET api endpoint - http://localhost:6060/chess/movement/type/:type/position/:position
   Example: GET http://localhost:6060/chess/movement/type/queen/position/E4
   Expected response:
    {
    "nextMoves": [
        "E5",
        "E6",
        "E7",
        "E8",
        "E3",
        "E2",
        "E1",
        "A4",
        "B4",
        "C4",
        "D4",
        "F4",
        "G4",
        "H4",
        "D5",
        "C6",
        "B7",
        "A8",
        "D3",
        "C2",
        "B1",
        "F5",
        "G6",
        "H7",
        "F3",
        "G2",
        "H1"
    ]
}
    
    

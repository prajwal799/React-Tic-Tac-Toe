import React, { useState } from "react"
import "./TicTacToc.css"
const TicTacToc = () => {
    const [turn , setTurn] = useState('x');
    const [cells , setCells] = useState(Array(9).fill(''));
     const [winner , setWinner] = useState();
     
    
    const CheckWinner = (squares) => {
              let combos = {
                  across:[
                      [0,1,2],
                      [3,4,5],
                      [6,7,8]
                  ],
                  down:[
                      [0,3,6],
                      [1,4,7],
                      [2,5,8]
                  ],
                  diagnols:[
                      [0,4,8],
                      [2,4,6]
                  ]
              };

              for(let combo in combos){
                  combos[combo].forEach((pattern) => {
                      if( (squares[pattern[0]] === '' ) ||  (squares[pattern[1]] === ''  ) || (squares[pattern[2]] === '' )
                      ) {
                          // do nothing
                      }
                      else if (
                        squares[pattern[0]] === squares[pattern[1]] &&
                        squares[pattern[1]] === squares[pattern[2]] 
                      ){
                        setWinner(squares[pattern[0]]);
                      }
                  });
              }
    }
    const handleCliclCell = (num) => {
        
        if(winner){
            alert("Please ReStart the Game");
            return
        }
        if(cells[num] !== ""){
            alert("you already click");
            return
        }
        let squares = [...cells];
        if(turn == 'x'){
            squares[num] = 'x'
            setTurn('o');
            
        }
        else{
        squares[num] = 'o'
        setTurn('x')   
        
       }
       CheckWinner(squares)
       setCells(squares);
    }
    const Cell =({num}) => {
        return <td onClick={() => handleCliclCell(num)}>{cells[num]}</td>
    }

    const ReStart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }
    return (
        <div className="container">
          <h1>turn:{turn}</h1>
            <table>
            
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2} />
                    </tr>
                    <tr>
                    <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5} />
                    </tr>
                    <tr>
                    <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            <button onClick={() => ReStart()} style={{width:"140px" , margin:" 10px auto"}}>ReStart Game</button>
            {winner && (
                <div>
                <p style={{color:"red" , font:"30px"}}>{winner} is the Winner</p>
                </div>
            )}
        </div>
    )
}

export default TicTacToc
import React,{useState} from 'react';
import './App.css';

function App() {

  const[Showfinalresult,setFinalresult]=useState(false);
  const[Score,setScore]=useState(0);
  const[Currentquestion,setCurrentquestion]=useState(0);

  const questions=
  [

    {
      text:"1. Against which opponent did virat kohli register his maiden Test hundred?",
      options:[
       {id:0,text:"a. Srilanka",isCorrect:false},
       {id:1,text:"b. West Indies",isCorrect:false},
       {id:2,text:"c. Bangladesh",isCorrect:false},
       {id:3,text:"d. Australia",isCorrect:true}
      ],
    },
    {
      text:"2. Two bowlers have dismissed Virat kohli seven times each(most often) in Test till date.Name them ?",
      options:[
       {id:0,text:"a. James Anderson,Pat Cummins",isCorrect:false},
       {id:1,text:"b. James Anderson,Ben Stokes",isCorrect:false},
       {id:2,text:"c. James Anderson,Nathon Lyon",isCorrect:true},
       {id:3,text:"d. Nathon Lyon,Ben Stokes",isCorrect:false}
      ]
    }, 
    {
      text:"3. Against which team did Yuvraj Singh score the fastest fifty in T20 World Cup?",
      options:[
       {id:0,text:"a. Srilanka",isCorrect:false},
       {id:1,text:"b.England",isCorrect:true},
       {id:2,text:"c. Bangladesh",isCorrect:false},
       {id:3,text:"d. Australia",isCorrect:false}
      ]
    },
     {
      text:"4. Which batter has the highest average in T20 World Cup?",
      options:[
       {id:0,text:"a. Virat Kohli",isCorrect:true},
       {id:1,text:"b. Chris Gayle",isCorrect:false},
       {id:2,text:"c. Rohit Sharma",isCorrect:false},
       {id:3,text:"d. Glenn Maxwel",isCorrect:false}
      ],
     },
     {
        text:"5. Which bowler broke Shahid Afridi's record for most wickets in T20 World Cup history in the 2021 edition?",
        options:[
         {id:0,text:"a. Tim Southee",isCorrect:false},
         {id:1,text:"b. Shakib Al Hasan",isCorrect:true},
         {id:2,text:"c. Rashid Khan",isCorrect:false},
         {id:3,text:"d. Jasprit Bumrah",isCorrect:false}
        ],
     },
     {
      text:"6. Which team won the inaugural ICC Women's Cup in 1973?",
      options:[
       {id:0,text:"a. New Zealand",isCorrect:false},
       {id:1,text:"b. England",isCorrect:true},
       {id:2,text:"c. Australia",isCorrect:false},
       {id:3,text:"d. West Indies",isCorrect:false}
      ],
   },
   {
    text:"7. In which city the first Australia England cricket test match played in 1877?",
    options:[
     {id:0,text:"a. Sydney",isCorrect:false},
     {id:1,text:"b. Adelaide",isCorrect:false},
     {id:2,text:"c. Melbourne",isCorrect:true},
     {id:3,text:"d. london",isCorrect:false}
    ],
 },
 {
  text:"8. At which Test cricket ground did Brain Lara make a world record of 501 runs ?",
  options:[
   {id:0,text:"a. Edgbaston",isCorrect:true},
   {id:1,text:"b. Kensington Oval",isCorrect:false},
   {id:2,text:"c. Melbourne",isCorrect:false},
   {id:3,text:"d. Eden Gardens",isCorrect:false}
  ],
},
{
  text:"9. What is the lowest total in a World cup T20 match?",
  options:[
   {id:0,text:"a. 39",isCorrect:true},
   {id:1,text:"b. 54",isCorrect:false},
   {id:2,text:"c. 60",isCorrect:false},
   {id:3,text:"d. 41",isCorrect:false}
  ],
},
{
  text:"10. In which year was MS Dhoni appointed Indian captain?",
  options:[
   {id:0,text:"a. 2007",isCorrect:true},
   {id:1,text:"b. 2003",isCorrect:false},
   {id:2,text:"c. 2005",isCorrect:false},
   {id:3,text:"d. 2006",isCorrect:false}
  ],
}
  ]
  const optionclicked=(isCorrect)=>{
  if(isCorrect){
    setScore(Score+1);
  }
  if(Currentquestion+1<questions.length){
    setCurrentquestion(Currentquestion+1);

  }

  else{
    setFinalresult(true)
  }
  }
  const Restartgame=()=>{
    setScore(0);
    setCurrentquestion(0);
    setFinalresult(false);
  }
  return (
    <div className="App">
      {/* header */}
      <h1 style={{color:'blue'}}>Cricket Quiz</h1>
      {/* current score */}
      
      {Showfinalresult?(
        <div className='finalresult'>
        <h1>Final Results</h1>
        <h2>{Score} out of {questions.length} correct-({(Score/questions.length)*100}%)</h2>
        <button onClick={()=>Restartgame()}>Restart game</button>
      </div>
      ):(
      
      <div className ='question-card'>
        <h2 style={{color:'grey'}}>Question {Currentquestion+1} out of {questions.length
        }</h2>
        <h3 className='questiontext'>{questions[Currentquestion].text}</h3>
        <ul>
  {questions[Currentquestion].options.map((option)=>{
    return(
      <li onClick={()=>optionclicked(option.isCorrect)} key={option.id}>{option.text}</li>
    );
   })}
  </ul>
      </div>
    )}
        </div>

    
      
 
  )
}

export default App;

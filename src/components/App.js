import React,{useState}from 'react'
import '../styles/App.css';

const flames = ['Friends','Love','Affection','Marriage','Enemy','Siblings']

const App = () => {
const[name1,setName1] = useState('');
const[name2,setName2] = useState('');
const[result,setResult] = useState('');
 
 const calculateRelationship = () =>{
    if(name1.trim() === '' || name2.trim() === ''){
        setResult('Please Enter valid input');
        return;
    }
    let name1Arr = name1.split('');
    let name2Arr = name2.split('');
    
    name1Arr.forEach(char =>{
      const index = name2Arr.indexOf(char);
      if(index !== -1){
        name2Arr.splice(index,1);
      }
    });

    const lengthString = name1Arr.length + name2Arr.length;
    const  remainingString = lengthString % 6 ;

    setResult(flames[remainingString]);
 }
          const clearInput = ()=>{
            setName1('');
            setName2('');
            setResult('');
          }
 

  return (
    <div id="main">
      <input type = 'text'
       placeholder="Enter first name"
      value = {name1}
      onChange={(e) => setName1(e.target.value)}
      data-testid="input1"
      />

   <input type = 'text'
       placeholder="Enter second name"
      value = {name2}
      onChange={(e) => setName2(e.target.value)}
      data-testid="input2"
      />
 <button onClick = {calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>
 <button onClick={clearInput} data-testid="clear">Clear </button>
 {result && <h3 data-testid="answer">{result}</h3>}

    </div>
  )
}

export default App

  




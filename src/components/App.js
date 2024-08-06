import React, { useState } from 'react'
import '../styles/App.css';

const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings']

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (name1.trim() === '' || name2.trim() === '') {
      setResult('Please Enter valid input');
      return;
    }
    let name1Arr = name1.toLowerCase().split('');
    let name2Arr = name2.toLowerCase().split('');


    for(let i = 0; i < name1Arr.length; i++){
      for(let j = 0; j < name2Arr.length; j++){
        if(name1Arr[i] === name2Arr[j]){
          name1Arr.splice(i, 1);
          name2Arr.splice(j, 1);
          i--;
          j--;
        }
      }
    }

    // name1Arr = name1Arr.filter(char => {
    //   const index = name2Arr.indexOf(char);
    //   if (index !== -1) {
    //     name2Arr.splice(index, 1);
    //     return false;
    //   }
    //   return true;
    // });

    const lengthString = name1Arr.length + name2Arr.length;
    const remainingString = lengthString % 6;

    setResult(flames[remainingString]);
  }
  const clearInput = () => {
    setName1('');
    setName2('');
    setResult('');
  }


  return (
    <div id="main">
      <input
        data-testid="input1"
        type="text"
        value={name1}
        name='name1'
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />

      <input
        data-testid="input2"
        type="text"
        value={name2}
        name='name2'
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>
      <button onClick={clearInput} data-testid="clear">Clear </button>
      <h3 data-testid="answer">{result}</h3>
      {/* <h3>{Marriage}</h3> */}
    </div>
  )
}

export default App
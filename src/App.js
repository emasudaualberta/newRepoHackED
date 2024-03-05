import * as React from 'react';
import './App.css';
import Chart from 'chart.js/auto';

import { Line } from "react-chartjs-2";


let data = {
  labels: ["1","2","3","4","5","6"],
  datasets: [
    {
      label: "First dataset",
      data: [0,0,0,0,0,0],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};
function decay(numb1,time){
  return(numb1*((1/2)**(time/5)))
}

function createData(caffiene){
  let data = {
    labels: ["0","10","20","30","40","50"],
    datasets: [
      {
        label: "First dataset",
        data: [decay(caffiene,0), decay(caffiene,10), decay(caffiene,20), decay(caffiene,30), decay(caffiene,40), decay(caffiene,50)],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };
  return data;

}



function App() {

  



  const [message, setMessage] = React.useState('');

  
  const [caffiene, setCaf]= React.useState(0);

 

  function handleKeyDownName(event) {
    //console.log(event.key);
    if (event.key === 'Enter'|| event.key === 13) {
      setMessage(event.target.value);
      event.target.value = "";
    }
  }
  
  

  function handleKeyDownCaf(event) {
    //console.log(event.key);
    if (event.key === 'Enter'|| event.key === 13) {
      if (isNaN(event.target.value)===false) {
        InputCaf(parseInt(event.target.value)+caffiene);
        event.target.value = '';
      }
    }
  }
  function InputCaf(numb){
     setCaf(caffiene+numb);
     
     data = createData(caffiene);


   }
   function ClearCaf(){
    setCaf(0);
    data=createData;
   }
   
  return (


    <div className="App">

      <header className="App-header">
      <h1 className = "App-link">
        Caffeine Calculator
      </h1>
      <Line className = 'graph' data={data} />

        <h2>Caffeine: {caffiene}</h2>
        <div>
          <button className = "button" type='button' onClick={()=>InputCaf(80)}>Redbull(8.5oz)</button>
          
          <button className = "button" type='button' onClick={()=>InputCaf(70)}>Coffee(6oz)</button>
          <button className = "button" type='button' onClick={()=>InputCaf(35)}>Tea(green/black)(6oz)</button>
          <button className = "button" type='button' onClick={()=>InputCaf(60)}>Espresso(1oz)</button>
          <button className = "button" type='button' onClick={()=>InputCaf(165)}>Monster(16oz)</button>
          <button className = "button" type='button' onClick={()=>InputCaf(80)}>Milk tea(16oz)</button>
          <button className = "button" type='button' onClick={()=>InputCaf(30)}>Coke(12oz)</button>
          <button className = "button" type='button' onClick={()=>InputCaf(-100)}>remove(100mg)</button>
          </div>
          <br></br>
        <div>
          <p2>Custom Name:</p2>
          <input
            className = "button"
            placeholder = "item name"
            type="text"
            id="message"
            name="message"
            onKeyDown={handleKeyDownName}
        />
        <p2>Custom Amount:</p2>
        <input
            className = "button"
            placeholder = "caffiene amount"
            type="text"
            id="message"
            name="message"
            onKeyDown={handleKeyDownCaf}
        />
        <button className = "button" type='button' onClick={()=>ClearCaf()}>clear</button>
        </div>
      </header>
    </div>

  );
}

export default App;

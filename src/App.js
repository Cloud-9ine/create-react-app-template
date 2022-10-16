import React, { useState, useEffect } from "react";
import Results from "./Components/Results";
import Button from "./Components/Button";
import "./App.css";
import axios from "axios";


function App() {
  const [entry, setEntry] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0)

  useEffect(
    axios.get('http://localhost:5050/user')
    .then(res => {
      return res.data;
    })
    .then(data => console.log(data)), [])

  const display = (event) => {
    if(event.target.innerHTML === 'X'.toLowerCase()){
      setEntry(entry.concat('*'));
    }else{
      setEntry(entry.concat(event.target.innerHTML));
    }
    
  };

  const evaluate = () => {
    try{
      setResult(eval(entry))
    }catch (err) {
      setResult('')
    }
  }

  const deleteFig = () => {
    setEntry(entry.slice(0, entry.length - 1))
  }

  const clear = () => {
    setEntry("");
    setCount(count + 1)

    if(count >= 2){
      setResult('')
      setCount(0)
    }else if(count == 1){
      return 'ac'
    }
  };

  const clicked = () => {
    if(count == 1) {
      return true
    }else{
      return false
    }
  }


  return (
    <div className="container">
      <Results result__1={entry} result__2={result} />
      <div className="opr-container">
        <Button type={"opr"} input={ (!clicked) ? "AC" : "C"} onClick={clear}/>
        <Button type={"opr"} input={"Del"}  onClick={deleteFig} />
        <Button type={"opr"} input={"%"} onClick={display} />
        <Button type={"opr"} input={"+"} onClick={display} />
        <Button type={"number"} input={7} onClick={display} />
        <Button type={"number"} input={8} onClick={display} />
        <Button type={"number"} input={9} onClick={display} />
        <Button type={"opr"} input={"x"} onClick={display} />
        <Button type={"number"} input={4} onClick={display} />
        <Button type={"number"} input={5} onClick={display} />
        <Button type={"number"} input={6} onClick={display} />
        <Button type={"opr"} input={"/"} onClick={display} />
        <Button type={"number"} input={1} onClick={display} />
        <Button type={"number"} input={2} onClick={display} />
        <Button type={"number"} input={3} onClick={display} />
        <Button type={"opr"} input={"-"} onClick={display} />
        <Button type={"number"} input={0} onClick={display} />
        <Button type={"number"} input={'.'} onClick={display} />
        <Button
          type={"opr"}
          input={"="}
          onClick={evaluate}
        />
      </div>
    </div>
  );
}

export default App;

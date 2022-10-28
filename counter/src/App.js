import './App.css';
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0)

    // let count = 0

    const onClickPlus = () => {
        setCount(count + 1)
    }

    const onClickMinus = () => {
        setCount(count - 1)
    }


  return (
    <div className="App">
      {/*<header className="multi-button">*/}
      {/*  <h1>Counter</h1>*/}
      {/*  <p>*/}
      {/*    Counter: 0*/}
      {/*  </p>*/}
      {/*    <button></button>*/}
      {/*    /!*<div className='multi-button'></div>*!/*/}
      {/*</header>*/}
        <h3>Counter</h3>
        <h1>{count}</h1>
        <div className="multi-button">
            <input onClick={onClickPlus} name="buttons" type="checkbox" id="plus" checked="checked"/>
            <label htmlFor="plus">
    <span>
    </span>+ Plus</label>

            <input onClick={onClickMinus} name="buttons" type="checkbox" id="minus" checked="checked"/>
            <label htmlFor="minus">
    <span>
    </span>Minus -</label>
        </div>
    </div>
  );
}

export default App;

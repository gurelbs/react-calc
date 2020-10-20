import React, {useState} from 'react';

export default function Calc(props) {

  const [darkMode, setDarkMode] = useState(true);

  const btnClick = (e) => {
    const value = e.target.value;
    props.btnClick(value)
  }

  return (
    <>
<div className={!darkMode ? "light-mode" : "dark-mode" }>
        <div class="d-flex justify-content-center text-center p-3">
          <button className={darkMode ? 'btn btn-lg btn-light px-5' : 'btn btn-lg btn-dark px-5'} onClick={() => setDarkMode(prevMode => !prevMode)}>
          <h1 class="badge">{darkMode ? <span>&#9728;</span> : <span>&#9789; </span>}</h1>
          </button>
        </div>
        
    <div class="container-fluid mx-auto row align-items-center">
      <div class="calculator row mx-auto">
        <input type="text" class="calculator-screen col-12" value={props.valueInput} disabled />
          <div class="calculator-keys col-lg-9">
            <button onClick={btnClick} type="button" class="btn btn-info" value="+">+</button>
            <button onClick={btnClick} type="button" class="btn btn-info" value="-">-</button>
            <button onClick={btnClick} type="button" class="btn btn-info" value="*">&times;</button>
            <button onClick={btnClick} type="button" class="btn btn-info" value="/">&divide;</button>  

            <button onClick={btnClick} type="button" value="7" class="btn btn-dark">7</button>
            <button onClick={btnClick} type="button" value="8" class="btn btn-dark">8</button>
            <button onClick={btnClick} type="button" value="9" class="btn btn-dark">9</button>
            <button onClick={btnClick} type="button" value="4" class="btn btn-dark">4</button>
            <button onClick={btnClick} type="button" value="5" class="btn btn-dark">5</button>
            <button onClick={btnClick} type="button" value="6" class="btn btn-dark">6</button>
            <button onClick={btnClick} type="button" value="1" class="btn btn-dark">1</button>
            <button onClick={btnClick} type="button" value="2" class="btn btn-dark">2</button>
            <button onClick={btnClick} type="button" value="3" class="btn btn-dark">3</button>          
            <button onClick={btnClick} type="button" value="0" class="btn btn-dark">0</button>

            <button onClick={btnClick} type="button" class="btn btn-secondary" value=".">.</button>
            <button onClick={btnClick} type="button" class="btn btn-danger" value="all-clear">AC</button>

            <button onClick={btnClick} type="button" class="equal-sign btn btn-outline-success" value="=">=</button>
          </div>
          <div class="col-lg-3 text-center pt-3 pb-3 overflow-auto max-height p=3">
            <p class="h4">History</p>
            {props.history}
            </div>
        </div>
    </div>
    </div>
  </>
  );
}


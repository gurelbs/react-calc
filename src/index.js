import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Calc from './components/Calc';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

let result = [];
const history = () => {
return result.map( item => 
  <li className="list-group-item text-bold text-dark font-weight-light h5">
    {item}
    </li>
    )
}

class App extends Component {
  
  state = {
    result: ' '
  };
  btnPressed = value => {
    console.log(value);
    try {
      if (value === '='){
        this.setState({
          result: eval(this.state.result)
        })
        result.push(`${this.state.result} = ${eval(this.state.result)}`);
        console.log(result);

      } else if (value === 'all-clear'){
        this.setState({
          result: ' '
        })

      } else if (value === undefined){
        this.setState({
          result: value
        })

      } else {
        this.setState({
          result: this.state.result + value
        });
      }
    } catch (error) {
        console.log(error);      
    }
  }


  render() {
    return (
      <>
      <div class="bg-dark text-light text-center height-full-page d-flex flex-column justify-content-center">
        <Calc 
          btnClick={this.btnPressed}
          valueInput = {this.state.result === ' ' ? 0 : this.state.result}
          history = {history()}
        />
        <Footer />
      </div>
      </>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'));

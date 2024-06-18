// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({count: random})
  }

  render() {
    const {count} = this.state
    return (
      <div className="big-container">
        <div className="small-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="result">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

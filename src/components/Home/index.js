import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {enteredInput: '', showOutput: false}

  typeInput = event => {
    this.setState({enteredInput: event.target.value})
  }

  save = () => {
    this.setState({showOutput: true})
  }

  edit = () => {
    this.setState({showOutput: false})
  }

  render() {
    const {enteredInput, showOutput} = this.state
    return (
      <div className="bg-cont">
        <div className="card-cont">
          <h1 className="main-head">Editable Text Input</h1>
          <>
            {showOutput === false ? (
              <div className="input-btn-cont">
                <input
                  type="text"
                  value={enteredInput}
                  onChange={this.typeInput}
                  className="input"
                />
                <button
                  type="button"
                  className="btn"
                  data-testid="save"
                  onClick={this.save}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="input-btn-cont">
                <p className="input-value">{enteredInput}</p>
                <button
                  type="button"
                  className="btn"
                  data-testid="edit"
                  onClick={this.edit}
                >
                  Edit
                </button>
              </div>
            )}
          </>
        </div>
      </div>
    )
  }
}
export default Home

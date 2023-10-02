// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    filter: '',
  }

  searchinput = event => {
    this.setState({filter: event.target.value})
  }

  searchresults = suggestion => {
    this.setState({filter: suggestion})
  }

  render() {
    const {filter} = this.state
    const {suggestionsList} = this.props
    const searchresult = suggestionsList.filter(eachsuggestion =>
      eachsuggestion.suggestion.LowerCase().includes(filter.LowerCase()),
    )
    return (
      <div className="gbgg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google"
            alt="google logo"
          />
        </div>
        <div className="gbg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            className="gicon"
            alt="search icon"
          />
          <input type="search" onChange={this.searchinput} value={filter} />
          <ul>
            {searchresult.map(suggestions => (
              <SuggestionItem suggestion={suggestions} key={suggestions.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, searchresult} = props
  const {suggestion} = suggestions
  const Suggestionitem = () => {
    searchresult(suggestion)
  }
  return (
    <li className="suggestionslist">
      <div>
        <p>{suggestion}</p>
        <button type="button" className="bt" onClick={Suggestionitem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem

// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, isToggeled, formatteDate} = props
  const {input, id, isStar} = appointmentDetails
  const onClickFavorites = () => {
    isToggeled(id)
  }
  const favorites = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-items">
      <div className="list-card-container">
        <p>{input}</p>
        <button
          className="favorite-buttons"
          type="button"
          onClick={onClickFavorites}
          data-testid="star"
        >
          <img src={favorites} alt="star" />
        </button>
        <p className="">{formatteDate}</p>
      </div>
    </li>
  )
}
export default AppointmentItem

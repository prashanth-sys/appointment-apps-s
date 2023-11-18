// Write your code here
// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {input: '', date: '', appointmentList: [], appointment: false}

  onInputChange = event => {
    this.setState({input: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  isToggeled = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isStar: !eachContact.isStar}
        }
        return eachContact
      }),
    }))
  }

  onAppointmentShow = event => {
    event.preventDefault()
    const {input, date} = this.state
    const newAppointment = {
      id: v4(),
      input,
      date,
      isStar: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      input: '',
      date: '',
    }))
  }

  onFilters = () => {
    this.setState(prevState => ({appointment: !prevState.appointment}))
  }

  render() {
    const formatteDate = format(new Date(2021, 9, 3), 'dd MMMM yyyy, EEEE')
    const {input, appointmentList, appointment, date} = this.state
    const filters = appointmentList.filter(each => each.isStar === true)
    const results = appointment ? filters : appointmentList
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="appointment-container">
            <div className="input-container">
              <h1 className="main-heading">Add Appointment</h1>
              <form onSubmit={this.onAppointmentShow}>
                <label className="label" htmlFor="Title">
                  TITLE
                </label>
                <input
                  type="text"
                  id="Title"
                  className="input"
                  placeholder="Title"
                  onChange={this.onInputChange}
                  value={input}
                />
                <label className="label" htmlFor="Date">
                  DATE
                </label>
                <input
                  type="date"
                  id="Date"
                  className="input"
                  placeholder="dd/mm/yy"
                  onChange={this.onDateChange}
                  value={date}
                />
                <button className="button" type="submit" data-testid="star">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="hr" />
          <div className="card-heading-container">
            <h1 className="appointment">Appointments</h1>
            <button
              className="cancel-button"
              type="button"
              onClick={this.onFilters}
            >
              Starred
            </button>
          </div>
          <ul className="list-container">
            {results.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                isToggeled={this.isToggeled}
                formatteDate={formatteDate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments

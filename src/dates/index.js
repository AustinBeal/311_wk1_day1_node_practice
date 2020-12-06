// import moment here; use this package in each function
const moment = require('moment')
;

const today = () => {
  // write code for dates.today
  return moment().format('dddd')
}
//console.log(today())

const calendar = () => {
  // write code for dates.calendar
 return  moment().format('MMM DD, YYYY')
}

const currentTime = () => {
  // write code for dates.currentTime
  return  moment().format('hh:mm:ss A')
}

module.exports = {
  today,
  calendar,
  currentTime
}


// ## Dates

// * Complete the following functions in `dates/index.js`:
// * Make sure to import `moment` at the top of the file
// * Refer to the moment.js docs: https://momentjs.com/docs/

// * Today
//   * Return the name of current day. Ex. Monday, Tuesday, etc.
//   * Hint: moment().format(?)

// * Calendar
//   * Return the current date in the format: May 29, 2019
//   * Hint: moment().format(?)

// * CurrentTime
//   * Return the current time in the format: 03:21:51 PM
//   * Hint: moment().format(?)
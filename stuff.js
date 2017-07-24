const moment = require('moment');
const chalk = require('chalk');

  // let currentDate = chalk.cyan(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  let currentDate = (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  console.log('It is', currentDate);
  let dayOfYear = (moment().format("DDDo"));
  console.log('It is the', dayOfYear);
  let secondsInDay = (moment().format("ss"));
  console.log('It is', secondsInDay);
  let leapYear = moment().isLeapYear();
  function isIt (question){
    if(question){
      return ' is';
    }else {
      return 'Is not'
    }
  }
  console.log(`It ${isIt(moment().isLeapYear())} a leap year.`);
  console.log(`It ${isIt(moment().isDST())} daylight savings.`);

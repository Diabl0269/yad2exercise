const moment = require('moment');
const m = moment().format('MMMM-Do-YYYY, h:mm:ss a')
const x = moment().isSame(moment().format(), 'day');
console.log(Date.now().format());

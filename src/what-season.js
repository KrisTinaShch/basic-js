const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
    throw new Error('Invalid date!');
  }


  const m = date.getMonth();

  switch (true) {
    case m === 11 || m <= 1:
      return 'winter';
    case m >= 2 && m <= 4:
      return 'spring';
    case m >= 5 && m <= 7:
      return 'summer';
    case m >= 8 && m <= 10:
      return 'autumn';
  }
}

module.exports = {
  getSeason
};

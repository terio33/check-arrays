/**
 * (c) check array <terio3383@gmail.com>
 *
 * For more details about of the license of this source code,
 * please see the license file LICENSE.
 */

'use strict';

module.exports = checkArrays;

/**
 * checkArrays
 * This takes any parameters
 * @returns {boolean}
 */
function checkArrays () {
  for (let i = 0; i < arguments.length; i++) {
    if (!Array.isArray(arguments[i])) {
      return false;
    }
  }
  
  return true;
}

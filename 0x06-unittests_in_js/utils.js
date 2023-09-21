#!/usr/bin/env node

const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      const roundedA = Math.round(a);
      const roundedB = Math.round(b);
      const sum = roundedA + roundedB;
      return sum;
    }
    if (type === 'SUBTRACT') {
      const subtract = Math.round(a) - Math.round(b);
      return subtract;
    }
    if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return ('Error');
      }
      const divide = Math.round(a) / Math.round(b);
      return divide;
    }
  },

};

module.exports = Utils;

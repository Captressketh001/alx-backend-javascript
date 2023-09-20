// // const assert = require('assert')
// // const calculate = require('./0-calcul')

// // describe('Rounding Number', () => {
// //     it('should calculate sum of two floating point numbers', () => {
// //         assert.strictEqual(calculate(2.4, 3.4), 5)
// //     });
// //     it('should calculate sum of whole numbers', () => {
// //         assert.strictEqual(calculate(2, 3), 5)
// //     })
// //     it('should calculate the sum correctly when a is a whole number and b is a floating-point number', () => {
// //         assert.strictEqual(calculate(1, 3.4), 4)
// //     })
// //     it('should round down b\'s floating point fractional number', () => {
// //         assert.strictEqual(calculate(1.0, 2.4), 3)
// //     })
// //     it('should round down a and b\'s floating point fractional number', () => {
// //         assert.strictEqual(calculate(1.4, 2.4), 3)
// //     })
// //     it('should round down a floating point fractional number', () => {
// //         assert.strictEqual(calculate(1.4, 2.0), 3)
// //     })
// //     it('should round up a floating point fractional number', () => {
// //         assert.strictEqual(calculate(1.5, 2.0), 4)
// //     })
// //     it('should round up a and b\'s floating point fractional number', () => {
// //         assert.strictEqual(calculate(1.5, 2.5), 5)
// //     })
// //     it('should round up b floating point fractional number', () => {
// //         assert.strictEqual(calculate(1.0, 2.5), 4)
// //     })
// // })

// const assert = require('assert');
// const calculateNumber = require('./0-calcul');

// describe('calculateNumber', () => {
//   it('floating point whole numbers', () => {
//     assert.strictEqual(calculateNumber(1.0, 2.0), 3);
//   });

//   it('rounding down b\'s floating point fractional number', () => {
//     assert.strictEqual(calculateNumber(1.0, 2.4), 3);
//   });

//   it('rounding down a and b\'s floating point fractional number', () => {
//     assert.strictEqual(calculateNumber(1.4, 2.4), 3);
//   });

//   it('rounding down a\'s floating point fractional number', () => {
//     assert.strictEqual(calculateNumber(1.4, 2.0), 3);
//   });

//   it('rounding up b\'s floating point fractional numbers', () => {
//     assert.strictEqual(calculateNumber(1.0, 2.5), 4);
//   });

//   it('rounding up a and b\'s floating point fractional numbers', () => {
//     assert.strictEqual(calculateNumber(2.6, 2.5), 6);
//   });

//   it('rounding up a\'s floating point fractional numbers', () => {
//     assert.strictEqual(calculateNumber(2.6, 2.0), 5);
//   });

//   it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
//     assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
//   });
// });
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});

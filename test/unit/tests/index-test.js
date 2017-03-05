const Util = require('../../../sources/index')

describe('index.js: ', () => {
  it('isNum() should work fine.', () => {
    console.log('testing util');
    expect(Util.isNum(1)).toBe(true)
    expect(Util.isNum('1')).toBe(false)
  })
})
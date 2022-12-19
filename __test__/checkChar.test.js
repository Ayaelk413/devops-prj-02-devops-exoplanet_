

const { checkChar } = require('../utils/utils')

test('checkUniqueName', () => {
    expect(checkChar('test+++')).toBe(false)
})

test('checkUniqueName', () => {
    expect( checkChar('test')).toBe(true)
})

/* describe('test suite utils', () => {
  it('false checkUniqueName', () => {
    expect(checkUnqiueName('test++++')).toBe(false)
  })
}) */


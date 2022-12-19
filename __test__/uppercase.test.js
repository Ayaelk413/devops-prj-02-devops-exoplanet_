
const { uppercase } = require('../utils/utils')

test('uppercase', () => {
    expect(uppercase('test')).toBe(false)
})

test('uppercase', () => {
    expect(uppercase('TEST')).toBe(true)
})

/* describe('test suite utils', () => {
  it('false checkUniqueName', () => {
    expect(checkUnqiueName('test++++')).toBe(false)
  })
}) */
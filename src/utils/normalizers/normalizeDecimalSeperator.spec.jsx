import React from 'react';
import normalizeDecimal from './normalizeDecimal.jsx';

describe('(Normalizer) normalizeDecimal', () => {
  it('Returns a string with only numbers', () => {
    let expected = '123,456.00'
    let actual = n.normalizeDecimal('123456')
    expect(actual).to.equal(expected)

    expected = '1,234.00'
    actual = n.normalizeDecimal('1234a')
    expect(actual).to.equal(expected)

    expected = '1,234.00'
    actual = n.normalizeDecimal('1!2!3!4')
    expect(actual).to.equal(expected)

    expected = ''
    actual = n.normalizeDecimal('ab')
    expect(actual).to.equal(expected)
  })

  it('Allows for one decimal symbol', () => {
    let expected = '10.00'
    let actual = n.normalizeDecimal('10.')
    expect(actual).to.equal(expected)

    expected = '10.00'
    actual = n.normalizeDecimal('10.0')
    expect(actual).to.equal(expected)

    expected = '1,234.56'
    actual = n.normalizeDecimal('1234.56')
    expect(actual).to.equal(expected)

    expected = '1,234.56'
    actual = n.normalizeDecimal('1234.56.12')
    expect(actual).to.equal(expected)

    expected = '1.1'
    actual = n.normalizeDecimal('1.1.1.1.1.1')
    expect(actual).to.equal(expected)
  })

  it('Negative input', () => {
    let expected = '-10.00'
    let actual = n.normalizeDecimal('-10.')
    expect(actual).to.equal(expected)

    expected = '-10.00'
    actual = n.normalizeDecimal('-10.0')
    expect(actual).to.equal(expected)

    expected = '-1,234.56'
    actual = n.normalizeDecimal('-1234.56')
    expect(actual).to.equal(expected)

    expected = '-1,234.56'
    actual = n.normalizeDecimal('-1234.56.12')
    expect(actual).to.equal(expected)

    expected = '-1.1'
    actual = n.normalizeDecimal('-1.1.1.1.1.1')
    expect(actual).to.equal(expected)
  })

  it('Truncates to 2 decimal places', () => {
    let expected = '10.00'
    let actual = n.normalizeDecimal('10.000')
    expect(actual).to.equal(expected)

    expected = '10.12'
    actual = n.normalizeDecimal('10.12345')
    expect(actual).to.equal(expected)

    expected = '10.12'
    actual = n.normalizeDecimal('10.12345.00.102.123')
    expect(actual).to.equal(expected)
  })

  it('Removes leading zeros', () => {
    let expected = '123,456.00'
    let actual = n.normalizeDecimal('0123456')
    expect(actual).to.equal(expected)

    expected = '123,456.00'
    actual = n.normalizeDecimal('00000123456')
    expect(actual).to.equal(expected)

    expected = '1,234,560.00'
    actual = n.normalizeDecimal('1234560')
    expect(actual).to.equal(expected)

    expected = '1,234,560.00'
    actual = n.normalizeDecimal('001234560.00')
    expect(actual).to.equal(expected)
  })

  it('Does not remove 0 or 0.XX', () => {
    let expected = '0'
    let actual = n.normalizeDecimal('0')
    expect(actual).to.equal(expected)

    expected = '0'
    actual = n.normalizeDecimal('00')
    expect(actual).to.equal(expected)

    expected = '0.'
    actual = n.normalizeDecimal('0.')
    expect(actual).to.equal(expected)

    expected = '0.0'
    actual = n.normalizeDecimal('0.0')
    expect(actual).to.equal(expected)

    expected = '0.00'
    actual = n.normalizeDecimal('0.00')
    expect(actual).to.equal(expected)
  })
})
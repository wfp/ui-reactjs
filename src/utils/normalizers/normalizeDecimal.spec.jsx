import React from 'react';
import normalizeDecimal from './normalizeDecimal.jsx';

describe('(Normalizer) normalizeDecimal', () => {
  it('Returns a string with only numbers', () => {
    let expected = '123456'
    let actual = normalizeDecimal('123456')
    expect(actual).toEqual(expected)

    expected = '1234'
    actual = normalizeDecimal('1234a')
    expect(actual).toEqual(expected)

    expected = '1234'

    
    actual = normalizeDecimal('1!2!3!4')
    expect(actual).toEqual(expected)

    expected = ''
    actual = normalizeDecimal('ab')
    expect(actual).toEqual(expected)
  })

  it('Allows for one decimal symbol', () => {
    let expected = '10.'
    let actual = normalizeDecimal('10.')
    expect(actual).toEqual(expected)

    expected = '10.0'
    actual = normalizeDecimal('10.0')
    expect(actual).toEqual(expected)

    expected = '1234.56'
    actual = normalizeDecimal('1234.56')
    expect(actual).toEqual(expected)

    expected = '1234.56'
    actual = normalizeDecimal('1234.56.12')
    expect(actual).toEqual(expected)

    expected = '1.1'
    actual = normalizeDecimal('1.1.1.1.1.1')
    expect(actual).toEqual(expected)
  })

  it('Truncates to 2 decimal places', () => {
    let expected = '10.00'
    let actual = normalizeDecimal('10.000')
    expect(actual).toEqual(expected)

    expected = '10.12'
    actual = normalizeDecimal('10.12345')
    expect(actual).toEqual(expected)

    expected = '10.12'
    actual = normalizeDecimal('10.12345.00.102.123')
    expect(actual).toEqual(expected)
  })

  it('Removes leading zeros', () => {
    let expected = '123456'
    let actual = normalizeDecimal('0123456')
    expect(actual).toEqual(expected)

    expected = '123456'
    actual = normalizeDecimal('00000123456')
    expect(actual).toEqual(expected)

    expected = '1234560'
    actual = normalizeDecimal('1234560')
    expect(actual).toEqual(expected)

    expected = '1234560.00'
    actual = normalizeDecimal('001234560.00')
    expect(actual).toEqual(expected)
  })

  it('Does not remove 0 or 0.XX', () => {
    let expected = '0'
    let actual = normalizeDecimal('0')
    expect(actual).toEqual(expected)

    expected = '0'
    actual = normalizeDecimal('00')
    expect(actual).toEqual(expected)

    expected = '0.'
    actual = normalizeDecimal('0.')
    expect(actual).toEqual(expected)

    expected = '0.0'
    actual = normalizeDecimal('0.0')
    expect(actual).toEqual(expected)

    expected = '0.00'
    actual = normalizeDecimal('0.00')
    expect(actual).toEqual(expected)
  })
})
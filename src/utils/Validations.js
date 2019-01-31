// Validation functions used for react-native-validate-form

(val) => { let asd = val ? true : false; return asd }

(val) => { let dsa = !isNaN(parseFloat(val)) && isFinite(val) ? true : false; return dsa }

export const required = value => (value ? undefined : 'This is a required field.')

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value)
        ? 'Please provide a valid email address.'
        : undefined

const length = size => value =>
    value && value.length !== size
        ? `Must be ${size} characters.`
        : undefined

export const length10 = length(10)

export const numbers = value =>
    value && !/^[0-9]*$/i.test(value)
        ? 'Must be whole numbers only.'
        : undefined

export const numbersOnly = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const numbersWithDecimals = value =>
    value && !/^\d+(\.\d{1,2})?$/i.test(value)
        ? 'Must be a valid number with two (2) decimals only.'
        : undefined

const minValue = min => value =>
    value && parseFloat(value.toString().replace(/,/g, '')) <= min
        ? `Must be greater than ${min}.`
        : undefined

export const minValue0 = minValue(0)

const minAllowableValue = min => value =>
    value && parseFloat(value.toString().replace(/,/g, '')) < min
        ? `Must be greater than or equal to ${min}.`
        : undefined

export const minAllowableValue0 = minAllowableValue(0)

const maxValue = max => value =>
    value && parseFloat(value.toString().replace(/,/g, '')) >= max
        ? `Must be less than ${max}.`
        : undefined

export const maxValue100 = maxValue(100)
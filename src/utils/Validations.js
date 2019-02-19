// // Validation functions used for react-native-validate-form

// (val) => { let asd = val ? true : false; return asd }

// (val) => { let dsa = !isNaN(parseFloat(val)) && isFinite(val) ? true : false; return dsa }

// export const required = value => (value ? undefined : 'This is a required field.')

// export const email = value =>
//     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value)
//         ? 'Please provide a valid email address.'
//         : undefined

// const length = size => value =>
//     value && value.length !== size
//         ? `Must be ${size} characters.`
//         : undefined

// export const length10 = length(10)

// export const numbers = value =>
//     value && !/^[0-9]*$/i.test(value)
//         ? 'Must be whole numbers only.'
//         : undefined

// export const numbersOnly = value =>
//     value && isNaN(Number(value)) ? 'Must be a number' : undefined

// export const numbersWithDecimals = value =>
//     value && !/^\d+(\.\d{1,2})?$/i.test(value)
//         ? 'Must be a valid number with two (2) decimals only.'
//         : undefined

// const minValue = min => value =>
//     value && parseFloat(value.toString().replace(/,/g, '')) <= min
//         ? `Must be greater than ${min}.`
//         : undefined

// export const minValue0 = minValue(0)

// const minAllowableValue = min => value =>
//     value && parseFloat(value.toString().replace(/,/g, '')) < min
//         ? `Must be greater than or equal to ${min}.`
//         : undefined

// export const minAllowableValue0 = minAllowableValue(0)

// const maxValue = max => value =>
//     value && parseFloat(value.toString().replace(/,/g, '')) >= max
//         ? `Must be less than ${max}.`
//         : undefined

// export const maxValue100 = maxValue(100)


/**
 * Field-level validations
 * returns undefined if there are no errors
 */
export const isRequired = field => value => (value ? undefined : `Please enter ${field}`);
export const validateEmail = value => (value && (/^\w+([\,.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value) ? undefined : "The email address you have entered is invalid");
export const validatePassword = value => (value && (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/).test(value) ? undefined : "Password must contain the following: 8 to 20 characters, numeric character, special character, and uppercase letter");
export const validateNumber = field => value => (value && (/^[0-9]*$/).test(value) ? undefined : `The ${field} you have entered is invalid`);
export const validateMobile = value => (value && (/^(09|\+639)\d{9}$/).test(value) ? undefined : "The mobile number you have entered is invalid");
export const validateRecoveryMethod = value => (value && value !== "Recovery Method" ? undefined : "Please select recovery method");
export const validateConfirmPassword = (field, fields) => (Object.is(fields.password, fields.confirmPassword) ? undefined : "Password does not match.");
export const validateCardLength = length => value => (value && value.length === length ? undefined : "The card number you have entered is invalid");
export const isPasswordValidation = field => value => (value ? undefined : `We don\'t recognized the email address/phone number you have entered. Try entering it again.`);
export const isVerificationValidation = field => value => (value ? undefined : 'Wrong pin, Try to re-enter pin.');
// modified confirmPassword
export const validatePasswordMatch = (field, fields) => (fields.password === fields.confirmPassword ? undefined : "Password does not match.");

//modified recovery
export const checkRecoveryType = value => {
    if ((/^\w+([\,.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)) {
        return undefined;
    } else if ((/^(09|\+639)\d{9}$/).test(value)) {
        return undefined;
    } else {
        return "Please enter valid email or phone number";
    }
}
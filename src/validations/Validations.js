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
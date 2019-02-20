import { isRequired } from './Validations';

export const uniqueKeyValidator = [isRequired('unique_key')];

export const passwordValidator = [isRequired('password')];

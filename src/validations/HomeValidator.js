import { isRequired } from './validation';

export const uniqueKeyValidator = [isRequired('unique_key')];

export const passwordValidator = [isRequired('password')];

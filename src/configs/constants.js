import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const BUTTON_HEIGHT = 56;

const BASE_URL = '';
const API_URL = `${BASE_URL}/api/v1`;

const DEALS_SUMMARY_HEIGHT = SCREEN_HEIGHT / 5;

export default {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    BUTTON_HEIGHT,
    BASE_URL,
    API_URL,
    DEALS_SUMMARY_HEIGHT
}






import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Dimensions

const SCREEN_HEIGHT        = height;
const SCREEN_WIDTH         = width;
const BUTTON_HEIGHT        = 56;
const DROPDOWN_HEIGHT      = 42;
const DEALS_SUMMARY_HEIGHT = SCREEN_HEIGHT / 5;
const LOAN_HEADER_HEIGHT   = SCREEN_HEIGHT / 9;
const ERROR_BOX_HEIGHT     = SCREEN_HEIGHT / 7;

const MERCHANT_COMPANY_LOGO_HEIGHT = 25;

const ASPECT_RATIO = width / height;
const LATITUDE = 14.6091;
const LONGITUDE = 121.0223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SLIDER_WIDTH    = width;
const ITEM_WIDTH      = width * 0.85;
const CAROUSEL_HEIGHT = (height / 3) + 30;
const MARGIN_BOUNDS   = (width - ITEM_WIDTH) / 2;

// Colors

const COLOR_WHITE             = '#FFFFFF';
const COLOR_BLACK             = '#000000';
const COLOR_DARK_GRAY         = '#4A4A4A';
const COLOR_LIGHT_GRAY        = '#9B9B9B';
const COLOR_SUPER_LIGHT_GRAY  = '#D8D8D8';
const COLOR_BACKGROUND        = '#F2F2F2';
const COLOR_ERROR             = '#D7534F';
const COLOR_VENTENY_PRIMARY   = '#FFA701';
const COLOR_VENTENY_SECONDARY = '#F3721C';
const COLOR_AVAILA_PRIMARY    = '#4AB7AA';
const COLOR_AVAILA_SECONDARY  = '#4BBBAE';
const COLOR_AVAILA_LIGHT      = '#E0E9E8';

// Api

// DEVELOPMENT

const BASE_URL = 'http://192.168.1.62:3000';

// STAGING


// PRODUCTION

// const BASE_URL = 'http://venteny.com';
const API_URL  = `${BASE_URL}/api/v1`;
const VENTENY_FORGOT_PASSWORD_KEY = 'http://www.venteny.com/users/password/new';

export default {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    BUTTON_HEIGHT,
    DROPDOWN_HEIGHT,
    DEALS_SUMMARY_HEIGHT,
    LOAN_HEADER_HEIGHT,
    ERROR_BOX_HEIGHT,
    MERCHANT_COMPANY_LOGO_HEIGHT,
    ASPECT_RATIO,
    LATITUDE,
    LONGITUDE,
    LATITUDE_DELTA,
    LONGITUDE_DELTA,
    SLIDER_WIDTH,
    ITEM_WIDTH,
    CAROUSEL_HEIGHT,
    MARGIN_BOUNDS,
    COLOR_WHITE,
    COLOR_BLACK,
    COLOR_DARK_GRAY,
    COLOR_LIGHT_GRAY,
    COLOR_SUPER_LIGHT_GRAY,
    COLOR_BACKGROUND,
    COLOR_ERROR,
    COLOR_VENTENY_PRIMARY,
    COLOR_VENTENY_SECONDARY,
    COLOR_AVAILA_PRIMARY,
    COLOR_AVAILA_SECONDARY,
    COLOR_AVAILA_LIGHT,
    API_URL
};

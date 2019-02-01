import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Dimensions

const SCREEN_HEIGHT        = height;
const SCREEN_WIDTH         = width;
const BUTTON_HEIGHT        = 56;
const DROPDOWN_HEIGHT      = 42;
const DEALS_SUMMARY_HEIGHT = SCREEN_HEIGHT / 5;

const SLIDER_WIDTH    = width;
const ITEM_WIDTH      = width * 0.85;
const CAROUSEL_HEIGHT = (height / 3) + 30;
const MARGIN_BOUNDS   = (width - ITEM_WIDTH) / 2;

// Colors

const COLOR_WHITE             = '#FFFFFF';
const COLOR_BLACK             = '#000000';
const COLOR_DARK_GRAY         = '#4A4A4A';
const COLOR_LIGHT_GRAY        = '#9B9B9B';
const COLOR_ERROR             = '#9B9B9B';
const COLOR_VENTENY_PRIMARY   = '#FFA701';
const COLOR_VENTENY_SECONDARY = '';
const COLOR_AVAILA_PRIMARY    = '#4AB7AA';
const COLOR_AVAILA_SECONDARY  = '#4BBBAE';
const COLOR_AVAILA_LIGHT      = '#E0E9E8';

// Api

const BASE_URL = '';
const API_URL  = `${BASE_URL}/api/v1`;



export default {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    BUTTON_HEIGHT,
    DROPDOWN_HEIGHT,
    DEALS_SUMMARY_HEIGHT,
    SLIDER_WIDTH,
    ITEM_WIDTH,
    CAROUSEL_HEIGHT,
    MARGIN_BOUNDS,
    COLOR_WHITE,
    COLOR_BLACK,
    COLOR_DARK_GRAY,
    COLOR_LIGHT_GRAY,
    COLOR_VENTENY_PRIMARY,
    COLOR_VENTENY_SECONDARY,
    COLOR_AVAILA_PRIMARY,
    COLOR_AVAILA_SECONDARY,
    COLOR_AVAILA_LIGHT,
    BASE_URL,
    API_URL
};






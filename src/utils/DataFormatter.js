import moment from 'moment';

const dateFormat = (value, currentFormat, format) => {
    //NOTE: For invalid Date formats -> use checkValid() function below
    if (value != null && value != '' && checkValid(value)) {
        return moment(value, currentFormat).format(format);
    }

    return null;
}

const checkValid = (value) => moment(value, moment.ISO_8601).isValid() ? value : false;

export const dateDisplay = value => value ? dateFormat(value, 'MM/DD/YYYY') : null;

export const numberFormat = value => value ? (Number(value).toFixed(2)).replace(/\d(?=(\d{3})+\.)/g, '$&,').toLocaleString() : null;
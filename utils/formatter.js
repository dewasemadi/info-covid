import moment from 'moment';

export const formatDate = (arg) => moment(new Date(arg)).format('DD-MM-YYYY');
export const formatDateToUs = (arg) => moment(arg).format('LLLL');
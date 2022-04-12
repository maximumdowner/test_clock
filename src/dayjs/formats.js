import dayjs from 'dayjs';

export const binaryFormat = (date) => {
    return dayjs(date).format('hhmmss');
};



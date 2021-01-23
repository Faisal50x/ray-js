import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export default (value, format = 'YYYY-MM-DD H:mm:ss') => {
    const carbon = dayjs(value);
    return {
        type: 'carbon',
        content: {
            formatted: carbon.format(format),
            timestamp: carbon.valueOf(),
            timezone: dayjs.tz.guess()
        },
    };
};

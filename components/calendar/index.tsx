import { DatePicker } from '@material-ui/pickers';
import React, { ReactElement } from 'react';

import { createInitDateObj } from '../../helpers/dateUtils';

interface IProps {
    date: Date;
    start: number;
    onChange(date: Date): void;
}

const Calendar = ({ date, start, onChange }: IProps): ReactElement => (
    <DatePicker
        minDate={createInitDateObj(start)}
        autoOk
        disablePast
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={onChange}
    />
);

export default Calendar;

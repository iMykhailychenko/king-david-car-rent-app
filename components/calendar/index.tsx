import React from 'react';
import { DatePicker } from '@material-ui/pickers';
import { createInitDateObj } from '../../helpers/dateUtils';

interface IProps {
    date: Date;
    start: number;
    onChange(date: Date): void;
}

const Calendar = ({ date, start, onChange }: IProps) => (
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

import React, { ReactElement } from 'react';

import Date from './parts/table.date';
import Car from './parts/taple.car';
import Location from './parts/taple.location';
import User from './parts/taple.user';

const FinalTable = (): ReactElement => (
    <>
        <User />
        <Car />
        <Date />
        <Location />
    </>
);

export default FinalTable;

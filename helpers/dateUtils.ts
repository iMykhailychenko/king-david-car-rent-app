import { IDate } from '../interfaces/interfaces';

/*
 * Create date object for redux state
 **/
export const createCustomDateObj = (date: Date): IDate => ({
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    time: date.getHours(),
});

/*
 * Convert date object from redux into native Date obj
 **/
export const createNativeDateObj = ({ year, month, day, time }: IDate): Date => new Date(year, month, day, time);

/*
 * Check if rent starts after 2(or another time) hours from current time
 **/
export const isCorrectStart = (fromDate: IDate, dif: number): boolean =>
    Math.ceil((createNativeDateObj(fromDate).getTime() - new Date().getTime()) / 1000 / 60 / 60) >= dif;

/*
 * Check if  total time of booking less than 4(or another time) hours
 **/
export const isCorrectEnd = (fromDate: IDate, toDate: IDate, dif: number): boolean =>
    Math.ceil((createNativeDateObj(toDate).getTime() - createNativeDateObj(fromDate).getTime()) / 1000 / 60 / 60) >= dif;

/*
 * Get tyme of begining
 **/
export const createInitDateObj = (dif: number): Date => {
    const newDate = new Date();
    return new Date(newDate.setHours(newDate.getMinutes() === 0 ? newDate.getHours() + dif : newDate.getHours() + dif + 1));
};

/*
 * Get tyme of end
 **/
export const createEndDateObj = (fromDate: IDate, dif: number): IDate => {
    const newDate = createNativeDateObj(fromDate);
    return createCustomDateObj(
        new Date(newDate.setHours(newDate.getMinutes() === 0 ? newDate.getHours() + dif : newDate.getHours() + dif + 1)),
    );
};

/*
 * Get total hours count
 **/
export const totlaCheckinTime = (fromDate: IDate, toDate: IDate): number =>
    Math.ceil((createNativeDateObj(toDate).getTime() - createNativeDateObj(fromDate).getTime()) / 1000 / 60 / 60);

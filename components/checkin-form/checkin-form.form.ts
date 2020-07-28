import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    firstName: Yup.string().required('First name field is required'),
    lastName: Yup.string().required('Last name field is required'),
    email: Yup.string().min(2, 'Too Short!').email('Invalid email').required('Email field is required'),
});

export const warn: { start: string, end: string } = {
    start: 'Checkin can be only in the next 2 hours (from current time and not sooner). Please, select correct start time!',
    end: 'The total time of booking must be more than 4 hours. Please, select correct rent time!',
}
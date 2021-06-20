export const SET_PLACE = 'SET_PLACE';

export interface IPlace {
    id: string;
    description: string;
    main_text: string;
    secondary_text: string;
    matched: {
        offset: number;
        length: number;
    }[];
}

export const initPlace: IPlace = {
    id: '',
    description: '',
    main_text: '',
    secondary_text: '',
    matched: [
        {
            offset: 0,
            length: 0,
        },
    ],
};

export interface IPlaceAction {
    type: typeof SET_PLACE;
    payload: IPlace;
}

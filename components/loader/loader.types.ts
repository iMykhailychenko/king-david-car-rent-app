export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

export interface ILoadingStart {
    type: typeof LOADING_START;
    payload: boolean;
}

export interface ILoadingEnd {
    type: typeof LOADING_END;
    payload: boolean;
}

export type ILoading = ILoadingStart | ILoadingEnd;

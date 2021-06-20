export const SUCCESS_CLOSE = 'SUCCESS_CLOSE';
export const SUCCESS_OPEN = 'SUCCESS_OPEN';

export interface ISuccess {
    open: boolean;
    text: string;
}

export interface ISuccessAction {
    type: typeof SUCCESS_CLOSE | typeof SUCCESS_OPEN;
    payload: string | null | undefined;
}

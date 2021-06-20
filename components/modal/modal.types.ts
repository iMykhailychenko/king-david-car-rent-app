export const MODAL_CLOSE = 'MODAL_CLOSE';
export const MODAL_OPEN = 'MODAL_OPEN';

export interface IModal {
    open: boolean;
    text: string;
}

export interface IModalAction {
    type: typeof MODAL_CLOSE | typeof MODAL_OPEN;
    payload: string | null | undefined;
}

export const SWAPPER_THEM = 'PROFILE::SWAPPER_THEM';
export const USER_NAME = 'PROFILE::USER_NAME'

export const changeVisible = {
    type: SWAPPER_THEM,
    
}

export const getName = (name) => ({
    type: USER_NAME,
    payload: name
});
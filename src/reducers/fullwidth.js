import {
    UPDATE_TEXT,
    SET_CLIPBOARD_ALERT,
    SET_INPUT_HEIGHT
} from '../actions';

const initialState = {
    inputText: '',
    outputText: '',
    showClipboardAlert: false,
    inputHeight: 1
};

export const fullwidthReducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_TEXT:
        return { ...state, ...action.data };
    case SET_CLIPBOARD_ALERT:
        return { ...state, ...action.data };
    case SET_INPUT_HEIGHT:
        return { ...state, ...action.data };
    default:
        return state;
    }
};

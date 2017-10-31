export const UPDATE_TEXT = 'UPDATE_TEXT';
export const updateText = (inputText, outputText) => ({
    type: UPDATE_TEXT,
    data: { inputText, outputText }
});

export const SET_CLIPBOARD_ALERT = 'SET_CLIPBOARD_ALERT';
export const setClipboardAlert = showClipboardAlert => ({
    type: SET_CLIPBOARD_ALERT,
    data: { showClipboardAlert }
});

export const SET_INPUT_HEIGHT = 'SET_INPUT_HEIGHT';
export const setInputHeight = inputHeight => ({
    type: SET_INPUT_HEIGHT,
    data: { inputHeight }
});

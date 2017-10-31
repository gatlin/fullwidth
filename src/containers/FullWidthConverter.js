/**
Bridge between the `FullWidthConverter` component and the redux store.
State is mapped to props, as are functions which can dispatch actions to update
the store.
*/

import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {
    updateText,
    setClipboardAlert,
    setInputHeight
} from '../actions';
import { FullWidthConverter } from '../components/FullWidthConverter';

// The actual function which converts text to its fullwidth counterpart.
const convertToFullWidth = (text) =>  {
    return []
        .map
        .call(text, c => c.match(/[ \t\n]/)
              ? c
              : String.fromCharCode(
                  c.charCodeAt(0) + 0xFEE0))
        .join('');
};

const mapStateToProps =
      ({ fullwidth: {
          inputHeight,
          inputText,
          outputText,
          showClipboardAlert
      }}) => ({
          inputHeight,
          inputText,
          outputText,
          showClipboardAlert
      });

const mapDispatchToProps = dispatch => ({
    setClipboardAlert: b => dispatch(setClipboardAlert(b)),
    updateText: t => dispatch(updateText(t, convertToFullWidth(t))),
    setInputHeight: evt => dispatch(
        setInputHeight(Math.min(
            evt.nativeEvent.contentSize.height,
            Dimensions.get('window').height / 4
        )))
});

export default connect(mapStateToProps, mapDispatchToProps)(
    FullWidthConverter
);

/**
The main component of the application.

Provides a resizable input control and displays the converted output. Long
presses cause the converted text to be copied to the clipboard.

The props are defined and assigned in `src/containers/FullWidthConverter.js`.
*/

import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Clipboard,
    Dimensions
} from 'react-native';

import { Notification } from './Notification';

export const FullWidthConverter = props => (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          autoFocus
          style={[styles.inputText, { height: props.inputHeight }]}
          placeholder={'Enter normie text here'}
          placeholderTextColor={'#000'}
          multiline
          underlineColorAndroid={'transparent'}
          onContentSizeChange={props.setInputHeight}
          onChangeText={props.updateText}
          />

        <Text
          onLongPress={ () => {
              Clipboard.setString(props.outputText);
              props.setClipboardAlert(true);
              setTimeout(() => {
                  props.setClipboardAlert(false);
              }, 5000);
          }}
          style={styles.convertedText}
          >
          { props.outputText }
        </Text>
      </View>
      <Notification
        duration={5000}
        visible={props.showClipboardAlert}
        >
        {'Text copied to clipboard'}
      </Notification>
    </View>
);

const mainBGColor = '#dd6dfb';
const inputBGColor = '#50d8ec';
const textBGColor = '#eecd69';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: mainBGColor
    },

    inputText: {
        padding: 15,
        color: '#000',
        backgroundColor: inputBGColor,
        fontSize: 20,
        elevation: 4,
        fontFamily: 'notoserif'
    },

    convertedText: {
        flex: 1,
        padding: 10,
        fontSize: 12,
        margin: 10,
        color: '#000',
        backgroundColor: textBGColor,
        elevation: 2
    },

    modal: {
        height: 20
    }
});

/**
The `Notification` component is a small modal alert.
It controls a `FadeView` component.
*/

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

import FadeView from './FadeView';

export const Notification = props =>
    !props.visible
    ? null
    : (
        <View style={styles.wrapper}>
          <FadeView
            duration={props.duration}
            style={styleObj.notification}
            >
            <Text style={styles.text}>
              { props.children }
            </Text>
          </FadeView>
        </View>
    );

const styleObj = {
    wrapper: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    notification: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        justifyContent: 'center'
    },

    text: {
        color: '#fff'
    }
};

const styles = StyleSheet.create(styleObj);

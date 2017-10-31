/**
A self-contained component that can be faded in and out of view.

See `src/components/Notification.js` for an example component which uses
`FadeView`.
*/

import React, { Component } from 'react';
import {
    Animated
} from 'react-native';

class FadeView extends Component {

    state = {
        fadeAnim: new Animated.Value(0),
        timer: null
    };

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0.8,
                duration: 1000
            }
        ).start();

        const timer = setTimeout(() => {
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 0,
                    duration: 1000
                }
            ).start();
        }, this.props.duration - 1000);
        this.setState({ timer });
    }

    componentWillUnmount() {
        if (this.state.timer) {
            clearTimeout(this.state.timer);
            this.setState({ timer: null });
        }
    }

    render() {
        const { fadeAnim } = this.state;
        return (
            <Animated.View
              style={{ ...this.props.style, opacity: fadeAnim }}
              >
              { this.props.children }
            </Animated.View>
        );
    }
}

export default FadeView;

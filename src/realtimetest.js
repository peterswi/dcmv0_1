import * as firebase from "firebase";
import React from "react";
//building this constructor and component did mount to grow within the app. Still missing something

class realtimetest extends React.Component {
    constructor() {
        super();
        this.state = {
            speed: 'hello'
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        const speedRef = rootRef.child('users');
        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val()
            });
        });
    }

    render() {
        return (
            <p>
                <h2>React+firebase test: {this.state.speed}  </h2>
            </p>
        );

    }
}
export default realtimetest;
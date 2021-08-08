import React, {Component} from 'react';
import {Launcher} from 'react-chat-window';
 
export default class Chat extends Component {
 
    constructor() {
        super();
        this.state = {
            messageList: [],
            connected: false
        };
        this.socket = React.createRef();
    }

    componentDidMount() {
        this.connect();
    }

    connect() {
        this.socket.current = new WebSocket('ws://localhost:5001/');
        this.socket.current.onopen = () => {
            console.log('Socket was opened');
            this.setState({...this.state, connected: true});
            
        }
        this.socket.current.onmessage = (event) => {
            this.setState({...this.state, messageList: [...this.state.messageList, {
                author: 'them',
                type: 'text',
                data: { ...JSON.parse(event.data).data }
                }]})
            console.log(JSON.parse(event.data))
        }
        this.socket.current.onclose = () => {

        }
        this.socket.current.onerror = () => {

        }
    }
 
    _onMessageWasSent(message) {
        this.setState({...this.state,
            messageList: [...this.state.messageList, message]
        })
        console.log(JSON.stringify(message));
        this.socket.current.send(JSON.stringify(message));
    }
 
    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({...this.state,
            messageList: [...this.state.messageList, {
                author: 'them',
                type: 'text',
                data: { text }
            }]
            })
        }
    }

    render() {
        return (<div>
            <Launcher
            agentProfile={{
                teamName: 'Chat with us',
                imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
            }}
            onMessageWasSent={this._onMessageWasSent.bind(this)}
            messageList={this.state.messageList}
            showEmoji
            />
        </div>)
    }
}
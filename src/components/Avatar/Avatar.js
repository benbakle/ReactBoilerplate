import React, {Component} from 'react';
import './avatar.css';

class Avatar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'id': props.id,
            'alt': props.alt,
            'user': props.user
        };
    }

    render() {
        return (
            <div className="avatar">
                <span className="user-name">{this.props.user}</span>
                <a href={'https://github.com/' + this.state.user}>
                    <img
                        src={this.getPhotoUrl()}
                        alt={this.state.alt}
                        width={200}
                        height={200}
                        className="commentPhoto widget" /><br />
                </a>
            </div>
        );
    }

    getPhotoUrl() {
        return 'https://avatars.githubusercontent.com/' + this.props.user + '?s=200';
    }
}

export default Avatar;
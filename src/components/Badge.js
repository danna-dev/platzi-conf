import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar';

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="logo" />
            </div>
            <div className="Badge__section-name">
                <Gravatar className="Badge_avatar" email={this.props.email} />
                <h1> {this.props.firstName}
                    <br />
                    {this.props.lastName}
                </h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>{this.props.email}</div>
            </div>
            <div className="Badge__footer">platziConf</div>
        </div>
    }

}

export default Badge;
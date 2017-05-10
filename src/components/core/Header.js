import React from 'react';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="header">
                <h2>Hey I'm the header.</h2>
            </div>
        );
    }
}

export default (Header);

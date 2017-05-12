import React from 'react';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="header">
                <div className="header-layout">
                    <div className="app">
                        <h2>
                            Internet Famous
                        </h2>
                    </div>
                    <div className="timer">
                        <h2>0:48</h2>
                    </div>
                    <div className="settings">
                        <h2>
                            <span className="glyphicon glyphicon-pause" aria-hidden="true" />
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Header);

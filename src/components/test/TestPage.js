import React from 'react';
import {Link, IndexLink} from 'react-router';

class TestPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Test Page</h1>
                <p>Oh hey look, its the test page.</p>
                <IndexLink to="/" className="btn btn-primary btn-large">Learn More</IndexLink>
            </div>
        );
    }
}

export default TestPage;

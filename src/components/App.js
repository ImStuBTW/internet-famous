import React from 'react';
import PropTypes from 'prop-types';
import Header from './core/Header';
import Main from './core/Main';
import Footer from './core/Footer';
import Card from './card/Card';

class App extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <Main children={this.props.children} />
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;

/*{this.props.children}*/

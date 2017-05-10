import React, {PropTypes} from 'react';
import Header from './core/Header';
import Footer from './core/Footer';
import Card from './card/Card';

class App extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="main">
                    <div className="content">
                    {this.props.children}
                    </div>
                </div>
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

import React, {PropTypes} from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-layout">
                    <div className="pass">
                        <a className="btn btn-success btn-lg" href="#" role="button">Score</a>
                    </div>
                    <div className="fail">
                        <a className="btn btn-danger btn-lg" href="#" role="button">Skip</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

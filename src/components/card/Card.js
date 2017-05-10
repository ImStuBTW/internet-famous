import React, {PropTypes} from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="main">
                <div id="card">
                    <div className="card">
                        <div className="card-section card-top">
                            <h1 className="title">Abraham Lincoln</h1>
                        </div>
                        <div className="card-section card-middle">
                            <p className="clue">The 16th President of the US, who abolished slavery and led the North to victory in the Civil War. He is often depicted wearing a top hat with his signiture chin curtain beard. He was assassinated by the actor John Wilkes Booth while attending a party at Fords Theatre.</p>
                        </div>
                        <div className="card-section card-bottom">
                            <hr className="line" />

                            <p className="category">HISTORICAL FIGURE</p>

                            <div className="points">
                                <p className="score">1</p>
                                <p className="point">POINT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

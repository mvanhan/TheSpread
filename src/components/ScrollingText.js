import React from 'react';
import './ScrollingText.css'; 

const ScrollingText = () => {
    const message = "Breaking News:    Jontay Porter is a fucking retard!!";

    return (
        <div className="scrollingTextContainer">
            <div className="scrollingText">
                <div className="textContent">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default ScrollingText;
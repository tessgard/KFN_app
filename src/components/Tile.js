import React from 'react'
import './Tile.css'

const Tile = () => {
    return (
        <div className="tile-container">
            <div className="tile-img">
                <img src="https://www.lowcarbtododia.com.br/wp-content/uploads/2019/07/hommus-graodebico-5b36bfab40dc2.jpg"/>

            </div>
            <div className="tile-details">
                <h2>Jim's Hommus</h2>
                <p>By Jimbo97</p>
                <div className="tile-buttons">
                    <button className="btn view-details-btn">View details</button>
                </div>
            </div>

        </div>
    )
}

export default Tile
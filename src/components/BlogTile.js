import React from 'react'
import './BlogTile.css'

const BlogTile = () => {
    return (
            <div className="blog-tile-details">
                <h3>How Food Impacts My Morning Ritual </h3>
                <p>By Tess</p>
                <div className="blog-tile-img">
                    <img src={require('../assets/brooke-lark-lcZ9NxhOSlo-unsplash.jpg')}/>

                </div>
                <div className="tile-buttons">
                    <button className="btn read-more-btn">... read more</button>
                </div>
                {/* <div className="center"><h2>...</h2></div> */}
            </div>

    )
}

export default BlogTile
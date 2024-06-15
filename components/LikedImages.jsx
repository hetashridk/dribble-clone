import React from 'react'

function LikedImages({ likedImages, toggleLike, item}) {
    return (
        <button onClick={() => toggleLike(item.id)}>
            {likedImages[item.id] ? (
                <span style={{ fontSize: '30px', color: 'red' }}>&hearts;</span>
            ) : (
                <span style={{ fontSize: '30px', color: 'grey' }}>&hearts;</span>
            )}
        </button>
    )
}

export default LikedImages
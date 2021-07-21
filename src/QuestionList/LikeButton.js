import React, { useState } from 'react';

export const LikeButton = () => {
    const [ like, setLike ] = useState({ count: 0, liked: false });
  
    const onClick = () => {
        setLike({
            count: like.count + (like.liked ? -1 : 1),
            liked: !like.liked
        });
    }
  
    return (
        <>
            <button onClick={onClick}>
            {like.liked ? '✔' : ''}いいね！
            </button>
            {like.count}
        </>
    );
  }
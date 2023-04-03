import React from 'react';
import '../styles/post.css';
import CardItem from './CardItem';

function Cards({ posts }) {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {posts?.slice(0, 2).map((post) => (
                            <CardItem
                                key={post.id}
                                src={`../uploads/${post?.img}`}
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path={`/post/${post.id}`}
                            />
                        ))}
                    </ul>
                    <ul className='cards__items'>
                        {posts?.slice(2, 5).map((post) => (
                            <CardItem
                                key={post.id}
                                src={`../uploads/${post?.img}`}
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path={`/post/${post.id}`}
                            />
                        ))}
                    </ul>
                    {/* <ul className='cards__items'>
                        {posts?.map((post) => (
                            <CardItem
                                key={post.id}
                                src={`../uploads/${post?.img}`}
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path={`/post/${post.id}`}
                            />
                        ))}
                    </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Cards;

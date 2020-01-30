import React from 'react';
import Card from '../../components/card/card.js';
import './blog.scss';



const name = {
    title: "LATEST FROM BLOG",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
}


const Blog = (props) => {
    return (
        <div>
            <Card title={name.title} description={name.description}></Card>
        </div>
    )
}


export default Blog;
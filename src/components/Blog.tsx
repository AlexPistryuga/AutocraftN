import React from 'react';
import '../index.css'; // Путь к вашему CSS файлу

interface Blog {
    imgSrc: string;
    date: string;
    title: string;
    content: string;
    link: string;
}

const blogs: Blog[] = [
    { imgSrc: '/img/blog/blog1.jpg', date: 'September 21 2024', title: 'Boo Hoo', content: 'Lorem ipsum...', link: '#' },
    { imgSrc: '/img/blog/blog2.jpg', date: 'September 21 2024', title: 'Boo Hoo', content: 'Lorem ipsum...', link: '#' },
    { imgSrc: '/img/blog/blog3.jpg', date: 'September 21 2024', title: 'Boo Hoo', content: 'Lorem ipsum...', link: '#' }
];

const Blog: React.FC = () => {
    return (
        <section className="blog" id="blog">
            <div className="heading">
                <span>Blog & News</span>
                <h2>Our blog content</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="blog-container container">
                {blogs.map((blog, index) => (
                    <div className="box" key={index}>
                        <img src={blog.imgSrc} alt={blog.title} />
                        <span>{blog.date}</span>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        <a href={blog.link} className="blog-btn">Read more<i className="bx bx-right-arrow-alt"></i></a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;

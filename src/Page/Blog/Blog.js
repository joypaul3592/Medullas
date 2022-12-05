import React from 'react';
import BlogCard from '../../Components/Blog/BlogCard/BlogCard';
import BlogHero from '../../Components/Blog/BlogHero/BlogHero';
import BlogSearch from '../../Components/Blog/BlogSearch/BlogSearch';

const Blog = () => {
    return (
        <div>
            <BlogHero />
            <BlogSearch />
            <BlogCard />
        </div>
    )
};

export default Blog;
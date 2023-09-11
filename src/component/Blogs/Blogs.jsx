import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddBookmark }) => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('blogs.json')
			.then(res => res.json())
			.then(data => setBlogs(data));
		console.log(blogs);
	}, []);
	return (
		<div className="md: w-2/3">
			{/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
			{blogs.map(blog => (
				<Blog blog={blog} handleAddBookmark={handleAddBookmark} key={blog.id} />
			))}
		</div>
	);
};

Blogs.propTypes = {
	handleAddBookmark: PropTypes.func.isRequired,
};

export default Blogs;

import PropTypes from 'prop-types';
import { useState } from 'react';
import { GoBookmark } from 'react-icons/go';
const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
	// const [isBookmarked, setIsBookmarked] = useState(false);
	const [isRead, setIsRead] = useState(false);
	const {
		title,
		cover,
		author,
		author_img,
		reading_time,
		posted_date,
		hashtags,
	} = blog;
	return (
		<div className="border-b-2 py-8">
			<div>
				<img src={cover} alt="" className="w-full rounded-lg" />
			</div>
			<div className="flex justify-between items-center my-8">
				<div className="flex gap-4">
					<img className="w-14" src={author_img} alt="" />
					<div>
						<h3 className="text-2xl">{author}</h3>
						<p>
							{posted_date.month} {posted_date.date} ( {posted_date.day_count}{' '}
							days ago)
						</p>
					</div>
				</div>
				<div className="flex items-center">
					<span>{reading_time} min read</span>
					<button
						className={`ml-3  `}
						onClick={() => {
							handleAddBookmark(blog);
							// setIsBookmarked(!isBookmarked);
						}}
					>
						<GoBookmark />
					</button>
				</div>
			</div>
			<h2 className="text-4xl">{title}</h2>
			<p className="my-4">
				{hashtags.map((hashtag, idx) => (
					<span key={idx} className="mr-2">
						<a href="">{hashtag}</a>
					</span>
				))}
			</p>
			<div>
				<button
					disabled={isRead}
					className={`${
						isRead ? 'text-gray-300' : 'text-purple-600'
					} underline font-bold`}
					onClick={() => {
						handleMarkAsRead(blog.reading_time, blog.id);
						setIsRead(!isRead);
					}}
				>
					Mark As Read
				</button>
			</div>
		</div>
	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	handleAddBookmark: PropTypes.func.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;

import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
	return (
		<div className="flex flex-col flex-1 items-center gap-8">
			<div>
				<h3 className="text-2xl text-purple-600 font-bold mt-8 py-6 px-12 bg-purple-100 rounded-lg">
					Spent time on read : {readingTime} min
				</h3>
			</div>
			<div className="bg-gray-200 px-10 py-6 rounded-lg">
				<h1 className="text-2xl mb-4">Bookmarks: {bookmarks.length}</h1>
				<div className="space-y-4">
					{bookmarks.map(bookmarkedBlog => (
						<Bookmark bookmarkedBlog={bookmarkedBlog} key={bookmarkedBlog.id} />
					))}
				</div>
			</div>
		</div>
	);
};

Bookmarks.propTypes = {
	bookmarks: PropTypes.array.isRequired,
	readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;

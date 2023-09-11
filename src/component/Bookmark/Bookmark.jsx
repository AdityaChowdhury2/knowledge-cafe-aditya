import PropTypes from 'prop-types';

const Bookmark = ({ bookmarkedBlog }) => {
	return (
		<div className="bg-orange-700 p-5 rounded-lg">
			<h4 className="text-lg">{bookmarkedBlog.title}</h4>
		</div>
	);
};

Bookmark.propTypes = {
	bookmarkedBlog: PropTypes.object.isRequired,
};

export default Bookmark;

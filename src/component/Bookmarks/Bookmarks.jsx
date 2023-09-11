import PropTypes from 'prop-types';
const Bookmarks = ({ bookmarks }) => {
	return (
		<div>
			<h1 className="text-4xl">Bookmarks: {bookmarks.length}</h1>
		</div>
	);
};

Bookmarks.propTypes = {
	bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;

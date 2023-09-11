import { useState } from 'react';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import Bookmarks from './component/Bookmarks/Bookmarks';
import Header from './component/Header/Header';

function App() {
	const [bookmarks, setBookmarks] = useState([]);
	const [readingTime, setReadingTime] = useState(0);

	const handleAddBookmark = blog => {
		const isAlreadyPresent = bookmarks.find(
			bookmark => bookmark.id === blog.id
		);
		isAlreadyPresent
			? setBookmarks([...bookmarks.filter(bookmark => bookmark.id !== blog.id)])
			: setBookmarks([...bookmarks, blog]);
	};

	const handleMarkAsRead = (time, id) => {
		setReadingTime(readingTime + time);
		const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
		setBookmarks(newBookmarks);
	};
	return (
		<>
			<Header />
			<main className="container md:flex px-4 gap-6">
				<Blogs
					handleAddBookmark={handleAddBookmark}
					handleMarkAsRead={handleMarkAsRead}
				/>
				<Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
			</main>
		</>
	);
}

export default App;

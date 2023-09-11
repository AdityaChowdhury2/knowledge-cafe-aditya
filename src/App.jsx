import { useState } from 'react';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import Bookmarks from './component/Bookmarks/Bookmarks';
import Header from './component/Header/Header';

function App() {
	const [bookmarks, setBookmarks] = useState([]);

	const handleAddBookmark = blog => {
		const isAlreadyPresent = bookmarks.find(
			bookmark => bookmark.id === blog.id
		);
		isAlreadyPresent
			? setBookmarks([...bookmarks.filter(bookmark => bookmark.id !== blog.id)])
			: setBookmarks([...bookmarks, blog]);
	};
	return (
		<>
			<Header />
			<main className="container md:flex px-4">
				<Blogs handleAddBookmark={handleAddBookmark} />
				<Bookmarks bookmarks={bookmarks} />
			</main>
		</>
	);
}

export default App;

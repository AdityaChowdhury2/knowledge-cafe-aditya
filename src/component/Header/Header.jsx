import profile from '../../assets/images/profile.png';
const Header = () => {
	// const profileUrl = 'https://i.ibb.co/WPXgkgw/profile.png';
	return (
		<header className="container flex justify-between mt-2 items-center border-b-2 py-8 px-4">
			<h1 className="text-4xl font-bold">Knowledge Cafe</h1>
			<img src={profile} alt="" />
		</header>
	);
};

export default Header;

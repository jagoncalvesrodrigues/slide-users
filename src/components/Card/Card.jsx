const Cards = ({ user }) => {
	return (
		<div>
			<img src={user.profileImage} alt='' />
			<p>
				Name:{user.title} {user.name}
			</p>
			<p>Username: {user.username}</p>
			<p>Email: {user.email}</p>
		</div>
	);
};

export default Cards;

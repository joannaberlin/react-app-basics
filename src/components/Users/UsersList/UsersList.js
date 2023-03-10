import UserItem from '../UserItem/UserItem';
import styles from './UsersList.module.css';

const UsersList = (props) => {
	return (
		<ul className={styles.list}>
			{props.usersData.map((user) => (
				<UserItem key={user.id} id={user.id} onDelete={props.onDeleteUser}>
					{user.username} ({user.age})
				</UserItem>
			))}
		</ul>
	);
};

export default UsersList;

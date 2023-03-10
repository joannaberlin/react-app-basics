import UserForm from './components/Users/UserForm/UserForm';
import './App.css';
import { useState } from 'react';
import Card from './components/Users/UserItem/UserItem';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
	const [users, setUsers] = useState([]);
	let content;

	const addUserHandler = (enteredUser, enteredAge) => {
		setUsers((prevUsers) => {
			const updatedUsers = [...prevUsers];
			updatedUsers.unshift({
				username: enteredUser,
				age: enteredAge,
				id: Math.random().toString(),
			});
			return updatedUsers;
		});
	};

	const deleteUserHandler = (userId) => {
		setUsers((prevUsers) => {
			const updatedUsers = prevUsers.filter((user) => user.id !== userId);
			return updatedUsers;
		});
	};

	if (users.length > 0) {
		content = <UsersList usersData={users} onDeleteUser={deleteUserHandler} />;
	}

	return (
		<div>
			<section>
				<UserForm onAddUser={addUserHandler} />;
			</section>
			<section>{content}</section>
		</div>
	);
}

export default App;

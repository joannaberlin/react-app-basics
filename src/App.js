import UserForm from './components/UserForm/UserForm';
import './App.css';
import { useState } from 'react';
import Card from './components/Card/Card';

function App() {
	const [users, setUsers] = useState([]);

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

	return (
		<>
			<UserForm onAddUser={addUserHandler} />;
			<Card />
		</>
	);
}

export default App;

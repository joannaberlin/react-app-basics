import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import styles from './UserForm.module.css';
import { useState } from 'react';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const UserForm = (props) => {
	const [usernameValue, setUsernameValue] = useState('');
	const [ageValue, setAgeValue] = useState('');
	const [error, setError] = useState();

	const usernameInputChangeHandler = (e) => {
		if (e.target.value.trim().length > 0) {
			setUsernameValue(e.target.value);
		}
	};

	const ageValueInputHandler = (e) => {
		if (e.target.value.trim().length > 0) {
			setAgeValue(e.target.value);
		}
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (usernameValue.trim().length === 0 || ageValue.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+ageValue < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}
		props.onAddUser(usernameValue, ageValue);
		setUsernameValue('');
		setAgeValue('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card>
				<form className={styles.form} onSubmit={formSubmitHandler}>
					<label>Username</label>
					<input
						id='username'
						type='text'
						value={usernameValue}
						onChange={usernameInputChangeHandler}
					/>
					<label>Age (Years)</label>
					<input
						id='age'
						type='number'
						value={ageValue}
						onChange={ageValueInputHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default UserForm;

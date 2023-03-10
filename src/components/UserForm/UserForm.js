import Button from '../Button/Button';
import styles from './UserForm.module.css';
import { useState } from 'react';

const UserForm = (props) => {
	const [usernameValue, setUsernameValue] = useState('');
	const [ageValue, setAgeValue] = useState('');

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
		props.onAddUser(usernameValue, ageValue);
		e.target.reset();
		setUsernameValue('');
		setAgeValue('');
	};

	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form} onSubmit={formSubmitHandler}>
				<label>Username</label>
				<input type='text' onChange={usernameInputChangeHandler} />
				<label>Age (Years)</label>
				<input type='text' onChange={ageValueInputHandler} />
				<Button>Add User</Button>
			</form>
		</div>
	);
};

export default UserForm;

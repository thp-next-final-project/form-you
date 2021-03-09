import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import ErrorMessage from '../../components/error_message/index';

const Register = () => {
	const user:any = useSelector((state) => state);
	// const history = useHistory();
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (user.isLogged ) {
			// history.push('/');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { errors, data, token, post} = useFetch();


	const handleSubmit = (e:any) => {
		e.preventDefault();	

		const createUser = {
			user: {
				firstname: e.target.firstname.value,
				lastname: e.target.lastname.value,
				role: e.target.role.value,
				email: e.target.email.value,
				password: e.target.password.value,
			}
		};

		post('/api/signup', createUser);
	}
	
	useEffect(() => {
		if (data) {
			dispatch({ type: LOGIN, data, token});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);	

	return (
			<section>
					<h2>Register</h2>
					<form onSubmit={handleSubmit}>
						<label >FirstName</label>
						<input type="text" name="firstname" required/>
						<label >LastName</label>
						<input type="text" name="lastname" required/>
						<label >Choose a role:</label>
						<select name="role">
							<option value="user">User</option>
							<option value="professor">Professor</option>
							<option value="admin">Admin</option>
						</select>
						<label >Email</label>
						<input type="email" name="email" required/>
						<label >Password</label>
						<input type="password" name="password" required/>
						<button type="submit">Submit</button>
					</form>
					{errors && <ErrorMessage message={errors}/>}

			</section>
	)
}

export default Register;
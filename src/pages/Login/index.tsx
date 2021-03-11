import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import ErrorMessage from '../../components/error_message/index';

const Login = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (user.isLogged ) {
			history.push('/');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const { errors, data, token, post } = useFetch();
	
	const handleLogin = (e:any) => {
		e.preventDefault();
		
		const logginUser = {
			user: {
				email: e.target.email.value,
				password: e.target.password.value
			}
		};

		post('/api/login', logginUser);
	}

	useEffect(() => {
		if (data) {
			dispatch({ type: LOGIN, data, token });
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return(
		<section>
			<h2>Login</h2>
				<form onSubmit={handleLogin}>
					<label>Email</label>
					<input type="text" name="email"  required/>
					<label >Password</label>
					<input type="password" name="password" required/>		
					<button type="submit">Submit</button>
				</form>
				{errors && <ErrorMessage message={errors}/>}

		</section>
	)
}

export default Login;
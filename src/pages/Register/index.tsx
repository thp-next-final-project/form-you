import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { LOGIN } from '../../stores/actions';
import ErrorMessage from '../../components/error_message/index';
import TextForm from '../textForm/index'


const Register = () => {
	const user:any = useSelector((state) => state);
	const history = useHistory();
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (user.isLogged ) {
			history.push('/');
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

	const lilMan = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
    const at = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%28at%29.svg/1200px-%28at%29.svg.png";
    const lock = "https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png";

	return (
			<section className="signup-form ">
				<h2>Register</h2>
				<form onSubmit={handleSubmit}>

				<div className="container">
					<div className="half">
						<label className="label-role">Choose a role: </label>
						<select className="select-role" name="role">
							<option value="user">User</option>
							<option value="professor">Professor</option>
							<option value="admin">Admin</option>
						</select>
					</div>
				</div>

				<div className="container">
					<div className="half">
						<TextForm label="Prénom" icon={lilMan}></TextForm>
					</div>
					<div className="half">
						<TextForm label="Nom" icon={lilMan}></TextForm>
					</div>
				</div>

				<div className="container">
					<div className="half">
						<TextForm className="text-input" label="Email" icon={at}></TextForm>
					</div>
				</div>

				<div className="container">
					<div className="half">
						<TextForm label="Mot de passe" icon={lock} password></TextForm>
					</div>
				</div>
				<div className="container">
					<button className="btnSubmit" type="submit">Submit</button>
				</div>

				</form>
				{errors && <ErrorMessage message={errors}/>}

			</section>
	)
}

export default Register;
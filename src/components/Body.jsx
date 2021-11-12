import { useContext, useRef, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Body() {
	// references
	const nameRef = useRef(null);
	const passRef = useRef(null);

	// states
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	let [alert, setAlert] = useState(true);
	let [disabled, setDisabled] = useState(true);

	useEffect(() => {
		setDisabled(!(username.length > 3 && password.length > 5));
	}, [username, password]);

	// checks length of inputs
	const checkLength = () => {
		nameRef.current.classList = 'form-control';
		passRef.current.classList = 'form-control';

		if (passRef.current.value.trim().length < 5 || nameRef.current.value.trim().length < 3) {

			nameRef.current.classList.add('border-danger');
			passRef.current.classList.add('border-danger');
			setAlert(<div className="alert alert-danger" role="alert">Xato to'ldirildi!</div>);
		} else {
			nameRef.current.classList.add('border-success');
			passRef.current.classList.add('border-success');
			setAlert(true);
		}
	}

	const [dictionary, lang] = useContext(ThemeContext);

	return (
		<form >
			<div className="form">
				{alert}

				<label className='w-100'>
					{
						(dictionary.find(data => {
							if (data.lang === lang) {
								return data;
							}
							return null;
						})).form_username
					}
					<input
						type="text"
						className="form-control w-100"
						ref={nameRef}
						onChange={(e) => setUsername(e.target.value)} />
				</label>

				<br />

				<label className='w-100'>
					{
						(dictionary.find(data => {
							if (data.lang === lang) {
								return data;
							}
							return null;
						})).form_password
					}
					<input
						type="password"
						className="form-control w-100"
						ref={passRef}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>


				<button className='btn mt-2 btn-success' disabled={disabled} type='submit' onClick={checkLength}>
					{
						(dictionary.find(data => {
							if (data.lang === lang) {
								return data;
							}
							return null;
						})).button
					}
				</button>
			</div>
		</form>
	);
}
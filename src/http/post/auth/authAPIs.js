import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const handelLogin = async ({ email, password }) => {
	let payload;

	if (email.includes("@")) {
		payload = {
			email,
			password,
		};
	} else {
		payload = {
			username: email,
			password,
		};
	}

	try {
		const response = await axios.post(`${apiUrl}/auth/login`, payload);
		let token = response.data.payload.accessToken;
		localStorage.setItem("token", token);
		return token;
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};

export const handelRegister = async ({
	firstName,
	lastName,
	email,
	password,
}) => {
	const payload = {
		first_name: firstName,
		last_name: lastName,
		email,
		password,
	};

	try {
		const response = await axios.post(
			`${apiUrl}/auth/register`,
			payload
		);
		let token = response.data.token;
		localStorage.setItem("token", token);
		return token;
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};

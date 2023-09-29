import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
	const { dispatch } = useAuthContext();

	const login = async (username, password) => {
		const response = await axios.post('http://localhost:5000/api/login', { username, password });
		const data = response.data.accessToken;
		console.log(data);
		if (!data) {
			console.log('No data');
		}
		if (data) {
			//const { accessToken, refreshToken } = response.data;
			localStorage.setItem('user', JSON.stringify(data));
			dispatch({ type: 'LOGIN', payload: data });
		}
	};
	return { login };
};

import axios from "axios";

const API = axios.create({
	baseURL: 'https://api.spoonacular.com',
	params: {
		apiKey: '69877cd854f6429785d66a9e77a00092',
	},
	headers: {
		'Content-Type': 'application/json',
	},
});

export default API;

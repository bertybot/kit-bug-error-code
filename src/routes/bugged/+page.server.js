import { error } from '@sveltejs/kit';
export const load = async () => {

	return error(500, {message: "Bugged Reports as 200"})
	return {
		name: 'Basic Template'
	};
};

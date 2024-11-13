import { error } from '@sveltejs/kit';

export const load = async () => {

	return error(500, {message: "Reports correctly"})
	return {
		name: 'Basic Template'
	};
};

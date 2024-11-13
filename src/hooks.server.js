export const handle = async ({event, resolve}) => {
	const res = await resolve(event);

	console.log(res)
	return res;
}
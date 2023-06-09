import instance from "./auth";

export const getUserData = async () => {
	const { data } = await instance.get("/user");
	return data;
};

export const updateUserData = async (data) => {
	const { data: result } = await instance.patch("/user", data);
	return result;
};

export const addUserFriend = async (id) => {
	const { data: result } = await instance.post(`/user/friend/${id}`);
	return result;
};

export const removeUserFriend = async (id) => {
	const { data } = await instance.delete(`/user/friend/${id}`);
	return data;
};

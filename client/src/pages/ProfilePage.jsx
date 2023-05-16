import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/profile/User";
import { getUserData } from "../redux/user/user-operations";
import { getUserInfo } from "../redux/user/user-selectors";
const ProfilePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	const user = useSelector(getUserInfo);

	return (
		<>
			<User user={user} />
		</>
	);
};

export default ProfilePage;

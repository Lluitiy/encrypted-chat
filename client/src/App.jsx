import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./redux/auth/auth-operations";
import { getToken } from "./redux/auth/auth-selectors";
import { PrivateRoute } from "./routes/private/PrivateRoute";
import { PublicRoute } from "./routes/public/PublicRoute";

import Layout from "./layout/layout";
import HomePage from "./pages/HomePage";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SpecificChat = lazy(() => import("./components/chat/SpecificChat"));
const ChatLayout = lazy(() => import("./layout/ChatLayout"));

function App() {
	const dispatch = useDispatch();
	const token = useSelector(getToken);
	console.log(token);
	useEffect(() => {
		if (token) {
			dispatch(current());
		}
	}, []);
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="register"
						element={
							<PublicRoute restricted redirect="/home">
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route
						index
						path="login"
						element={
							<PublicRoute restricted redirect="/home">
								<LoginPage />
							</PublicRoute>
						}
					/>
				</Route>

				<Route path="/" element={<Layout />}>
					<Route path="/" index element={<HomePage />} />
					<Route
						path="chat"
						element={
							<PrivateRoute redirect="/login">
								<ChatLayout />
							</PrivateRoute>
						}
					>
						{/* <Route element={<ChatPage />} /> */}
						<Route
							path=":id"
							element={
								<PrivateRoute redirect="/login">
									<SpecificChat />
								</PrivateRoute>
							}
						/>
					</Route>

					<Route
						path="profile"
						element={
							<PrivateRoute redirect="/login">
								<ProfilePage />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Suspense>
	);
}

export default App;

import { Navigate, Route, Routes, useParams } from "react-router-dom";

import Layout from "./layout/layout";

import AuthPage from "./layout/AuthLayout";
// import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import SpecificChat from "./components/chat/SpecificChat";
import ChatLayout from "./layout/ChatLayout";

function App() {
	return (
		<Routes>
			<Route path="/auth" element={<AuthPage />}>
				<Route index path="register" element={<RegisterPage />} />
				<Route index path="login" element={<LoginPage />} />
			</Route>

			<Route path="/" element={<Layout />}>
				<Route path="home" index element={<HomePage />} />
				<Route path="chat" element={<ChatLayout />}>
					{/* <Route element={<ChatPage />} /> */}
					<Route path=":id" element={<SpecificChat />} />
				</Route>

				<Route path="profile" element={<ProfilePage />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;

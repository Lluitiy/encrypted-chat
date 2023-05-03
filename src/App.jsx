import { Route, Routes } from "react-router-dom/dist";

import Layout from "./layout/layout";

import AuthPage from "./layout/AuthLayout";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<Routes>
			<Route path="/auth" element={<AuthPage />}>
				<Route index path="register" element={<RegisterPage />}></Route>
				<Route index path="login" element={<LoginPage />}></Route>
			</Route>
			
			<Route path="/" element={<Layout />}>
				<Route path="chat" index element={<ChatPage />} />
				<Route path="profile" element={<ProfilePage />} />
			</Route>
		</Routes>
	);
}

export default App;

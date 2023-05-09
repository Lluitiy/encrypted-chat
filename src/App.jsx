import { Route, Routes } from "react-router-dom/dist";

import Layout from "./layout/layout";

import AuthPage from "./layout/AuthLayout";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Meassages from "./components/chat/Meassages";

function App() {
	return (
		<Routes>
			<Route path="/auth" element={<AuthPage />}>
				<Route index path="register" element={<RegisterPage />} />
				<Route index path="login" element={<LoginPage />} />
			</Route>

			<Route path="/" element={<Layout />}>
				<Route path="home" index element={<HomePage />} />
				<Route path="chat" element={<ChatPage />}>
					<Route path=":id" element={<Meassages />}></Route>
				</Route>
				<Route path="profile" element={<ProfilePage />} />
			</Route>
		</Routes>
	);
}

export default App;

import React, { useEffect, useState } from "react";
import LandingPage from "./views/User/UserLandingPage/UserLandingPage.view";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import { UserDenahTipePage } from "./views/User/UserDenahTipePage/UserDenahTipePage.view";
import { UserLoginPage } from "./views/User/UserLoginPage/UserLoginPage.view";
import { UserListPage } from "./views/User/UserListPage/UserListPage.view";
import { AdminDenahTipePage } from "./views/Admin/AdminDenahTipePage/AdminDenahTipePage.view";
import { AdminListPage } from "./views/Admin/AdminListPage/AdminListPage.view";
import { AdminTipePage } from "./views/Admin/AdminTipePage/AdminTipePage.view";
import { AdminEditListPage } from "./views/Admin/AdminEditListPage/AdminEditListPage.view";
import AdminLandingPage from "./views/Admin/AdminLandingPage/AdminLandingPage.view";
import apolloClient from "./config/Apollo";
import { AdminEditTipePage } from "./views/Admin/AdminEditTipePage/AdminEditTipePage.view";
import { AdminContactUsPage } from "./views/Admin/AdminContactUsPage/AdminContactUsPage.view";
import { UserContactUsPage } from "./views/User/UserContactUsPage/UserContactUsPage.view";
// import { AdminAddTipeMakam } from "./component/molecules/Admin/AdminAddTipe/AdminAddTipeMakam.molecules";

const App = () => {
	return (
		<div>
			<ApolloProvider client={apolloClient}>
				<BrowserRouter>
					<Routes>
						{/* User */}
						<Route path="/" element={<LandingPage />} />
						<Route path="/denahtipe" element={<UserDenahTipePage />} />
						<Route path="/list" element={<UserListPage />} />
						<Route path="/login" element={<UserLoginPage />} />
						<Route path="/contactus" element={<UserContactUsPage />} />

						{/* Admin */}
						<Route path="/-" element={<AdminLandingPage />} />
						<Route path="/denahtipe-" element={<AdminDenahTipePage />} />
						<Route path="/tipe-" element={<AdminTipePage />} />
						<Route path="/list-" element={<AdminListPage />} />
						<Route path="/editlist/:id" element={<AdminEditListPage />} />
						<Route path="/edittipe/:idtipe" element={<AdminEditTipePage />} />
						<Route path="/contactus-" element={<AdminContactUsPage />} />

						{/* <Route path="/cobatipe-" element={<AdminAddTipeMakam />} /> */}
						{/* <Route path="/edittipe/:idtipe" element={<AdminEditTipePage />} /> */}
					</Routes>
				</BrowserRouter>
			</ApolloProvider>
		</div>
	);
};

export default App;

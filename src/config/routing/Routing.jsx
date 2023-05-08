import React from "react";
import { AdminContactUsPage } from "../../views/Admin/AdminContactUsPage/AdminContactUsPage.view";
import { AdminDenahTipePage } from "../../views/Admin/AdminDenahTipePage/AdminDenahTipePage.view";
import { AdminDetailTipePage } from "../../views/Admin/AdminDetailTipePage/AdminDetailTipePage.view";
import { AdminEditListPage } from "../../views/Admin/AdminEditListPage/AdminEditListPage.view";
import { AdminEditTipePage } from "../../views/Admin/AdminEditTipePage/AdminEditTipePage.view";
import AdminLandingPage from "../../views/Admin/AdminLandingPage/AdminLandingPage.view";
import { AdminListPage } from "../../views/Admin/AdminListPage/AdminListPage.view";
import { AdminTipePage } from "../../views/Admin/AdminTipePage/AdminTipePage.view";
import { UserContactUsPage } from "../../views/User/UserContactUsPage/UserContactUsPage.view";
import { UserDenahTipePage } from "../../views/User/UserDenahTipePage/UserDenahTipePage.view";
import { UserDetailTipePage } from "../../views/User/UserDetailTipePage/UserDetailTipePage.view";
import UserLandingPage from "../../views/User/UserLandingPage/UserLandingPage.view";
import { UserListPage } from "../../views/User/UserListPage/UserListPage.view";
import { AdminLoginPage } from "../../views/Admin/AdminLoginPage/AdminLoginPage.view";

export const Routing = [
	// User
	{
		path: "/",
		element: <UserLandingPage />,
		isPrivate: false,
	},
	{
		path: "/denahtipe",
		element: <UserDenahTipePage />,
		isPrivate: false,
	},
	{
		path: "/detailtipe/:id",
		element: <UserDetailTipePage />,
		isPrivate: false,
	},
	{
		path: "/list",
		element: <UserListPage />,
		isPrivate: false,
	},
	{
		path: "/contactus",
		element: <UserContactUsPage />,
		isPrivate: false,
	},
	// Admin
	{
		path: "/login",
		element: <AdminLoginPage />,
		isPrivate: false,
	},
	{
		path: "/-",
		element: <AdminLandingPage />,
		isPrivate: true,
	},
	{
		path: "/denahtipe-",
		element: <AdminDenahTipePage />,
		isPrivate: true,
	},
	{
		path: "/tipe-",
		element: <AdminTipePage />,
		isPrivate: true,
	},
	{
		path: "/list-",
		element: <AdminListPage />,
		isPrivate: true,
	},
	{
		path: "/editlist/:id",
		element: <AdminEditListPage />,
		isPrivate: true,
	},
	{
		path: "/detailtipe-/:id",
		element: <AdminDetailTipePage />,
		isPrivate: true,
	},
	{
		path: "/edittipe/:idtipe",
		element: <AdminEditTipePage />,
		isPrivate: true,
	},
	{
		path: "/contactus-",
		element: <AdminContactUsPage />,
		isPrivate: true,
	},
];

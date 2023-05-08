import React from "react";

export const loginSlice = (set) => ({
	isLogin: false,
	setLogin: (state) => set(() => ({ isLogin: state })),
});

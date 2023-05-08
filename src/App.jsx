import React, { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/Apollo";
import RootRouting from "./config/routing/RootRouting";
// import { AdminAddTipeMakam } from "./component/molecules/Admin/AdminAddTipe/AdminAddTipeMakam.molecules";

const App = () => {
	return (
		<div>
			<ApolloProvider client={apolloClient}>
				<RootRouting />
			</ApolloProvider>
		</div>
	);
};

export default App;

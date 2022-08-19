import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NewNftContact from './Pages/NewNftContact';
import NewNftMint from './Pages/NewNftMint';
import NewWalletGenerator from './Pages/NewWalletGenerator';
import NewNftReceive from './Pages/NewNftReceive';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={NewNftContact}></Route>
				<Route exact path="/new-nft-mint" component={NewNftMint}></Route>
				<Route exact path="/new-wallet-generator" component={NewWalletGenerator}></Route>
				<Route exact path="/new-nft-receive" component={NewNftReceive}></Route>
				<Route path="*" component={NewNftContact}></Route>
			</Switch>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;

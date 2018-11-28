import React, { Component } from 'react';
import _ from 'lodash';
const cc = require('cryptocompare');
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'dashborad',
			favorites: [ 'BTC', 'ETH', 'XMR', 'DOGE' ],
			...this.saveSettings(),
			addCoin: this.addCoin,
			removeCoin: this.removeCoin,
			isInFavorites: this.isInFavorites,
			setPage: this.setPage,
			confirmFavorites: this.confirmFavorites
		};
	}

	componentDidMount = () => {
		this.fetchCoins();
	};

	isInFavorites = (key) => {
		return this.state.favorites.indexOf(key) !== -1;
	};

	addCoin = (key) => {
		let favorites = [ ...this.state.favorites ];
		if (favorites.length < MAX_FAVORITES) {
			favorites.push(key);
			this.setState({
				favorites: favorites
			});
		}
	};

	removeCoin = (key) => {
		let favorites = [ ...this.state.favorites ];
		this.setState({ favorites: _.pull(favorites, key) });
	};

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
		console.log(coinList);
	};

	confirmFavorites = () => {
		this.setState({
			firstVisit: false,
			page: 'dashborad'
		});
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				test: 'hello'
			})
		);
	};

	saveSettings() {
		let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
		if (!cryptoDashData) {
			return {
				page: 'settings',
				firstVisit: true
			};
		}
		return {};
	}

	setPage = (page) => {
		this.setState({ page });
	};

	render() {
		return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
	}
}

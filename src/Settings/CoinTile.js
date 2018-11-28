import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import coinImage from '../Shared/CoinImage';
import CoinImage from '../Shared/CoinImage';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
	return topSection
		? () => {
				removeCoin(coinKey);
			}
		: () => {
				addCoin(coinKey);
			};
};

export default ({ coinKey, topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, addCoin, removeCoin, isInFavorites }) => {
				let coin = coinList[coinKey];
				let TileClass = SelectableTile;
				console.log(isInFavorites(coinKey));
				if (topSection) {
					TileClass = DeletableTile;
				} else if (isInFavorites(coinKey)) {
					TileClass = DisableTile;
				}

				return (
					<TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
						<CoinHeaderGrid topSection name={coin.CoinName} symbol={coin.Symbol} />
						<CoinImage coin={coin} />
					</TileClass>
				);
			}}
		</AppContext.Consumer>
	);
};

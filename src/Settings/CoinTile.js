import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import coinImage from '../Shared/CoinImage';
import CoinImage from '../Shared/CoinImage';

export default ({ coinKey, topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList }) => {
				let coin = coinList[coinKey];
				let TileClass = SelectableTile;
				if (topSection) {
					TileClass = DeletableTile;
				}

				return (
					<TileClass>
						<CoinHeaderGrid topSection name={coin.CoinName} symbol={coin.Symbol} />
						<CoinImage coin={coin} />
					</TileClass>
				);
			}}
		</AppContext.Consumer>
	);
};

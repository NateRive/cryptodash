import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

const getCoinsToDisplay = (coinList, topSection, favorites) => {
	return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};

export default ({ topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites }) => (
				<CoinGridStyled>
					{getCoinsToDisplay(coinList, topSection, favorites).map((coinKey) => (
						<CoinTile topSection={topSection} coinKey={coinKey} />
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
};

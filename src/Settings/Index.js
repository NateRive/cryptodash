import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

export default () => {
	return (
		<Page name="settings">
			<div>
				<WelcomeMessage />
				<ConfirmButton />
				<CoinGrid />
			</div>
		</Page>
	);
};

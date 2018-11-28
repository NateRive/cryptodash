import styled from 'styled-components';
import { lightBlueBackground, greenBoxShadow, subtleBoxShadow, redBoxShadow } from './styles';

export const Tile = styled.div`
	padding: 10px;
	${subtleBoxShadow};
	${lightBlueBackground};
`;

export const SelectableTile = styled(Tile)`
&:hover {
  cursor: pointer;
  ${greenBoxShadow};
}
`;

export const DeletableTile = styled(SelectableTile)`
	&:hover {
		cursor: pointer;
		${redBoxShadow};
	}
`;

export const DisableTile = styled(Tile)`
	pointer-events: none;
	opacity: 0.4;
`;

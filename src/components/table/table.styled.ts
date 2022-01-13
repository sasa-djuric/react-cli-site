import { styled } from '../../config/stitches.config';

export const StyledTable = styled('table', {
	width: '100%',
	textAlign: 'left',
	borderCollapse: 'collapse',
	boxSizing: 'border-box',
	tableLayout: 'auto',

	'@bpPhone': {
		tableLayout: 'unset'
	}
});

export const StyledTableHead = styled('thead', {
	'& th': {
		fontSize: '$2',
		fontWeight: 400,
		color: '$gray1100',
		borderBottom: '1px solid $gray600',
		padding: '14px 18px 14px 2px',
		transition: '$colors',

		'@bpPhone': {
			fontSize: '$1'
		}
	}
});

export const StyledTableBody = styled('tbody', {
	'& td': {
		fontSize: '$3',
		fontWeight: 400,
		lineHeight: '20px',
		color: '$gray1100',
		borderBottom: '1px solid $gray600',
		padding: '18px 18px 18px 2px',
		width: '34%',
		transition: '$colors',

		'@bpPhone': {
			fontSize: '$2',
			width: 'unset',
			padding: '14px 8px 14px 2px'
		}
	}
});

export const StyledTableRow = styled('tr', {});

export const StyledTh = styled('th', {});

export const StyledTd = styled('td', {});

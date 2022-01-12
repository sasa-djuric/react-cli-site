import { styled } from '../../config/stitches.config';

export const StyledWrapper = styled('div', {
	display: 'grid',
	gridTemplateAreas: `'header header'
    'sidebar main'`,
	gridTemplateRows: '65px 1fr',
	gridTemplateColumns: '250px 1fr',
	width: '100%',
	height: '100vh',

	'@bpTablet': {
		gridTemplateAreas: `'header header'
		'menu menu'
    	'main main'`,
		gridTemplateRows: '65px max-content 1fr'
	}
});

export const StyledMain = styled('main', {
	gridArea: 'main',
	display: 'grid',
	gridTemplateColumns: '1fr max-content',
	width: '100%',
	height: '100%',
	overflow: 'auto',
	scrollBehavior: 'smooth',

	'@bpTabletLandscape': {
		gridTemplateColumns: '1fr'
	}
});

export const StyledMainWrapper = styled('div', {
	display: 'block',
	width: '100%',
	maxWidth: '780px',
	margin: '0px auto',
	padding: '$10 $8',

	'@bpTablet': {
		padding: '$6 $6'
	}
});

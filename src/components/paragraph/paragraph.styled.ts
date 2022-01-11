import { styled } from '../../config/stitches.config';

export const StyledParagraph = styled('p', {
	fontSize: '$4',
	lineHeight: '27px',
	color: '$gray1200',
	fontWeight: 300,

	'@bpPhone': {
		fontSize: '$3',
		lineHeight: '25px'
	}
});

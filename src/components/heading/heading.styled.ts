import { styled } from '../../config/stitches.config';

export const StyledHeading = styled('h2', {
	color: '$gray1200',
	fontWeight: '600',

	variants: {
		level: {
			1: {
				fontSize: '$8'
			},
			2: {
				fontSize: '$6'
			},
			3: {
				fontSize: '$5'
			},
			4: {
				fontSize: '$3'
			},
			5: {
				fontSize: '$2'
			},
			6: {
				fontSize: '$1'
			}
		}
	}
});

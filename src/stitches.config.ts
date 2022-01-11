import { createStitches } from '@stitches/react';
import {
	grayDark as gray,
	indigoDark as indigo,
	skyDark as sky,
	greenDark as green,
	amberDark as amber,
	tomatoDark as tomato
} from '@radix-ui/colors';
import Stitches from '@stitches/react';

const config = createStitches({
	theme: {
		colors: {
			black: '#000',
			white: '#fff',
			gray100: gray.gray1,
			gray200: gray.gray2,
			gray300: gray.gray3,
			gray400: gray.gray4,
			gray500: gray.gray5,
			gray600: gray.gray6,
			gray700: gray.gray7,
			gray800: gray.gray8,
			gray900: gray.gray9,
			gray1000: gray.gray10,
			gray1100: gray.gray11,
			gray1200: gray.gray12,
			primary100: indigo.indigo1,
			primary200: indigo.indigo2,
			primary300: indigo.indigo3,
			primary400: indigo.indigo4,
			primary500: indigo.indigo5,
			primary600: indigo.indigo6,
			primary700: indigo.indigo7,
			primary800: indigo.indigo8,
			primary900: indigo.indigo9,
			primary1000: indigo.indigo10,
			primary1100: indigo.indigo11,
			primary1200: indigo.indigo12,
			info100: sky.sky1,
			info200: sky.sky2,
			info300: sky.sky3,
			info400: sky.sky4,
			info500: sky.sky5,
			info600: sky.sky6,
			info700: sky.sky7,
			info800: sky.sky8,
			info900: sky.sky9,
			info1000: sky.sky10,
			info1100: sky.sky11,
			info1200: sky.sky12,
			success100: green.green1,
			success200: green.green2,
			success300: green.green3,
			success400: green.green4,
			success500: green.green5,
			success600: green.green6,
			success700: green.green7,
			success800: green.green8,
			success900: green.green9,
			success1000: green.green10,
			success1100: green.green11,
			success1200: green.green12,
			warning100: amber.amber1,
			warning200: amber.amber2,
			warning300: amber.amber3,
			warning400: amber.amber4,
			warning500: amber.amber5,
			warning600: amber.amber6,
			warning700: amber.amber7,
			warning800: amber.amber8,
			warning900: amber.amber9,
			warning1000: amber.amber10,
			warning1100: amber.amber11,
			warning1200: amber.amber12,
			error100: tomato.tomato1,
			error200: tomato.tomato2,
			error300: tomato.tomato3,
			error400: tomato.tomato4,
			error500: tomato.tomato5,
			error600: tomato.tomato6,
			error700: tomato.tomato7,
			error800: tomato.tomato8,
			error900: tomato.tomato9,
			error1000: tomato.tomato10,
			error1100: tomato.tomato11,
			error1200: tomato.tomato12
		},
		sizes: {
			1: '4px',
			2: '8px',
			3: '10px',
			4: '12px',
			5: '16px',
			6: '20px',
			7: '24px',
			8: '32px',
			9: '48px',
			10: '64px',
			11: '80px'
		},
		space: {
			1: '4px',
			2: '8px',
			3: '10px',
			4: '12px',
			5: '16px',
			6: '20px',
			7: '24px',
			8: '32px',
			9: '48px',
			10: '64px',
			11: '80px'
		},
		shadows: {
			xsmall: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			small: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xlarge: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xlarge': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
		},
		radii: {
			xsmall: '0.125rem',
			small: '0.25rem',
			medium: '0.375rem',
			large: '0.5rem',
			xlarge: '0.75rem',
			'2xlarge': '1rem',
			'3xlarge': '1.5rem',
			full: '9999px'
		},
		fontSizes: {
			1: '12px',
			2: '13px',
			3: '15px',
			4: '17px',
			5: '19px',
			6: '21px',
			7: '27px',
			8: '35px',
			9: '59px'
		},
		transitions: {
			// TODO
		}
	},

	media: {
		bpPhone: '(max-width: 520px)',
		bpTablet: '(max-width: 900px)',
		bpTabletLandscape: '(max-width: 1200px)'
	}
});

export const { styled, globalCss, keyframes, getCssText } = config;

export const globalStyles = globalCss({
	html: {
		width: '100%',
		height: '100%'
	},
	body: {
		background: '$gray100',
		width: '100%',
		height: '100%',
		color: '$gray1200',
		fontFamily: "'Inter', -apple-system, system-ui"
	},
	'body > div': {
		width: '100%',
		height: '100%'
	},
	'*, *::after, *::before': {
		boxSizing: 'border-box',
		margin: '0px',
		padding: '0px'
	},
	a: {
		color: 'inherit',
		textDecoration: 'none'
	}
});

export type CSS = Stitches.CSS<typeof config>;

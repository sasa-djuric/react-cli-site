import { useCallback, useEffect, useState } from 'react';
import { ligthTheme } from '../config/stitches.config';

type Theme = 'dark' | 'light';

export function useTheme() {
	const [theme, setTheme] = useState<Theme | undefined>();

	const toggle = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};

	const setup = useCallback(() => {
		const currentTheme = theme || localStorage?.getItem('theme') || 'dark';
		const html = document.getElementsByTagName('html').item(0)!;

		if (currentTheme === 'dark') {
			html.style.colorScheme = 'dark';
			html.classList.remove(ligthTheme);
		} else {
			html.style.colorScheme = 'light';
			html.classList.add(ligthTheme);
		}
	}, [theme]);

	useEffect(() => {
		const theme = localStorage?.getItem('theme') as Theme | undefined;
		setTheme(theme || 'dark');
	}, []);

	useEffect(() => {
		if (theme) {
			setup();
		}
	}, [setup, theme]);

	return { theme, toggle };
}

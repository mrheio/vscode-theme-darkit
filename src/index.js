import { mkdirSync, writeFileSync } from 'fs';
import { darkitAstral } from './themes/darkit-astral.js';
import {
	THEMES_PATH,
	getThemePath,
	parseTokenColors,
	parseWorkbenchColors,
} from './utils.js';

const parseTheme = (theme) => {
	const parsedTheme = {
		...theme,
		colors: parseWorkbenchColors(theme.colors),
		tokenColors: parseTokenColors(theme.tokenColors),
	};

	return JSON.stringify(parsedTheme, undefined, 4);
};

const buildThemes = (...themes) => {
	mkdirSync(THEMES_PATH, { recursive: true });

	for (const theme of themes) {
		const THEME_PATH = getThemePath(theme);
		const parsedTheme = parseTheme(theme);

		writeFileSync(THEME_PATH, parsedTheme);
	}
};

buildThemes(darkitAstral);

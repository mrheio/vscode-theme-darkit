import { mkdirSync, writeFileSync } from 'fs';
import astralTheme from './themes/astral.js';
import defaultTheme from './themes/default.js';
import {
	THEMES_PATH,
	getThemePath,
	parseTokenColors,
	parseWorkbenchColors,
} from './utils/index.js';

const parseTheme = (theme) => {
	const { colors: workbenchColors, tokenColors } = theme;

	const parsedWorkbenchColors = parseWorkbenchColors(workbenchColors);
	const parsedTokenColors = parseTokenColors(tokenColors);

	const parsedTheme = {
		...theme,
		colors: parsedWorkbenchColors,
		tokenColors: parsedTokenColors,
	};

	return JSON.stringify(parsedTheme, undefined, 4);
};

const buildThemes = (...themes) => {
	const result = mkdirSync(THEMES_PATH, { recursive: true });

	for (const theme of themes) {
		const THEME_PATH = getThemePath(theme);
		const parsedTheme = parseTheme(theme);

		writeFileSync(THEME_PATH, parsedTheme);
	}
};

buildThemes(defaultTheme, astralTheme);

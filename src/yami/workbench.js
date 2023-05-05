import colors from './colors.js';

const main = colors.darkGray;
const bg = {
	base: main[700],
	editor: main[600],
	highlight: main[400],
	highlightExtra: main[200],
};
const text = {
	base: colors.gray[100],
	dimmed: colors.gray[600],
	dimmedExtra: colors.gray[900].darken(0.25),
	highlight: colors.gray[50],
	onAccent: colors.darkGray[900],
};
const accent = {
	base: colors.indigo[400],
};
const border = colors.transparent;
const focusBorder = main[200];
const shadow = main[900];
const transparent = colors.transparent;

const badge = {
	bg: accent.base,
	fg: text.onAccent,
};

const workbenchColors = {
	foreground: text.highlight,
	focusBorder: focusBorder,
	'widget.shadow': shadow,
	'activityBar.background': bg.base,
	'activityBar.foreground': text.base,
	'activityBar.inactiveForeground': text.dimmedExtra,
	'activityBarBadge.background': badge.bg,
	'activityBarBadge.foreground': badge.fg,
	'activityBar.activeBackground': transparent,
	'sideBar.background': bg.base,
	'sideBar.foreground': text.dimmed,
	'sideBar.border': border,
	'sideBarSectionHeader.background': bg.base,
	'sideBarSectionHeader.foreground': text.highlight,
	'sideBarSectionHeader.border': border,
	'sideBarTitle.foreground': text.highlight,
	'list.inactiveSelectionBackground': bg.highlightExtra,
	'list.inactiveSelectionForeground': text.base,
	'list.focusOutline': focusBorder,
	'list.hoverBackground': bg.highlight,
	'list.activeSelectionBackground': bg.highlightExtra,
	'list.activeSelectionForeground': text.highlight,
	'list.dropBackground': bg.highlight,
	// color when finding substring match
	'list.highlightForeground': accent.base,
	'list.focusBackground': bg.highlightExtra,
	'list.focusForeground': null,
	'listFilterWidget.background': bg.highlight,
	// 'listFilterWidget.noMatchesOutline': null,
	// 'listFilterWidget.outline': null,
	'list.warningForeground': '#fdba74',
	'list.errorForeground': '#FF527D',
	'tree.indentGuidesStroke': transparent,
	'statusBar.background': bg.base,
	'statusBar.foreground': text.dimmed,
	'statusBar.border': border,
	'statusBar.debuggingBackground': bg.editor,
	'statusBar.debuggingForeground': text.base,
	'statusBar.debuggingBorder': border,
	'statusBar.noFolderBackground': bg.base,
	'statusBar.noFolderForeground': text.base,
	'statusBar.noFolderBorder': border,
	'titleBar.activeBackground': bg.base,
	'titleBar.activeForeground': text.dimmed,
	'titleBar.border': border,
	'titleBar.inactiveBackground': bg.base,
	'titleBar.inactiveForeground': text.dimmedExtra,
	'menu.background': bg.base,
	'menu.foreground': text.base,
	'menu.selectionBackground': bg.highlight,
	'menu.selectionForeground': text.highlight,
	'menu.selectionBorder': border,
	'menu.separatorBackground': transparent,
	'menu.border': border,
	'menubar.selectionBackground': bg.highlight,
	'menubar.selectionForeground': text.highlight,
	'menubar.selectionBorder': border,
	'button.background': accent.base,
	'button.foreground': text.onAccent,
	'button.hoverBackground': null,
	'button.secondaryBackground': bg.highlight,
	'button.secondaryForeground': text.highlight,
	'textLink.foreground': accent.base,
	'input.background': bg.highlightExtra,
	'input.foreground': text.highlight,
	'input.border': border,
	'input.placeholderForeground': text.dimmed,
	'inputOption.activeBackground': transparent,
	'inputOption.activeForeground': accent.base,
	'inputOption.activeBorder': border,
	'panel.background': bg.base,
	'panel.border': border,
	'panelTitle.activeBorder': null,
	'panelTitle.activeForeground': text.highlight,
	'terminal.selectionBackground': null,
	'terminal.border': border,
	'terminal.foreground': null,
	'terminal.background': bg.editor,
	'terminal.ansiWhite': '#94a3b8',
	'terminal.ansiBrightWhite': '#e2e8f0',
	'terminal.ansiBlack': '#0f172a',
	'terminal.ansiBrightBlack': '#475569',
	'terminal.ansiBlue': '#297EFF',
	'terminal.ansiBrightBlue': '#7AAFFF',
	'terminal.ansiCyan': '#23B1A3',
	'terminal.ansiBrightCyan': '#57DED0',
	'terminal.ansiGreen': '#53F0C6',
	'terminal.ansiBrightGreen': '#79F3D3',
	'terminal.ansiMagenta': '#c084fc',
	'terminal.ansiBrightMagenta': '#d8b4fe',
	'terminal.ansiRed': '#FF527D',
	'terminal.ansiBrightRed': '#FF7A9C',
	'terminal.ansiYellow': '#E2F58E',
	'terminal.ansiBrightYellow': '#ECF8B3',
	'terminalCursor.background': null,
	'terminalCursor.foreground': null,
	'badge.background': accent.base,
	'badge.foreground': text.onAccent,
	'editorGroupHeader.border': border,
	'editorGroupHeader.tabsBackground': bg.base,
	'editorGroupHeader.tabsBorder': border,
	'tab.border': border,
	'tab.activeBackground': bg.editor,
	'tab.activeForeground': text.highlight,
	'tab.activeBorder': border,
	'tab.activeBorderTop': accent.base,
	'tab.inactiveBackground': bg.base,
	'tab.inactiveForeground': text.dimmed,
	'breadcrumb.background': bg.editor,
	'breadcrumb.foreground': text.highlight,
	'breadcrumb.focusForeground': focusBorder,
	'scrollbarSlider.background': bg.highlightExtra,
	'scrollbarSlider.hoverBackground': bg.highlightExtra.lighten(0.2),
	'scrollbarSlider.activeBackground': bg.highlightExtra.lighten(0.1),
	'scrollbar.shadow': shadow,
	'editorWidget.background': bg.base,
	'editorWidget.foreground': text.base,
	'editorWidget.resizeBorder': '#7680A4',
	'editorWidget.border': border,
	'debugToolBar.background': bg.highlight,
	'debugToolBar.border': border,
	'debugIcon.continueForeground': '#79E4DA',
	'debugIcon.restartForeground': '#7AAFFF',
	'debugIcon.disconnectForeground': '#FF527D',
	'debugIcon.stepOverForeground': '#a5b4fc',
	'debugIcon.stepIntoForeground': '#a5b4fc',
	'debugIcon.stepOutForeground': '#a5b4fc',
	'notifications.background': bg.base,
	'notifications.foreground': text.highlight,
	'notificationLink.foreground': accent.base,
	'notificationToast.border': border,
	'gitDecoration.addedResourceForeground': '#79E4DA',
	'gitDecoration.modifiedResourceForeground': '#fed7aa',
	'gitDecoration.deletedResourceForeground': '#FF527D',
	'gitDecoration.renamedResourceForeground': '#34d399',
	'gitDecoration.stageModifiedResourceForeground': '#fed7aa',
	'gitDecoration.stageDeletedResourceForeground': '#FF527D',
	'gitDecoration.untrackedResourceForeground': '#79E4DA',
	'gitDecoration.ignoredResourceForeground': '#505978',
	'editor.background': bg.editor,
	'editor.foreground': text.highlight.lighten(0.2),
	'editorLineNumber.foreground': text.dimmedExtra,
	'editorLineNumber.activeForeground': accent.base,
	'editorCursor.foreground': '#B3B9CC',
	'editorCursor.background': '#B3B9CC',
	'editor.selectionBackground': '#505978',
	'editor.inactiveSelectionBackground': '#181B25',
	'editor.selectionHighlightBackground': '#00000000',
	'editor.findMatchBackground': '#505978',
	'editor.findMatchBorder': '#A7AEC4',
	'editor.findMatchHighlightBackground': '#505978',
	'editor.findRangeHighlightBackground': '#505978',
	'editor.rangeHighlightBackground': '#2D3243',
	'editor.hoverHighlightBackground': '#50597855',
	'editor.wordHighlightBackground': '#505978',
	'editor.lineHighlightBackground': bg.highlightExtra,
	'editorIndentGuide.background': '#2D3243',
	'editorIndentGuide.activeBackground': '#505978',
	'editorRuler.foreground': '#0C0E12',
	'editorBracketMatch.background': '#2D3243',
	'editorBracketMatch.border': '#505978',
	'peekViewEditor.background': bg.base,
	'peekView.border': border,
	'peekViewResult.background': bg.base,
	'peekViewTitle.background': bg.base,
	'minimap.findMatchHighlight': '#505978',
	'minimap.selectionOccurrenceHighlight': '#cbd5e1',
};

export default workbenchColors;

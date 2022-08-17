import colors from '../colors.js';

const workbenchStyles = {
    foreground: colors.neutral[200],
    focusBorder: colors.neutral[500],
    'widget.shadow': colors.neutral[900].alpha(0.5),
    'activityBar.background': colors.neutral[800],
    'activityBar.foreground': colors.neutral[400],
    'activityBar.inactiveForeground': colors.neutral[500].alpha(0.5),
    'activityBarBadge.background': colors.primary[500],
    'activityBarBadge.foreground': colors.primary[50],
    'activityBar.border': colors.transparent,
    'activityBar.activeBackground': colors.transparent,
    'sideBar.background': colors.neutral[900],
    'sideBar.foreground': colors.neutral[200],
    'sideBarSectionHeader.background': colors.neutral[800],
    'sideBarSectionHeader.foreground': colors.neutral[50],
    'sideBarSectionHeader.border': colors.neutral[900],
    'sideBarTitle.foreground': colors.neutral[50],
    'sideBar.border': colors.transparent,
    'list.inactiveSelectionBackground': colors.neutral[700].alpha(0.5),
    'list.inactiveSelectionForeground': colors.neutral[100],
    'list.hoverBackground': colors.neutral[600].alpha(0.5),
    'list.hoverForeground': colors.neutral[100],
    'list.activeSelectionBackground': colors.neutral[500].alpha(0.5),
    'list.activeSelectionForeground': colors.neutral[100],
    'list.dropBackground': colors.neutral[900].alpha(0.5),
    'list.highlightForeground': colors.neutral[100],
    'list.focusBackground': colors.neutral[600].alpha(0.5),
    'list.focusForeground': colors.neutral[100],
    'listFilterWidget.background': colors.neutral[800],
    'listFilterWidget.outline': colors.neutral[900],
    'listFilterWidget.noMatchesOutline': colors.error[600],
    'tree.indentGuidesStroke': colors.neutral[400],
    'statusBar.background': colors.neutral[800],
    'statusBar.foreground': colors.neutral[200],
    'statusBar.border': colors.neutral[900],
    'statusBar.debuggingBackground': colors.neutral[900],
    'statusBar.debuggingForeground': colors.neutral[100],
    'statusBar.debuggingBorder': colors.neutral[900],
    'statusBar.noFolderBackground': colors.neutral[800],
    'statusBar.noFolderForeground': colors.neutral[200],
    'statusBar.noFolderBorder': colors.neutral[900],
    'titleBar.activeBackground': colors.neutral[800],
    'titleBar.activeForeground': colors.neutral[200],
    'titleBar.border': colors.transparent,
    'titleBar.inactiveBackground': colors.neutral[800],
    'titleBar.inactiveForeground': colors.neutral[200],
    'menubar.selectionBackground': colors.neutral[900].alpha(0.5),
    'menubar.selectionForeground': colors.neutral[100],
    'menubar.selectionBorder': colors.transparent,
    'menu.background': colors.neutral[800],
    'menu.foreground': colors.neutral[200],
    'menu.selectionBackground': colors.neutral[600].alpha(0.5),
    'menu.selectionForeground': colors.neutral[100],
    'menu.selectionBorder': colors.transparent,
    'menu.separatorBackground': colors.neutral[900].alpha(0.5),
    'menu.border': colors.neutral[900].alpha(0.5),
    'button.background': colors.primary[500],
    'button.foreground': colors.neutral[50],
    'button.hoverBackground': colors.primary[400],
    'button.secondaryBackground': colors.neutral[700].alpha(0.5),
    'button.secondaryForeground': colors.neutral[200],
    'textLink.foreground': colors.primary[400],
    'input.background': colors.neutral[900],
    'input.foreground': colors.neutral[200],
    'input.border': colors.transparent,
    'input.placeholderForeground': colors.neutral[400],
    'inputOption.activeBackground': colors.neutral[800],
    'inputOption.activeForeground': colors.primary[300],
    'inputOption.activeBorder': colors.primary[300],
    'panel.background': colors.neutral[800],
    'panel.border': colors.neutral[900],
    'panelTitle.activeBorder': colors.neutral[200],
    'panelTitle.activeForeground': colors.neutral[200],
    'terminal.selectionBackground': colors.neutral[600].alpha(0.5),
    'terminal.border': colors.neutral[900],
    'terminal.foreground': colors.neutral[200],
    'terminal.ansiWhite': colors.neutral[100],
    'terminal.ansiBrightWhite': colors.neutral[50],
    'terminal.ansiBlack': colors.neutral[900],
    'terminal.ansiBrightBlack': colors.neutral[700],
    'terminal.ansiBlue': '#3049ff',
    'terminal.ansiBrightBlue': '#8795ff',
    'terminal.ansiCyan': '#29ffe2',
    'terminal.ansiGreen': colors.success[500],
    'terminal.ansiBrightGreen': colors.success[300],
    'terminal.ansiMagenta': '#e229ff',
    'terminal.ansiBrightMagenta': '#ee82ff',
    'terminal.ansiRed': colors.error[500],
    'terminal.ansiBrightRed': colors.error[300],
    'terminal.ansiYellow': colors.warning[500],
    'terminal.ansiBrightYellow': colors.warning[300],
    'terminalCursor.background': colors.primary[50],
    'terminalCursor.foreground': colors.primary[500].alpha(0.5),
    'badge.background': colors.primary[400],
    'badge.foreground': colors.neutral[50],
    'editorGroupHeader.border': colors.transparent,
    'editorGroupHeader.tabsBackground': colors.neutral[800],
    'editorGroupHeader.tabsBorder': colors.neutral[900],
    'tab.border': colors.neutral[900],
    'tab.activeBackground': colors.neutral[700],
    'tab.activeForeground': colors.neutral[100],
    'tab.activeBorder': colors.primary[500],
    'tab.activeBorderTop': colors.transparent,
    'tab.inactiveBackground': colors.neutral[900],
    'tab.inactiveForeground': colors.neutral[300],
    'tab.hoverBackground': colors.neutral[700].alpha(0.5),
    'tab.hoverForeground': colors.neutral[100],
    'breadcrumb.background': colors.neutral[800],
    'breadcrumb.foreground': colors.neutral[100],
    'breadcrumb.focusForeground': colors.primary[50],
    'scrollbarSlider.background': colors.neutral[600].alpha(0.5),
    'scrollbarSlider.hoverBackground': colors.neutral[600],
    'scrollbarSlider.activeBackground': colors.neutral[700].alpha(0.5),
    'scrollbar.shadow': colors.neutral[900].alpha(0.5),
    'editorWidget.background': colors.neutral[800],
    'editorWidget.foreground': colors.neutral[200],
    'editorWidget.resizeBorder': colors.neutral[600],
    'pickerGroup.border': colors.neutral[900],
    'pickerGroup.foreground': colors.primary[400],
    'debugToolBar.background': colors.neutral[800],
    'debugToolBar.border': colors.neutral[900],
    'notifications.background': colors.neutral[800],
    'notifications.foreground': colors.neutral[200],
    'notificationLink.foreground': colors.primary[500],
    'notificationToast.border': colors.neutral[900],
    'gitDecoration.addedResourceForeground': colors.success[400],
    'gitDecoration.modifiedResourceForeground': colors.warning[400],
    'gitDecoration.deletedResourceForeground': colors.error[400],
    'gitDecoration.renamedResourceForeground': colors.success[400],
    'gitDecoration.stageModifiedResourceForeground': colors.warning[400],
    'gitDecoration.stageDeletedResourceForeground': colors.error[400],
    'gitDecoration.untrackedResourceForeground': colors.success[400],
    'gitDecoration.ignoredResourceForeground': colors.neutral[400].alpha(0.5),
    'editor.background': colors.neutral[800],
    'editor.foreground': colors.neutral[200],
    'editorLineNumber.foreground': colors.neutral[300].alpha(0.5),
    'editorLineNumber.activeForeground': colors.primary[300],
    'editorCursor.foreground': colors.primary[300],
    'editorCursor.background': colors.primary[50],
    'editor.selectionBackground': colors.neutral[400].alpha(0.55),
    'editor.inactiveSelectionBackground': colors.neutral[700].alpha(0.5),
    'editor.selectionHighlightBackground': colors.primary[400].alpha(0.5),
    'editor.findMatchBackground': colors.neutral[600].alpha(0.5),
    'editor.findMatchBorder': colors.primary[400],
    'editor.findMatchHighlightBackground': colors.neutral[400].alpha(0.5),
    'editor.findRangeHighlightBackground': colors.neutral[600].alpha(0.5),
    'editor.rangeHighlightBackground': colors.neutral[600].alpha(0.5),
    'editor.hoverHighlightBackground': colors.neutral[700].alpha(0.5),
    'editor.wordHighlightBackground': colors.neutral[500].alpha(0.45),
    'editor.lineHighlightBackground': colors.neutral[700].alpha(0.5),
    'editorIndentGuide.background': colors.neutral[700].alpha(0.5),
    'editorIndentGuide.activeBackground': colors.neutral[400].alpha(0.5),
    'editorRuler.foreground': colors.primary[900].alpha(0.5),
    'editorBracketMatch.background': colors.primary[600].alpha(0.5),
    'editorBracketMatch.border': colors.primary[500],
    'peekViewEditor.background': colors.neutral[800],
    'peekView.border': colors.neutral[900],
    'peekViewResult.background': colors.neutral[900],
    'peekViewTitle.background': colors.neutral[900],
    'minimap.findMatchHighlight': '#00ff00',
    'minimap.selectionOccurrenceHighlight': colors.blizzardBlue[300],
    'minimap.errorHighlight': colors.error[400],
    'editorOverviewRuler.wordHighlightStrongForeground': colors.primary[400],
    'editorOverviewRuler.wordHighlightForeground': colors.blizzardBlue[300],
};

export default workbenchStyles;

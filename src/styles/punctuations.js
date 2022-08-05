import colors from '../colors.js';

const punctuationsStyles = [
    {
        name: 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
        scope: [
            'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
            'entity.other.attribute-name.placeholder punctuation',
            'entity.other.attribute-name.pseudo-class punctuation',
            'entity.other.attribute-name.pseudo-element punctuation',
            'meta.group.double.toml',
            'meta.group.toml',
            'meta.object-binding-pattern-variable punctuation.destructuring',
            'punctuation.colon.graphql',
            'punctuation.definition.block.scalar.folded.yaml',
            'punctuation.definition.block.scalar.literal.yaml',
            'punctuation.definition.block.sequence.item.yaml',
            'punctuation.definition.entity.other.inherited-class',
            'punctuation.function.swift',
            'punctuation.separator.dictionary.key-value',
            'punctuation.separator.hash',
            'punctuation.separator.inheritance',
            'punctuation.separator.key-value',
            'punctuation.separator.key-value.mapping.yaml',
            'punctuation.separator.namespace',
            'punctuation.separator.pointer-access',
            'punctuation.separator.slice',
            'string.unquoted.heredoc punctuation.definition.string',
            'support.other.chomping-indicator.yaml',
            'punctuation.separator.annotation',
        ],
        settings: {
            foreground: colors.tealishGreen[400],
        },
    },
    {
        name: 'Brackets, braces, parens, etc.',
        scope: [
            'keyword.operator.other.powershell',
            'keyword.other.statement-separator.powershell',
            'meta.brace.round',
            'meta.function-call punctuation',
            'punctuation.definition.arguments.begin',
            'punctuation.definition.arguments.end',
            'punctuation.definition.entity.begin',
            'punctuation.definition.entity.end',
            'punctuation.definition.tag.cs',
            'punctuation.definition.type.begin',
            'punctuation.definition.type.end',
            'punctuation.section.scope.begin',
            'punctuation.section.scope.end',
            'punctuation.terminator.expression.php',
            'storage.type.generic.java',
            'string.template meta.brace',
            'string.template punctuation.accessor',
        ],
        settings: {
            foreground: colors.tealishGreen[400],
        },
    },
    {
        name: 'Variable interpolation operators',
        scope: [
            'meta.string-contents.quoted.double punctuation.definition.variable',
            'punctuation.definition.interpolation.begin',
            'punctuation.definition.interpolation.end',
            'punctuation.definition.template-expression.begin',
            'punctuation.definition.template-expression.end',
            'punctuation.section.embedded.begin',
            'punctuation.section.embedded.coffee',
            'punctuation.section.embedded.end',
            'punctuation.section.embedded.end source.php',
            'punctuation.section.embedded.end source.ruby',
            'punctuation.definition.variable.makefile',
        ],
        settings: {
            foreground: colors.tealishGreen[200],
        },
    },
];

export default punctuationsStyles;

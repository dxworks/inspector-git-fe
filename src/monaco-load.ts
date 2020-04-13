export function monacoLoad() {
  (window as any).monaco.languages.register({id: 'dummy'});

  // Register a tokens provider for the language
  (window as any).monaco.languages.setMonarchTokensProvider('dummy', {
    tokenizer: {
      root: [
        [/\[error.*/, 'custom-error'],
        [/\[notice.*/, 'custom-notice'],
        [/\[info.*/, 'custom-info'],
        [/\[[a-zA-Z 0-9:]+\]/, 'custom-date'],
      ]
    }
  });

  (window as any).monaco.editor.defineTheme('dummy-light', {
    base: 'vs',
    inherit: false,
    rules: [
      {token: 'custom-info', foreground: '808080'},
      {token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold'},
      {token: 'custom-notice', foreground: 'FFA500'},
      {token: 'custom-date', foreground: '008800'},
    ]
  });

  (window as any).monaco.languages.registerCompletionItemProvider('dummy', {
    provideCompletionItems: () => {
      return [
        {
          label: 'simpleText',
          kind: (window as any).monaco.languages.CompletionItemKind.Text
        }, {
          label: 'testing',
          kind: (window as any).monaco.languages.CompletionItemKind.Keyword,
          insertText: {
            value: 'testing(${1:condition})'
          }
        },
        {
          label: 'ifelse',
          kind: (window as any).monaco.languages.CompletionItemKind.Snippet,
          insertText: {
            value: [
              'if (${1:condition}) {',
              '\t$0',
              '} else {',
              '\t',
              '}'
            ].join('\n')
          },
          documentation: 'If-Else Statement'
        }
      ];
    }
  });
}

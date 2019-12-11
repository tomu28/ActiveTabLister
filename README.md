## ActiveTabLister
このアプリは、タブを管理するChrome拡張になります。

## 起動方法
1. ルートディレクトリで`make run`を行います
1. 生成された`build`ディレクトリを  chrome://extensions/　で読み込む
1. Chromeを開き、追加されたプラグインActiveTabListerをクリックします

## 開発時のデバッグ

- Chrome拡張の開発では、[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)が使用できないので、[`debugger;`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debuggerhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)などを使用すると良い
- 検証でChrome DevToolsは使用できる

## License
MIT

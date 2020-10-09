# Fetch ポケモン
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

前回ポケモンを検索したときは、高階関数とその使用方法について学習しました。

さらに難易度が上がります。今回は、Fetch と Promise とともに RESTful Pokemon API を使用します！

## 達成目標

このタスクでは、次のことを行います。

- 特定のデータを返すために、`map` と `filter` の使い方を復習する。
- ポケモン API からデータをクエリするために、[JavaScript Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch) を使えるようになる。
- Fetch を使った処理フローを制御するために、Promise を使用する

## 解説

- [Pokemon API ドキュメント](https://pokeapi.co/docs/v2)に目を通して、それに慣れましょう。ほんの少しだけ使用します。すべてが [ポケモン](https://pokeapi.co/docs/v2.html#pokemon) に関係しています。
- `pokemonager.js` で、次のメソッドを実装します。

  - `findNames` - 整数 _n_ のインプットを受け取り、_n_ ポケモンのすべての名前の配列を API から返します。
  - `findUnderWeight` - 整数 _weight_ のインプットを受け取り、指定した _体重（weight）_ を下回るすべてのポケモンの配列を返します。**重要な点：** この方法では、検索するポケモンの数を 10 に制限してください。ポケモン API をあまり頻繁に呼び出したくありません（**あまり呼び出しすぎると制限がかかって使えなくなります**）。

- Promise に `catch()` メソッドを追加することを忘れないでください！

### イケてる生徒のためのチャレンジモード

- リクエストを作成するために、Fetch を使う代わりに、[axios](https://github.com/axios/axios) を使ってみましょう。

  - axios をプロジェクトに追加する必要があります。このリポジトリは Node のリポジトリではないため、このままではパッケージを追加できません。上記のリンクの Readme を読んで、何が必要か検討する必要があります。

## テストの実行

- ブラウザで `testRunner.html` を開いて実装内容をチェックしてください。

## リソース

これらは非常に役立ちます：

- [MDN Fecth の使い方](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [Fetch API のイントロダクション](https://www.sitepoint.com/introduction-to-the-fetch-api/)
- [PouchDB - Promise に関する問題](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

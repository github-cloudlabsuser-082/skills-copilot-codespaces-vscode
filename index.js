/*
次の機能を備えた Next.js で基本的なマークダウン エディターを作成します。
- 反応フックを使用する
- デフォルトのテキスト「ここにマークダウンを入力してください」でマークダウンの状態を作成します
- ユーザーがマークダウンを書き込むことができるテキストエリア
- 入力時にマークダウンテキストのライブプレビューを表示する
- ヘッダー、太字、斜体などの基本的なマークダウン構文のサポート
- React markdown npmパッケージを使用する
- マークダウンテキストと結果のHTMLはコンポーネントの状態に保存され、リアルタイムで更新される必要があります。
*/

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('ここにマークダウンを入力してください');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleInputChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

  // 文を入力として受け取る
  // 入力文を逆にする
  // 文頭は大文字で始まる必要があります
  // JavaScriptの場合

const sentence = "Hello, world!";
const reversedSentence = sentence.split('').reverse().join('');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    

const names = data.flatMap(group => group.map(person => person.name));
console.log(names);



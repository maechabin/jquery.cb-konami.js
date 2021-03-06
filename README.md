#jquery.cb-Konami.js

WebサイトにKonamiコマンドを実装するjQueryプラグイン。

##概要
キーボードでKonamiコマンド**「上上下下左右左右BA」**を打った後に、何か任意の処理を実行させる機能を実装することができます。  
  
以下の例では、キーボードの[↑] + [↑] + [↓] + [↓] + [←] + [→] + [←] + [→] + [B] + [A] 
を打った後に、「konami」とアラートが表示されます。
```js
$(window).cbKonami(function () {
	alert("konami");
});
```

##実装方法
jQueryとjquery.cbkonami.jsをページに読み込みます。
```html
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="jquery.cbkonami.min.js"></script>
```

&lt;body&gt;の閉じタグの直前に以下を挿入。cbKonamiメソッドの引数には、コナミコマンド入力後に発動させたい処理（関数）を指定。
```js
<script>
$(window).cbKonami();
</script>
```
###実装例1
```js
<script>
var foo = function () {
	console.log("bar"):
};
$(window).cbKonami(foo);
</script>
```

###実装例2
```js
<script>
$(window).cbKonami(function () {
	console.log("bar");
});
</script>
```

##デモ

[http://jsrun.it/maechabin/6DxD](http://jsrun.it/maechabin/6DxD)

##ライセンス

MIT license

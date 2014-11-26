#jquery.cb-Konami.js

WebサイトにKonamiコマンドを実装するjQueryプラグイン。
以下の例では、キーボードの[↑] + [↑] + [↓] + [↓] + [←] + [→] + [←] + [→] + [B] + [A] を叩くと、「konami」とアラートが表示されます。
```
$(window).cbKonami(function () {
	alert("konami");
});
```

##実装方法
jQueryとjquery.cb-Konami.jsをページに読み込みます。
```
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="jquery.cb-Konami.js"></script>
```

&lt;body&gt;の閉じタグの直前に以下を挿入。cbKonamiメソッドの引数には、コナミコマンド入力後に発動させたい処理（関数）を指定。
```
<script>
$(window).cbKonami();
</script>
```

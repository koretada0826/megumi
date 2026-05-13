# らーめん め組 公式サイト（たたき台）

山形・桜田「らーめん め組」の公式サイト風ホームページ（デザイン確認用たたき台）。
HTML / CSS / JavaScript の静的サイトです。ビルド不要、ダブルクリックで開けます。

---

## 起動方法（一番かんたん）

1. このフォルダの中の `index.html` をダブルクリック
2. お好きなブラウザ（Chrome / Safari など）で開く

それだけで表示されます。

### もう少し本物っぽく確認したい場合（ローカルサーバー）

Mac のターミナルで：

```bash
cd "/Users/koretada/Desktop/らーめん　め組"
python3 -m http.server 8000
```

→ ブラウザで `http://localhost:8000` を開く

サーバーを止めるときは ターミナルで `Ctrl + C`。

---

## フォルダ構成

```
らーめん め組/
├── index.html        … サイト本体（HTML）
├── css/
│   └── style.css     … デザイン（色・余白・アニメーション）
├── js/
│   └── main.js       … 店舗情報・メニュー・動作スクリプト
├── images/           … 画像（差し替えはここに同名で上書き）
│   ├── hero.jpg            … ファーストビューの背景
│   ├── menu-01.jpg 〜 06    … お品書きの料理写真
│   ├── shop-exterior.jpg   … 外観
│   ├── shop-interior.jpg   … 内観
│   └── gallery-01.jpg 〜 06 … ギャラリー
└── README.md
```

---

## 編集ポイント早見表

| 直したい内容 | 編集するファイル | 該当箇所 |
|---|---|---|
| 店舗名・キャッチコピー | `index.html` | `<section class="hero">` 内 |
| こだわり文・4ポイント | `index.html` | `<section class="concept">` 内 |
| お品書き（名前・説明・価格・画像） | `js/main.js` | `menuItems` 配列 |
| 店舗情報（住所・電話・営業時間など） | `js/main.js` | `shopInfo` オブジェクト |
| ギャラリーの画像 | `js/main.js` | `galleryItems` 配列 |
| 色 / フォント / サイズ | `css/style.css` | 一番上の `:root {}` |
| 画像そのものの差し替え | `images/` フォルダ | 同じファイル名で上書き |

### 例：お品書きを差し替えたい

`js/main.js` の `menuItems` を編集：

```js
{
  name: "みそわんたんめん",
  romaji: "MISO WONTAN MEN",
  description: "看板の一杯。コクのある味噌スープに...",
  price: "1,000",           // 数字だけにすると「円」が自動で付きます
  note: "大盛 +200円",       // 任意。空文字でもOK
  image: "images/menu-01.jpg",
  label: "看板メニュー",     // 任意
  labelClass: "gold",       // "gold" にすると金色、空欄なら赤
}
```

### 例：店舗情報を直したい

`js/main.js` の `shopInfo` を編集：

```js
const shopInfo = {
  name: "らーめん め組",
  postal: "〒990-2323",
  address: "山形県山形市桜田東1-9-9",
  tel: "023-622-0202",
  hours: "11:00 〜 14:30（L.O. 14:30）",
  ...
};
```

---

## 画像について

- 現在の `images/` 内の写真は、Unsplash の高品質なラーメン・店舗系のフリー素材を仮置きしています。
- 本番では、店舗の実写真（許諾済みのもの）を **同じファイル名で上書き** すれば自動で反映されます。
- 推奨サイズ目安：
  - `hero.jpg` … 1800 × 1200px 程度、横長、湯気・スープの迫力が出るもの
  - `menu-XX.jpg` … 1200 × 900px 程度、正方形〜横長で器全体が見えるもの
  - `gallery-XX.jpg` … 1200 × 1200px 程度、自由
  - `shop-exterior.jpg` / `shop-interior.jpg` … 1600 × 1200px 程度

---

## 収集した店舗情報の出典

- [食べログ - らーめん め組](https://tabelog.com/yamagata/A0601/A060101/6013121/)
- [推しメンやまがたラーメンデータベース](https://www.oshimen-yamagata.jp/shop/chufuto/megumi/)
- [山形ラーメン.com](https://yamagata-ramen.com/megumi-yamagata/)
- [やまがたぐらし - らーめん め組](https://fullpokko.com/ramen/ra-men-megumi-chi/)
- [やまがたぐらし - 移転後レポ](https://fullpokko.com/ramen/ramen-megumi-202504-renew/)
- [東北芸術工科大学 - お店紹介](https://www.tuad.ac.jp/adm/news/2024/12/8790/)
- [公式Instagram @ramen.megumi](https://www.instagram.com/ramen.megumi/)

> 営業時間・定休日・価格は変動の可能性があります。
> 最新情報は店舗 Instagram または店舗へ直接ご確認ください。

---

## 注意事項

- このサイトは **デザイン確認用のたたき台** です。
- 掲載されているメニューと価格は、複数の口コミサイトを参照した推定値を含みます。本番公開前に店舗確認が必要です。
- 画像も仮素材です。本番では店舗から提供された実写真に差し替えてください。

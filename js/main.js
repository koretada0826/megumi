/* ===========================================================
   らーめん め組 - main.js
   店舗データ + UI動作（ヘッダー追従 / ハンバーガー / フェードイン / レンダリング）
   =========================================================== */

/* ----- 店舗情報（編集はここ） ----- */
const shopInfo = {
  name: "らーめん め組",
  postal: "〒990-2323",
  address: "山形県山形市桜田東1-9-9",
  tel: "023-622-0202",
  hours: "11:00 〜 14:30（L.O. 14:30）",
  hoursNote: "夜の営業については店舗・Instagramにてご確認ください",
  closed: "月曜日（祝日でも休業／不定休あり）",
  closedNote: "最新の営業日はInstagramまたは店舗へご確認ください",
  station: "JR奥羽本線「蔵王駅」より約2.2km",
  parking: "店舗前駐車場あり／第二駐車場あり",
  seats: "カウンター席・テーブル席・小上がり座敷",
  payment: "現金／クレジットカード／電子マネー／QRコード決済",
  sns: "@ramen.megumi",
  instagram: "https://www.instagram.com/ramen.megumi/",
  mapEmbed:
    "https://www.google.com/maps?q=%E5%B1%B1%E5%BD%A2%E5%B8%82%E6%A1%9C%E7%94%B0%E6%9D%B11-9-9&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=%E5%B1%B1%E5%BD%A2%E5%B8%82%E6%A1%9C%E7%94%B0%E6%9D%B11-9-9+%E3%82%89%E3%83%BC%E3%82%81%E3%82%93%E3%82%81%E7%B5%84",
};

/* ----- お品書き（編集はここ） -----
   ※ 価格は2025年4月の移転後の確定情報が見当たらないため、すべて
     「店舗にてご確認ください」としています。Instagram または来店時の確認推奨。
*/
const menuItems = [
  {
    name: "みそわんたんめん",
    romaji: "MISO WONTAN MEN",
    description:
      "看板メニュー。味噌ベースのスープに、平牧三元豚を包んだわんたんを合わせた一杯。",
    price: "店舗にてご確認ください",
    note: "",
    image: "images/menu-01.jpg",
    label: "看板メニュー",
    labelClass: "gold",
  },
  {
    name: "しおわんたんめん",
    romaji: "SHIO WONTAN MEN",
    description:
      "塩ベースのスープに、平牧三元豚を包んだわんたんを合わせた一杯。",
    price: "店舗にてご確認ください",
    note: "",
    image: "images/menu-04.jpg",
    label: "",
    labelClass: "",
  },
  {
    name: "みそらーめん",
    romaji: "MISO RAMEN",
    description: "味噌ベースのスープに、中太縮れ麺を合わせた一杯。",
    price: "店舗にてご確認ください",
    note: "",
    image: "images/menu-03.jpg",
    label: "",
    labelClass: "",
  },
  {
    name: "しおらーめん",
    romaji: "SHIO RAMEN",
    description: "塩ベースのスープに、中太縮れ麺を合わせた一杯。",
    price: "店舗にてご確認ください",
    note: "",
    image: "images/menu-05.jpg",
    label: "",
    labelClass: "",
  },
  {
    name: "中華そば（しょうゆ）",
    romaji: "CHUKA SOBA",
    description:
      "醤油ベースのスープに、お好みで細麺または太麺をお選びいただけます。",
    price: "店舗にてご確認ください",
    note: "",
    image: "images/menu-02.jpg",
    label: "",
    labelClass: "",
  },
  {
    name: "お子様らーめん",
    romaji: "KIDS RAMEN",
    description: "お子様向けの一杯。",
    price: "店舗にてご確認ください",
    note: "",
    image: "images/menu-06.jpg",
    label: "",
    labelClass: "",
  },
];

/* ----- ギャラリー（編集はここ） ----- */
const galleryItems = [
  { src: "images/gallery-01.jpg", alt: "湯気立つ一杯", layout: "tall" },
  { src: "images/gallery-02.jpg", alt: "香り立つラーメン" },
  { src: "images/gallery-03.jpg", alt: "店主のこだわり" },
  { src: "images/shop-exterior.jpg", alt: "桜田の店舗外観" },
  { src: "images/gallery-04.jpg", alt: "つるもちの中太麺" },
  { src: "images/gallery-05.jpg", alt: "心和むひととき" },
  { src: "images/gallery-06.jpg", alt: "サイドメニュー" },
];

/* =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderGallery();
  renderShopInfo();
  initHeader();
  initHamburger();
  initFadeIn();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ----- メニュー描画 ----- */
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  grid.innerHTML = menuItems
    .map((item) => {
      const label = item.label
        ? `<span class="label ${item.labelClass || ""}">${item.label}</span>`
        : "";
      const priceBlock = /^[0-9,]+$/.test(item.price)
        ? `<p class="price">${item.price}<span class="yen">円</span>${item.note ? `<small>${item.note}</small>` : ""}</p>`
        : `<p class="price price-note">${item.price}</p>`;

      return `
        <article class="menu-card fade-in">
          <div class="img">
            ${label}
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>
          <div class="body">
            <h3>${item.name}</h3>
            <p class="romaji">${item.romaji}</p>
            <p class="desc">${item.description}</p>
            ${priceBlock}
          </div>
        </article>
      `;
    })
    .join("");
}

/* ----- ギャラリー描画 ----- */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = galleryItems
    .map(
      (item) => `
        <a class="gallery-item ${item.layout || ""} fade-in" href="${item.src}" target="_blank" rel="noopener noreferrer" aria-label="${item.alt}を拡大">
          <img src="${item.src}" alt="${item.alt}" loading="lazy" />
        </a>
      `
    )
    .join("");
}

/* ----- 店舗情報描画 ----- */
function renderShopInfo() {
  const dl = document.getElementById("shopInfo");
  if (!dl) return;

  const telDisplay = shopInfo.tel;
  const telHref = shopInfo.tel.replace(/-/g, "");

  const rows = [
    ["店名", shopInfo.name],
    ["住所", `${shopInfo.postal}<br />${shopInfo.address}`],
    ["電話", `<a href="tel:${telHref}">${telDisplay}</a>`],
    [
      "営業時間",
      `${shopInfo.hours}<small>${shopInfo.hoursNote}</small>`,
    ],
    [
      "定休日",
      `${shopInfo.closed}<small>${shopInfo.closedNote}</small>`,
    ],
    ["最寄駅", shopInfo.station],
    ["駐車場", shopInfo.parking],
    ["席数", shopInfo.seats],
    ["お支払い", shopInfo.payment],
    [
      "SNS",
      `<a href="${shopInfo.instagram}" target="_blank" rel="noopener noreferrer">Instagram ${shopInfo.sns}</a>`,
    ],
  ];

  dl.innerHTML = rows
    .map(([dt, dd]) => `<dt>${dt}</dt><dd>${dd}</dd>`)
    .join("");
}

/* ----- ヘッダー追従 ----- */
function initHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const update = () => {
    if (window.scrollY > 60) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* ----- ハンバーガー ----- */
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("globalNav");
  if (!btn || !nav) return;

  const close = () => {
    btn.classList.remove("is-open");
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  const toggle = () => {
    const isOpen = btn.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  btn.addEventListener("click", toggle);
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ----- スクロールフェードイン ----- */
function initFadeIn() {
  const els = document.querySelectorAll(".fade-in");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

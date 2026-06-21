<<<<<<< HEAD
const STORAGE_KEY = "safron-menu-cart-v1";
const LANG_KEY = "safron-menu-lang";
const THEME_KEY = "safron-menu-theme";
const BRAND_LOGO_SRC = "assets/logo%20safron.png";
=======
const STORAGE_KEY = "saffron-menu-cart-v1";
const LANG_KEY = "saffron-menu-lang";
const THEME_KEY = "saffron-menu-theme";
const BRAND_LOGO_SRC = "assets/logo%20saffron.png";
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
const HERO_IMAGE_SRC = "public/optimized/banner/banner-image.webp";
const PLACEHOLDER_IMAGE_SRC = "/optimized/menu-images/placeholder.svg";

const languages = ["mk", "en", "bg"];
const themes = ["light", "dark"];
const languageNames = {
  mk: "Македонски",
  en: "English",
  bg: "Български"
};

const cyrillicToLatinMap = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  ѓ: "gj",
  е: "e",
  ж: "zh",
  з: "z",
  ѕ: "dz",
  и: "i",
  ј: "j",
  к: "k",
  л: "l",
  љ: "lj",
  м: "m",
  н: "n",
  њ: "nj",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  ќ: "kj",
  у: "u",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "ch",
  џ: "dzh",
  ш: "sh"
};

const copy = {
  mk: {
    subtitle: "Pool & Bar",
    navHome: "Почетна",
    navOrder: "Моја нарачка",
    navInfo: "Инфо",
    search: "Пребарај производ...",
<<<<<<< HEAD
    heroBadge: "Лето во SAFRON",
    heroTitle: "Добредојдовте во SAFRON Pool & Bar",
=======
    heroBadge: "Лето во SAFFRON",
    heroTitle: "Добредојдовте во SAFFRON Pool & Bar",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    heroText: "Уживајте во свежа храна и летни вкусови покрај базен.",
    heroButton: "Види мени",
    all: "Сите",
    add: "Додај",
    added: "Додадено во Моја нарачка",
    noResultsTitle: "Нема резултати",
    noResultsText: "Нема пронајдени производи.",
    orderKicker: "Ваш избор",
    orderTitle: "Моја нарачка",
    orderSubtitle: "Оваа нарачка останува само на вашиот телефон.",
    emptyOrderTitle: "Нарачката е празна",
    emptyOrderText: "Додајте производи од менито и покажете ја нарачката на келнерот.",
    notePlaceholder: "Белешка за производот",
    total: "Вкупно",
    showWaiter: "Покажи на келнер",
    continueMenu: "Продолжи со мени",
    clearOrder: "Исчисти нарачка",
    waiterTitle: "НАРАЧКА",
    waiterHelp: "Покажете го овој екран на келнерот.",
    backMenu: "Назад кон мени",
<<<<<<< HEAD
    infoKicker: "SAFRON Pool Bar",
=======
    infoKicker: "SAFFRON Pool Bar",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    infoTitle: "Инфо",
    infoSubtitle: "Практични информации за гостите на базен.",
    hoursTitle: "Работно време",
    hoursText: "Секој ден: 09:00 - 00:00",
    locationTitle: "Локација",
<<<<<<< HEAD
    locationText: "SAFRON Pool Bar, покрај базен. Прашајте го персоналот за точна насока во комплексот.",
=======
    locationText: "SAFFRON Pool Bar, покрај базен. Прашајте го персоналот за точна насока во комплексот.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    instagramTitle: "Instagram",
    instagramText: "Следете не за летни понуди и дневни специјали.",
    instagramLinkLabel: "Нашиот Instagram профил",
    locationLinkLabel: "Насоки до нас",
    wifiTitle: "Wi-Fi",
<<<<<<< HEAD
    wifiText: "Мрежа: SAFRON Guest. Лозинка: прашајте го персоналот.",
=======
    wifiText: "Мрежа: SAFFRON Guest. Лозинка: прашајте го персоналот.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    viewOrder: "Види нарачка",
    itemOne: "производ",
    itemMany: "производи",
    themeLight: "Светол режим",
    themeDark: "Темeн режим",
    languageLabel: "Јазик"
  },
  en: {
    subtitle: "Pool & Bar",
    navHome: "Home",
    navOrder: "My Order",
    navInfo: "Info",
    search: "Search menu items...",
<<<<<<< HEAD
    heroBadge: "Summer at SAFRON",
    heroTitle: "Welcome to SAFRON Pool & Bar",
=======
    heroBadge: "Summer at SAFFRON",
    heroTitle: "Welcome to SAFFRON Pool & Bar",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    heroText: "Enjoy fresh food and summer flavors by the pool.",
    heroButton: "View menu",
    all: "All",
    add: "Add",
    added: "Added to My Order",
    noResultsTitle: "No results",
    noResultsText: "No products found.",
    orderKicker: "Your selection",
    orderTitle: "My Order",
    orderSubtitle: "This order stays only on your phone.",
    emptyOrderTitle: "Your order is empty",
    emptyOrderText: "Add items from the menu and show the order to the waiter.",
    notePlaceholder: "Note for this item",
    total: "Total",
    showWaiter: "Show to Waiter",
    continueMenu: "Continue Menu",
    clearOrder: "Clear Order",
    waiterTitle: "ORDER",
    waiterHelp: "Show this screen to the waiter.",
    backMenu: "Back to Menu",
<<<<<<< HEAD
    infoKicker: "SAFRON Pool Bar",
=======
    infoKicker: "SAFFRON Pool Bar",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    infoTitle: "Info",
    infoSubtitle: "Practical information for pool guests.",
    hoursTitle: "Working Hours",
    hoursText: "Every day: 09:00 - 00:00",
    locationTitle: "Location",
<<<<<<< HEAD
    locationText: "SAFRON Pool Bar, by the pool. Ask the staff for the exact direction inside the complex.",
=======
    locationText: "SAFFRON Pool Bar, by the pool. Ask the staff for the exact direction inside the complex.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    instagramTitle: "Instagram",
    instagramText: "Follow us for summer offers and daily specials.",
    instagramLinkLabel: "Our Instagram Profile",
    locationLinkLabel: "Get Directions",
    wifiTitle: "Wi-Fi",
<<<<<<< HEAD
    wifiText: "Network: SAFRON Guest. Password: ask the staff.",
=======
    wifiText: "Network: SAFFRON Guest. Password: ask the staff.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    viewOrder: "View order",
    itemOne: "item",
    itemMany: "items",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    languageLabel: "Language"
  },
  bg: {
    subtitle: "Pool & Bar",
    navHome: "Начало",
    navOrder: "Моята поръчка",
    navInfo: "Инфо",
    search: "Търси продукт...",
<<<<<<< HEAD
    heroBadge: "Лято в SAFRON",
    heroTitle: "Добре дошли в SAFRON Pool & Bar",
=======
    heroBadge: "Лято в SAFFRON",
    heroTitle: "Добре дошли в SAFFRON Pool & Bar",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    heroText: "Насладете се на свежа храна и летни вкусове край басейна.",
    heroButton: "Виж меню",
    all: "Всички",
    add: "Добави",
    added: "Добавено в Моята поръчка",
    noResultsTitle: "Няма резултати",
    noResultsText: "Няма намерени продукти.",
    orderKicker: "Вашият избор",
    orderTitle: "Моята поръчка",
    orderSubtitle: "Тази поръчка остава само на вашия телефон.",
    emptyOrderTitle: "Поръчката е празна",
    emptyOrderText: "Добавете продукти от менюто и покажете поръчката на сервитьора.",
    notePlaceholder: "Бележка за продукта",
    total: "Общо",
    showWaiter: "Покажи на сервитьора",
    continueMenu: "Продължи с менюто",
    clearOrder: "Изчисти поръчката",
    waiterTitle: "ПОРЪЧКА",
    waiterHelp: "Покажете този екран на сервитьора.",
    backMenu: "Назад към менюто",
<<<<<<< HEAD
    infoKicker: "SAFRON Pool Bar",
=======
    infoKicker: "SAFFRON Pool Bar",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    infoTitle: "Инфо",
    infoSubtitle: "Практична информация за гостите на басейна.",
    hoursTitle: "Работно време",
    hoursText: "Всеки ден: 09:00 - 00:00",
    locationTitle: "Локация",
<<<<<<< HEAD
    locationText: "SAFRON Pool Bar, до басейна. Попитайте персонала за точна посока в комплекса.",
=======
    locationText: "SAFFRON Pool Bar, до басейна. Попитайте персонала за точна посока в комплекса.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    instagramTitle: "Instagram",
    instagramText: "Последвайте ни за летни предложения и дневни специалитети.",
    instagramLinkLabel: "Нашият Instagram профил",
    locationLinkLabel: "Упътване до нас",
    wifiTitle: "Wi-Fi",
<<<<<<< HEAD
    wifiText: "Мрежа: SAFRON Guest. Парола: попитайте персонала.",
=======
    wifiText: "Мрежа: SAFFRON Guest. Парола: попитайте персонала.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    viewOrder: "Виж поръчката",
    itemOne: "продукт",
    itemMany: "продукта",
    themeLight: "Светъл режим",
    themeDark: "Тъмен режим",
    languageLabel: "Език"
  }
};

const categories = [
  {
    id: "Доручек",
    tone: "breakfast",
    image: "/optimized/categories/dorucek.webp",
    name: { mk: "Доручек", en: "Breakfast", bg: "Закуска" }
  },
  {
    id: "Сендвичи и тортиљи",
    tone: "sandwich",
    image: "/optimized/categories/sendvici-i-tortilji.webp",
    name: { mk: "Сендвичи и тортиљи", en: "Sandwiches & Tortillas", bg: "Сандвичи и тортили" }
  },
  {
    id: "Скара",
    tone: "grill",
    image: "/optimized/categories/skara.webp",
    name: { mk: "Скара", en: "Grill", bg: "Скара" }
  },
  {
    id: "Бургери",
    tone: "burger",
    image: "/optimized/categories/burgeri.webp",
    name: { mk: "Бургери", en: "Burgers", bg: "Бургери" }
  },
  {
    id: "Предјадења",
    tone: "starter",
    image: "/optimized/categories/predjadenja.webp",
    name: { mk: "Предјадења", en: "Appetizers", bg: "Предястия" }
  },
  {
    id: "Салати",
    tone: "salad",
    image: "/optimized/categories/salati.webp",
    name: { mk: "Салати", en: "Salads", bg: "Салати" }
  },
  {
    id: "Пици",
    tone: "pizza",
    image: "/optimized/categories/pici.webp",
    name: { mk: "Пици", en: "Pizza", bg: "Пици" }
  },
  {
    id: "Десерти",
    tone: "dessert",
    image: "/optimized/categories/deserti.webp",
    name: { mk: "Десерти", en: "Desserts", bg: "Десерти" }
  }
];

const menuProducts = [
  {
    id: "mediteranski-jajca",
<<<<<<< HEAD
    name: { mk: "Медитерански јајца", en: "Mediterranean Eggs", bg: "Средиземноморски яйца" },
=======
    name: "Медитерански јајца",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Доручек",
    price: 200,
    image: "/optimized/menu-images/медитерански јајца.webp"
  },
  {
    id: "avokado-tost",
<<<<<<< HEAD
    name: { mk: "Авокадо тост", en: "Avocado Toast", bg: "Авокадо тост" },
=======
    name: "Авокадо тост",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Доручек",
    price: 180,
    image: "/optimized/menu-images/авокадо тост.webp"
  },
  {
    id: "prsuto-tost",
<<<<<<< HEAD
    name: { mk: "Пршуто тост", en: "Prosciutto Toast", bg: "Тост с прошуто" },
=======
    name: "Пршуто тост",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Доручек",
    price: 200,
    image: "/optimized/menu-images/пршуто тост.webp"
  },
  {
    id: "omlet",
<<<<<<< HEAD
    name: { mk: "Омлет", en: "Omelette", bg: "Омлет" },
=======
    name: "Омлет",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Доручек",
    price: 140,
    image: "/optimized/menu-images/омлет.webp"
  },
  {
    id: "omlet-vo-tortilja",
<<<<<<< HEAD
    name: { mk: "Омлет во тортиља", en: "Omelette in Tortilla", bg: "Омлет в тортила" },
=======
    name: "Омлет во тортиља",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Доручек",
    price: 180,
    image: "/optimized/menu-images/омлет во тортиља.webp"
  },
  {
    id: "przenica-so-jajca",
<<<<<<< HEAD
    name: {
      mk: "Прженица со јајца (шакшука)",
      en: "Fried Bread with Eggs (Shakshuka)",
      bg: "Пържени филийки с яйца (шакшука)"
    },
    category: "Доручек",
    price: 180,
    image: "/optimized/menu-images/прженица со јајца(шакшука).webp"
  },
  {
    id: "vrap",
    name: { mk: "Врап", en: "Wrap", bg: "Рап" },
=======
    name: "Прженица со јајца (шакшука)",
    category: "Доручек",
    price: 180,
    image: "/menu-images/шакшука.jpg"
  },
  {
    id: "vrap",
    name: "Врап",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 170,
    image: "/optimized/menu-images/врап.webp"
  },
  {
    id: "klub-sendvic",
<<<<<<< HEAD
    name: { mk: "Клуб сендвич", en: "Club Sandwich", bg: "Клуб сандвич" },
=======
    name: "Клуб сендвич",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 180,
    image: "/optimized/menu-images/клуб сендвич.webp"
  },
  {
    id: "tost-so-kaskaval",
<<<<<<< HEAD
    name: { mk: "Тост со кашкавал", en: "Cheese Toast", bg: "Тост с кашкавал" },
=======
    name: "Тост со кашкавал",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 90,
    image: PLACEHOLDER_IMAGE_SRC
  },
  {
    id: "tost-sunka",
<<<<<<< HEAD
    name: { mk: "Тост шунка", en: "Ham Toast", bg: "Тост с шунка" },
=======
    name: "Тост шунка",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 90,
    image: PLACEHOLDER_IMAGE_SRC
  },
  {
    id: "tost-sunka-i-kaskaval",
<<<<<<< HEAD
    name: { mk: "Тост шунка и кашкавал", en: "Ham and Cheese Toast", bg: "Тост с шунка и кашкавал" },
=======
    name: "Тост шунка и кашкавал",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 100,
    image: PLACEHOLDER_IMAGE_SRC
  },
  {
    id: "tost-vrat",
<<<<<<< HEAD
    name: { mk: "Тост врат", en: "Pork Neck Toast", bg: "Тост със свински врат" },
=======
    name: "Тост врат",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 110,
    image: "/optimized/menu-images/тост врат.webp"
  },
  {
    id: "tost-vrat-i-kaskaval",
<<<<<<< HEAD
    name: {
      mk: "Тост врат и кашкавал",
      en: "Pork Neck and Cheese Toast",
      bg: "Тост със свински врат и кашкавал"
    },
=======
    name: "Тост врат и кашкавал",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 120,
    image: "/optimized/menu-images/врат и кашкавал тост.webp"
  },
  {
    id: "tost-so-kulen",
<<<<<<< HEAD
    name: { mk: "Тост со кулен", en: "Kulen Toast", bg: "Тост с кулен" },
=======
    name: "Тост со кулен",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 110,
    image: "/optimized/menu-images/тост со кулен.webp"
  },
  {
    id: "tost-so-kulen-i-kaskaval",
<<<<<<< HEAD
    name: { mk: "Тост со кулен и кашкавал", en: "Kulen and Cheese Toast", bg: "Тост с кулен и кашкавал" },
=======
    name: "Тост со кулен и кашкавал",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Сендвичи и тортиљи",
    price: 120,
    image: "/optimized/menu-images/тост кулен и кашкавал.webp"
  },
  {
    id: "paflak-250g",
<<<<<<< HEAD
    name: { mk: "Пафлак 250 г.", en: "Pork Belly 250 g", bg: "Свински гърди 250 г." },
=======
    name: "Пафлак 250 г.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Скара",
    price: 200,
    image: "/optimized/menu-images/пафлак.webp"
  },
  {
    id: "bela-vesalica-250g",
<<<<<<< HEAD
    name: { mk: "Бела вешалица 250 г.", en: "Pork Loin 250 g", bg: "Свинско филе 250 г." },
=======
    name: "Бела вешалица 250 г.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Скара",
    price: 150,
    image: "/optimized/menu-images/бела вешалица.webp"
  },
  {
    id: "stek-250g",
<<<<<<< HEAD
    name: { mk: "Стек 250 г.", en: "Steak 250 g", bg: "Стек 250 г." },
=======
    name: "Стек 250 г.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Скара",
    price: 180,
    image: "/optimized/menu-images/стек.webp"
  },
  {
    id: "pleskavica-170g",
<<<<<<< HEAD
    name: { mk: "Плескавица 170 г.", en: "Grilled Patty 170 g", bg: "Плескавица 170 г." },
=======
    name: "Плескавица 170 г.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Скара",
    price: 150,
    image: "/optimized/menu-images/плескавица.webp"
  },
  {
    id: "pileska-vesalica-250g",
<<<<<<< HEAD
    name: { mk: "Пилешка вешалица 250 г.", en: "Chicken Fillet 250 g", bg: "Пилешко филе 250 г." },
=======
    name: "Пилешка вешалица 250 г.",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Скара",
    price: 180,
    image: "/optimized/menu-images/пилешка вешалица.webp"
  },
  {
    id: "hamburger",
<<<<<<< HEAD
    name: { mk: "Хамбургер", en: "Hamburger", bg: "Хамбургер" },
=======
    name: "Хамбургер",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Бургери",
    price: 170,
    image: "/optimized/menu-images/хамбургер.webp"
  },
  {
    id: "cikenburger",
<<<<<<< HEAD
    name: { mk: "Чикенбургер", en: "Chicken Burger", bg: "Пилешки бургер" },
=======
    name: "Чикенбургер",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Бургери",
    price: 170,
    image: "/optimized/menu-images/чикен бургер.webp"
  },
  {
    id: "cizburger",
<<<<<<< HEAD
    name: { mk: "Чизбургер", en: "Cheeseburger", bg: "Чийзбургер" },
=======
    name: "Чизбургер",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Бургери",
    price: 180,
    image: "/optimized/menu-images/чисбургер.webp"
  },
  {
    id: "brusketi",
<<<<<<< HEAD
    name: { mk: "Брускети", en: "Bruschetta", bg: "Брускети" },
=======
    name: "Брускети",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Предјадења",
    price: 180,
    image: "/optimized/menu-images/брускети.webp"
  },
  {
    id: "ladna-daska",
<<<<<<< HEAD
    name: { mk: "Ладна даска", en: "Cold Platter", bg: "Студено плато" },
=======
    name: "Ладна даска",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Предјадења",
    price: 550,
    image: "/optimized/menu-images/ладна даска.webp"
  },
  {
    id: "pomfrit",
<<<<<<< HEAD
    name: { mk: "Помфрит", en: "French Fries", bg: "Пържени картофи" },
=======
    name: "Помфрит",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Предјадења",
    price: 100,
    image: "/optimized/menu-images/помфрит.webp"
  },
  {
    id: "pomfrit-so-sirenje",
<<<<<<< HEAD
    name: { mk: "Помфрит со сирење", en: "French Fries with Cheese", bg: "Пържени картофи със сирене" },
=======
    name: "Помфрит со сирење",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Предјадења",
    price: 120,
    image: "/optimized/menu-images/помфрит со сирење.webp"
  },
  {
    id: "nachos",
<<<<<<< HEAD
    name: {
=======
    name: "Начос",
    names: {
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
      mk: "Начос",
      en: "Nachos",
      bg: "Начос"
    },
    category: "Предјадења",
<<<<<<< HEAD
    description: {
=======
    descriptions: {
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
      mk: "Крцкав начос со сос.",
      en: "Crispy nachos with sauce.",
      bg: "Хрупкав начос със сос."
    },
    price: null,
    image: "/optimized/menu-images/начос.webp"
  },
  {
    id: "shopska",
<<<<<<< HEAD
    name: { mk: "Шопска", en: "Shopska Salad", bg: "Шопска салата" },
=======
    name: "Шопска",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Салати",
    price: 180,
    image: "/optimized/menu-images/шопска салата.webp"
  },
  {
    id: "grcka",
<<<<<<< HEAD
    name: { mk: "Грчка", en: "Greek Salad", bg: "Гръцка салата" },
=======
    name: "Грчка",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Салати",
    price: 190,
    image: "/optimized/menu-images/грчка салата.webp"
  },
  {
    id: "tarator",
<<<<<<< HEAD
    name: { mk: "Таратор", en: "Tarator", bg: "Таратор" },
=======
    name: "Таратор",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Салати",
    price: 150,
    image: "/optimized/menu-images/таратор.webp"
  },
  {
    id: "kapreze",
<<<<<<< HEAD
    name: { mk: "Капрезе", en: "Caprese Salad", bg: "Салата Капрезе" },
=======
    name: "Капрезе",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Салати",
    price: 200,
    image: "/optimized/menu-images/капрезе салата.webp"
  },
  {
    id: "cezar",
<<<<<<< HEAD
    name: { mk: "Цезар", en: "Caesar Salad", bg: "Салата Цезар" },
=======
    name: "Цезар",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Салати",
    price: 250,
    image: "/optimized/menu-images/цезар салата.webp"
  },
  {
    id: "kapricioza",
<<<<<<< HEAD
    name: { mk: "Капричиоза", en: "Capricciosa", bg: "Капричоза" },
=======
    name: "Капричиоза",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Пици",
    price: 250,
    image: "/optimized/menu-images/капричиоза.webp"
  },
  {
    id: "margarita",
<<<<<<< HEAD
    name: { mk: "Маргарита", en: "Margherita", bg: "Маргарита" },
=======
    name: "Маргарита",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Пици",
    price: 240,
    image: "/optimized/menu-images/маргарита.webp"
  },
  {
    id: "peperoni",
<<<<<<< HEAD
    name: { mk: "Пеперони", en: "Pepperoni", bg: "Пеперони" },
=======
    name: "Пеперони",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Пици",
    price: 270,
    image: "/optimized/menu-images/пеперони.webp"
  },
  {
    id: "pastrmajilija-svinska",
<<<<<<< HEAD
    name: { mk: "Пастрмајлија свинска", en: "Pork Pastrmajlija", bg: "Пастърмайлия със свинско" },
=======
    name: "Пастрмајлија свинска",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Пици",
    price: 250,
    image: "/optimized/menu-images/свинска пастрамајлија.webp"
  },
  {
    id: "pastrmajilija-pileska",
<<<<<<< HEAD
    name: { mk: "Пастрмајлија пилешка", en: "Chicken Pastrmajlija", bg: "Пастърмайлия с пилешко" },
=======
    name: "Пастрмајлија пилешка",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Пици",
    price: 250,
    image: "/optimized/menu-images/пилешка пастрамајлија.webp"
  },
  {
    id: "palacinka",
<<<<<<< HEAD
    name: { mk: "Палачинка", en: "Pancake", bg: "Палачинка" },
=======
    name: "Палачинка",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Десерти",
    price: 120,
    image: "/optimized/menu-images/палачинка.webp"
  },
  {
    id: "ovosna-salata",
<<<<<<< HEAD
    name: { mk: "Овошна салата", en: "Fruit Salad", bg: "Плодова салата" },
=======
    name: "Овошна салата",
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    category: "Десерти",
    price: 180,
    image: "/optimized/menu-images/овошна салата.webp"
  }
];

const products = menuProducts.map(product);

const state = {
  lang: safeLang(localStorage.getItem(LANG_KEY)) || "mk",
  theme: safeTheme(localStorage.getItem(THEME_KEY)) || "light",
  view: "home",
  category: "all",
  query: "",
  cart: loadCart(),
  toast: "",
  languagePanelOpen: false,
  searchOpen: false
};

const app = document.querySelector("#app");
let toastTimer = null;

function product({ id, name, names = {}, category, price, image, description = "", descriptions = {} }) {
  const categoryMeta = categoryFor(category);
<<<<<<< HEAD
  const translatedNames = Object.fromEntries(
    languages.map((lang) => [lang, localizedField(name, names, lang, id)])
  );
  const translatedDescriptions = Object.fromEntries(
    languages.map((lang) => [lang, localizedField(description, descriptions, lang, "")])
=======
  const translatedNames = Object.fromEntries(languages.map((lang) => [lang, names[lang] || name]));
  const translatedDescriptions = Object.fromEntries(
    languages.map((lang) => [lang, descriptions[lang] || description || ""])
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
  );

  return {
    id,
    category,
    tone: categoryMeta?.tone || "soft",
    price,
    image,
<<<<<<< HEAD
    name: translatedNames,
    description: translatedDescriptions,
=======
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
    translations: Object.fromEntries(
      languages.map((lang) => [
        lang,
        {
          name: translatedNames[lang],
          description: translatedDescriptions[lang]
        }
      ])
    )
  };
}

<<<<<<< HEAD
function localizedField(value, legacyValues = {}, lang, fallback = "") {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] || legacyValues[lang] || value.mk || legacyValues.mk || firstLocalizedValue(value) || fallback;
  }

  return legacyValues[lang] || legacyValues.mk || value || fallback;
}

function firstLocalizedValue(values) {
  return languages.map((lang) => values[lang]).find(Boolean) || Object.values(values).find(Boolean) || "";
}

function getCurrentLanguage() {
  return safeLang(state.lang) || "mk";
}

function getLocalizedValue(value, lang = getCurrentLanguage()) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.mk || value.en || Object.values(value).find(Boolean) || "";
}

function getProductName(product, lang = getCurrentLanguage()) {
  return getLocalizedValue(product?.name, lang) || getLocalizedValue(product?.translations?.[lang]?.name, lang);
}

function getProductDescription(product, lang = getCurrentLanguage()) {
  return getLocalizedValue(product?.description, lang) || getLocalizedValue(product?.translations?.[lang]?.description, lang);
}

function getCategoryName(category, lang = getCurrentLanguage()) {
  return getLocalizedValue(category?.name, lang);
}

=======
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
function safeLang(lang) {
  return languages.includes(lang) ? lang : null;
}

function safeTheme(theme) {
  return themes.includes(theme) ? theme : null;
}

function t(key) {
  return copy[state.lang][key] || copy.mk[key] || key;
}

<<<<<<< HEAD
=======
function tr(entity) {
  return entity.translations?.[state.lang] || entity.name?.[state.lang] || entity[state.lang] || entity;
}

>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return typeof stored === "object" && stored ? stored : {};
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function isPriced(value) {
  return Number.isFinite(value);
}

function priceValue(value) {
  return isPriced(value) ? value : 0;
}

function formatPrice(value) {
  if (!isPriced(value)) {
    if (state.lang === "en") return "Price soon";
    if (state.lang === "bg") return "Цена скоро";
    return "Цена наскоро";
  }

  return state.lang === "en" ? `${value} MKD` : `${value} ден.`;
}

function formatTotal(totals) {
  return totals.hasUnpriced ? formatPrice(null) : formatPrice(totals.total);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(text = "") {
  return text
    .toString()
    .toLowerCase()
    .split("")
    .map((char) => cyrillicToLatinMap[char] || char)
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

<<<<<<< HEAD
function simplifiedLatin(text = "") {
  return text
    .replaceAll("dzh", "dz")
    .replaceAll("gj", "g")
    .replaceAll("kj", "k")
    .replaceAll("zh", "z")
    .replaceAll("ch", "c")
    .replaceAll("sh", "s");
}

function searchVariants(value) {
  const original = String(value || "").trim();
  const normalized = normalizeText(original);
  const simplified = simplifiedLatin(normalized);
  return [original, normalized, simplified].filter(Boolean);
}

function searchableProductText(item) {
  const category = categoryFor(item.category);
  const searchableParts = [
    item.category,
    ...(category ? languages.map((lang) => getCategoryName(category, lang)) : []),
    ...languages.flatMap((lang) => [getProductName(item, lang), getProductDescription(item, lang)])
  ];
  return searchableParts.flatMap(searchVariants).join(" ");
=======
function searchableProductText(item) {
  const category = categoryFor(item.category);
  return [
    item.category,
    ...(category ? languages.map((lang) => trFor(category, lang)) : []),
    ...languages.flatMap((lang) => {
      const translation = item.translations[lang] || {};
      return [translation.name, translation.description];
    })
  ].join(" ");
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
}

function resolveImageSrc(src) {
  if (!src) return resolveImageSrc(PLACEHOLDER_IMAGE_SRC);
  return src.startsWith("/menu-images/") || src.startsWith("/optimized/") ? `public${src}` : src;
}

<<<<<<< HEAD
=======
function trFor(entity, lang) {
  return entity.translations?.[lang] || entity.name?.[lang] || entity[lang] || "";
}

>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
function getProduct(id) {
  return products.find((item) => item.id === id);
}

function categoryFor(id) {
  return categories.find((item) => item.id === id);
}

function cartEntries() {
  return Object.entries(state.cart)
    .map(([id, item]) => ({ product: getProduct(id), qty: item.qty, note: item.note || "" }))
    .filter((entry) => entry.product && entry.qty > 0);
}

function cartTotals() {
  return cartEntries().reduce(
    (totals, entry) => ({
      count: totals.count + entry.qty,
      total: totals.total + priceValue(entry.product.price) * entry.qty,
      hasUnpriced: totals.hasUnpriced || !isPriced(entry.product.price)
    }),
    { count: 0, total: 0, hasUnpriced: false }
  );
}

function itemCountText(count) {
  return `${count} ${count === 1 ? t("itemOne") : t("itemMany")}`;
}

function saveTheme() {
  localStorage.setItem(THEME_KEY, state.theme);
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveTheme();
  render();
}

function toggleLanguagePanel() {
  state.languagePanelOpen = !state.languagePanelOpen;
  state.searchOpen = false;
  render();
}

function openSearch() {
  state.searchOpen = true;
  state.languagePanelOpen = false;
  render({ focusSearch: state.query.length });
}

function closeSearch() {
  if (state.query) {
    state.query = "";
    render({ focusSearch: 0 });
    return;
  }

  state.searchOpen = false;
  render();
}

function addToCart(id) {
  const current = state.cart[id] || { qty: 0, note: "" };
  state.cart[id] = { ...current, qty: current.qty + 1 };
  saveCart();
  showToast(t("added"));
  render();
}

function decrementCart(id) {
  const current = state.cart[id];
  if (!current) return;
  if (current.qty <= 1) {
    delete state.cart[id];
  } else {
    state.cart[id] = { ...current, qty: current.qty - 1 };
  }
  saveCart();
  render();
}

function updateNote(id, note) {
  if (!state.cart[id]) return;
  state.cart[id] = { ...state.cart[id], note };
  saveCart();
}

function clearCart() {
  state.cart = {};
  saveCart();
  render();
}

<<<<<<< HEAD
function setLanguage(lang) {
  const nextLang = safeLang(lang) || "mk";
  state.lang = nextLang;
  state.languagePanelOpen = false;
  localStorage.setItem(LANG_KEY, state.lang);
  render();
}

=======
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
function showToast(message) {
  state.toast = message;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 1600);
}

function navigate(view) {
  state.view = view;
  state.languagePanelOpen = false;
  if (state.searchOpen) {
    state.query = "";
  }
  state.searchOpen = false;
  if (view === "home") {
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
  render();
}

function setCategory(category) {
  state.category = category;
  state.view = "home";
  state.languagePanelOpen = false;
  if (state.searchOpen) {
    state.query = "";
  }
  state.searchOpen = false;
  render();
  window.requestAnimationFrame(() => {
    document.querySelector("#menuSections")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function render(options = {}) {
  document.documentElement.lang = state.lang;
  document.documentElement.dataset.theme = state.theme;
  document.body?.classList?.toggle("dark", state.theme === "dark");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", state.theme === "dark" ? "#06111d" : "#ffffff");
  }
  const isWaiter = state.view === "waiter";
  app.innerHTML = isWaiter ? renderWaiter() : renderAppShell();

  if (options.focusSearch !== undefined) {
    const input = document.querySelector("#headerSearchInput");
    if (input) {
      input.focus();
      input.setSelectionRange(options.focusSearch, options.focusSearch);
    }
  }
}

function renderAppShell() {
  const totals = cartTotals();
  return `
    <div class="app-shell with-nav">
      ${renderTopbar()}
      <main class="screen app-content">
        ${state.view === "home" ? renderHome() : ""}
        ${state.view === "order" ? renderOrder() : ""}
        ${state.view === "info" ? renderInfo() : ""}
      </main>
      ${totals.count > 0 && state.view !== "order" ? renderOrderBar(totals) : ""}
      ${renderBottomNav()}
      ${state.toast ? `<div class="toast" role="status">${escapeHtml(state.toast)}</div>` : ""}
    </div>
  `;
}

function renderTopbar() {
  const themeLabel = state.theme === "dark" ? t("themeDark") : t("themeLight");
  if (state.searchOpen) {
    return `
      <header class="topbar search-active">
        <div class="header-search">
          ${iconSearch()}
          <input id="headerSearchInput" class="header-search-input" type="search" value="${escapeHtml(state.query)}" placeholder="${t("search")}" autocomplete="off" />
          <button class="search-close" data-action="search-close" type="button" aria-label="Clear search" title="Clear search">
            ${iconClose()}
          </button>
        </div>
      </header>
    `;
  }

  return `
    <header class="topbar">
<<<<<<< HEAD
      <div class="brand-center" aria-label="SAFRON ${t("subtitle")}">
        <img class="brand-logo" src="${BRAND_LOGO_SRC}" alt="SAFRON" />
=======
      <div class="brand-center" aria-label="SAFFRON ${t("subtitle")}">
        <img class="brand-logo" src="${BRAND_LOGO_SRC}" alt="SAFFRON" />
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
        <p class="brand-subtitle">${t("subtitle")}</p>
      </div>
      <div class="header-actions">
        <button class="icon-button search-open" data-action="search-open" type="button" aria-label="${t("search")}" title="${t("search")}">
          ${iconSearch()}
        </button>
        <div class="language-compact ${state.languagePanelOpen ? "open" : ""}">
          <button class="icon-button language-icon-button" data-action="language-menu" type="button" aria-label="${t("languageLabel")}: ${state.lang.toUpperCase()}" aria-expanded="${state.languagePanelOpen}">
            ${iconGlobe()}
            <span class="language-current">${state.lang.toUpperCase()}</span>
            <span class="language-expanded-label">${t("languageLabel")}</span>
          </button>
          ${state.languagePanelOpen ? renderLanguagePanel() : ""}
        </div>
        <button class="icon-button theme-toggle" data-action="theme" type="button" aria-label="${escapeHtml(themeLabel)}" title="${escapeHtml(themeLabel)}">
          ${state.theme === "dark" ? iconMoon() : iconSun()}
        </button>
      </div>
    </header>
  `;
}

function renderLanguagePanel() {
  return `
    <section class="language-panel" aria-label="${t("languageLabel")}">
      ${languages
        .map(
          (lang) => `
            <button class="language-option ${lang === state.lang ? "active" : ""}" data-action="lang" data-lang="${lang}" type="button">
              <span>${languageNames[lang]}</span>
              <strong>${lang.toUpperCase()}</strong>
            </button>
          `
        )
        .join("")}
    </section>
  `;
}

function iconGlobe() {
  return `
    <svg class="control-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  `;
}

function iconSearch() {
  return `
    <svg class="control-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </svg>
  `;
}

function iconClose() {
  return `
    <svg class="control-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  `;
}

function iconSun() {
  return `
    <svg class="control-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4V2m0 20v-2M4.93 4.93 3.52 3.52m16.96 16.96-1.41-1.41M4 12H2m20 0h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41" />
      <circle cx="12" cy="12" r="4.5" />
    </svg>
  `;
}

function iconMoon() {
  return `
    <svg class="control-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 14.5A8 8 0 0 1 9.5 3.6 8.6 8.6 0 1 0 20.4 14.5Z" />
    </svg>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <img src="${HERO_IMAGE_SRC}" alt="" />
      <div class="hero-content">
        <span class="hero-badge">${t("heroBadge")}</span>
        <h2 class="hero-title">${t("heroTitle")}</h2>
        <p class="hero-text">${t("heroText")}</p>
        <button class="hero-button" data-action="category" data-category="all" type="button">${t("heroButton")}</button>
      </div>
    </section>
    ${renderCategoryRail()}
    <div id="menuSections">
      ${renderMenuSections()}
    </div>
  `;
}

function renderCategoryRail() {
  const allButton = {
    id: "all",
    image: "/optimized/categories/all.webp",
    name: { [state.lang]: t("all") }
  };
  return `
    <nav class="category-rail" aria-label="Menu categories">
      ${[allButton, ...categories]
        .map((category) => {
<<<<<<< HEAD
          const label = category.id === "all" ? t("all") : getCategoryName(category);
=======
          const label = category.id === "all" ? t("all") : tr(category);
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
          const image = resolveImageSrc(category.image);
          return `
            <button class="category-button ${state.category === category.id ? "active" : ""}" data-action="category" data-category="${category.id}" type="button">
              <span class="category-image-wrap">
                <img class="category-image" src="${escapeHtml(image)}" alt="${escapeHtml(label)}" loading="lazy" decoding="async" />
              </span>
              <span class="category-label">${escapeHtml(label)}</span>
            </button>
          `;
        })
        .join("")}
    </nav>
  `;
}

function renderMenuSections() {
  const normalizedQuery = normalizeText(state.query);
  const filtered = products.filter((item) => {
    const matchesCategory = normalizedQuery || state.category === "all" || item.category === state.category;
    const matchesSearch = !normalizedQuery || normalizeText(searchableProductText(item)).includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    return `
      <div class="empty-state">
        <p class="empty-title">${t("noResultsTitle")}</p>
        <p class="empty-text">${t("noResultsText")}</p>
      </div>
    `;
  }

  const visibleCategories =
    normalizedQuery || state.category === "all"
      ? categories
      : categories.filter((category) => category.id === state.category);

  return visibleCategories
    .map((category) => {
      const sectionItems = filtered.filter((item) => item.category === category.id);
      if (!sectionItems.length) return "";
      return `
        <section class="menu-section">
          <div class="section-heading">
<<<<<<< HEAD
            <h2 class="section-title">${escapeHtml(getCategoryName(category))}</h2>
=======
            <h2 class="section-title">${escapeHtml(tr(category))}</h2>
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
            <span class="section-count">${itemCountText(sectionItems.length)}</span>
          </div>
          <div class="product-grid">
            ${sectionItems.map(renderProductCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderProductCard(item) {
<<<<<<< HEAD
  const productName = getProductName(item);
  const productDescription = getProductDescription(item).trim();
  const qty = state.cart[item.id]?.qty || 0;
=======
  const translation = tr(item);
  const qty = state.cart[item.id]?.qty || 0;
  const description = translation.description?.trim();
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
  return `
    <article class="product-card">
      ${renderProductCardImage(item)}
      <div class="product-content">
        <div>
<<<<<<< HEAD
          <h3 class="product-title">${escapeHtml(productName)}</h3>
          ${productDescription ? `<p class="product-description">${escapeHtml(productDescription)}</p>` : ""}
=======
          <h3 class="product-title">${escapeHtml(translation.name)}</h3>
          ${description ? `<p class="product-description">${escapeHtml(description)}</p>` : ""}
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
        </div>
        <div class="product-footer">
          <span class="product-price">${formatPrice(item.price)}</span>
          ${qty > 0 ? renderQtyControl(item.id, qty) : `<button class="add-button" data-action="add" data-id="${item.id}" type="button">${t("add")}</button>`}
        </div>
      </div>
    </article>
  `;
}

function imageSources(item) {
  const image = item.image || PLACEHOLDER_IMAGE_SRC;
  const resolvedImage = resolveImageSrc(image);
  const placeholderFallback = resolveImageSrc(PLACEHOLDER_IMAGE_SRC);

  return { image, resolvedImage, placeholderFallback };
}

function renderProductCardImage(item) {
  const category = categoryFor(item.category);
  const { image, resolvedImage, placeholderFallback } = imageSources(item);
  const isPlaceholder = image === PLACEHOLDER_IMAGE_SRC;
<<<<<<< HEAD
  const productName = getProductName(item);
=======
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
  return `
    <div class="product-image-wrap visual-${category?.tone || "soft"} ${isPlaceholder ? "image-placeholder" : ""}">
      <img
        class="product-image"
        src="${escapeHtml(resolvedImage)}"
<<<<<<< HEAD
        alt="${escapeHtml(productName)}"
=======
        alt="${escapeHtml(tr(item).name)}"
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
        loading="lazy"
        decoding="async"
        data-fallback-src="${escapeHtml(placeholderFallback)}"
        data-placeholder-src="${escapeHtml(placeholderFallback)}"
        onerror="handleImageError(this)"
      />
    </div>
  `;
}

function renderOrderThumb(item) {
  const category = categoryFor(item.category);
  const { resolvedImage, placeholderFallback } = imageSources(item);
<<<<<<< HEAD
  const productName = getProductName(item);
=======
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2

  return `
    <div class="order-thumb visual-${category?.tone || "soft"}">
      <img
        class="order-thumb-image"
        src="${escapeHtml(resolvedImage)}"
<<<<<<< HEAD
        alt="${escapeHtml(productName)}"
=======
        alt="${escapeHtml(tr(item).name)}"
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
        loading="lazy"
        decoding="async"
        data-fallback-src="${escapeHtml(placeholderFallback)}"
        data-placeholder-src="${escapeHtml(placeholderFallback)}"
        onerror="handleImageError(this)"
      />
    </div>
  `;
}

function handleImageError(image) {
  const fallback = image.dataset.fallbackSrc;
  const placeholder = image.dataset.placeholderSrc || PLACEHOLDER_IMAGE_SRC;

  if (fallback && image.dataset.usedFallback !== "true") {
    image.dataset.usedFallback = "true";
    image.src = fallback;
    return;
  }

  image.onerror = null;
  image.src = placeholder;
}

function renderQtyControl(id, qty) {
  return `
    <div class="qty-control" aria-label="Quantity controls">
      <button class="qty-button" data-action="dec" data-id="${id}" type="button" aria-label="Decrease">−</button>
      <span class="qty-number">${qty}</span>
      <button class="qty-button plus" data-action="add" data-id="${id}" type="button" aria-label="Increase">+</button>
    </div>
  `;
}

function renderOrder() {
  const entries = cartEntries();
  const totals = cartTotals();

  if (!entries.length) {
    return `
      <section class="screen-title-row">
        <div>
          <p class="screen-kicker">${t("orderKicker")}</p>
          <h2 class="screen-title">${t("orderTitle")}</h2>
          <p class="screen-subtitle">${t("orderSubtitle")}</p>
        </div>
      </section>
      <div class="empty-state">
        <p class="empty-title">${t("emptyOrderTitle")}</p>
        <p class="empty-text">${t("emptyOrderText")}</p>
        <button class="primary-button" data-action="view" data-view="home" type="button">${t("continueMenu")}</button>
      </div>
    `;
  }

  return `
    <section class="screen-title-row">
      <div>
        <p class="screen-kicker">${t("orderKicker")}</p>
        <h2 class="screen-title">${t("orderTitle")}</h2>
        <p class="screen-subtitle">${t("orderSubtitle")}</p>
      </div>
    </section>
    <div class="order-list">
      ${entries.map(renderOrderItem).join("")}
    </div>
    <section class="total-panel">
      <div class="total-row">
        <span class="total-label">${t("total")}</span>
        <span class="total-value">${formatTotal(totals)}</span>
      </div>
      <div class="order-actions">
        <button class="primary-button" data-action="view" data-view="waiter" type="button">${t("showWaiter")}</button>
        <button class="secondary-button" data-action="view" data-view="home" type="button">${t("continueMenu")}</button>
        <button class="danger-button" data-action="clear" type="button">${t("clearOrder")}</button>
      </div>
    </section>
  `;
}

function renderOrderItem(entry) {
  const item = entry.product;
<<<<<<< HEAD
  const productName = getProductName(item);
=======
  const translation = tr(item);
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
  const subtotal = isPriced(item.price) ? item.price * entry.qty : null;
  return `
    <article class="order-item">
      ${renderOrderThumb(item)}
      <div class="order-details">
        <div class="order-row">
<<<<<<< HEAD
          <h3 class="order-name">${escapeHtml(productName)}</h3>
=======
          <h3 class="order-name">${escapeHtml(translation.name)}</h3>
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
          <span class="order-line-price">${formatPrice(subtotal)}</span>
        </div>
        <div class="order-meta">
          <span class="unit-price">${formatPrice(item.price)}</span>
          ${renderQtyControl(item.id, entry.qty)}
        </div>
        <textarea class="note-input" data-note-id="${item.id}" placeholder="${t("notePlaceholder")}">${escapeHtml(entry.note)}</textarea>
      </div>
    </article>
  `;
}

function renderOrderBar(totals) {
  return `
    <button class="order-bar" data-action="view" data-view="order" type="button">
      ${itemCountText(totals.count)} · ${formatTotal(totals)} · ${t("viewOrder")}
    </button>
  `;
}

function renderBottomNav() {
  const items = [
    ["home", iconHome(), t("navHome")],
    ["order", iconOrder(), t("navOrder")],
    ["info", iconInfo(), t("navInfo")]
  ];
  return `
    <nav class="bottom-nav" aria-label="Primary">
      ${items
        .map(
          ([view, icon, label]) => `
            <button class="nav-button ${state.view === view ? "active" : ""}" data-action="view" data-view="${view}" type="button">
              <span class="nav-icon" aria-hidden="true">${icon}</span>
              <span>${escapeHtml(label)}</span>
            </button>
          `
        )
        .join("")}
    </nav>
  `;
}

function iconHome() {
  return `
    <svg class="nav-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  `;
}

function iconOrder() {
  return `
    <svg class="nav-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4h10a2 2 0 0 1 2 2v14l-3-2-2 2-2-2-2 2-2-2-3 2V6a2 2 0 0 1 2-2Z" />
      <path d="M9 9h6M9 13h6" />
    </svg>
  `;
}

function iconInfo() {
  return `
    <svg class="nav-svg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6M12 7.2v.1" />
    </svg>
  `;
}

function iconRoute() {
  return `
    <svg class="info-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 19c-1.7 0-3-1.3-3-3s1.3-3 3-3h12c1.7 0 3-1.3 3-3s-1.3-3-3-3H8" />
      <path d="M8 4 5 7l3 3" />
      <circle cx="6" cy="19" r="1.4" />
      <circle cx="18" cy="7" r="1.4" />
    </svg>
  `;
}

function iconInstagram() {
  return `
    <svg class="info-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M16.8 7.2h.01" />
    </svg>
  `;
}

function renderInfo() {
  const cards = [
    ["◷", t("hoursTitle"), t("hoursText")],
    ["⌖", t("locationTitle"), t("locationText"), t("locationLinkLabel"), "https://maps.app.goo.gl/mg6Qnp3Y7yirYuLB6", iconRoute()],
    ["◎", t("instagramTitle"), t("instagramText"), t("instagramLinkLabel"), "https://www.instagram.com/gradskibazendelchevo/", iconInstagram()],
    ["⌁", t("wifiTitle"), t("wifiText")]
  ];

  return `
    <section class="screen-title-row">
      <div>
        <p class="screen-kicker">${t("infoKicker")}</p>
        <h2 class="screen-title">${t("infoTitle")}</h2>
        <p class="screen-subtitle">${t("infoSubtitle")}</p>
      </div>
    </section>
    <div class="info-grid">
      ${cards
        .map(
          ([icon, title, text, linkLabel, href, linkIcon]) => `
            <article class="info-card">
              <span class="info-icon" aria-hidden="true">${icon}</span>
              <div>
                <h3 class="info-title">${escapeHtml(title)}</h3>
                <p class="info-text">${escapeHtml(text)}</p>
                ${href ? `<a class="info-link" href="${href}" target="_blank" rel="noopener noreferrer">${linkIcon || ""}<span>${escapeHtml(linkLabel)}</span></a>` : ""}
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderWaiter() {
  const entries = cartEntries();
  const totals = cartTotals();

  return `
    <main class="waiter-shell">
      <section class="waiter-card">
<<<<<<< HEAD
        <div class="waiter-brand" aria-label="SAFRON ${t("subtitle")}">
          <img class="waiter-brand-logo" src="${BRAND_LOGO_SRC}" alt="SAFRON" />
=======
        <div class="waiter-brand" aria-label="SAFFRON ${t("subtitle")}">
          <img class="waiter-brand-logo" src="${BRAND_LOGO_SRC}" alt="SAFFRON" />
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
          <p class="brand-subtitle waiter-brand-subtitle">${t("subtitle")}</p>
        </div>
        <h2 class="waiter-title">${t("waiterTitle")}</h2>
        <p class="waiter-help">${t("waiterHelp")}</p>
        ${
          entries.length
            ? `
              <div class="waiter-summary">
                ${entries
                  .map(
<<<<<<< HEAD
                    renderWaiterLine
=======
                    (entry) => `
                      <div class="waiter-line">
                        <span class="waiter-qty">${entry.qty}×</span>
                        <div class="waiter-product">
                          <p class="waiter-name">${escapeHtml(tr(entry.product).name)}</p>
                          ${entry.note ? `<p class="waiter-note">${escapeHtml(entry.note)}</p>` : ""}
                        </div>
                        <span class="waiter-price">${formatPrice(isPriced(entry.product.price) ? entry.product.price * entry.qty : null)}</span>
                      </div>
                    `
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
                  )
                  .join("")}
              </div>
              <div class="waiter-total">
                <span>${t("total")}</span>
                <strong>${formatTotal(totals)}</strong>
              </div>
            `
            : `
              <div class="empty-state">
                <p class="empty-title">${t("emptyOrderTitle")}</p>
                <p class="empty-text">${t("emptyOrderText")}</p>
              </div>
            `
        }
        <div class="waiter-actions">
          <button class="primary-button" data-action="view" data-view="home" type="button">${t("backMenu")}</button>
        </div>
      </section>
    </main>
  `;
}

<<<<<<< HEAD
function renderWaiterLine(entry) {
  const productName = getProductName(entry.product);
  return `
    <div class="waiter-line">
      <span class="waiter-qty">${entry.qty}×</span>
      <div class="waiter-product">
        <p class="waiter-name">${escapeHtml(productName)}</p>
        ${entry.note ? `<p class="waiter-note">${escapeHtml(entry.note)}</p>` : ""}
      </div>
      <span class="waiter-price">${formatPrice(isPriced(entry.product.price) ? entry.product.price * entry.qty : null)}</span>
    </div>
  `;
}

=======
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
app.addEventListener("click", (event) => {
  if (state.languagePanelOpen && !event.target.closest(".language-compact")) {
    state.languagePanelOpen = false;
    render();
    return;
  }

  const target = event.target.closest("[data-action]");
  if (!target) return;

  const { action, id, view, lang, category } = target.dataset;

  if (action === "add") addToCart(id);
  if (action === "dec") decrementCart(id);
  if (action === "view") navigate(view);
  if (action === "category") setCategory(category);
  if (action === "clear") clearCart();
  if (action === "theme") toggleTheme();
  if (action === "language-menu") toggleLanguagePanel();
  if (action === "search-open") openSearch();
  if (action === "search-close") closeSearch();
<<<<<<< HEAD
  if (action === "lang") setLanguage(lang);
=======
  if (action === "lang") {
    state.lang = safeLang(lang) || "mk";
    state.languagePanelOpen = false;
    localStorage.setItem(LANG_KEY, state.lang);
    render();
  }
>>>>>>> 8defbc2d4c2013087c9f2752efa3aa8398fb16c2
});

app.addEventListener("input", (event) => {
  if (event.target.id === "headerSearchInput") {
    state.query = event.target.value;
    render({ focusSearch: event.target.selectionStart || state.query.length });
  }

  if (event.target.matches("[data-note-id]")) {
    updateNote(event.target.dataset.noteId, event.target.value);
  }
});

render();

import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_KALININGRAD = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/6bded15e-6c3a-424e-945c-7ab5e6f43746.jpg";
const IMG_ZELENOGRADSK = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/b5884ead-a3eb-4e45-a7e5-5a8b07994d38.jpg";
const IMG_SVETLOGORSK = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/2d12ea5e-3e2c-4256-a602-015a82d300ac.jpg";

// Экскурсии — уникальные фото
const IMG_TOUR_KANT = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/6f77b0bd-9f3a-4bec-a8ba-619e8119ec4a.jpg";
const IMG_TOUR_COAST = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/cb6c844d-ea6d-4b23-939a-7d8ff749f2de.jpg";
const IMG_TOUR_AMBER = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/3ba6417f-6987-45ee-ab1b-4cb0744c28b5.jpg";
const IMG_TOUR_CASTLE = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/9c0e996d-2e93-4ed1-970d-9f3da417ae82.jpg";
const IMG_TOUR_RING = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/1e95547f-e810-4f5b-9a96-95e343fd6835.jpg";
const IMG_TOUR_NIGHT = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/9516c60e-a443-4e46-813a-df5d02fae560.jpg";

// Галерея — уникальные фото
const IMG_GAL_SVETLOGORSK = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/4dabf3b1-354f-4b11-a1b9-2fef576e0b49.jpg";
const IMG_GAL_FOREST = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/31441046-c2d6-42e7-841c-78222e9024de.jpg";
const IMG_GAL_SUNSET = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/999ffdd0-affb-4bb1-9131-d6a59c4676bd.jpg";
const IMG_GAL_RYBNAYA = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/bcc8f98d-28d5-4f0d-aa8f-b0c4b31f6b7b.jpg";
const IMG_GAL_LIGHTHOUSE = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/1939699a-e8bc-4a08-bc47-90ef08611441.jpg";
const IMG_GAL_AMBER = "https://cdn.poehali.dev/projects/c6707341-e8e3-41d3-b663-2e13696554ed/files/c2dc692d-234a-4856-bf32-002aa0ed4a8a.jpg";

const sections = ["Главная", "Экскурсии", "Маршруты", "Отзывы", "Блог", "Галерея", "Бронирование", "Контакты"];

const tours = [
  {
    id: 1,
    title: "Королевский Калининград",
    type: "Пешеходная",
    duration: "3 часа",
    price: "1 200 ₽",
    cities: ["Калининград"],
    description: "Остров Канта, Рыбная деревня, Рыбный рынок, Бранденбургские ворота — живая история Пруссии в каждом шаге",
    icon: "Footprints",
    tag: "Хит",
    img: IMG_TOUR_KANT,
  },
  {
    id: 2,
    title: "Балтийское побережье",
    type: "На транспорте",
    duration: "8 часов",
    price: "3 500 ₽",
    cities: ["Зеленоградск", "Светлогорск"],
    description: "Куршская коса, янтарный пляж, старинный курорт со свежим морским воздухом и вековыми соснами",
    icon: "Car",
    tag: "Популярное",
    img: IMG_TOUR_COAST,
  },
  {
    id: 3,
    title: "Янтарный берег",
    type: "На транспорте",
    duration: "6 часов",
    price: "2 800 ₽",
    cities: ["Янтарный", "Светлогорск"],
    description: "Крупнейшее в мире месторождение янтаря, обзорная площадка над карьером, мастер-класс по поделкам",
    icon: "Gem",
    tag: "Уникальное",
    img: IMG_TOUR_AMBER,
  },
  {
    id: 4,
    title: "Средневековый Черняховск",
    type: "На транспорте",
    duration: "5 часов",
    price: "2 400 ₽",
    cities: ["Черняховск"],
    description: "Замок Инстербург, руины тевтонских укреплений, лютеранские кирхи — настоящий средневековый детектив",
    icon: "Castle",
    tag: "Для историков",
    img: IMG_TOUR_CASTLE,
  },
  {
    id: 5,
    title: "Большое кольцо Самбии",
    type: "На транспорте",
    duration: "10 часов",
    price: "4 200 ₽",
    cities: ["Зеленоградск", "Янтарный", "Светлогорск", "Калининград"],
    description: "Полное погружение: четыре города за один день с гидом, обед в местном ресторане и янтарный сувенир в подарок",
    icon: "MapPin",
    tag: "Премиум",
    img: IMG_TOUR_RING,
  },
  {
    id: 6,
    title: "Ночной Калининград",
    type: "Пешеходная",
    duration: "2 часа",
    price: "900 ₽",
    cities: ["Калининград"],
    description: "Иллюминированные ворота, подсвеченный собор на острове Канта, легенды прусских ночей — вирусный формат для Instagram",
    icon: "Moon",
    tag: "Вирусное",
    img: IMG_TOUR_NIGHT,
  },
];

const routes = [
  {
    city: "Калининград",
    color: "#8B5A3C",
    stops: [
      { time: "10:00", place: "Площадь Победы", note: "Сбор группы, знакомство с гидом" },
      { time: "10:30", place: "Рыбная деревня", note: "Архитектура, прусский колорит, фото" },
      { time: "11:15", place: "Остров Канта", note: "Кафедральный собор, могила Канта" },
      { time: "12:30", place: "Музей Мирового океана", note: "Экспозиция + подводная лодка" },
      { time: "13:30", place: "Рыбный рынок", note: "Традиционная закуска из балтийской рыбы" },
    ],
  },
  {
    city: "Зеленоградск + Коса",
    color: "#9CAF88",
    stops: [
      { time: "08:30", place: "Выезд из Калининграда", note: "Комфортный автобус, 40 минут пути" },
      { time: "09:15", place: "Набережная Зеленоградска", note: "Балтийский прогулочный променад" },
      { time: "10:30", place: "Куршская коса", note: "Дюна Ореховая, танцующий лес" },
      { time: "13:00", place: "Обед на косе", note: "Рыба горячего копчения, местная кухня" },
      { time: "15:00", place: "Возвращение", note: "Прибытие в Калининград к 16:00" },
    ],
  },
  {
    city: "Янтарный берег",
    color: "#C4855A",
    stops: [
      { time: "09:00", place: "Выезд из Калининграда", note: "Трасса через Приморское шоссе" },
      { time: "10:30", place: "Янтарный карьер", note: "Обзорная площадка, добыча янтаря" },
      { time: "12:00", place: "Янтарный музей", note: "Экспозиция + мастер-класс по огранке" },
      { time: "13:30", place: "Пляж Янтарного", note: "Золотистый песок, свежий воздух Балтики" },
      { time: "15:00", place: "Светлогорск", note: "Органный зал, Раушенский парк, набережная" },
    ],
  },
];

const reviews = [
  {
    name: "Марина Соколова",
    city: "Москва",
    date: "Март 2026",
    tour: "Королевский Калининград",
    rating: 5,
    text: "Никогда не думала, что история может быть такой захватывающей! Гид рассказывал о каждом камне мостовой как о живом свидетеле эпохи. Остров Канта на закате — это просто открытка.",
  },
  {
    name: "Алексей Громов",
    city: "Санкт-Петербург",
    date: "Февраль 2026",
    tour: "Большое кольцо Самбии",
    rating: 5,
    text: "Взял премиум-подписку, получил скидку 20% и доступ к эксклюзивным маршрутам. За один день объехали 4 города, всё чётко по расписанию. Обед в рыбном ресторане на косе — отдельный восторг.",
  },
  {
    name: "Наталья Васильева",
    city: "Екатеринбург",
    date: "Январь 2026",
    tour: "Балтийское побережье",
    rating: 5,
    text: "Светлогорск зимой — это совершенно отдельное настроение. Пустые пляжи, шум прибоя, уютные кафе. Группа маленькая, 8 человек, гид Анна — просто звезда.",
  },
  {
    name: "Дмитрий Козлов",
    city: "Новосибирск",
    date: "Апрель 2026",
    tour: "Ночной Калининград",
    rating: 5,
    text: "Ночная экскурсия — полный wow-эффект! Бранденбургские ворота в подсветке, легенды о прусских призраках, горячий глинтвейн в конце. Снял 12 сторис, набрали 40к просмотров.",
  },
];

const blogPosts = [
  {
    date: "25 апреля 2026",
    tag: "Ньюсджекинг",
    title: "Янтарь снова в тренде: почему звёзды выбирают Балтику",
    excerpt: "Пока весь мир обсуждает украшения с янтарём на Неделе моды в Милане, мы напоминаем: первоисточник — в 15 минутах от Калининграда.",
    readTime: "3 мин",
  },
  {
    date: "18 апреля 2026",
    tag: "Советы",
    title: "5 причин приехать в Калининград именно сейчас",
    excerpt: "Майские праздники, цветущие каштаны и минимум туристов — идеальное сочетание для первого знакомства с самым европейским городом России.",
    readTime: "5 мин",
  },
  {
    date: "10 апреля 2026",
    tag: "Маршруты",
    title: "Что Кант думал бы о современном Калининграде",
    excerpt: "2026 год — год 300-летия Канта. Мы прошли его любимыми маршрутами и сравнили, что изменилось, а что осталось вечным.",
    readTime: "7 мин",
  },
];

const galleryImages = [
  { src: IMG_GAL_RYBNAYA, caption: "Рыбная деревня — прусская архитектура у воды" },
  { src: IMG_GAL_FOREST, caption: "Танцующий лес Куршской косы" },
  { src: IMG_GAL_SUNSET, caption: "Балтийский закат — пустые пляжи" },
  { src: IMG_GAL_SVETLOGORSK, caption: "Светлогорск — курорт над обрывом" },
  { src: IMG_GAL_LIGHTHOUSE, caption: "Маяк Зеленоградска" },
  { src: IMG_GAL_AMBER, caption: "Балтийский янтарь — золото Балтики" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Все");
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  const sectionId: Record<string, string> = {
    Главная: "hero",
    Экскурсии: "tours",
    Маршруты: "routes",
    Отзывы: "reviews",
    Блог: "blog",
    Галерея: "gallery",
    Бронирование: "booking",
    Контакты: "contacts",
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const filteredTours = selectedType === "Все" ? tours : tours.filter((t) => t.type === selectedType);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--beige)", color: "var(--warm-brown)" }}>

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backgroundColor: "rgba(245,239,230,0.95)", backdropFilter: "blur(12px)", borderColor: "var(--sand)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")}>
            <span className="text-2xl font-cormorant font-semibold" style={{ color: "var(--terracotta)" }}>
              Балтийские горизонты
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(sectionId[s])}
                className={`nav-link ${activeSection === sectionId[s] ? "active" : ""}`}
              >
                {s}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              className="btn-terracotta px-5 py-2 rounded-lg text-sm font-golos font-medium"
              onClick={() => setPremiumOpen(true)}
            >
              Премиум
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "var(--terracotta)" }}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t px-6 py-4 flex flex-col gap-4"
            style={{ backgroundColor: "var(--cream)", borderColor: "var(--sand)" }}>
            {sections.map((s) => (
              <button key={s} onClick={() => scrollTo(sectionId[s])} className="nav-link text-left py-1">{s}</button>
            ))}
            <button className="btn-terracotta px-5 py-2 rounded-lg text-sm font-golos font-medium w-fit"
              onClick={() => { setPremiumOpen(true); setMobileMenuOpen(false); }}>
              Премиум-доступ
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_KALININGRAD})` }} />
        <div className="absolute inset-0 gradient-hero" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="tag-badge mb-6 animate-fade-up">
              <Icon name="MapPin" size={12} className="mr-1" />
              Янтарный край России
            </div>
            <h1 className="text-6xl lg:text-8xl font-cormorant font-light leading-none mb-6 animate-fade-up-delay-1"
              style={{ color: "var(--warm-brown)" }}>
              Открой<br />
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>Балтику</em><br />
              заново
            </h1>
            <p className="text-lg font-golos leading-relaxed mb-8 animate-fade-up-delay-2 max-w-md"
              style={{ color: "var(--warm-brown)", opacity: 0.82 }}>
              Калининград, Зеленоградск, Светлогорск, Янтарный, Черняховск —
              авторские экскурсии с живым рассказом о прусской душе Балтики
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <button className="btn-terracotta px-8 py-3 rounded-lg font-golos font-medium flex items-center gap-2"
                onClick={() => scrollTo("tours")}>
                <Icon name="Compass" size={18} />
                Выбрать экскурсию
              </button>
              <button className="px-8 py-3 rounded-lg font-golos font-medium border flex items-center gap-2"
                style={{ borderColor: "var(--sand)", backgroundColor: "rgba(255,255,255,0.5)", color: "var(--warm-brown)" }}
                onClick={() => scrollTo("routes")}>
                <Icon name="Map" size={18} />
                Маршруты
              </button>
            </div>

            <div className="flex gap-8 mt-12 animate-fade-up-delay-4">
              {[["200+", "Экскурсий проведено"], ["4.9★", "Средний рейтинг"], ["12", "Авторских маршрутов"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-cormorant font-semibold" style={{ color: "var(--terracotta)" }}>{val}</div>
                  <div className="text-xs font-golos mt-1" style={{ color: "var(--warm-brown)", opacity: 0.6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 animate-fade-up-delay-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 340 }}>
              <img src={IMG_ZELENOGRADSK} alt="Зеленоградск" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "Footprints", label: "Пешеходные туры", desc: "3 маршрута" },
                { icon: "Car", label: "На транспорте", desc: "9 маршрутов" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4 flex items-center gap-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", border: "1px solid var(--sand)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--beige-dark)" }}>
                    <Icon name={item.icon} size={20} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <div>
                    <div className="text-sm font-golos font-medium" style={{ color: "var(--warm-brown)" }}>{item.label}</div>
                    <div className="text-xs" style={{ color: "var(--terracotta)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section id="tours" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-5xl font-cormorant font-light mb-4">Виды экскурсий</h2>
            <p className="font-golos max-w-xl mx-auto" style={{ opacity: 0.7 }}>
              Пешеходные прогулки по историческому центру и автобусные туры вдоль балтийского побережья
            </p>
          </div>

          <div className="flex gap-3 mb-10 flex-wrap justify-center">
            {["Все", "Пешеходная", "На транспорте"].map((type) => (
              <button key={type} onClick={() => setSelectedType(type)}
                className="px-6 py-2 rounded-full text-sm font-golos transition-all"
                style={{
                  backgroundColor: selectedType === type ? "var(--terracotta)" : "var(--beige-dark)",
                  color: selectedType === type ? "var(--cream)" : "var(--warm-brown)",
                  border: "1px solid var(--sand)",
                }}>
                {type}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="card-hover rounded-2xl overflow-hidden"
                style={{ backgroundColor: "var(--beige)", border: "1px solid var(--sand)" }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3"><span className="tag-badge">{tour.tag}</span></div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-golos"
                    style={{ backgroundColor: "rgba(245,239,230,0.9)", color: "var(--terracotta)" }}>
                    <Icon name={tour.icon} size={12} />{tour.type}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {tour.cities.map((c) => (
                      <span key={c} className="text-xs font-golos px-2 py-0.5 rounded"
                        style={{ backgroundColor: "var(--beige-dark)", color: "var(--terracotta)" }}>{c}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-cormorant font-semibold mb-2">{tour.title}</h3>
                  <p className="text-sm font-golos leading-relaxed mb-4" style={{ opacity: 0.7 }}>{tour.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--sand)" }}>
                    <div className="flex items-center gap-1 text-sm font-golos" style={{ opacity: 0.6 }}>
                      <Icon name="Clock" size={14} />{tour.duration}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-cormorant text-xl font-semibold" style={{ color: "var(--terracotta)" }}>{tour.price}</span>
                      <button className="btn-terracotta px-4 py-1.5 rounded-lg text-sm font-golos"
                        onClick={() => { setSelectedTour(tour.id); scrollTo("booking"); }}>
                        Забронировать
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-24 px-6" style={{ backgroundColor: "var(--beige-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-5xl font-cormorant font-light mb-4">Маршруты</h2>
            <p className="font-golos max-w-xl mx-auto" style={{ opacity: 0.7 }}>
              Пошаговый план — что делаем сначала, что потом и когда приезжаем
            </p>
          </div>

          <div className="flex gap-3 mb-10 flex-wrap justify-center">
            {routes.map((r, i) => (
              <button key={r.city} onClick={() => setSelectedRouteIdx(i)}
                className="px-5 py-2 rounded-full text-sm font-golos transition-all"
                style={{
                  backgroundColor: selectedRouteIdx === i ? r.color : "var(--beige)",
                  color: selectedRouteIdx === i ? "var(--cream)" : "var(--warm-brown)",
                  border: "1px solid var(--sand)",
                }}>
                {r.city}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: 320 }}>
              <img
                src={selectedRouteIdx === 0 ? IMG_KALININGRAD : selectedRouteIdx === 1 ? IMG_ZELENOGRADSK : IMG_SVETLOGORSK}
                alt={routes[selectedRouteIdx].city}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-cormorant font-semibold mb-6"
                style={{ color: routes[selectedRouteIdx].color }}>
                {routes[selectedRouteIdx].city}
              </h3>
              <div className="relative">
                <div className="absolute left-[5px] top-3 bottom-3 w-px" style={{ backgroundColor: "var(--sand)" }} />
                <div className="flex flex-col gap-6">
                  {routes[selectedRouteIdx].stops.map((stop, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="timeline-dot mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <span className="text-sm font-golos font-medium px-2 py-0.5 rounded"
                            style={{ backgroundColor: "var(--beige)", color: routes[selectedRouteIdx].color }}>
                            {stop.time}
                          </span>
                          <span className="font-cormorant text-lg font-semibold">{stop.place}</span>
                        </div>
                        <p className="text-sm font-golos" style={{ opacity: 0.7 }}>{stop.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-5xl font-cormorant font-light mb-4">Отзывы</h2>
            <p className="font-golos max-w-xl mx-auto" style={{ opacity: 0.7 }}>
              Реальные впечатления путешественников из разных городов России
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-hover rounded-2xl p-7"
                style={{ backgroundColor: "var(--beige)", border: "1px solid var(--sand)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-cormorant font-semibold"
                      style={{ backgroundColor: "var(--beige-dark)", color: "var(--terracotta)" }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-golos font-medium">{r.name}</div>
                      <div className="text-xs font-golos" style={{ opacity: 0.6 }}>{r.city} · {r.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Icon key={j} name="Star" size={14} className="review-star fill-current" />
                    ))}
                  </div>
                </div>
                <div className="tag-badge mb-3">{r.tour}</div>
                <p className="text-sm font-golos leading-relaxed" style={{ opacity: 0.85 }}>&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
            style={{ backgroundColor: "var(--beige-dark)", border: "1px solid var(--sand)" }}>
            {[
              { icon: "Star", val: "4.9 / 5", label: "Средний рейтинг" },
              { icon: "Users", val: "840+", label: "Довольных туристов" },
              { icon: "MessageCircle", val: "200+", label: "Отзывов получено" },
              { icon: "Repeat2", val: "68%", label: "Возвращаются снова" },
            ].map((stat) => (
              <div key={stat.label}>
                <Icon name={stat.icon} size={24} className="mx-auto mb-2" style={{ color: "var(--terracotta)" }} />
                <div className="text-2xl font-cormorant font-semibold">{stat.val}</div>
                <div className="text-xs font-golos mt-1" style={{ opacity: 0.6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 px-6" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <div className="section-divider mb-6" />
              <h2 className="text-5xl font-cormorant font-light">Блог</h2>
              <p className="font-golos mt-3 max-w-md" style={{ opacity: 0.7 }}>
                Ньюсджекинг, советы, истории — контент, который хочется репостить
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="card-hover rounded-2xl overflow-hidden"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--sand)" }}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="tag-badge">{post.tag}</span>
                    <span className="text-xs font-golos" style={{ opacity: 0.5 }}>{post.readTime} чтения</span>
                  </div>
                  <h3 className="text-xl font-cormorant font-semibold leading-snug mb-3">{post.title}</h3>
                  <p className="text-sm font-golos leading-relaxed mb-5" style={{ opacity: 0.7 }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-golos" style={{ opacity: 0.5 }}>{post.date}</span>
                    <button className="text-sm font-golos flex items-center gap-1" style={{ color: "var(--terracotta)" }}>
                      Читать <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-6 flex gap-4 items-start"
            style={{ backgroundColor: "var(--beige-dark)", border: "1px solid var(--sand)" }}>
            <Icon name="TrendingUp" size={24} className="flex-shrink-0 mt-1" style={{ color: "var(--terracotta)" }} />
            <div>
              <div className="font-cormorant text-xl font-semibold mb-1">Вирусный формат</div>
              <p className="text-sm font-golos" style={{ opacity: 0.8 }}>
                Ночные экскурсии, янтарные находки на пляже, истории о прусских призраках — контент для Reels и Shorts.
                Присоединяйтесь к тренду <span style={{ color: "var(--terracotta)" }}>#БалтийскиеГоризонты</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6" style={{ backgroundColor: "var(--beige-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-5xl font-cormorant font-light mb-4">Галерея</h2>
            <p className="font-golos max-w-xl mx-auto" style={{ opacity: 0.7 }}>
              Янтарный берег через объектив наших туристов
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i}
                className={`card-hover rounded-xl overflow-hidden group relative ${i === 0 ? "md:col-span-2" : ""}`}
                style={{ aspectRatio: "4/3" }}>
                <img src={img.src} alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(92,61,46,0.6), transparent)" }}>
                  <p className="text-sm font-golos" style={{ color: "var(--cream)" }}>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-5xl font-cormorant font-light mb-4">Бронирование</h2>
            <p className="font-golos" style={{ opacity: 0.7 }}>
              Выберите экскурсию, дату и количество мест — и вперёд на Балтику
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-golos font-medium"
                  style={{
                    backgroundColor: bookingStep >= step ? "var(--terracotta)" : "var(--beige-dark)",
                    color: bookingStep >= step ? "var(--cream)" : "var(--warm-brown)",
                  }}>
                  {step}
                </div>
                {step < 3 && <div className="w-12 h-px" style={{ backgroundColor: "var(--sand)" }} />}
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--beige)", border: "1px solid var(--sand)" }}>
            {bookingStep === 1 && (
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-6">Выберите экскурсию</h3>
                <div className="flex flex-col gap-3 max-h-80 overflow-y-auto pr-1">
                  {tours.map((t) => (
                    <button key={t.id} onClick={() => setSelectedTour(t.id)}
                      className="flex items-center justify-between p-4 rounded-xl text-left transition-all"
                      style={{
                        backgroundColor: selectedTour === t.id ? "var(--beige-dark)" : "var(--cream)",
                        border: `1px solid ${selectedTour === t.id ? "var(--terracotta)" : "var(--sand)"}`,
                      }}>
                      <div>
                        <div className="font-golos font-medium">{t.title}</div>
                        <div className="text-xs font-golos mt-0.5" style={{ opacity: 0.6 }}>{t.type} · {t.duration}</div>
                      </div>
                      <span className="font-cormorant text-lg font-semibold" style={{ color: "var(--terracotta)" }}>{t.price}</span>
                    </button>
                  ))}
                </div>
                <button className="mt-6 btn-terracotta w-full py-3 rounded-xl font-golos font-medium"
                  onClick={() => selectedTour && setBookingStep(2)}
                  style={{ opacity: selectedTour ? 1 : 0.5 }}>
                  Далее — выбрать дату
                </button>
              </div>
            )}

            {bookingStep === 2 && (
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-6">Дата и участники</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-golos mb-2" style={{ opacity: 0.7 }}>Дата экскурсии</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl font-golos text-sm border outline-none"
                      style={{ backgroundColor: "var(--cream)", borderColor: "var(--sand)", color: "var(--warm-brown)" }} />
                  </div>
                  <div>
                    <label className="block text-sm font-golos mb-2" style={{ opacity: 0.7 }}>Количество участников</label>
                    <select className="w-full px-4 py-3 rounded-xl font-golos text-sm border outline-none"
                      style={{ backgroundColor: "var(--cream)", borderColor: "var(--sand)", color: "var(--warm-brown)" }}>
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n}>{n} {n === 1 ? "человек" : n < 5 ? "человека" : "человек"}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-xl font-golos font-medium border"
                    style={{ borderColor: "var(--sand)", color: "var(--warm-brown)" }}
                    onClick={() => setBookingStep(1)}>Назад</button>
                  <button className="flex-1 btn-terracotta py-3 rounded-xl font-golos font-medium"
                    onClick={() => setBookingStep(3)}>Далее — ваши данные</button>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div>
                <h3 className="font-cormorant text-2xl font-semibold mb-6">Ваши контакты</h3>
                <div className="flex flex-col gap-4 mb-6">
                  {[
                    { label: "Имя и фамилия", placeholder: "Александра Петрова", type: "text" },
                    { label: "Телефон", placeholder: "+7 (999) 000-00-00", type: "tel" },
                    { label: "Email", placeholder: "mail@example.com", type: "email" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-sm font-golos mb-2" style={{ opacity: 0.7 }}>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl font-golos text-sm border outline-none"
                        style={{ backgroundColor: "var(--cream)", borderColor: "var(--sand)", color: "var(--warm-brown)" }} />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-xl font-golos font-medium border"
                    style={{ borderColor: "var(--sand)", color: "var(--warm-brown)" }}
                    onClick={() => setBookingStep(2)}>Назад</button>
                  <button className="flex-1 btn-terracotta py-3 rounded-xl font-golos font-medium flex items-center justify-center gap-2">
                    <Icon name="Check" size={18} />
                    Подтвердить бронь
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-5xl font-cormorant font-light mb-4">Контакты</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: "Phone", title: "Телефон", val: "+7 (987) 477-53-49", sub: "Пн–Вс с 9:00 до 20:00" },
              { icon: "Mail", title: "Email", val: "info@baltic-horizons.ru", sub: "Ответим в течение часа" },
              { icon: "MapPin", title: "Адрес", val: "Калининград, пр. Мира 1", sub: "Офис у центрального рынка" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl p-7 text-center card-hover"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--sand)" }}>
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "var(--beige-dark)" }}>
                  <Icon name={c.icon} size={24} style={{ color: "var(--terracotta)" }} />
                </div>
                <div className="font-golos font-medium mb-1">{c.title}</div>
                <div className="font-cormorant text-xl font-semibold mb-1">{c.val}</div>
                <div className="text-xs font-golos" style={{ opacity: 0.6 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4"
            style={{ backgroundColor: "var(--beige-dark)", border: "1px solid var(--sand)" }}>
            <div>
              <div className="font-cormorant text-xl font-semibold">Мы в соцсетях</div>
              <p className="text-sm font-golos mt-1" style={{ opacity: 0.7 }}>
                Вирусные видео, истории с экскурсий, розыгрыши мест
              </p>
            </div>
            <div className="flex gap-3">
              {[
                { icon: "Instagram", label: "Instagram" },
                { icon: "Youtube", label: "YouTube" },
                { icon: "Send", label: "Telegram" },
              ].map((s) => (
                <button key={s.label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-105"
                  style={{ backgroundColor: "var(--beige)", border: "1px solid var(--sand)" }}>
                  <Icon name={s.icon} size={20} style={{ color: "var(--terracotta)" }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t" style={{ backgroundColor: "var(--warm-brown)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-cormorant font-semibold" style={{ color: "var(--beige)" }}>
            Балтийские горизонты
          </div>
          <div className="text-sm font-golos" style={{ color: "var(--sand)" }}>
            © 2026 Все права защищены · Калининград
          </div>
          <div className="flex gap-5">
            {["Конфиденциальность", "Условия"].map((link) => (
              <button key={link} className="text-xs font-golos" style={{ color: "var(--sand)", opacity: 0.7 }}>{link}</button>
            ))}
          </div>
        </div>
      </footer>

      {/* PREMIUM MODAL */}
      {premiumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(92,61,46,0.5)", backdropFilter: "blur(4px)" }}>
          <div className="max-w-md w-full rounded-2xl p-8 relative"
            style={{ backgroundColor: "var(--cream)", border: "1px solid var(--sand)" }}>
            <button className="absolute top-4 right-4" onClick={() => setPremiumOpen(false)}
              style={{ color: "var(--warm-brown)", opacity: 0.5 }}>
              <Icon name="X" size={20} />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: "var(--beige-dark)" }}>
                <Icon name="Crown" size={28} style={{ color: "var(--terracotta)" }} />
              </div>
              <h3 className="text-3xl font-cormorant font-semibold mb-2">Премиум-подписка</h3>
              <p className="text-sm font-golos" style={{ opacity: 0.7 }}>Эксклюзивный доступ к лучшим маршрутам</p>
            </div>
            <div className="price-highlight p-5 mb-6 text-center">
              <div className="text-4xl font-cormorant font-semibold mb-1" style={{ color: "var(--terracotta)" }}>990 ₽ / мес</div>
              <div className="text-xs font-golos" style={{ opacity: 0.6 }}>или 7 900 ₽ / год — экономия 35%</div>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Скидка 20% на все экскурсии",
                "Доступ к закрытым маршрутам",
                "Приоритетное бронирование мест",
                "Эксклюзивные ночные туры",
                "Персональный гид на год",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-golos">
                  <Icon name="Check" size={16} style={{ color: "#9CAF88" }} />
                  {item}
                </div>
              ))}
            </div>
            <button className="btn-terracotta w-full py-3 rounded-xl font-golos font-medium">
              Оформить подписку
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
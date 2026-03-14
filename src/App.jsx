import { MapPin, Phone, Leaf, ShieldCheck, Sparkles, Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// ─── Read URL params ───────────────────────────────────────────────────────────
function useParams() {
  const [params, setParams] = useState({});
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setParams({
      name:     p.get("name")     || null,
      city:     p.get("city")     || null,
      phone:    p.get("phone")    || null,
      rating:   p.get("rating")   ? parseFloat(p.get("rating")) : null,
      category: p.get("category") || null,
    });
  }, []);
  return params;
}

const defaultMenu = {
  Chaat: [
    { name: "Raj Kachori", price: "₹120", img: "https://www.awesomecuisine.com/wp-content/uploads/2009/11/Raj-Kachori.jpg" },
    { name: "Papdi Chaat", price: "₹90", img: "https://i0.wp.com/www.thecrumbstories.com/wp-content/uploads/2024/10/IMG_0180-scaled.jpg?resize=400,300&ssl=1" },
    { name: "Aloo Tikki", price: "₹70", img: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/12/aloo-tikki-chole-recipe-5-280x280.jpg" },
  ],
  "Fast Food": [
    { name: "Veg Burger", price: "₹80", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80" },
    { name: "French Fries", price: "₹90", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80" },
    { name: "Pizza Slice", price: "₹120", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
  ],
  Snacks: [
    { name: "Samosa", price: "₹20", img: "https://img.freepik.com/premium-photo/veg-samosa-tea-time-snack-from-india-served-with-green-fried-chillies-selective-focus_466689-18194.jpg?w=400" },
    { name: "Bread Pakora", price: "₹40", img: "https://dinedelicious.in/wp-content/uploads/2021/07/Bread-Pakora-12.jpg" },
    { name: "Paneer Pakora", price: "₹120", img: "https://thebellyrulesthemind.net/wp-content/uploads/2023/10/IMG_9826-scaled.jpg" },
  ],
  "North Indian": [
    { name: "Paneer Butter Masala", price: "₹220", img: "https://www.sharmispassions.com/wp-content/uploads/2015/09/paneer-butter-masala-step17.jpg" },
    { name: "Dal Makhani", price: "₹200", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
  ],
  "Rice & Specials": [
    { name: "Veg Biryani", price: "₹180", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
    { name: "Special Thali", price: "₹250", img: "https://cdn.uengage.io/uploads/28289/image-KLLIHA-1768657848.png" },
  ],
};

const gallery = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
];

const reviews = [
  { name: "Rahul", text: "Amazing chaat and very authentic Delhi taste. Reminded me of Chandni Chowk!", rating: 5 },
  { name: "Sneha", text: "Clean place and the food quality is excellent. Dal Makhani was outstanding.", rating: 5 },
  { name: "Amit", text: "Best North Indian food in the area. The Raj Kachori is a must-try!", rating: 4 },
];

// ─── Demo badge shown when accessed via demo link ─────────────────────────────
function DemoBanner({ businessName }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-yellow-400 text-black px-4 py-2.5 flex items-center justify-between text-sm font-medium shadow-lg">
      <span>
        👋 Hey <strong>{businessName}</strong>! This is a <strong>free demo website</strong> we built for you.
        Like it? We can make it live in 2 days 🚀
      </span>
      <button onClick={() => setVisible(false)} className="ml-4 shrink-0 hover:opacity-70 transition">
        <X size={16} />
      </button>
    </div>
  );
}

export default function TasteOfDelhi() {
  const params = useParams();
  const [activeCategory, setActiveCategory] = useState("Chaat");
  const [mobileOpen, setMobileOpen] = useState(false);

  // ─── Dynamic values from URL params ─────────────────────────────────────────
  const businessName = params.name || "Taste of Delhi";
  const city         = params.city || "Meerut";
  const phone        = params.phone || "+91 95578 84630";
  const rating       = params.rating || 4.8;
  const isDemo       = !!params.name; // show banner only if params present

  // Format phone for tel: link
  const telPhone = phone.replace(/[^\d+]/g, "");
  const waLink = `https://wa.me/${telPhone.replace("+", "")}?text=${encodeURIComponent(`Hi! I saw your demo website and I'm interested.`)}`;

  // Star display
  const fullStars  = Math.floor(rating);
  const hasHalf    = rating % 1 >= 0.5;

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">

      {/* Demo banner */}
      {isDemo && <DemoBanner businessName={businessName} />}

      {/* NAV */}
      <nav className={`sticky z-50 bg-orange-50/90 backdrop-blur-md border-b border-orange-200 ${isDemo ? "top-10" : "top-0"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold text-red-600 tracking-tight">
            {businessName.split(" ").slice(0, -1).join(" ") || businessName}{" "}
            <span className="text-orange-500">
              {businessName.split(" ").slice(-1)}
            </span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {["menu", "gallery", "about", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                {s}
              </a>
            ))}
            <a href={`tel:${telPhone}`} className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
              Call Now
            </a>
          </div>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-orange-50 flex flex-col items-center justify-center gap-10">
          <button className="absolute top-5 right-5 text-gray-600" onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
          {["menu", "gallery", "about", "contact"].map((s) => (
            <a key={s} href={`#${s}`}
              className="capitalize text-3xl font-extrabold text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => setMobileOpen(false)}>
              {s}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/90">
        <img
          src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1400&q=80"
          alt="Indian food"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-50 to-transparent" />
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto py-24">
          <span className="inline-block bg-white/10 border border-white/20 text-yellow-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            🌶 {city}'s Favourite Restaurant
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-5 tracking-tight">
            Welcome to<br />
            <em className="not-italic text-yellow-300">{businessName}</em>
          </h1>
          <p className="text-lg text-white/70 mb-10 font-light max-w-xl mx-auto">
            Famous street food &amp; rich North Indian dishes — served fresh every day in {city}.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#menu" className="bg-orange-400 hover:bg-orange-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all shadow-lg">
              Explore Menu
            </a>
            <a href="#contact" className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full transition-all">
              Find Us
            </a>
          </div>

          {/* Dynamic stats */}
          <div className="flex flex-wrap justify-center gap-10 mt-16">
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-yellow-300">500+</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Customers Daily</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-yellow-300">{rating}★</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Google Rating</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-yellow-300">50+</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Menu Items</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
              Why People <em className="not-italic text-red-600">Love</em> Our Food
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Sparkles size={22} />, title: "Clean & Hygienic", desc: "Our kitchen and dining area follow strict hygiene standards every single day." },
              { icon: <Leaf size={22} />, title: "Fresh Ingredients", desc: "Fresh vegetables and spices sourced daily for that unforgettable authentic taste." },
              { icon: <ShieldCheck size={22} />, title: "Pure Taste", desc: "Authentic recipes, cooked with love, tradition, and care." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="group p-8 rounded-2xl border border-orange-100 bg-orange-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">What We Serve</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Popular <em className="not-italic text-red-600">Menu</em></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(defaultMenu).map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-red-600 text-white border-red-600 shadow-md"
                    : "bg-white text-gray-600 border-orange-200 hover:border-orange-400 hover:text-orange-600"
                }`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {defaultMenu[activeCategory].map((item) => (
              <div key={item.name} className="group bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row sm:items-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-full h-48 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="px-5 py-4 sm:py-0 flex-1">
                  <p className="font-bold text-gray-800 mb-2">{item.name}</p>
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">Visual Feast</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Food <em className="not-italic text-orange-400">Gallery</em></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? "row-span-2" : "h-44"}`}>
                <img src={img} alt="food" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 brightness-90 hover:brightness-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Customer <em className="not-italic text-red-600">Reviews</em></h2>
          </div>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-red-600 text-white px-7 py-3 rounded-full shadow-lg font-bold text-lg">
              <div className="flex gap-0.5">
                {[...Array(fullStars)].map((_, i) => <Star key={i} size={15} fill="white" stroke="white" />)}
                {hasHalf && <Star size={15} fill="white" stroke="white" opacity={0.5} />}
              </div>
              Rated {rating} / 5 on Google
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="relative bg-orange-50 border border-orange-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="absolute top-2 right-4 text-8xl font-extrabold text-orange-200 leading-none select-none">"</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={15} fill="#f59e0b" stroke="#f59e0b" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.text}</p>
                <p className="font-bold text-gray-800 text-sm">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-gradient-to-br from-red-950 via-red-800 to-orange-700 relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <span className="text-yellow-300 text-xs font-semibold tracking-widest uppercase">Our Story</span>
          <h2 className="text-4xl font-extrabold text-white mt-2 mb-6">About <em className="not-italic text-yellow-300">{businessName}</em></h2>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            {businessName} brings the vibrant flavours of authentic street food to {city}. From spicy chaats and delicious snacks
            to rich North Indian curries and thalis, every dish is prepared with authentic recipes and the freshest ingredients.
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Location</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-10">Find <em className="not-italic text-red-600">Us in {city}</em></h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(businessName + " " + city)}&output=embed`}
              width="100%" height="360" loading="lazy" className="block"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-sm mx-auto px-4 text-center">
          <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-10">Visit <em className="not-italic text-red-600">Us</em></h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-3 bg-orange-50 border border-orange-100 rounded-xl px-5 py-4 text-gray-700 text-sm font-medium">
              <MapPin size={18} className="text-red-600 flex-shrink-0" />
              {city}
            </div>
            <a href={`tel:${telPhone}`} className="flex items-center justify-center gap-3 bg-orange-50 border border-orange-100 rounded-xl px-5 py-4 text-gray-700 text-sm font-medium hover:bg-orange-100 transition-colors">
              <Phone size={18} className="text-red-600 flex-shrink-0" />
              {phone}
            </a>
            <div className="flex items-center justify-center gap-3 bg-orange-50 border border-orange-100 rounded-xl px-5 py-4 text-gray-700 text-sm font-medium">
              <span className="text-red-600 text-sm flex-shrink-0">⏰</span>
              Open Daily: 8:30 AM – 10:30 PM
            </div>
          </div>

          {/* WhatsApp CTA for demo */}
          {isDemo && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg w-full"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.856L.054 23.447a.5.5 0 0 0 .607.61l5.805-1.525A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.012-1.374l-.36-.214-3.733.98.995-3.64-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-12 text-center">
        <p className="text-2xl font-extrabold text-white mb-1">{businessName}</p>
        <p className="text-gray-500 text-sm">Authentic food experience in {city}</p>
        <p className="text-gray-700 text-xs mt-4">© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
      </footer>

      {/* Floating Call */}
      <a href={`tel:${telPhone}`}
        className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all">
        <Phone size={22} />
      </a>
    </div>
  );
}
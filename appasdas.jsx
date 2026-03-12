import { MapPin, Phone, Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export default function TasteOfDelhiLanding() {

  const [showFullMenu,setShowFullMenu] = useState(false);
  const [activeCategory,setActiveCategory] = useState("Chaat");

  const popularMenu = {
  Chaat: [
    { name: "Raj Kachori", price: "₹120", img: "https://images.unsplash.com/photo-1604908177522-429f2c2c4a4e" },
    { name: "Papdi Chaat", price: "₹90", img: "https://images.unsplash.com/photo-1625944525533-473f1f4c8cde" },
    { name: "Aloo Tikki", price: "₹70", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950" }
  ],
  "Fast Food": [
    { name: "Veg Burger", price: "₹80", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
    { name: "French Fries", price: "₹90", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f" },
    { name: "Pizza Slice", price: "₹120", img: "https://images.unsplash.com/photo-1548365328-9f547fb0953c" }
  ],
  Snacks: [
    { name: "Samosa", price: "₹20", img: "https://images.unsplash.com/photo-1601050690117-94f5f6fae5f9" },
    { name: "Bread Pakora", price: "₹40", img: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5c" },
    { name: "Paneer Pakora", price: "₹120", img: "https://images.unsplash.com/photo-1625944525533-473f1f4c8cde" }
  ],
  "North Indian": [
    { name: "Paneer Butter Masala", price: "₹220", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7" },
    { name: "Dal Makhani", price: "₹200", img: "https://images.unsplash.com/photo-1617196035154-1e9f6b9a5f28" }
  ],
  "Rice & Specials": [
    { name: "Veg Biryani", price: "₹180", img: "https://images.unsplash.com/photo-1604908554025-7f9d4a1c1c19" },
    { name: "Special Thali", price: "₹250", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" }
  ]
};


  const gallery = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  ];

  const reviews = [
    {name:"Rahul",text:"Amazing chaat and very authentic Delhi taste.",rating:5},
    {name:"Sneha",text:"Clean place and the food quality is excellent.",rating:5},
    {name:"Amit",text:"Best North Indian food in the area.",rating:4}
  ];

  return (

    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold">Taste Of Delhi</h1>

        <div className="space-x-6">
          <a href="#menu" className="hover:text-red-600">Menu</a>
          <a href="#gallery" className="hover:text-red-600">Gallery</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-white text-center py-24 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center">

        <div className="bg-black/60 p-10">

          <h2 className="text-4xl font-bold mb-4">Authentic Delhi Flavours in Meerut</h2>

          <p className="text-lg mb-6">
            Taste the famous street food and North Indian dishes inspired by Delhi.
          </p>

          <a
            href="#menu"
            className="px-6 py-3 bg-red-600 rounded-2xl font-semibold shadow"
          >
            View Menu
          </a>

        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12">Why People Love Our Food</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-center">

          <div className="p-6 rounded-2xl shadow">
            <Sparkles className="mx-auto mb-4" size={40} />
            <h3 className="font-bold text-lg mb-2">Clean & Hygienic</h3>
            <p>Our kitchen and dining area follow strict hygiene standards.</p>
          </div>

          <div className="p-6 rounded-2xl shadow">
            <Leaf className="mx-auto mb-4" size={40} />
            <h3 className="font-bold text-lg mb-2">Fresh Ingredients</h3>
            <p>Fresh vegetables and spices used daily for authentic taste.</p>
          </div>

          <div className="p-6 rounded-2xl shadow">
            <ShieldCheck className="mx-auto mb-4" size={40} />
            <h3 className="font-bold text-lg mb-2">Pure Taste</h3>
            <p>Authentic Delhi recipes cooked with care.</p>
          </div>

        </div>

      </section>


      {/* Popular Menu */}
      <section id="menu" className="p-12 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8">Popular Menu</h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(popularMenu).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === cat ? "bg-red-600 text-white" : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Menu Items */}
        <div className="grid md:grid-cols-2 gap-8">
          {popularMenu[activeCategory].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow flex items-center gap-4 p-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />

              <div className="flex justify-between w-full items-center">
                <span className="font-medium">{item.name}</span>
                <span className="font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Full Menu */}

      </section>


      {/* Food Gallery */}
      <section id="gallery" className="py-16 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-12">Food Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          {gallery.map((img,index)=>(

            <img
            key={index}
            src={img}
            className="rounded-2xl shadow object-cover h-60 w-full"
            />

          ))}

        </div>

      </section>


      {/* Reviews */}

      <section className="py-16 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          {reviews.map((review,index)=>(

            <div key={index} className="shadow rounded-2xl p-6">

              <div className="flex gap-1 mb-3">

                {[...Array(review.rating)].map((_,i)=>(

                  <Star key={i} size={18} fill="gold" />

                ))}

              </div>

              <p className="mb-3">{review.text}</p>

              <p className="font-semibold">— {review.name}</p>

            </div>

          ))}

        </div>

      </section>


      {/* About Section */}

      <section id="about" className="bg-gray-100 py-16 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">About Taste Of Delhi</h2>

          <p>

            Taste Of Delhi brings the vibrant flavours of Delhi street food to
            Meerut. From spicy chaats and delicious snacks to rich North Indian
            curries and thalis, every dish is prepared with authentic recipes
            and fresh ingredients.

          </p>

        </div>

      </section>


      {/* Directions Section */}

      <section className="py-16 px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">Find Us Easily</h2>

          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">

            <iframe
            src="https://www.google.com/maps?q=Taste%20of%20Delhi%20Meerut&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            ></iframe>

          </div>

          <a
          href="https://www.google.com/maps/place/Taste+of+delhi"
          target="_blank"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-2xl"
          >

          Open in Google Maps

          </a>

        </div>

      </section>


      {/* Contact */}

      <section id="contact" className="py-16 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">Visit Us</h2>

          <div className="space-y-3">

            <p className="flex justify-center items-center gap-2">
              <MapPin size={18} /> Ganga Nagar, Meerut
            </p>

            <p className="flex justify-center items-center gap-2">
              <Phone size={18} /> +91 95578 84630
            </p>

            <p>Open Daily: 8:30 AM – 10:30 PM</p>

          </div>

        </div>

      </section>


      <footer className="bg-gray-900 text-white text-center p-6">

        <p>© {new Date().getFullYear()} Taste Of Delhi</p>

      </footer>


    </div>

  );
}

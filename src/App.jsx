import { MapPin, Phone, Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export default function TasteOfDelhiLanding() {

  const [activeCategory, setActiveCategory] = useState("Chaat");

  const popularMenu = {
    Chaat: [
      { name: "Raj Kachori", price: "₹120", img: "https://imgs.search.brave.com/s7VEzH3GYVMlWw5p1udX7ltlpfZcYvsLg5SxZQJzAeM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXdlc29tZWN1aXNp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDA5LzExL1Jh/ai1LYWNob3JpLmpw/Zw" },
      { name: "Papdi Chaat", price: "₹90", img: "https://imgs.search.brave.com/QReI-JA-3Qa8NJYB24EjcSHPplOpB1DuHL9R1Dm0-zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnRo/ZWNydW1ic3Rvcmll/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvSU1H/XzAxODAtc2NhbGVk/LmpwZz9yZXNpemU9/ODAwLDUzMCZzc2w9/MQ" },
      { name: "Aloo Tikki", price: "₹70", img: "https://imgs.search.brave.com/1p6YL86WrpAH79jAdxaCd9os5xQliAcQuReQWivIUT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVncmVjaXBlc29m/aW5kaWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEyLzEy/L2Fsb28tdGlra2kt/Y2hvbGUtcmVjaXBl/LTUtMjgweDI4MC5q/cGc" }
    ],
    "Fast Food": [
      { name: "Veg Burger", price: "₹80", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
      { name: "French Fries", price: "₹90", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f" },
      { name: "Pizza Slice", price: "₹120", img: "https://imgs.search.brave.com/j4GKwCl5wi7xQEig6k3vAPfAuCNbYyj4Gow0PM9sl8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIz/ODgxODc5OC9waG90/by9waXp6YS1zbGlj/ZS13aXRoLWhhbS1z/YWxhbWktYW5kLXZl/Z2V0YWJsZXMtb24t/YS1wbGF0ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9c2VF/ZWFDRVV0Qm12Q2Rn/YlNKYWl6REJ4Y2Rv/blowVFZ1RFNsTm9u/V3U4az0" }
    ],
    Snacks: [
      { name: "Samosa", price: "₹20", img: "https://imgs.search.brave.com/8-3CRgCxuT2GlH1nzY_0VeJp1qMujdV2SeqnnVW7C3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92ZWctc2Ftb3Nh/LXRlYS10aW1lLXNu/YWNrLWZyb20taW5k/aWEtc2VydmVkLXdp/dGgtZ3JlZW4tZnJp/ZWQtY2hpbGxpZXMt/c2VsZWN0aXZlLWZv/Y3VzXzQ2NjY4OS0x/ODE5NC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA" },
      { name: "Bread Pakora", price: "₹40", img: "https://imgs.search.brave.com/Bl3Xy7j0N40hCzk1Fr9ILHxo4vOthbcr3VczA88CFWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaW5l/ZGVsaWNpb3VzLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA3L0JyZWFkLVBh/a29yYS0xMi5qcGc" },
      { name: "Paneer Pakora", price: "₹120", img: "https://imgs.search.brave.com/I4a3CUJ3EgeOziK4nq_2chMwZN5Ra4PU8nDR6ggb2Wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVi/ZWxseXJ1bGVzdGhl/bWluZC5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTAv/SU1HXzk4MjYtc2Nh/bGVkLmpwZw" }
    ],
    "North Indian": [
      { name: "Paneer Butter Masala", price: "₹220", img: "https://imgs.search.brave.com/epV5Lf-4bUAz4cZFnvtmgWhzQPD13aHyNQQLHJm-nfk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2hhcm1pc3Bhc3Np/b25zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wOS9w/YW5lZXItYnV0dGVy/LW1hc2FsYS1zdGVw/MTcuanBn" },
      { name: "Dal Makhani", price: "₹200", img: "https://imgs.search.brave.com/x20myem4Tuk9Nyh0yLfm7XQPZP6ottJ6M23gVAN76Y0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzY0LzM1LzEx/LzM2MF9GXzE2NjQz/NTExNjRfZGpzYmZS/Y3JTakRtYlBuM2Fv/YUk0S0E1UEhQSExa/WWYuanBn" }
    ],
    "Rice & Specials": [
      { name: "Veg Biryani", price: "₹180", img: "https://imgs.search.brave.com/O1NvzGIUQl7nFi52sSXOAqPA63M7EeOMuM0ZEm4rAl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by92ZWctYmly/eWFuaS1yZWNpcGUt/MjYwbnctMTA5NDA2/NjUxMC5qcGc" },
      { name: "Special Thali", price: "₹250", img: "https://imgs.search.brave.com/xTpf3Lfn2I7eUeCE1kUz5szodd_dNxLudGE1TXtJDss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dWVuZ2FnZS5pby91/cGxvYWRzLzI4Mjg5/L2ltYWdlLUtMTElI/QS0xNzY4NjU3ODQ4/LnBuZw" }
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
    { name: "Rahul", text: "Amazing chaat and very authentic Delhi taste.", rating: 5 },
    { name: "Sneha", text: "Clean place and the food quality is excellent.", rating: 5 },
    { name: "Amit", text: "Best North Indian food in the area.", rating: 4 }
  ];

  return (

    <div className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">

      {/* Navbar */}

      <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">

        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">

          <h1 className="text-2xl font-bold text-red-600 tracking-wide">
            Taste Of Delhi
          </h1>

          <div className="space-x-8 font-medium text-gray-700">

            <a href="#menu" className="hover:text-red-600 transition">Menu</a>
            <a href="#gallery" className="hover:text-red-600 transition">Gallery</a>
            <a href="#about" className="hover:text-red-600 transition">About</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>

          </div>

        </div>

      </nav>

      {/* Hero */}

      <section className="relative text-white text-center py-32 overflow-hidden">

        {/* Hero Image */}
        <img
          src="/hero.webp"
          alt="Delicious Indian Food"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold mb-6">
            Authentic Delhi Flavours in Meerut
          </h2>

          <p className="text-lg mb-8 text-gray-200">
            Taste the famous street food and North Indian dishes inspired by Delhi.
          </p>

          <a
            href="#menu"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-xl transition"
          >
            Explore Menu
          </a>

        </div>

      </section>

      {/* Rating */}


      {/* Quality */}

      <section className="py-16 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12">Why People Love Our Food</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-center">

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition">

            <Sparkles className="mx-auto mb-4" size={40} />

            <h3 className="font-bold text-lg mb-2">Clean & Hygienic</h3>

            <p>Our kitchen and dining area follow strict hygiene standards.</p>

          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition">

            <Leaf className="mx-auto mb-4" size={40} />

            <h3 className="font-bold text-lg mb-2">Fresh Ingredients</h3>

            <p>Fresh vegetables and spices used daily for authentic taste.</p>

          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition">

            <ShieldCheck className="mx-auto mb-4" size={40} />

            <h3 className="font-bold text-lg mb-2">Pure Taste</h3>

            <p>Authentic Delhi recipes cooked with care.</p>

          </div>

        </div>

      </section>

      {/* Popular Menu */}

      <section id="menu" className="p-12 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8">Popular Menu</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">

          {Object.keys(popularMenu).map((cat) => (

            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border transition ${activeCategory === cat
                  ? "bg-red-600 text-white shadow"
                  : "bg-white hover:bg-red-50"
                }`}
            >

              {cat}

            </button>

          ))}

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {popularMenu[activeCategory].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex items-center gap-4 p-4"
            >

              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl hover:scale-105 transition"
              />

              <div className="flex justify-between w-full items-center">

                <span className="font-medium">{item.name}</span>

                <span className="font-bold">{item.price}</span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Gallery */}

      <section id="gallery" className="py-16 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-12">Food Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          {gallery.map((img, index) => (

            <img
              key={index}
              src={img}
              className="rounded-2xl shadow-md object-cover h-60 w-full hover:scale-105 transition duration-500"
            />

          ))}

        </div>

      </section>

      {/* Reviews */}

      <section className="py-16 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          {reviews.map((review, index) => (

            <div className="shadow-md hover:shadow-xl transition rounded-2xl p-6 bg-white border">

              <div className="flex gap-1 mb-3">

                {[...Array(review.rating)].map((_, i) => (

                  <Star key={i} size={18} fill="gold" />

                ))}

              </div>

              <p className="mb-3">{review.text}</p>

              <p className="font-semibold">— {review.name}</p>

            </div>

          ))}

        </div>
        <section className="py-10 bg-white text-center">

          <div className="flex justify-center gap-1 mb-2">

            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="gold" stroke="gold" />
            ))}

          </div>

          <p className="text-lg font-semibold">
            Rated 4.8 / 5 by happy customers
          </p>

        </section>

      </section>

      {/* About */}

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

      {/* Map */}

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

      {/* Floating Call */}

      <a
        href="tel:+919557884630"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition"
      >

        <Phone size={22} />

      </a>

      {/* Footer */}

      <footer className="bg-gray-900 text-gray-300 text-center py-10">

        <h3 className="text-xl font-semibold text-white mb-2">
          Taste Of Delhi
        </h3>

        <p className="mb-4">
          Authentic Delhi street food experience in Meerut
        </p>

        <p className="text-sm">
          © {new Date().getFullYear()} Taste Of Delhi. All rights reserved.
        </p>

      </footer>

    </div>

  );
}
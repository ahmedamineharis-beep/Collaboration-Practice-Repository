const activities = [
  {
    id: 1,
    title: "Beach Buggy",
    image: "https://agadiractivities.com/wp-content/uploads/2023/02/buggy-safari-212669927895-1-768x768.webp",
    duration: "Half-day · Pickup available",
    price: 60,
  },
  {
    id: 2,
    title: "Camel Rides",
    image: "https://agadiractivities.com/wp-content/uploads/2022/02/lima-dromadaire-768x611.jpg",
    duration: "2 hours · Pickup available",
    price: 35,
  },
  {
    id: 3,
    title: "Barbecue Camel Riding",
    image: "https://agadiractivities.com/wp-content/uploads/2022/02/Quad-Biking-and-Camel-Ride-Experience-By-Banana-beach-11.jpeg",
    duration: "3 hours · Small group · Pickup available",
    price: 40,
  },
  {
    id: 4,
    title: "Horse Rides",
    image: "https://agadiractivities.com/wp-content/uploads/2022/02/IMG_4542-1-768x614.jpg",
    duration: "2 hours · Pickup available",
    price: 40,
  },
  {
    id: 5,
    title: "Marrakech Day Trip",
    image: "https://agadiractivities.com/wp-content/uploads/2022/02/81-1.jpg",
    duration: "1 Day · Pickup available",
    price: 40,
  },
  {
    id: 6,
    title: "Essaouira Day Trip",
    image: "https://agadiractivities.com/wp-content/uploads/2023/02/agadir-activities-essaouira-day-trip-1-768x320.webp",
    duration: "1 Day · Pickup available",
    price: 40,
  },
  {
    id: 7,
    title: "Legzira & Tiznit",
    image: "https://agadiractivities.com/wp-content/uploads/2022/02/Legzira-tour-1-768x511.jpg",
    duration: "1 Day · Pickup available",
    price: 50,
  },
  {
    id: 8,
    title: "Jet Ski",
    image: "https://agadiractivities.com/wp-content/uploads/2022/02/images-1.jpg",
    duration: "30 min · Pickup available",
    price: 40,
  },
];
export default function ActivitiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-500 text-sm mb-1">
          What to do in Agadir
        </p>
        <h2 className="text-gray-900 text-3xl font-bold mb-10">
          Things To do in Agadir
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-lg mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {item.duration}
                </p>

                <p className="text-gray-700 text-sm mb-4">
                  From{" "}
                  <span className="text-red-500 font-semibold">
                    €{item.price}
                  </span>{" "}
                  per person
                </p>

                <button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold px-4 py-2 rounded">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
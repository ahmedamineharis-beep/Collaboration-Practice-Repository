import React from 'react';
const data = [
  {
    title: "2 Days To Marrakech & Essaouira",
    description: "Discover Essaouira & Marrakech in a guided two days trip including a night sleep in a hotel, and Explore night life in Marrakech ...",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "3 Days To Ouarzazate From Agadir",
    description: "Explore the Hollywood city of Morocco in a 3 days guided tour including 2 nights sleep, and get to visit Essaouira and Marrakech and Ouarzazate ...",
    image: "https://th.bing.com/th/id/R.52d7b78d9455760e95defd18210b50a2?rik=z4pdyD7Rsmfg1A&pid=ImgRaw&r=0",
  },
  {
    title: "3 Days To Ouzoud Waterfalls From Agadir",
    description: "Visit the Magical water falls of Ouzoud in a guided 3 Days tour including 2 nights sleep and visit Essaouira & Marrakech on the way ...",
    image: "https://moroccotrailfinders.com/wp-content/uploads/2023/09/Ouzoud-Waterfalls-Guided-Hike-and-Boat-Trip-5.jpg",
  },
  {
    title: "3 Days To Casablanca From Agadir",
    description: "Experience a 3 days guided tour to Casablanca the Economical capital of Morocco and visit the biggest mosque in Africa ...",
    image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/240000/240134-Casablanca-Region.jpg",
  },
];
const Card = ({ title, description, image }) => (
  <div className="relative group overflow-hidden rounded-2xl h-[480px] shadow-lg cursor-pointer transition-transform duration-500 hover:-translate-y-2">
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-scale duration-500 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-center">
      <h3 className="text-white text-xl font-bold leading-tight mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-200 text-sm mb-6 line-clamp-4 leading-relaxed">
        {description}
      </p>
      <button className="bg-[#ffb43a] hover:bg-[#f3a62a] text-black font-bold py-2.5 px-8 rounded-md transition-all active:scale-95 w-max mx-auto">
        Book Now
      </button>
    </div>
  </div>
);
export default function Dwira(){
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
            Multi-day Tours From Agadir
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4a2c40] mt-2">
            Cultural & historical Tours
          </h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

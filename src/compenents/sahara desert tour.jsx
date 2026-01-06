import React from 'react';
const data = [
  {
    title: "2 Days Sahara Desert to Zagora",
    description: "Experience The Sahara desert in 2 days to Zagora and get to visit the south of the kingdom and experience a night sleep in a camp ...",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/537530353.jpg?k=f7ad6f827d4f9b323de9ad01acaafca1dd704ba14fdaa079b2e07e0fae08f1dd&o=",
  },
  {
    title: "3 Days Sahara Desert to Merzouga",
    description: "Experience The Sahara desert 3 days to Merzouga and get to visit Ourzazate and valleys of dades & toudgha ...",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/551615244.jpg?k=fb486f0f434c3d6dd598a1d76ad531ff7154dbd415aa1ebffc9aafe9d4589a71&o=",
  },
  {
    title: "3 Days Sahara Desert To Chegaga",
    description: "Experience The Sahara Dersert in 3 days to chegaga passing by Zagora and some berbère villages to reach the wild desert of chegaga ...",
    image: "https://chegaga-desert.com/wp-content/uploads/2024/12/1718967025_5_1_Activities-Desert1.tmedium-636x426.jpg",
  },
  {
    title: "4 Days Sahara Desert to Merzouga",
    description: "Experience The Sahara Desert in 4 days to Merzouga and experience a full activity in the desert including quads and camel rides ...",
    image: "https://saharastarscamp.com/wp-content/uploads/elementor/thumbs/Untitled-design-2022-05-13T134110.508-por57c865oyxtxwtn0vse8nbgbtzs1cn69znzpe8p4.jpg",
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
export default function Desert(){
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
            Multi-day Tours From Agadir
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4a2c40] mt-2">
           Sahara Desert Tours
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
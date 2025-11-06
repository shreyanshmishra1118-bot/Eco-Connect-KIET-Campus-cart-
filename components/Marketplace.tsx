
import React from 'react';
import { UserCircleIcon } from './icons';

const products = [
    {
        name: 'Engineering Mechanics Textbook',
        category: 'Books',
        price: '₹450',
        seller: 'Rohan Sharma',
        image: 'https://placehold.co/600x400/0f172a/34d399?text=Textbook',
    },
    {
        name: 'Logitech Wireless Mouse',
        category: 'Electronics',
        price: '₹800',
        seller: 'Priya Singh',
        image: 'https://placehold.co/600x400/0f172a/34d399?text=Mouse',
    },
    {
        name: 'Acoustic Guitar',
        category: 'Hobbies',
        price: '₹2,500',
        seller: 'Amit Patel',
        image: 'https://placehold.co/600x400/0f172a/34d399?text=Guitar',
    },
    {
        name: 'Mini Fridge for Dorm',
        category: 'Appliances',
        price: '₹3,000',
        seller: 'Sneha Verma',
        image: 'https://placehold.co/600x400/0f172a/34d399?text=Fridge',
    },
    {
        name: 'Python Programming Tutor',
        category: 'Skills',
        price: '₹500/hr',
        seller: 'Vikram Reddy',
        image: 'https://placehold.co/600x400/0f172a/34d399?text=Tutoring',
    },
    {
        name: 'Graphic Design Services',
        category: 'Skills',
        price: 'Project-based',
        seller: 'Anjali Gupta',
        image: 'https://placehold.co/600x400/0f172a/34d399?text=Design',
    },
];

const ProductCard: React.FC<typeof products[0]> = ({ name, category, price, seller, image }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 group">
        <div className="relative h-48">
            <img src={image} alt={name} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        </div>
        <div className="p-6">
            <span className="text-xs font-semibold uppercase text-emerald-400">{category}</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">{name}</h3>
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-sky-400">{price}</p>
                 <div className="flex items-center space-x-2 text-slate-400">
                    <UserCircleIcon className="w-5 h-5"/>
                    <span className="text-sm">{seller}</span>
                </div>
            </div>
             <button className="w-full mt-6 bg-emerald-500 text-white py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20">
                View Item
            </button>
        </div>
    </div>
);


const Marketplace: React.FC = () => {
  return (
    <section id="marketplace" className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured in the Marketplace</h2>
          <p className="text-lg text-slate-400 mt-4">The heart of Eco-Connect is our vibrant marketplace. Discover items and skills shared by fellow students, promoting a circular economy on campus.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;

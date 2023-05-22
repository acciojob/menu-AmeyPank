import React, { useState } from 'react';
import '../styles/App.css';

const dishesData = [
    {
        id: 1,
        title: 'Buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: '../images/item-1.jpg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: 'Diner double',
        category: 'lunch',
        price: 13.99,
        img: '../images/item-2.jpg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: 'Godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: '../images/item-3.jpg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: '../images/item-4.jpg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: 'Egg attack',
        category: 'lunch',
        price: 22.99,
        img: '../images/item-5.jpg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: 'Oreo dream',
        category: 'shakes',
        price: 18.99,
        img: '../images/item-6.jpg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: 'Bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: '../images/item-7.jpg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: 'American classic',
        category: 'lunch',
        price: 12.99,
        img: '../images/item-8.jpg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: 'Quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: '../images/item-9.jpg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const allCategories = ['all', ...new Set(dishesData.map((dish) => dish.category))];

function App() {
    const [dishes, setDishes] = useState(dishesData);
    const [activeCategory, setActiveCategory] = useState('all');

    const filterItems = (category) => {
        if (category === 'all') {
            setDishes(dishesData);
            setActiveCategory('all');
        } else {
            const filteredItems = dishesData.filter((dish) => dish.category === category);
            setDishes(filteredItems);
            setActiveCategory(category);
        }
    };

    return (
        <div className="main" id='main'>
            <header>
                <h1>Our Menu</h1>
                <div className="btn-container">
                    {allCategories.map((category, index) => (
                        <button
                            key={index}
                            id={`filter-btn-${index + 1}`}
                            className={activeCategory === category ? 'active' : ''}
                            onClick={() => filterItems(category)}
                        >
                            {category}
                        </button>
                    ))}

                </div>
            </header>
            <section className="dishes">
                {dishes.map((dish) => (
                    <div className="dish" key={dish.id}>
                        <img src={dish.img} alt={dish.title} />
                        <div className="dish-info">
                            <h3>{dish.title}</h3>
                            <h4>${dish.price}</h4>
                            <p>{dish.desc}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default App;

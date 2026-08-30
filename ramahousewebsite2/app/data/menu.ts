export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  note?: string;
  prices?: Array<{ label: string; price: string }>;
  items: MenuItem[];
};

const lunchPrices = [
  { label: 'Chicken, pork, or tofu', price: '$14' },
  { label: 'Beef', price: '$15' },
  { label: 'Prawns', price: '$16' },
  { label: 'Seafood', price: '$17' },
];

const dinnerPrices = [
  { label: 'Chicken, pork, or tofu', price: '$16.50' },
  { label: 'Beef', price: '$17.50' },
  { label: 'Prawns', price: '$18.50' },
  { label: 'Salmon', price: '$20.50' },
  { label: 'Seafood combination', price: '$20' },
];

export const lunchMenu: MenuCategory[] = [
  {
    id: 'lunch-entrees',
    name: 'Lunch Entrées',
    note: 'Served 11am–3pm. Choose a protein and add a Pad Thai combo for $4.',
    prices: lunchPrices,
    items: [
      { name: 'Pad Broccoli', description: 'Fried rice with eggs, tomatoes, onions, peas, carrots, and broccoli.' },
      { name: 'Pad Cashew', description: 'Cashew nuts, onions, zucchini, broccoli, celery, bell peppers, and carrots.' },
      { name: 'Pad Garlic', description: 'Fresh garlic, black pepper, and mixed vegetables.' },
      { name: 'Pad Jungle', description: 'Chili paste, green beans, broccoli, bell peppers, spinach, carrots, and sweet basil.' },
      { name: 'Crispy Orange Chicken', description: 'Crispy chicken in house orange sauce with steamed broccoli, carrots, and cabbage.' },
      { name: 'Floating Rama', description: 'Fresh garlic, broccoli, spinach, zucchini, bok choy, cabbage, celery, and carrots with peanut sauce.' },
      { name: 'Vegetable Delight', description: 'Broccoli, zucchini, cabbage, bok choy, mushrooms, snow peas, onions, and carrots in garlic, rice wine, and oyster sauce.' },
      { name: 'Spicy Eggplant with Tofu', description: 'Asian eggplant, fried tofu, basil, bell peppers, onions, and carrots in bean paste sauce.' },
      { name: 'Screamer', description: 'Zucchini, celery, carrots, onions, bell peppers, sweet basil, and chili paste.' },
      { name: 'Spicy Green Beans', description: 'Green beans, onions, and carrots in chili sauce.' },
      { name: 'Basil Pork', description: 'Ground pork with fresh garlic, basil, chili, onions, green beans, and bell peppers.' },
      { name: 'Red Curry', description: 'Coconut milk, basil, zucchini, bamboo shoots, and bell peppers. Minimum two-star spice level.' },
      { name: 'Panang Curry', description: 'Thick coconut curry with ground peanuts, served on cabbage. Minimum two-star spice level.' },
    ],
  },
  {
    id: 'lunch-noodles-rice',
    name: 'Lunch Noodles & Rice',
    note: 'Choose a protein and add one spring roll for $2, a fresh roll for $3, or a breaded prawn for $3.',
    prices: lunchPrices,
    items: [
      { name: 'Pad Thai', description: 'Rice noodles with tamarind sauce, ground peanuts, eggs, green onion, and bean sprouts.' },
      { name: 'Pad See-Ew', description: 'Wide rice noodles in black bean sauce with eggs, broccoli, and carrots.' },
      { name: 'Pad Kee Mao', description: 'Drunken noodles with chili sauce, basil, broccoli, mushrooms, bamboo shoots, baby corn, onions, bell peppers, and carrots.' },
      { name: 'Tom Yum Noodle Soup', description: 'Rice noodles and your choice of protein in hot and sour Tom Yum broth.' },
      { name: 'Noodle Supreme', description: 'Thin rice noodles with mixed vegetables, topped with peanut sauce.' },
      { name: 'Spicy Noodle', description: 'Wide rice noodles with red chili, eggplant, zucchini, bell peppers, mushrooms, and basil.' },
      { name: 'Chicken Over Rice', description: 'Fresh garlic chicken with mushrooms, baby corn, and green onions over steamed rice.' },
      { name: 'Fried Rice', description: 'Choice of protein with eggs, tomatoes, onions, green onions, and rice.' },
    ],
  },
];

export const dinnerMenu: MenuCategory[] = [
  {
    id: 'appetizers', name: 'Appetizers', items: [
      { name: 'Fried Tofu', description: 'Deep-fried fresh tofu with plum sauce and peanuts.', price: '$11' },
      { name: 'Spring Rolls', description: 'Mixed vegetables in an egg roll wrapper with plum sauce.', price: '$11' },
      { name: 'Fresh Rolls', description: 'Vegetables, cooked shrimp, and chicken in rice paper with plum sauce and peanuts.', price: '$12' },
      { name: 'Crab Delight', description: 'Crisp wontons filled with cream cheese and crab meat.', price: '$12' },
      { name: 'Pot Stickers', description: 'Pan-fried pork dumplings with house dipping sauce.', price: '$11' },
      { name: 'Golden Garlic Wings', description: 'Deep-fried chicken wings with special sauce.', price: '$12' },
      { name: 'Chicken Satay', description: 'Coconut curry chicken skewers with peanut sauce and cucumber salad.', price: '$12' },
      { name: 'Tod Mun', description: 'Fish cakes blended with curry paste and green beans, served with cucumber salad.', price: '$12' },
      { name: 'Fried Shrimp', description: 'Deep-fried shrimp with cocktail sauce.', price: '$12' },
    ],
  },
  {
    id: 'soup', name: 'Soup', items: [
      { name: 'Tom Yum', description: 'Hot and sour broth with roasted chili, lime leaves, lime juice, mushrooms, and tomatoes.', price: '$15.50+' },
      { name: 'Tom Kha', description: 'Hot and sour coconut broth with lemongrass, galangal, mushrooms, tomatoes, and Thai spices.', price: '$15.50+' },
      { name: 'Wonton Soup', description: 'Pork and shrimp wontons in broth with bok choy and carrots.', price: '$15.50' },
      { name: 'Rice Soup', description: 'Chicken broth, rice, chicken or pork, cilantro, and green onions. Vegetarian available.', price: '$15.50' },
      { name: 'Chicken Noodle Soup', description: 'Rice noodles, chicken, bean sprouts, green onion, cilantro, and fried garlic.', price: '$15.50' },
    ],
  },
  {
    id: 'salad', name: 'Salads', items: [
      { name: 'Papaya Salad', description: 'Shrimp, shredded papaya and carrot, tomatoes, green beans, lime juice, and peanuts.', price: '$15.99' },
      { name: 'Larb Gai', description: 'Ground chicken with lime juice and hot chili, served with fresh vegetables.', price: '$15.99' },
      { name: 'Beef Salad', description: 'Grilled flank steak, mixed greens, tomatoes, cucumbers, onions, cilantro, lime juice, and Thai spices.', price: '$15.99' },
      { name: 'Yum Woon Sen', description: 'Seafood, bean-thread noodles, tomatoes, red onion, cilantro, lime juice, peanuts, and Thai spices.', price: '$17.99' },
    ],
  },
  {
    id: 'noodles', name: 'Noodles', prices: dinnerPrices, items: [
      { name: 'Pad Thai', description: 'Traditional rice noodles with tamarind sauce, peanuts, eggs, green onion, and bean sprouts.' },
      { name: 'Vegetarian-Style Pad Thai', description: 'Rice noodles with tomato-based red sauce, bean sprouts, eggs, and ground peanuts.' },
      { name: 'Thai Rama Noodles', description: 'Egg noodles with bok choy, cabbage, celery, carrots, and black bean sauce.' },
      { name: 'Pad See-Ew', description: 'Wide rice noodles in black bean sauce with eggs, broccoli, and carrots.' },
      { name: 'Rama Noodle Supreme', description: 'Rice noodles with bok choy, cabbage, celery, carrots, and peanut sauce.' },
      { name: 'Pad Kee Mao', description: 'Drunken noodles with chili sauce, basil, broccoli, mushrooms, bamboo shoots, baby corn, onions, bell peppers, and carrots.' },
      { name: 'Lard Nah', description: 'Wide rice noodles in black bean sauce with gravy, broccoli, and carrots.' },
      { name: 'Spaghetti Basil', description: 'Spaghetti with hot chili sauce, basil, mushrooms, broccoli, baby corn, bell peppers, onions, and carrots.' },
      { name: 'House Curry Noodles', description: 'Egg noodles, black bean sauce, curry powder, chicken, prawns, eggs, mushrooms, bamboo shoots, snow peas, bell peppers, and basil.', price: '$17.50' },
    ],
  },
  {
    id: 'curry', name: 'Curries', note: 'All curries start at a two-star spice level.', prices: dinnerPrices, items: [
      { name: 'Yellow Curry', description: 'Coconut milk, potatoes, carrots, onions, and peanuts.' },
      { name: 'Red Curry', description: 'Coconut milk, basil, zucchini, bamboo shoots, and bell peppers.' },
      { name: 'Green Curry', description: 'Coconut milk, eggplant, green beans, zucchini, basil, and bamboo shoots.' },
      { name: 'Panang Curry', description: 'Thick coconut curry with ground peanuts, served on cabbage.' },
      { name: 'Massaman Curry', description: 'Coconut milk, potatoes, peanuts, onions, and carrots.' },
      { name: 'Pineapple Curry', description: 'Red curry with coconut milk, pineapple, tomatoes, and bell peppers.' },
    ],
  },
  {
    id: 'rice', name: 'Rice Dishes', prices: dinnerPrices, items: [
      { name: 'Fried Rice', description: 'Eggs, broccoli, carrots, peas, onions, green onions, and rice.' },
      { name: 'Pineapple Fried Rice', description: 'Curry powder, pineapple, raisins, peas, onions, and carrots.' },
      { name: 'Bangkok Fried Rice', description: 'Hot chili sauce, basil, broccoli, onions, bell peppers, and carrots.' },
      { name: 'Thai Rama Fried Rice', description: 'Chicken, pork, and beef with basil, broccoli, cabbage, onions, and carrots.', price: '$14' },
      { name: 'Chicken Over Rice', description: 'Fresh garlic chicken with mushrooms, baby corn, bok choy, carrots, and green onions over steamed rice.' },
    ],
  },
  {
    id: 'entrees', name: 'Entrées', prices: dinnerPrices.filter((price) => price.label !== 'Salmon'), items: [
      { name: 'Pad Broccoli', description: 'Broccoli and carrots in oyster sauce.' },
      { name: 'Pad Cashew', description: 'Cashews, onions, zucchini, broccoli, celery, bell peppers, and carrots.' },
      { name: 'Pad Garlic', description: 'Fresh garlic, black pepper, and mixed vegetables.' },
      { name: 'Pad Ginger', description: 'Fresh ginger, mushrooms, onions, baby corn, cabbage, celery, bell peppers, green onions, and carrots.' },
      { name: 'Pad Jungle', description: 'Chili paste, green beans, broccoli, bell peppers, spinach, carrots, and sweet basil.' },
      { name: 'Pad Woon-Sen', description: 'Bean-thread noodles with eggs, fried tofu, mushrooms, baby corn, celery, tomatoes, and onions.' },
      { name: 'Crispy Orange Chicken', description: 'Crispy chicken in house orange sauce with broccoli, carrots, and cabbage.' },
      { name: 'Sesame Beef', description: 'Ginger-marinated beef with mushrooms, snow peas, onions, carrots, and sesame.' },
      { name: 'Sweet & Sour', description: 'Bell peppers, onions, carrots, cucumbers, pineapple, tomatoes, and sweet and sour sauce.' },
      { name: 'Floating Rama', description: 'Garlic, broccoli, spinach, zucchini, bok choy, cabbage, celery, carrots, and peanut sauce.' },
      { name: 'Vegetable Delight', description: 'Mixed vegetables with garlic, rice wine, and oyster sauce.' },
      { name: 'Spicy Eggplant with Tofu', description: 'Eggplant, fried tofu, basil, bell peppers, onions, and carrots in bean paste sauce.' },
      { name: 'Screamer', description: 'Zucchini, celery, carrots, onions, bell peppers, sweet basil, and chili paste.' },
      { name: 'Spicy Green Beans', description: 'Green beans, onions, and carrots in chili sauce.' },
      { name: 'Basil Pork', description: 'Ground pork with garlic, basil, chili, onions, green beans, and bell peppers.' },
      { name: 'Spicy Prawns', description: 'Prawns in red curry sauce with zucchini, basil, onions, carrots, and celery.' },
      { name: 'Garlic Salmon', description: 'Grilled salmon with garlic pepper sauce on green beans and carrots.' },
    ],
  },
  {
    id: 'specials', name: 'House Specials', items: [
      { name: 'Avocado Green Curry', description: 'House green curry with fresh avocado, chicken, and prawns.', price: '$18' },
      { name: 'Crispy Pork Belly', description: 'Crispy pork belly with chili paste, green beans, basil, and bell peppers.', price: '$18' },
      { name: 'Crispy Garlic Chicken', description: 'Crispy chicken with steamed broccoli, carrots, and special garlic sauce.', price: '$18' },
      { name: 'Avocado Fried Rice', description: 'Fried rice with fresh avocado, peas, egg, and your choice of protein.', price: '$18' },
      { name: 'Khao Soi', description: 'Mild coconut curry with egg noodles, crunchy noodles, cilantro, pickled cabbage, red onion, and lime.', price: '$18' },
      { name: 'Pumpkin Curry', description: 'Fresh pumpkin, peas, bell pepper, basil, and house yellow curry.', price: '$18' },
      { name: 'Crispy Sea Bass', price: '$18' },
      { name: 'Crispy Curry Chicken', price: '$18' },
      { name: 'Tom Yum Fried Rice', price: '$18' },
      { name: 'Roasted Duck Curry', price: '$18' },
    ],
  },
  {
    id: 'sides', name: 'Sides', items: [
      { name: 'Jasmine Rice', price: '$2.50' },
      { name: 'Brown Rice', price: '$3' },
      { name: 'Sticky Rice', price: '$3' },
      { name: 'Peanut Sauce, 4 oz.', price: '$2' },
      { name: 'Steamed Noodles', description: 'Wide or thin.', price: '$3' },
      { name: 'Steamed Vegetables', price: '$5' },
    ],
  },
  {
    id: 'drinks', name: 'Drinks', items: [
      { name: 'Soft Drink', description: 'Coke, Diet Coke, Sprite, or Root Beer. Free refills.', price: '$4' },
      { name: 'Thai Iced Tea', price: '$5' },
      { name: 'Thai Iced Coffee', price: '$5' },
      { name: 'Hot Tea', price: '$3' },
      { name: 'Hot Coffee', price: '$4' },
      { name: 'Shirley Temple', price: '$5' },
    ],
  },
  {
    id: 'dessert', name: 'Dessert', items: [
      { name: 'Mango with Sticky Rice', description: 'Seasonal.', price: '$10' },
      { name: 'Black Sticky Rice', price: '$7' },
      { name: 'Ice Cream', description: 'Coconut or mango.', price: '$6' },
      { name: 'Fried Banana with Ice Cream', price: '$10' },
      { name: 'Fried Ice Cream', price: '$10' },
    ],
  },
];

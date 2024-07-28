import { image } from "./constant";

const restaurantMenu = [
  // Starters
  {
    dishName: "Vegetable Spring Rolls",
    price: "$5.99",
    rating: 4.5,
    description: "Crispy spring rolls filled with fresh vegetables.",
    ingredients: ["Cabbage", "Carrot", "Spring Onion", "Wrapper"],
    veg: true,
    category: "Starter",
    image:
      "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Chicken Satay",
    price: "$7.99",
    rating: 4.7,
    description: "Grilled chicken skewers served with peanut sauce.",
    ingredients: ["Chicken", "Peanut", "Spices"],
    veg: false,
    category: "Starter",
    image:
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Tomato Basil Soup",
    price: "$4.99",
    rating: 4.6,
    description: "A rich and creamy soup with fresh tomatoes and basil.",
    ingredients: ["Tomato", "Basil", "Cream"],
    veg: true,
    category: "Starter",
    image:
      "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg",
  },
  {
    dishName: "Garlic Prawns",
    price: "$8.99",
    rating: 4.8,
    description: "Succulent prawns cooked in garlic butter sauce.",
    ingredients: ["Prawns", "Garlic", "Butter"],
    veg: false,
    category: "Starter",
    image:
      "https://cdn.pixabay.com/photo/2014/12/15/14/05/salad-569156_1280.jpg",
  },
  {
    dishName: "Paneer Tikka",
    price: "$6.99",
    rating: 4.5,
    description: "Cubes of paneer marinated in spices and grilled.",
    ingredients: ["Paneer", "Spices", "Yogurt"],
    veg: true,
    category: "Starter",
    image:
      "https://media.istockphoto.com/id/942451256/photo/many-kind-of-sea-food-and-thai-food.jpg?s=612x612&w=0&k=20&c=sElcd919iQSsqXN9y9MWihFO2b-hb2Zn_7AFeV8dC2A=",
  },
  {
    dishName: "Bruschetta",
    price: "$5.50",
    rating: 4.3,
    description: "Grilled bread topped with tomato, basil, and olive oil.",
    ingredients: ["Bread", "Tomato", "Basil", "Olive Oil"],
    veg: true,
    category: "Starter",
    image:
      "https://cdn.pixabay.com/photo/2018/07/25/16/41/japanese-3561782_1280.jpg",
  },
  {
    dishName: "Chicken Wings",
    price: "$7.50",
    rating: 4.4,
    description: "Spicy and tangy chicken wings served with ranch sauce.",
    ingredients: ["Chicken Wings", "Spices", "Ranch Sauce"],
    veg: false,
    category: "Starter",
    image:
      "https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Stuffed Mushrooms",
    price: "$6.50",
    rating: 4.6,
    description: "Mushrooms stuffed with cheese and herbs.",
    ingredients: ["Mushrooms", "Cheese", "Herbs"],
    veg: true,
    category: "Starter",
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Calamari",
    price: "$7.99",
    rating: 4.5,
    description: "Crispy fried calamari served with marinara sauce.",
    ingredients: ["Calamari", "Breadcrumbs", "Marinara Sauce"],
    veg: false,
    category: "Starter",
    image:
      "https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Caprese Salad",
    price: "$5.99",
    rating: 4.7,
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
    ingredients: ["Mozzarella", "Tomatoes", "Basil", "Balsamic Glaze"],
    veg: true,
    category: "Starter",
    image:
      "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Margherita Pizza",
    price: "$12.99",
    rating: 4.8,
    description:
      "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
    ingredients: ["Pizza Dough", "Tomatoes", "Mozzarella", "Basil"],
    veg: true,
    category: "Main",
    image:
      "https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Butter Chicken",
    price: "$14.99",
    rating: 4.9,
    description:
      "Creamy and flavorful chicken curry with buttery tomato sauce.",
    ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
    veg: false,
    category: "Main",
    image:
      "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Pasta Carbonara",
    price: "$13.99",
    rating: 4.7,
    description: "Rich and creamy pasta with bacon and parmesan cheese.",
    ingredients: ["Pasta", "Bacon", "Eggs", "Parmesan Cheese"],
    veg: false,
    category: "Main",
    image:
      "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Vegetable Stir Fry",
    price: "$11.99",
    rating: 4.5,
    description:
      "A mix of fresh vegetables stir-fried with soy sauce and sesame.",
    ingredients: ["Broccoli", "Bell Peppers", "Carrots", "Soy Sauce"],
    veg: true,
    category: "Main",
    image:
      "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Grilled Salmon",
    price: "$16.99",
    rating: 4.8,
    description: "Perfectly grilled salmon served with lemon butter sauce.",
    ingredients: ["Salmon", "Lemon", "Butter", "Herbs"],
    veg: false,
    category: "Main",
    image:
      "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Paneer Butter Masala",
    price: "$13.50",
    rating: 4.7,
    description: "Soft paneer cubes in a rich and creamy tomato-based gravy.",
    ingredients: ["Paneer", "Tomato", "Cream", "Spices"],
    veg: true,
    category: "Main",
    image:
      "https://images.pexels.com/photos/7340936/pexels-photo-7340936.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Beef Tacos",
    price: "$10.99",
    rating: 4.6,
    description: "Soft tacos filled with seasoned beef, lettuce, and cheese.",
    ingredients: ["Beef", "Taco Shells", "Lettuce", "Cheese"],
    veg: false,
    category: "Main",
    image:
      "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Mushroom Risotto",
    price: "$12.99",
    rating: 4.7,
    description: "Creamy risotto with a blend of mushrooms and parmesan.",
    ingredients: ["Arborio Rice", "Mushrooms", "Parmesan", "White Wine"],
    veg: true,
    category: "Main",
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Chicken Alfredo",
    price: "$14.50",
    rating: 4.8,
    description:
      "Creamy Alfredo sauce with grilled chicken over fettuccine pasta.",
    ingredients: ["Chicken", "Fettuccine", "Cream", "Parmesan"],
    veg: false,
    category: "Main",
    image:
      "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dishName: "Vegetable Biryani",
    price: "$11.99",
    rating: 4.7,
    description:
      "Fragrant basmati rice cooked with mixed vegetables and spices.",
    ingredients: ["Basmati Rice", "Vegetables", "Spices"],
    veg: true,
    category: "Main",
    image:
      "https://images.pexels.com/photos/22435655/pexels-photo-22435655/free-photo-of-top-view-of-biryani-food.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default restaurantMenu;

//items
const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/pancake.webp",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "./images/dinerDouble.jpg",
    desc: "vaporware iPhone XOXO brooklyn, pop-up flexitarian heirloom pre-order",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/godzillaMilkshake.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/countryDelights.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "./images/eggAttack.jpg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "./images/oreodream.webp",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer pabst. Tumeric post-ironic retro cloud bread microdosing",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/bacon-egg-cups-1-2022.jpg",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "./images/cracker-barrel-meatloaf-recipe-5.webp",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/qurantinebuddy.jpg",
    desc: "skateboard fam, asymmetrical sartorial kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  // Added more menu items:
  {
    id: 10,
    title: "French Toast Surprise",
    category: "breakfast",
    price: 10.99,
    img: "./images/frenchtoast.jpg",
    desc: "Delicious French toast topped with fresh fruit, maple syrup, and a sprinkle of powdered sugar.",
  },
  {
    id: 11,
    title: "Classic Cheeseburger",
    category: "lunch",
    price: 14.49,
    img: "./images/cheeseburger.jpeg",
    desc: "A perfectly grilled cheeseburger with lettuce, tomato, and your choice of cheese on a soft bun.",
  },
  {
    id: 12,
    title: "Banana Split Shake",
    category: "shakes",
    price: 7.99,
    img: "./images/bananashake.jpeg",
    desc: "A creamy banana milkshake with scoops of vanilla, chocolate, and strawberry ice cream, topped with whipped cream.",
  },
  {
    id: 13,
    title: "Veggie Supreme Wrap",
    category: "lunch",
    price: 11.49,
    img: "./images/supremeWrap.jpeg",
    desc: "A fresh wrap filled with hummus, grilled veggies, and quinoa, perfect for a light but satisfying lunch.",
  },
  {
    id: 14,
    title: "Avocado Toast Deluxe",
    category: "breakfast",
    price: 13.49,
    img: "./images/baby-finger-foods-avocado-toast-6.jpg",
    desc: "Freshly smashed avocado on toasted sourdough bread, topped with a poached egg and a sprinkle of chili flakes.",
  },
  {
    id: 15,
    title: "Choco-Mint Milkshake",
    category: "shakes",
    price: 8.49,
    img: "./images/chocomilk.jpeg",
    desc: "A minty chocolate shake with real chocolate chips and a swirl of mint syrup.",
  },
  {
    id: 16,
    title: "BBQ Pulled Pork Sandwich",
    category: "lunch",
    price: 14.99,
    img: "./images/cookerbbq.jpeg",
    desc: "Slow-cooked pulled pork with tangy BBQ sauce, served on a toasted bun with a side of crispy fries.",
  },
  {
    id: 17,
    title: "Pineapple Paradise Shake",
    category: "shakes",
    price: 7.49,
    img: "./images/pineappleshake.jpeg",
    desc: "A tropical pineapple shake blended with coconut milk, perfect for a refreshing treat.",
  },
  {
    id: 18,
    title: "Stuffed Waffle",
    category: "breakfast",
    price: 16.49,
    img: "./images/stuffedwaffle.webp",
    desc: "A waffle stuffed with chocolate chips, topped with whipped cream, and drizzled with maple syrup.",
  },
  // Added Dinner Items:
  {
    id: 19,
    title: "Grilled Ribeye Steak",
    category: "dinner",
    price: 24.99,
    img: "./images/grilled-ribeye-sq.jpg.webp",
    desc: "A juicy, perfectly grilled ribeye steak served with mashed potatoes and sautéed vegetables.",
  },
  {
    id: 20,
    title: "Lobster Tail",
    category: "dinner",
    price: 29.99,
    img: "./images/lobstertail.jpeg",
    desc: "Succulent lobster tail, grilled and served with lemon butter, a side of rice, and steamed asparagus.",
  },
  {
    id: 21,
    title: "Chicken Alfredo",
    category: "dinner",
    price: 19.99,
    img: "./images/chickenalfredo.jpeg",
    desc: "Tender grilled chicken on a bed of creamy fettuccine Alfredo, served with a side of garlic bread.",
  },
  {
    id: 22,
    title: "Vegetable Stir-Fry",
    category: "dinner",
    price: 14.99,
    img: "./images/vegetables.jpeg",
    desc: "A colorful vegetable stir-fry with tofu, served over jasmine rice and drizzled with teriyaki sauce.",
  },
  {
    id: 23,
    title: "Salmon Fillet",
    category: "dinner",
    price: 22.99,
    img: "./images/salmonfillet.jpeg",
    desc: "Pan-seared salmon fillet with a citrus glaze, served with roasted potatoes and steamed broccoli.",
  },
  {
    id: 24,
    title: "BBQ Ribs",
    category: "dinner",
    price: 26.99,
    img: "./images/bbqribs.jpeg",
    desc: "Tender BBQ ribs glazed with smoky sauce, served with coleslaw and a side of cornbread.",
  },
  {
    id: 25,
    title: "Pasta Primavera",
    category: "dinner",
    price: 18.49,
    img: "./images/pasta.jpeg",
    desc: "Pasta tossed with a medley of fresh, sautéed vegetables in a light garlic butter sauce.",
  },
  {
    id: 26,
    title: "Chicken Parmesan",
    category: "dinner",
    price: 19.49,
    img: "./images/chickenparmeson.jpg",
    desc: "Breaded chicken cutlet, topped with marinara sauce and melted mozzarella, served with spaghetti.",
  },
  {
    id: 27,
    title: "Filet Mignon",
    category: "dinner",
    price: 32.99,
    img: "./images/filletmignon.jpeg",
    desc: "A tender filet mignon steak grilled to perfection, served with a baked potato and garlic butter sauce.",
  },
];

const section = document.querySelector(".menu");
const filterBtn = document.querySelectorAll("button");

//document-loaded
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

//filter
filterBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id.toLowerCase(); // Ensure category comparison is case-insensitive

    // Filter the menu based on the category
    const menuCategory = menu.filter(function (item) {
      return item.category.toLowerCase() === category; // Compare categories case-insensitively
    });

    // If the category is 'all', display all items, else display filtered items
    if (category === "all") {
      displayMenuItems(menu); // Display all items
    } else {
      displayMenuItems(menuCategory); // Display filtered items
    }
  });
});

function displayMenuItems(items) {
  let displayMenu = items.map(function (item) {
    return `<div class="menu-item">
        <div class="img">
          <img src="${item.img}" alt=${item.title} />
        </div>
        <div class="desc">
          <div class="heading">
            <span>${item.title}</span><span class="price">$${item.price}</span>
          </div>
          <div class="para">
            <p>
              ${item.desc}
            </p>
          </div>
        </div>
      </div>`;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
}

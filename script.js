// 🥘 Full Menu Data
const menuItems = [
    // 🌱 Vegetarian Starters (10)
    { name: "Paneer Tikka", category: "starters", price: 250, image: "img/paneer-tikka.jpg", desc: "Grilled cottage cheese in Indian spices." },
    { name: "Crispy Corn", category: "starters", price: 180, image: "img/crispy corn.jpg", desc: "Fried golden corn tossed in spices." },
    { name: "Honey Chilli Potatoes", category: "starters", price: 190, image: "img/honey chilli potatoes.jpg", desc: "Crispy potatoes in a sweet & spicy glaze." },
    { name: "Dahi Ke Kebab", category: "starters", price: 220, image: "img/dahi ke kebab.jpg", desc: "Hung curd patties with a crispy crust." },
    { name: "Stuffed Mushroom Tikka", category: "starters", price: 240, image: "img/stuffed mushroom tikka.jpg", desc: "Mushrooms stuffed with spiced paneer." },
    { name: "Hara Bhara Kebab", category: "starters", price: 210, image: "img/hara bhara kebab.jpg", desc: "Spinach & green peas-based kebabs." },
    { name: "Veg Kurkure", category: "starters", price: 200, image: "img/veg kurkure.jpg", desc: "Crunchy cheese-stuffed veggie rolls." },
    { name: "Chilli Garlic Mushroom", category: "starters", price: 230, image: "img/chilli garlic mushroom.jpg", desc: "Spicy, wok-tossed mushrooms." },
    { name: "Tandoori Broccoli", category: "starters", price: 250, image: "img/tandoori broccoli.jpg", desc: "Smoky grilled broccoli." },
    { name: "Cheese Corn Balls", category: "starters", price: 200, image: "img/cheese corn balls.jpg", desc: "Deep-fried crispy cheese bites." },

    // 🍗 Non-Vegetarian Starters (10)
    { name: "Chicken Seekh Kebab", category: "starters", price: 280, image: "img/chicken seekh kebab.jpg", desc: "Minced chicken skewers." },
    { name: "Tandoori Chicken", category: "starters", price: 320, image: "img/tandoori chicken.jpg", desc: "Yogurt-marinated grilled chicken." },
    { name: "Chicken Malai Tikka", category: "starters", price: 300, image: "img/chicken malai tikka.jpg", desc: "Creamy, mildly spiced grilled chicken." },
    { name: "Chicken 65", category: "starters", price: 280, image: "img/chicken 65.jpg", desc: "Spicy deep fried chicken." },
    { name: "Mutton Galouti Kebab", category: "starters", price: 350, image: "img/mutton galouti kebab.jpg", desc: "Soft, melt-in-the-mouth kebabs." },
    { name: "Mutton Shami Kebab", category: "starters", price: 340, image: "img/mutton shami kebab.jpg", desc: "Minced mutton kebabs." },
    { name: "Bhetki Fish Fry", category: "starters", price: 300, image: "img/bhetki fish fry.jpg", desc: "Bengali-style crumb-fried fish." },
    { name: "Chingri Cutlet", category: "starters", price: 330, image: "img/chingri cutlet.jpg", desc: "Bengali prawn cutlets." },
    { name: "Golden Fried Prawns", category: "starters", price: 350, image: "img/golden fried prawns.jpg", desc: "Deep-fried prawns in golden batter." },
    { name: "Tandoori Pomfret", category: "starters", price: 400, image: "img/tandoori pomfret.jpg", desc: "Whole pomfret grilled in Indian spices." },

    { name: "Tandoori Paneer Tikka", category: "grilled", price: 260, image: "img/tandoori paneer tikka.jpg", desc: "Smoky, grilled paneer cubes." },
    { name: "Stuffed Tandoori Aloo", category: "grilled", price: 220, image: "img/stuffed tandoori aloo.jpg", desc: "Grilled potatoes stuffed with paneer." },
    { name: "Veg Platter", category: "grilled", price: 350, image: "img/veg platter.jpg", desc: "Assorted tandoori vegetables." },
    { name: "Tandoori Soya Chaap", category: "grilled", price: 250, image: "img/tandoori soya chaap.jpg", desc: "Marinated & grilled soya sticks." },
    { name: "Tandoori Pineapple", category: "grilled", price: 200, image: "img/tandoori pineapple.jpg", desc: "Char-grilled pineapple with spices." },
    { name: "Malai Mushroom Tikka", category: "grilled", price: 230, image: "img/malai mushroom tikka.jpg", desc: "Creamy grilled mushrooms." },
    

    // 🍗 Non-Vegetarian Grilled & Tandoori Items (9)
    { name: "Tangdi Kebab", category: "grilled", price: 280, image: "img/tangdi kebab.jpg", desc: "Spicy marinated chicken drumsticks." },
    { name: "Afghani Chicken", category: "grilled", price: 320, image: "img/afghani chicken.jpg", desc: "Creamy grilled chicken." },
    { name: "Peri-Peri Grilled Chicken", category: "grilled", price: 330, image: "img/peri peri grilled chicken.jpg", desc: "Spicy grilled chicken." },
    { name: "Chicken Wings BBQ", category: "grilled", price: 270, image: "img/chicken wings bbq.jpg", desc: "Smoky barbecued chicken wings." },
    { name: "Tandoori Mutton Chops", category: "grilled", price: 400, image: "img/tandoori mutton chops.jpg", desc: "Spiced grilled mutton ribs." },
    { name: "Grilled Bhetki with Mustard Sauce", category: "grilled", price: 380, image: "img/grilled bhetki.jpg", desc: "Bengali-style grilled fish." },
    { name: "Lobster Tandoori", category: "grilled", price: 700, image: "img/lobster tandoori.jpg", desc: "Whole tandoori lobster." },
    { name: "Tandoori Salmon", category: "grilled", price: 600, image: "img/tandoori salmon.jpg", desc: "Smoky grilled salmon with Indian spices." },
    { name: "Tandoori Crab", category: "grilled", price: 550, image: "img/tandoori crab.jpg", desc: "Soft-shell crab cooked in tandoori masala." },

    // 🥣 SOUPS (5)
{ name: "Hot & Sour Soup (Veg/Chicken/Prawn)", category: "chinese", price: 180, image: "img/hot sour soup.jpg", desc: "Spicy & tangy soup with veggies or protein." },
{ name: "Manchow Soup (Veg/Chicken)", category: "chinese", price: 170, image: "img/manchow soup.jpg", desc: "Thick, spicy soup with crispy noodles." },
{ name: "Sweet Corn Soup (Veg/Chicken)", category: "chinese", price: 160, image: "img/sweet corn soup.jpg", desc: "Mildly sweet soup with corn & veggies/chicken." },
{ name: "Tom Yum Soup (Prawn/Chicken)", category: "chinese", price: 190, image: "img/tom yum soup.jpg", desc: "Spicy Thai soup with prawns or chicken." },
{ name: "Lemon Coriander Soup (Veg/Chicken)", category: "chinese", price: 175, image: "img/lemon coriander soup.jpg", desc: "Light, citrusy soup with fresh coriander." },


// 🍜 NOODLES & RICE (7)
{ name: "Veg Hakka Noodles", category: "chinese", price: 220, image: "img/veg hakka noodles.jpg", desc: "Classic wok-fried noodles with veggies." },
{ name: "Chilli Garlic Noodles", category: "chinese", price: 230, image: "img/chilli garlic noodles.jpg", desc: "Spicy garlic-infused wok-fried noodles." },
{ name: "Veg Fried Rice", category: "chinese", price: 210, image: "img/veg fried rice.jpg", desc: "Fragrant fried rice with fresh vegetables." },
{ name: "Schezwan Fried Rice", category: "chinese", price: 240, image: "img/schezwan fried rice.jpg", desc: "Spicy fried rice cooked with Schezwan sauce." },
{ name: "Chicken Hakka Noodles", category: "chinese", price: 250, image: "img/chicken hakka noodles.jpg", desc: "Wok-fried noodles with chicken & sauces." },
{ name: "Egg Fried Rice", category: "chinese", price: 230, image: "img/egg fried rice.jpg", desc: "Classic fried rice with scrambled egg." },
{ name: "Prawn Fried Rice", category: "chinese", price: 280, image: "img/prawn fried rice.jpg", desc: "Aromatic rice tossed with prawns & sauces." },

// 🔥 WOK-FRIED & GRAVY DISHES (6)
{ name: "Veg Manchurian", category: "chinese", price: 240, image: "img/veg manchurian.jpg", desc: "Crispy vegetable balls in Manchurian sauce." },
{ name: "Chilli Paneer", category: "chinese", price: 250, image: "img/chilli paneer.jpg", desc: "Paneer cubes tossed in spicy chilli sauce." },
{ name: "Hot Garlic Mushrooms", category: "chinese", price: 230, image: "img/hot garlic mushrooms.jpg", desc: "Mushrooms cooked in hot garlic sauce." },
{ name: "Chicken Manchurian", category: "chinese", price: 270, image: "img/chicken manchurian.jpg", desc: "Chicken tossed in classic Manchurian sauce." },
{ name: "Kung Pao Chicken", category: "chinese", price: 280, image: "img/kung pao chicken.jpg", desc: "Spicy & nutty stir-fried chicken dish." },
{ name: "Schezwan Chicken", category: "chinese", price: 290, image: "img/schezwan chicken.jpg", desc: "Fiery Schezwan-style chicken preparation." },

// 🥟 DIM SUMS (10)
{ name: "Steamed Veg Dim Sum", category: "dimsum", price: 200, image: "img/steamed veg dim sum.jpg", desc: "Delicate dumplings with fresh veggie stuffing." },
{ name: "Crystal Dumplings", category: "dimsum", price: 220, image: "img/crystal dumplings.jpg", desc: "Translucent dim sum filled with mushrooms & water chestnuts." },
{ name: "Truffle & Edamame Dim Sum", category: "dimsum", price: 250, image: "img/truffle edamame dim sum.jpg", desc: "Rich truffle oil with soft edamame filling." },
{ name: "Chilli Garlic Paneer Dim Sum", category: "dimsum", price: 230, image: "img/chilli garlic paneer dim sum.jpg", desc: "Soft dumplings tossed in spicy sauce." },
{ name: "Chicken Steamed Dim Sum", category: "dimsum", price: 240, image: "img/chicken steamed dim sum.jpg", desc: "Classic juicy dim sum with minced chicken." },
{ name: "Spicy Schezwan Chicken Dim Sum", category: "dimsum", price: 260, image: "img/spicy-schezwan chicken dim sum.jpg", desc: "Fiery hot dumplings with Schezwan sauce." },
{ name: "Prawn Har Gow", category: "dimsum", price: 270, image: "img/prawn har gow.jpg", desc: "Traditional Cantonese shrimp dumplings." },
{ name: "Mutton Keema Dim Sum", category: "dimsum", price: 280, image: "img/mutton keema dim sum.jpg", desc: "Juicy lamb keema wrapped in delicate dough." },

   //🍕 pizza
   { name: "Margherita Pizza", category: "pizza", price: 250, image: "img/margherita_pizza.jpg",  desc: "Size(Regular Siza):A classic pizza topped with fresh tomatoes, mozzarella, and basil." },
   { name: "Pepperoni Pizza", category: "pizza", price: 280, image: "img/pepperoni_pizza.jpg",  desc: "Size(Regular Siza):A savory pizza with loads of pepperoni, mozzarella, and tangy tomato sauce." },
   { name: "Veggie Supreme Pizza", category: "pizza", price: 300, image: "img/veggie_supreme_pizza.jpg",  desc: "Size(Regular Siza):A mix of fresh vegetables including bell peppers, onions, olives, and mushrooms." },
   { name: "BBQ Chicken Pizza", category: "pizza", price: 350, image: "img/bbq_chicken_pizza.jpg",  desc: "Size(Regular Siza):Grilled chicken topped with smoky BBQ sauce, onions, and mozzarella." },
   { name: "Hawaiian Pizza", category: "pizza", price: 320, image: "img/hawaiian_pizza.jpg",  desc: "Size(Regular Siza):A tropical twist with ham, pineapple, and mozzarella on a tangy tomato sauce base." },
   { name: "Meat Lovers Pizza", category: "pizza", price: 380, image: "img/meat_lovers_pizza.jpg",  desc: "Size(Regular Siza):A hearty pizza topped with pepperoni, sausage, bacon, and beef." },
   { name: "Four Cheese Pizza", category: "pizza", price: 330, image: "img/four_cheese_pizza.jpg",  desc: "Size(Regular Siza):A rich and creamy blend of mozzarella, cheddar, parmesan, and gouda." },
   { name: "Buffalo Chicken Pizza", category: "pizza", price: 340, image: "img/buffalo_chicken_pizza.jpg",  desc: "Size(Regular Siza):Spicy buffalo sauce with grilled chicken, mozzarella, and blue cheese." },
   { name: "Garlic Parmesan Pizza", category: "pizza", price: 310, image: "img/garlic_parmesan_pizza.jpg",  desc: "Size(Regular Siza):A cheesy pizza topped with garlic butter, parmesan, and fresh herbs." },
   { name: "Pesto Veggie Pizza", category: "pizza", price: 330, image: "img/pesto_veggie_pizza.jpg",  desc: "Size(Regular Siza):A fresh pesto sauce base topped with roasted veggies like zucchini, bell peppers, and olives." },
 
   // 🍔 burgers (8)
   { name: "Classic Cheeseburger", category: "burgers", price: 180, image: "img/classic_cheeseburger.jpg",  desc: "Size(Regular Siza):A juicy beef patty with melted cheese, lettuce, tomato, and pickles in a soft bun." },
   { name: "BBQ Bacon Burger", category: "burgers", price: 220, image: "img/bbq_bacon_burger.jpg",  desc: "Size(Regular Siza):A grilled beef patty with crispy bacon, BBQ sauce, cheddar cheese, and caramelized onions." },
   { name: "Veggie Burger", category: "burgers", price: 170, image: "img/veggie_burger.jpg",  desc: "Size(Regular Siza):A wholesome veggie patty made from lentils and vegetables, topped with lettuce, tomato, and a vegan sauce." },
   { name: "Spicy Chicken Burger", category: "burgers", price: 200, image: "img/spicy_chicken_burger.jpg",  desc: "Size(Regular Siza):A crispy fried chicken fillet, spicy mayo, lettuce, and pickles on a soft bun." },
   { name: "Double Cheese Burger", category: "burgers", price: 240, image: "img/double_cheese_burger.jpg",  desc: "Size(Regular Siza):Two juicy beef patties, two slices of melted cheese, lettuce, tomato, and pickles." },
   { name: "Mushroom Swiss Burger", category: "burgers", price: 230, image: "img/mushroom_swiss_burger.jpg",  desc: "Size(Regular Siza):A beef patty topped with sautéed mushrooms and melted Swiss cheese." },
   { name: "Bacon Guacamole Burger", category: "burgers", price: 250, image: "img/bacon_guacamole_burger.jpg",  desc: "Size(Regular Siza):A savory beef patty with crispy bacon, creamy guacamole, lettuce, and tomato." },
   { name: "Fish Fillet Burger", category: "burgers", price: 220, image: "img/fish_fillet_burger.jpg",  desc: "Size(Regular Siza):A crispy fish fillet with tartar sauce, lettuce, and pickles in a soft bun." },


    // 🫓 INDIAN BREADS (15)
    { name: "Butter Naan", category: "indian_breads", price: 80, image: "img/butter naan.jpg", desc: "Soft naan brushed with butter." },
    { name: "Garlic Naan", category: "indian_breads", price: 90, image: "img/garlic naan.jpg", desc: "Naan with garlic and herbs." },
    { name: "Lachha Paratha", category: "indian_breads", price: 85, image: "img/lachha paratha.jpg", desc: "Layered crispy paratha." },
    { name: "Tandoori Roti", category: "indian_breads", price: 50, image: "img/tandoori roti.jpg", desc: "Whole wheat roti baked in tandoor." },
    { name: "Missi Roti", category: "indian_breads", price: 70, image: "img/missi roti.jpg", desc: "Spiced gram flour roti." },
    { name: "Aloo Kulcha", category: "indian_breads", price: 120, image: "img/aloo kulcha.jpg", desc: "Stuffed with spiced mashed potatoes." },
    { name: "Paneer Kulcha", category: "indian_breads", price: 130, image: "img/paneer kulcha.jpg", desc: "Stuffed with seasoned paneer." },
    { name: "Cheese Garlic Naan", category: "indian_breads", price: 150, image: "img/cheese garlic naan.jpg", desc: "Naan filled with cheese & garlic." },
    { name: "Onion Kulcha", category: "indian_breads", price: 110, image: "img/onion kulcha.jpg", desc: "Soft bread with spiced onion filling." },
    { name: "Pudina Paratha", category: "indian_breads", price: 90, image: "img/pudina paratha.jpg", desc: "Crispy paratha flavored with mint." },
    { name: "Chicken Keema Kulcha", category: "indian_breads", price: 160, image: "img/chicken keema kulcha.jpg", desc: "Stuffed with minced spiced chicken." },
    { name: "Mutton Keema Kulcha", category: "indian_breads", price: 180, image: "img/mutton keema kulcha.jpg", desc: "Stuffed with minced mutton." },
    { name: "Rumali Roti", category: "indian_breads", price: 50, image: "img/rumali roti.jpg", desc: "Thin, soft handkerchief-like bread." },
    { name: "Bakarkhani", category: "indian_breads", price: 90, image: "img/bakarkhani.jpg", desc: "Thick, crispy Mughlai bread." },
    { name: "Sheermal", category: "indian_breads", price: 100, image: "img/sheermal.jpg", desc: "Mildly sweet saffron-flavored bread." },

    // 🍛 GRAVY ITEMS (17)
    // 🌱 Vegetarian (8)
    { name: "Paneer Butter Masala", category: "gravy_items", price: 250, image: "img/paneer butter masala.jpg", desc: "Paneer cubes in creamy tomato gravy." },
    { name: "Dal Makhani", category: "gravy_items", price: 220, image: "img/dal makhani.jpg", desc: "Slow-cooked black lentils with cream." },
    { name: "Shahi Kofta", category: "gravy_items", price: 260, image: "img/shahi kofta.jpg", desc: "Dumplings in rich cashew-based curry." },
    { name: "Mix Veg Handi", category: "gravy_items", price: 230, image: "img/mix veg handi.jpg", desc: "Seasonal vegetables cooked in spices." },
    { name: "Kaju Masala", category: "gravy_items", price: 270, image: "img/kaju masala.jpg", desc: "Cashew nuts in spicy creamy curry." },
    { name: "Dum Aloo Kashmiri", category: "gravy_items", price: 240, image: "img/dum aloo kashmiri.jpg", desc: "Baby potatoes cooked in Kashmiri spices." },
    { name: "Palak Paneer", category: "gravy_items", price: 250, image: "img/palak paneer.jpg", desc: "Paneer cubes in creamy spinach gravy." },
    { name: "Methi Malai Matar", category: "gravy_items", price: 260, image: "img/methi malai-matar.jpg", desc: "Fenugreek & peas in creamy white gravy." },

    // 🍗 Non-Vegetarian (9)
    { name: "Butter Chicken", category: "gravy_items", price: 320, image: "img/butter chicken.jpg", desc: "Tender chicken in rich butter gravy." },
    { name: "Chicken Korma", category: "gravy_items", price: 330, image: "img/chicken korma.jpg", desc: "Chicken slow-cooked in a rich, nutty sauce." },
    { name: "Chicken Handi", category: "gravy_items", price: 340, image: "img/chicken handi2.jpg", desc: "Slow-cooked chicken in an earthen pot." },
    { name: "Chicken Chettinad", category: "gravy_items", price: 350, image: "img/chicken chettinad.jpg", desc: "Spicy South Indian-style chicken curry." },
    { name: "Mutton Rogan Josh", category: "gravy_items", price: 380, image: "img/mutton rogan josh.jpg", desc: "Kashmiri-style slow-cooked mutton curry." },
    { name: "Mutton Nihari", category: "gravy_items", price: 400, image: "img/mutton nihari.jpg", desc: "Slow-cooked mutton stew with rich spices." },
    { name: "Mutton Do Pyaza", category: "gravy_items", price: 370, image: "img/mutton do pyaza.jpg", desc: "Mutton cooked with onions & spices." },
    { name: "Mutton Kosha", category: "gravy_items", price: 390, image: "img/mutton kosha.jpg", desc: "Traditional Bengali slow-cooked spicy mutton." },
    { name: "Mutton Rezala", category: "gravy_items", price: 410, image: "img/mutton rezala.jpg", desc: "Mutton in a creamy, mildly spiced gravy." },
    

    // 🍚 RICE & BIRYANI (20)
    // 🌱 Vegetarian (6)
    { name: "Jeera Rice", category: "rice_biryani", price: 150, image: "img/jeera rice.jpg", desc: "Aromatic basmati rice tempered with cumin." },
    { name: "Vegetable Biryani", category: "rice_biryani", price: 250, image: "img/vegetable biryani.jpg", desc: "Fragrant biryani with assorted vegetables." },
    { name: "Paneer Tikka Biryani", category: "rice_biryani", price: 280, image: "img/paneer tikka biryani.jpg", desc: "Smoky paneer tikka layered with spiced rice." },
    { name: "Peas Pulao", category: "rice_biryani", price: 180, image: "img/peas pulao.jpg", desc: "Basmati rice cooked with green peas." },
    { name: "Kashmiri Pulao", category: "rice_biryani", price: 260, image: "img/kashmiri pulao.jpg", desc: "Sweet and nutty rice with dry fruits." },
    { name: "Basanti Pulao", category: "rice_biryani", price: 220, image: "img/basanti pulao.jpg", desc: "Bengali-style yellow sweet pulao." },
    { name: "Schezwan Rice", category: "rice_biryani", price: 240, image: "img/schezwan rice.jpg", desc: "Spicy and tangy Indo-Chinese rice." },
    { name: "Lemon Rice", category: "rice_biryani", price: 190, image: "img/lemon rice.jpg", desc: "Zesty South Indian-style rice." },

    // 🍗 Non-Vegetarian (14)
    { name: "Chicken Dum Biryani", category: "rice_biryani", price: 320, image: "img/chicken-dum-biryani.jpg", desc: "Slow-cooked chicken biryani with aromatic spices." },
    { name: "Chicken Hyderabadi Biryani", category: "rice_biryani", price: 350, image: "img/chicken hyderabadi biryani.jpg", desc: "Spicy and flavorful Hyderabadi biryani." },
    { name: "Chicken Tikka Biryani", category: "rice_biryani", price: 330, image: "img/chicken tikka biryani.jpg", desc: "Grilled chicken tikka layered with biryani rice." },
    { name: "Mutton Biryani", category: "rice_biryani", price: 400, image: "img/mutton biryani.jpg", desc: "Aromatic basmati rice cooked with tender mutton." },
    { name: "Mutton Lucknowi Biryani", category: "rice_biryani", price: 420, image: "img/mutton lucknowi biryani.jpg", desc: "Delicately spiced Awadhi-style biryani." },
    { name: "Mutton Yakhni Pulao", category: "rice_biryani", price: 380, image: "img/mutton yakhni pulao.jpg", desc: "Slow-cooked mutton in fragrant stock with rice." },
    { name: "Fish Biryani", category: "rice_biryani", price: 360, image: "img/fish biryani.jpg", desc: "Aromatic rice layered with spiced fish." },
    { name: "Prawn Biryani", category: "rice_biryani", price: 370, image: "img/prawn biryani.jpg", desc: "Fragrant rice with spiced prawns." },
    { name: "Keema Biryani", category: "rice_biryani", price: 390, image: "img/keema biryani.jpg", desc: "Minced mutton biryani with aromatic spices." },
    { name: "Egg Biryani", category: "rice_biryani", price: 280, image: "img/egg biryani.jpg", desc: "Spiced egg biryani with basmati rice." },
    { name: "Anda Pulao", category: "rice_biryani", price: 250, image: "img/anda pulao.jpg", desc: "Lightly spiced egg pulao." },
    { name: "Malabar Prawn Biryani", category: "rice_biryani", price: 400, image: "img/malabar prawn biryani.jpg", desc: "Coastal-style prawn biryani with coconut flavors." },
    { name: "Kolkata Biryani", category: "rice_biryani", price: 370, image: "img/kolkata biryani.jpg", desc: "Subtle & aromatic biryani with potatoes." },
    { name: "Gosht Zafrani Biryani", category: "rice_biryani", price: 450, image: "img/gosht zafrani biryani.jpg", desc: "Saffron-infused mutton biryani." },

     // 🍽️ South Indian 
   { name: "Masala Dosa", category: "south_indian", price: 120, image: "img/masala_dosa.jpg", desc: "Crispy rice crepe stuffed with a spiced potato filling, served with chutney and sambar." },
   { name: "Idli Sambhar", category: "south_indian", price: 100, image: "img/idli_sambhar.jpg", desc: "Soft steamed rice cakes served with tangy sambar and coconut chutney." },
   { name: "Vada", category: "south_indian", price: 80, image: "img/vada.jpg", desc: "Crispy, deep-fried lentil doughnuts, often served with coconut chutney and sambar." },
   { name: "Upma", category: "south_indian", price: 90, image: "img/upma.jpg", desc: "Savory semolina dish cooked with vegetables and spices, served with chutney." },
   { name: "Pongal", category: "south_indian", price: 110, image: "img/pongal.jpg", desc: "A comforting dish made of rice and lentils, flavored with black pepper and ghee, served with sambar." },
   { name: "Dosa with Coconut Chutney", category: "south_indian", price: 130, image: "img/dosa_coconut_chutney.jpg", desc: "Crispy dosa served with tangy coconut chutney and sambar." },
   { name: "Sambar Rice", category: "south_indian", price: 140, image: "img/sambar_rice.jpg", desc: "Rice mixed with spicy sambar and topped with vegetables, served with papad." },
   { name: "South Indian Thali", category: "south_indian", price: 250, image: "img/south_indian_thali.jpg", desc: "A traditional South Indian platter with rice, sambar, curries, pickles, and dessert." },
   { name: "Medu Vada", category: "south_indian", price: 90, image: "img/medu_vada.jpg", desc: "Crispy and savory fried doughnut-shaped vadas, often served with sambar and coconut chutney." },
   { name: "Rava Kesari", category: "south_indian", price: 100, image: "img/rava_kesari.jpg", desc: "A sweet semolina dish made with ghee, sugar, and cardamom, often served as a dessert." },
 
    // 🍬 BENGALI SWEETS (4)
    { name: "Nolen Gurer Rosogolla", category: "bengali_sweets", price: 100, image: "img/nolen-gurer-rosogolla.jpg", desc: "Soft rosogolla made with date palm jaggery." },
    { name: "Langcha", category: "bengali_sweets", price: 90, image: "img/langcha.jpg", desc: "Juicy fried sweet from Bengal." },
    { name: "Chhanar Jilipi", category: "bengali_sweets", price: 110, image: "img/chhanar-jilipi.jpg", desc: "Bengali paneer-based sweet jalebi." },
    { name: "Mishti Doi", category: "bengali_sweets", price: 120, image: "img/mishti-doi.jpg", desc: "Caramelized sweet yogurt." },
    { name: "Rasgulla", category: "bengali_sweets", price: 90, image: "img/rasgulla.jpg", desc: "Soft, spongy balls of chhena soaked in sugary syrup." },
    { name: "Sandesh", category: "bengali_sweets", price: 150, image: "img/sandesh.jpg", desc: "Delicate Bengali sweet made from fresh paneer and flavored with cardamom or saffron." },
    { name: "Patishapta", category: "bengali_sweets", price: 130, image: "img/patishapta.jpg", desc: "Thin crepes stuffed with coconut, khoya, and jaggery filling." },
    { name: "Kacha Golla", category: "bengali_sweets", price: 100, image: "img/kacha-golla.jpg", desc: "Soft and round sweet made with fresh paneer and sugar." },
    { name: "Gur Sandesh", category: "bengali_sweets", price: 140, image: "img/gur-sandesh.jpg", desc: "A variety of Sandesh sweetened with date palm jaggery." },
    { name: "Baked Rasgulla", category: "bengali_sweets", price: 160, image: "img/baked-rasgulla.jpg", desc: "Rasgullas baked to perfection, creating a soft and slightly crispy texture." },
    { name: "Sondesh with Mango", category: "bengali_sweets", price: 170, image: "img/sondesh-mango.jpg", desc: "Delicate Sandesh flavored with fresh mango pulp." },
    { name: "Kheer Kadam", category: "bengali_sweets", price: 150, image: "img/kheer-kadam.jpg", desc: "A sweet ball made of khoya wrapped with a layer of rosogolla." },
    { name: "Chomchom", category: "bengali_sweets", price: 110, image: "img/chomchom.jpg", desc: "Sweet, spongy dough balls soaked in sugar syrup and flavored with rosewater." },
    { name: "Shorbhaja", category: "bengali_sweets", price: 120, image: "img/shorbhaja.jpg", desc: "Fried dough soaked in sugary syrup, a classic Bengali dessert." },
    { name: "Misti Doi with Kesar", category: "bengali_sweets", price: 130, image: "img/mishti-doi-kesar.jpg", desc: "Sweetened yogurt flavored with saffron." },
    { name: "Chhena Murki", category: "bengali_sweets", price: 140, image: "img/chhena-murki.jpg", desc: "Sweetened chhena cubes flavored with cardamom." },

    // 🧊 COLD DRINKS & MOCKTAILS (15)
    { name: "Cold Coffee", category: "cold_drinks", price: 150, image: "img/cold-coffee.jpg", desc: "Chilled, creamy coffee." },
    { name: "Mango Lassi", category: "cold_drinks", price: 120, image: "img/mango-lassi.jpg", desc: "Thick and creamy mango-flavored yogurt drink." },
    { name: "Sweet/Salted Lassi", category: "cold_drinks", price: 100, image: "img/lassi.jpg", desc: "Classic Punjabi-style lassi." },
    { name: "Aam Panna", category: "cold_drinks", price: 110, image: "img/aam-panna.jpg", desc: "Refreshing raw mango summer cooler." },
    { name: "Gondhoraj Lemon Sherbet", category: "cold_drinks", price: 130, image: "img/gondhoraj-lemon-sherbet.jpg", desc: "Refreshing drink with Bengal’s aromatic lime." },
    { name: "Sugarcane Juice", category: "cold_drinks", price: 90, image: "img/sugarcane-juice.jpg", desc: "Freshly pressed sugarcane juice." },
    { name: "Virgin Mojito", category: "cold_drinks", price: 140, image: "img/virgin-mojito.jpg", desc: "Lime & mint soda-based mocktail." },
    { name: "Pineapple Mint Cooler", category: "cold_drinks", price: 130, image: "img/pineapple-mint-cooler.jpg", desc: "A refreshing blend of pineapple juice and fresh mint." },
    { name: "Blue Lagoon", category: "cold_drinks", price: 160, image: "img/blue-lagoon.jpg", desc: "A vibrant mocktail made with blue curaçao and lime juice." },
    { name: "Watermelon Mojito", category: "cold_drinks", price: 150, image: "img/watermelon-mojito.jpg", desc: "A refreshing blend of watermelon, mint, and soda." },
    { name: "Peach Iced Tea", category: "cold_drinks", price: 120, image: "img/peach-iced-tea.jpg", desc: "Chilled tea infused with sweet peach flavor." },
    { name: "Strawberry Lemonade", category: "cold_drinks", price: 140, image: "img/strawberry-lemonade.jpg", desc: "Tangy lemonade with a sweet twist of strawberries." },
    { name: "Coconut Water", category: "cold_drinks", price: 80, image: "img/coconut-water.jpg", desc: "Fresh, natural coconut water served chilled." },
    { name: "Kiwi Fizz", category: "cold_drinks", price: 160, image: "img/kiwi-fizz.jpg", desc: "Zesty kiwi soda-based mocktail with a refreshing fizz." },
    { name: "Lemon Iced Tea", category: "cold_drinks", price: 110, image: "img/lemon-iced-tea.jpg", desc: "Classic iced tea with a lemon twist." },
    { name: "Pomegranate Mojito", category: "cold_drinks", price: 150, image: "img/pomegranate-mojito.jpg", desc: "A twist on the classic mojito with pomegranate juice." },
    { name: "Tropical Punch", category: "cold_drinks", price: 170, image: "img/tropical-punch.jpg", desc: "A tropical mocktail with pineapple, orange, and lime juices." },

    // ☕ HOT DRINKS (2)
    { name: "Masala Chai", category: "hot_drinks", price: 60, image: "img/masala-chai.jpg", desc: "Spiced Indian tea." },
    { name: "Adrak Elaichi Chai", category: "hot_drinks", price: 70, image: "img/adrak-elaichi-chai.jpg", desc: "Ginger-cardamom flavored tea." },
    { name: "Milk Coffee", category: "hot_drinks", price: 80, image: "img/milk coffee.jpg", desc: "Spiced  milk coffee." },
    { name: "Black Coffee", category: "hot_drinks", price: 70, image: "img/black coffee.jpg", desc: "Storng black coffee without sugar." },
    { name: "Green Tea", category: "hot_drinks", price: 60, image: "img/green-tea.jpg", desc: "Healthy green tea." },

   // 🍧 desserts
   { name: "Cherry on Top", category: "desserts", price: 120, image: "img/small dessert.jpg", desc: "Creamy vanilla ice cream topped with luscious cherries." },
   { name: "Cake Ice Cream Delight", category: "desserts", price: 150, image: "img/cake ice cream.jpg", desc: "A heavenly mix of soft cake and rich ice cream." },
   { name: "Chocolate Parle-G Ice Cream", category: "desserts", price: 160, image: "img/chocolate-parle-g-ice-cream.jpg", desc: "A nostalgic fusion of creamy chocolate ice cream." },
   { name: "Chocolate Overloaded Sundae", category: "desserts", price: 320, image: "img/chocolate-overload.jpg", desc: "An indulgent treat with layers of chocolate, brownie chunks, and choco syrup." },
   { name: "Mango Cheesecake", category: "desserts", price: 180, image: "img/mango_cheesecake.jpg", desc: "A creamy, tangy cheesecake topped with fresh mango puree." },
   { name: "Strawberry Shortcake Ice Cream", category: "desserts", price: 170, image: "img/strawberry_shortcake_ice_cream.jpg", desc: "Light sponge cake layered with fresh strawberries and creamy ice cream." },
   { name: "Caramel Pudding Cake", category: "desserts", price: 110, image: "img/caramel_pudding_cake.jpg", desc: "Smooth, creamy pudding in a cake form with a rich caramel flavor." },
   { name: "Tiramisu Ice Cream Cake", category: "desserts", price: 200, image: "img/tiramisu_ice_cream_cake.jpg", desc: "Layers of coffee-soaked cake and ice cream, topped with mascarpone and cocoa." },
   { name: "Chocolate Lava Cake", category: "desserts", price: 250, image: "img/chocolate_lava_cake.jpg", desc: "A warm, gooey chocolate cake with a molten ice cream center." },
   { name: "Banoffee Pie Cake", category: "desserts", price: 220, image: "img/banoffee_pie_cake.jpg", desc: "A cake version of the classic Banoffee Pie, with bananas, toffee, and whipped cream." },
   { name: "Apple Crumble Cake", category: "desserts", price: 160, image: "img/apple_crumble_cake.jpg", desc: "Warm apple filling in a cake with a buttery, crunchy crumble topping." },
   { name: "Lemon Meringue Pie Cake", category: "desserts", price: 190, image: "img/lemon_meringue_pie_cake.jpg", desc: "Tart lemon filling with fluffy meringue on a cake base." },
   { name: "Blueberry Cheesecake Ice Cream", category: "desserts", price: 180, image: "img/blueberry_cheesecake_ice_cream.jpg", desc: "Creamy cheesecake flavor mixed with sweet blueberry ice cream." },
   { name: "Pistachio Kulfi Cake", category: "desserts", price: 140, image: "img/pistachio_kulfi_cake.jpg", desc: "A delicious cake with traditional kulfi flavors of pistachio and cardamom." },
   { name: "Mango Ice Cream", category: "desserts", price: 130, image: "img/mango_ice_cream.jpg", desc: "Sweet and creamy ice cream made with ripe mangoes." },
   { name: "Strawberry Swirl Ice Cream", category: "desserts", price: 140, image: "img/strawberry_swirl_ice_cream.jpg", desc: "Rich and creamy ice cream with a vibrant strawberry swirl." },
   { name: "Pistachio Ice Cream", category: "desserts", price: 150, image: "img/pistachio_ice_cream.jpg", desc: "Smooth, nutty ice cream made with crushed pistachios." },
   { name: "Chocolate Fudge Brownie Ice Cream", category: "desserts", price: 180, image: "img/chocolate_fudge_brownie_ice_cream.jpg", desc: "Decadent chocolate ice cream with chunks of rich brownie and fudge." },
   { name: "Vanilla Bean Ice Cream", category: "desserts", price: 120, image: "img/vanilla_bean_ice_cream.jpg", desc: "Classic creamy vanilla ice cream made with real vanilla beans." },

];

const menuContainer = document.getElementById("menuContainer");
const searchBox = document.getElementById("searchBox");
const priceFilter = document.getElementById("priceFilter");
const priceValue = document.getElementById("priceValue");
const orderList = document.getElementById("orderList");
const totalPriceEl = document.getElementById("totalPrice");
const categoryDropdown = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const orderArrow = document.getElementById("orderArrow");  

let selectedCategory = "all";
const cachedMenus = {};
let order = [];
let totalPrice = 0;
let categoryDebounceTimeout;
let searchDebounceTimeout;

// Open/Close category dropdown
categoryDropdown.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Handle category selection
dropdownMenu.addEventListener("click", (event) => {
    const selectedItem = event.target.closest(".dropdown-item");
    if (selectedItem) {
        const selectedCategoryText = selectedItem.textContent.trim();
        selectedCategory = selectedItem.dataset.value;
        categoryDropdown.querySelector("#selectedText").textContent = selectedCategoryText;
        dropdownMenu.style.display = "none";

        clearTimeout(categoryDebounceTimeout);
        categoryDebounceTimeout = setTimeout(() => {
            filterMenu();
        }, 300);
    }
});

// Handle search input
searchBox.addEventListener("input", () => {
    clearTimeout(searchDebounceTimeout);
    searchDebounceTimeout = setTimeout(() => {
        selectedCategory = "all";
        filterMenu();
    }, 300);
});

// Handle price filter input
priceFilter.addEventListener("input", () => {
    priceValue.textContent = `₹${priceFilter.value}`;
    filterMenu();
});

// Display Menu Items
function displayMenu(items) {
    menuContainer.innerHTML = "";
    items.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <p><strong>₹${item.price}</strong></p>
            <button onclick="addToOrder('${item.name}', ${item.price}, this)">
                <img src="icons/order.png" alt="Add">
            </button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Filter Menu Items
function filterMenu() {
    const searchTerm = searchBox.value.toLowerCase();
    const maxPrice = parseInt(priceFilter.value);
    const categoryText = selectedCategory === "all" ? "any category" : selectedCategory;

    const cacheKey = `${selectedCategory}-${searchTerm}-${maxPrice}`;
    
    // Filter menu items based on category, search term, and price
    const filteredItems = menuItems.filter(item =>
        (selectedCategory === "all" || item.category === selectedCategory) &&
        item.name.toLowerCase().includes(searchTerm) &&
        item.price <= maxPrice
    );

    // Clear previous menu items
    menuContainer.innerHTML = "";

    // Remove any existing message
    let noItemsMessage = document.querySelector(".no-items-message");
    if (noItemsMessage) {
        noItemsMessage.remove();
    }

    // Show message if no items match the criteria
    if (filteredItems.length === 0) {
        noItemsMessage = document.createElement("p");
        noItemsMessage.classList.add("no-items-message");
        noItemsMessage.textContent = `🍽️ Oops! No items under ₹${maxPrice} in "${categoryText}". Try adjusting your budget or searching again! `;
        menuContainer.appendChild(noItemsMessage);
    } else {
        displayMenu(filteredItems);
    }
}


// Add to Order
function addToOrder(name, price, button) {
    button.classList.add("bounce");
    setTimeout(() => button.classList.remove("bounce"), 300);

    const existingItem = order.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        order.push({ name, price, quantity: 1 });
    }
    totalPrice += price;
    updateOrderSummary();
    toggleOrderArrowVisibility();
}

// Update Order Summary
function updateOrderSummary() {
    const orderSummary = document.getElementById("orderSummary");
    orderList.innerHTML = "";

    if (order.length === 0) {
        orderSummary.style.display = "none";
        totalPriceEl.textContent = `₹0`;
        return;
    }

    orderSummary.style.display = "block";

    order.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="order-item">
                <span class="order-item-text">${item.quantity}x ${item.name} - ₹${item.price * item.quantity}</span>
                <div class="edit-buttons">
                    <button class="edit-btn" onclick="increaseQuantity('${item.name}')">
                        <img src="icons/plus.png" alt="+">
                    </button>
                    <button class="edit-btn" onclick="decreaseQuantity('${item.name}')">
                        <img src="icons/minus.png" alt="-">
                    </button>
                </div>
            </div>
        `;
        orderList.appendChild(listItem);
    });

    totalPriceEl.textContent = `₹${totalPrice}`;
}

// Increase Quantity
function increaseQuantity(name) {
    const item = order.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
        totalPrice += item.price;
        updateOrderSummary();
        toggleOrderArrowVisibility();
    }
}

// Decrease Quantity
function decreaseQuantity(name) {
    const item = order.find(item => item.name === name);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        totalPrice -= item.price;
        updateOrderSummary();
        toggleOrderArrowVisibility();
    } else {
        order = order.filter(i => i.name !== name);
        totalPrice -= item.price;
        updateOrderSummary();
        toggleOrderArrowVisibility();
    }
}

// Toggle Order Arrow Visibility
function toggleOrderArrowVisibility() {
    if (order.length > 0) {
        orderArrow.style.display = "block";
        orderArrow.style.opacity = "1";
    } else {
        orderArrow.style.display = "none";
        orderArrow.style.opacity = "0";
    }
}

// Scroll to Order Summary
function scrollToOrderSummary() {
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.scrollIntoView({ behavior: "smooth" });
}

// Handle Scroll to Hide/Show Arrow
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (currentScroll + windowHeight >= documentHeight) {
        orderArrow.style.display = "none";
    } else if (currentScroll < lastScrollTop) {
        orderArrow.style.display = "block";
        orderArrow.style.opacity = "1";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Checkout Button Event Listener
document.getElementById("checkoutBtn").addEventListener("click", () => {
    localStorage.setItem("orderData", JSON.stringify(order));  // Save order
    localStorage.setItem("totalPrice", totalPrice);  // Save total price
    window.location.href = "checkout/checkout.html";  // Redirect to checkout page
});

// Initial Menu Display
displayMenu(menuItems);

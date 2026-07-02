const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      findUs: "Find Us",
    },
    hero: {
      tagline1: "STREET-MADE",
      tagline2: "FRESH DAILY",
      subtitle: "Flavor that follows sun.",
      description:
        "Fresh street-style tacos, bowls and snacks rolling through the city. Made with bright ingredients and a lot of good energy.",
      seeMenu: "See today's menu",
      findLocation: "Find our location",
    },
    about: {
      title: "About the truck",
      description:
        "Sunny Taco Truck was born to bring sunny flavors to busy streets. We serve Mexican-inspired food with a fresh twist - quick to grab, fun to eat, and perfect for markets, offices and events.",
      fresh: "Fresh ingredients every day",
      street: "Street-food vibes",
      vegan: "Vegetarian options available",
      imgAlt: "Sunny Taco Truck at night",
    },
    menu: {
      title: "Our sunny bites",
      subtitle: "A taste of sunshine in every bite",
      sides: "Sides",
      drinks: "Drinks",
      bajaTitle: "Baja Fish Taco",
      bajaDesc: "Crispy battered fish, zesty slaw, and a squeeze of fresh lime.",
      chickenTitle: "Chicken Taco",
      chickenDesc:
        "Juicy marinated chicken with crunchy slaw and a touch of chili mayo.",
      veggieTitle: "Veggie Bowl",
      veggieDesc:
        "Grilled veggies, rice, pico de gallo, and avocado for the perfect sunny balance.",
      churrosTitle: "Churro Bites",
      churrosDesc:
        "Golden, cinnamon-sugar churros served with creamy caramel dip.",
      friesName: "Crunchy Fries",
      friesDesc: "Crispy, golden, and lightly seasoned - a street classic.",
      nachosName: "Cheesy Nachos",
      nachosDesc:
        "Loaded with melted cheese, jalapeños, and that perfect crunch.",
      eloteName: "Elote Cup",
      eloteDesc:
        "Grilled corn with creamy sauce, chili, and lime zest - a fiesta in a cup.",
      guacamoleName: "Mini Guacamole",
      guacamoleDesc:
        "Fresh avocado dip served with crunchy tortilla chips.",
      mangoName: "Mango Agua Fresca",
      mangoDesc:
        "Refreshing and naturally sweet with tropical mango flavor.",
      lemonName: "Lemon-Lime Soda",
      lemonDesc: "Sparkling, citrusy, and full of sunshine energy.",
      strawberryName: "Strawberry Cooler",
      strawberryDesc: "Sweet and chilled with a bright berry twist.",
      tamarindName: "Tamarind Juice",
      tamarindDesc:
        "A tangy-sweet traditional favorite with a tropical touch.",
    },
    location: {
      title: "Where to find us today",
      line1: "We park around town from Monday to Friday, 11AM - 10PM.",
      line2: "Weekends: local food markets & events.",
      line3: "DM us on Instagram for today's location.",
      imgAlt: "Sunny Taco Truck at day time",
    },
    footer: {
      credit: "website by",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      menu: "Cardápio",
      findUs: "Encontre-nos",
    },
    hero: {
      tagline1: "FEITO NA RUA",
      tagline2: "FRESCO DIARIAMENTE",
      subtitle: "Sabor que segue o sol.",
      description:
        "Tacos frescos estilo street food, bowls e petiscos circulando pela cidade. Feitos com ingredientes vibrantes e muita energia boa.",
      seeMenu: "Ver cardápio de hoje",
      findLocation: "Encontrar nossa localização",
    },
    about: {
      title: "Sobre o truck",
      description:
        "O Sunny Taco Truck nasceu para levar sabores ensolarados às ruas movimentadas. Servimos comida de inspiração mexicana com um toque fresco — rápido de pegar, divertido de comer e perfeito para feiras, escritórios e eventos.",
      fresh: "Ingredientes frescos todos os dias",
      street: "Clima de street food",
      vegan: "Opções vegetarianas disponíveis",
      imgAlt: "Sunny Taco Truck à noite",
    },
    menu: {
      title: "Nossos sunny bites",
      subtitle: "Um gosto de sol em cada mordida",
      sides: "Acompanhamentos",
      drinks: "Bebidas",
      bajaTitle: "Baja Fish Taco",
      bajaDesc:
        "Peixe crocante empanado, salada refrescante e um toque de limão.",
      chickenTitle: "Chicken Taco",
      chickenDesc:
        "Frango suculento marinado com salada crocante e um toque de maionese de chili.",
      veggieTitle: "Veggie Bowl",
      veggieDesc:
        "Legumes grelhados, arroz, pico de gallo e abacate para o equilíbrio perfeito.",
      churrosTitle: "Churro Bites",
      churrosDesc:
        "Churros dourados, açúcar e canela servidos com cremoso dip de caramelo.",
      friesName: "Batatas Crocantes",
      friesDesc: "Crocantes, douradas e levemente temperadas — um clássico de rua.",
      nachosName: "Nachos com Queijo",
      nachosDesc:
        "Carregados com queijo derretido, jalapeños e aquela crocância perfeita.",
      eloteName: "Copo de Elote",
      eloteDesc:
        "Milho grelhado com molho cremoso, chili e raspas de limão — uma festa no copo.",
      guacamoleName: "Mini Guacamole",
      guacamoleDesc:
        "Fresh avocado dip servido com chips de tortilla crocantes.",
      mangoName: "Mango Agua Fresca",
      mangoDesc: "Refrescante e naturalmente doce com sabor tropical de manga.",
      lemonName: "Lemon-Lime Soda",
      lemonDesc: "Espumante, cítrico e cheio de energia solar.",
      strawberryName: "Strawberry Cooler",
      strawberryDesc: "Doce e gelado com um toque brilhante de frutas vermelhas.",
      tamarindName: "Tamarind Juice",
      tamarindDesc: "Um favorito tradicional agridoce com um toque tropical.",
    },
    location: {
      title: "Onde nos encontrar hoje",
      line1: "Estacionamos pela cidade de segunda a sexta, 11h - 22h.",
      line2: "Finais de semana: mercados locais e eventos.",
      line3: "Mande um direct no Instagram para saber a localização de hoje.",
      imgAlt: "Sunny Taco Truck durante o dia",
    },
    footer: {
      credit: "site por",
    },
  },
};

export type Language = keyof typeof translations;

export default translations;

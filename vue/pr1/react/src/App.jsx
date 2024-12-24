const peoples = [
  {
    name: 'Steve 1',
    tag: 'Boss',
    tagline: 'your favourite coffee daily lives tempor.',
    image: '/images/team/portrait-elegant-old-man-wearing-suit.jpg',
  },
  {
    name: 'Sandra',
    tag: 'Manager',
    tagline: 'your favourite coffee daily lives.',
    image:
      '/images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg',
  },
  {
    name: 'Jackson',
    tag: 'Senior',
    tagline: 'your favourite coffee daily lives.',
    image: '/images/team/small-business-owner-drinking-coffee.jpg',
  },
  {
    name: 'Michelle',
    tag: 'Barista',
    tagline: 'your favourite coffee daily consectetur.',
    image: '/images/team/smiley-business-woman-working-cashier.jpg',
  },
];

const menus = [
  {
    name: 'Breakfast',
    type: 'Delicious Menu',
    items: [
      {
        name: 'Pancakes',
        price: '$12.50',
        oldPrice: null,
        descr: 'Fresh brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'Toasted Waffle',
        price: '$12.00',
        oldPrice: '$16.50',
        descr: 'Brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'Fried Chips',
        price: '$15.0',
        oldPrice: null,
        descr: 'Rich Milk and Foam',
        isRecommended: true,
      },
      {
        name: 'Pecan Pancakes',
        price: '$15.50',
        oldPrice: '$33.33',
        descr: 'Studded with lots of nuts, pecan pancakes',
        isRecommended: false,
      },
      {
        name: 'Banana Cakes',
        price: '$18.0',
        oldPrice: null,
        descr: 'Studded with lots of nuts, pecan pancakes',
        isRecommended: false,
      },
    ],
  },
  {
    name: 'Coffee',
    type: 'Favourite Menu',
    items: [
      {
        name: 'Latte',
        price: '$7.50',
        oldPrice: '$12.50',
        descr: 'Fresh brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'White Coffee',
        price: '$5.90',
        oldPrice: null,
        descr: 'Brewed coffee and steamed milk',
        isRecommended: true,
      },
      {
        name: 'Chocolate Milk',
        price: '$5.50',
        oldPrice: null,
        descr: 'Rich Milk and Foam',
        isRecommended: false,
      },
      {
        name: 'Greentea',
        price: '$7.50',
        oldPrice: null,
        descr: 'Fresh brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'Dark Chocolate',
        price: '$7.25',
        oldPrice: null,
        descr: 'Rich Milk and Foam',
        isRecommended: false,
      },
    ],
  },
];

const testimonials = [
  {
    author: {
      name: 'Sandra',
      who: 'Customers',
      avatar: '/images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg',
    },
    rating: '2',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    author: {
      name: 'Don',
      who: 'Customers',
      avatar: '/images/reviews/senior-man-white-sweater-eyeglasses.jpg',
    },
    rating: '3.5',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    author: {
      name: 'Olivia',
      who: 'Customers',
      avatar:
        '/images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg',
    },
    rating: '5',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    author: {
      name: 'John',
      who: 'Customers',
      avatar: '/images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg',
    },
    rating: '4.5',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Barista from './components/Barista/Barista.jsx';
import Menu from './components/Menu/Menu.jsx';
import Review from './components/Review/Review.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <main>
        <Hero />

        <About />

        <Barista peoples={peoples} />

        <Menu menus={menus} />

        <Review testimonials={testimonials} />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;

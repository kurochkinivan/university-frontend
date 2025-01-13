<script setup>
const peoples = [
  {
    name: 'Steve',
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

import HeroSection from './components/HeroSection/HeroSection.vue';
import AboutSection from './components/About/AboutSection.vue';
import BaristaSection from './components/Barista/BaristaSection.vue';
import MenuSection from './components/Menu/MenuSection.vue';
import ReviewSection from './components/Review/ReviewSection.vue';
import ContactSection from './components/Contact/ContactSection.vue';
import FooterSection from './components/Footer/FooterSection.vue';

</script>

<template>
  <main>
    <HeroSection />

    <AboutSection />

    <BaristaSection :peoples="peoples" />

    <MenuSection :menus="menus" />

    <ReviewSection :testimonials="testimonials" />

    <ContactSection />

    <FooterSection />
  </main>
</template>

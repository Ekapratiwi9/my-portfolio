import mading from "../Components/image/mading.PNG";
import shop from "../Components/image/shop1.png";
import shop_desk from "../Components/image/shop-desk.png";
import shop_mobile from "../Components/image/shop-mobile.png";
import shop_tab from "../Components/image/shop-tab.png";
import travel from "../Components/image/travel1.png";
import travel_desk from "../Components/image/travel.png";
import travel_tab from "../Components/image/travel_tab.png";
import travel_mobile from "../Components/image/travel_mobile.png";
import porto from "../Components/image/porto.jpg";

import html from "../Components/logo_tech/html.png";
import css from "../Components/logo_tech/css.png";
import js from "../Components/logo_tech/js.png";
import bootstrap from "../Components/logo_tech/bootstrap.png";
import laravel from "../Components/logo_tech/laravel.png";
import livewire from "../Components/logo_tech/livewire.png";
import react from "../Components/logo_tech/react.svg";
import tailwind from "../Components/logo_tech/tailwind.png";

let Project = [
  {
    id: 1,
    title: "Portfolio Website",
    slug: "portofolio_website",
    description:
      "Explore a curated collection of my work, showcasing a fusion of creativity, innovation, and technical expertise.",
    tech: [{ item: html }, { item: js }, { item: tailwind }, { item: react }],
    image: [{ img: porto }],
  },
  {
    id: 2,
    title: "Digital Bulletin Board",
    slug: "digital_bulletin",
    description:
      "Digital Bulletin Board designed to convey important information and agendas to company employees.",
    tech: [
      { item: html },
      { item: css },
      { item: js },
      { item: bootstrap },
      { item: laravel },
    ],
    image: [{ img: mading }],
  },
  {
    id: 3,
    title: "Ecommerce Website with SEO Friendly",
    slug: "ecommerce",
    description:
      "An eCommerce Website with Clean and Responsive Design In addition to a clean and responsive design, this eCommerce website is built to support SEO optimization for maximum effectiveness.",
    tech: [
      { item: html },
      { item: js },
      { item: bootstrap },
      { item: tailwind },
      { item: laravel },
      { item: livewire },
    ],
    image: [
      { img: shop },
      { img: shop_desk },
      { img: shop_tab },
      { img: shop_mobile },
    ],
  },
  {
    id: 4,
    title: "Travel Website",
    slug: "travel",
    description:
      "Travel website created with a modern and responsive design using Tailwind CSS and Laravel. ",
    tech: [
      { item: html },
      { item: js },
      { item: bootstrap },
      { item: tailwind },
      { item: laravel },
      { item: livewire },
    ],
    image: [
      { img: travel },
      { img: travel_desk },
      { img: travel_tab },
      { img: travel_mobile },
    ],
  },
];

export default Project;

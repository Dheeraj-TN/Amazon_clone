import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import * as SlIcons from "react-icons/sl";
import * as TfiIcons from "react-icons/tfi";
import * as CgIcons from "react-icons/cg";
import * as ImIcons from "react-icons/im";
import { Link } from "react-router-dom";
import Kids1 from "../pages/Kids1";
export const SidebarData = [
  // {
  //   title: 'Overview',
  //   path: '/overview',
  //   icon: <AiIcons.AiFillHome />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: 'Users',
  //       path: '/overview/users',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Revenue',
  //       path: '/overview/revenue',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  {
    title: "Clothing",
    path: "/clothing",
    icon: <GiIcons.GiClothes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      // {
      //   title: "Men",
      //   path: "/clothing/men",
      //   icon: <ImIcons.ImMan />,
      //   cName: "sub-nav",
      // },
      {
        title: "Women and Men",
        path: "/clothing/women",
        icon: <ImIcons.ImWoman />,
        cName: "sub-nav",
      },

      {
        title: "Kids",
        path: "/clothing/kids",
        icon: <MdIcons.MdChildCare />,
      },
    ],
  },
  // {
  //   title: "Stationary",
  //   path: "/stationary",
  //   icon: <FaIcons.FaPencilRuler />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Notebooks",
  //       path: "/stationary/notebooks",
  //       icon: <SlIcons.SlNotebook />,
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "Art",
  //       path: "/stationary/art",
  //       icon: <FaIcons.FaPaintBrush />,
  //       cName: "sub-nav",
  //     },

  //     {
  //       title: "Accessories",
  //       path: "/stationary/accessories",
  //       icon: <TfiIcons.TfiRulerPencil />,
  //     },
  //   ],
  // },
  {
    title: "Home Decor",
    path: "/home decor",
    icon: <FaIcons.FaHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Living room",
        path: "/home decor/livingroom",
        icon: <GiIcons.GiSofa />,
        cName: "sub-nav",
      },
      {
        title: "Kitchen dining",
        path: "/home decor/kitchen dining",
        icon: <FaIcons.FaUtensils />,
        cName: "sub-nav",
      },

      {
        title: "Bedroom",
        path: "/home decor/bedroom",
        icon: <MdIcons.MdOutlineBed />,
      },
    ],
  },
  {
    title: "Electronics",
    path: "/electronics",
    icon: <MdIcons.MdOutlineElectricalServices />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      // {
      //   title: "Laptops",
      //   path: "/electronics/laptops",
      //   icon: <AiIcons.AiOutlineLaptop />,
      //   cName: "sub-nav",
      // },
      {
        title: "Mobiles",
        path: "/electronics/mobiles",
        icon: <FaIcons.FaMobileAlt />,
        cName: "sub-nav",
      },

      {
        title: "Tablets and laptops",
        path: "/electronics/tablets",
        icon: <FaIcons.FaTabletAlt />,
      },

      {
        title: "Refrigerator",
        path: "/electronics/refrigerator",
        icon: <CgIcons.CgSmartHomeRefrigerator />,
      },

      {
        title: "Washing machine",
        path: "/electronics/washing_machine",
        icon: <CgIcons.CgSmartHomeWashMachine />,
      },
    ],
  },
  {
    title: "Beauty",
    path: "/beauty",
    icon: <GiIcons.GiSparkles />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Make up",
        path: "/beauty/make_up",
        icon: <GiIcons.GiLipstick />,
        cName: "sub-nav",
      },
      {
        title: "Hair care",
        path: "/beauty/hair_care",
        icon: <MdIcons.MdFace />,
        cName: "sub-nav",
      },

      {
        title: "Skin care",
        path: "/beauty/skin_care",
        icon: <FaIcons.FaPumpSoap />,
      },
      {
        title: "Perfumes",
        path: "/beauty/perfumes",
        icon: <GiIcons.GiDelicatePerfume />,
        cName: "sub-nav",
      },
      {
        title: "Mens grooming",
        path: "/beauty/mens_grooming",
        icon: <GiIcons.GiBeard />,
        cName: "sub-nav",
      },
      {
        title: "Womens grooming",
        path: "/beauty/womens_grooming",
        icon: <GiIcons.GiHairStrands />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Kids",
    path: "/kids",
    icon: <TbIcons.TbMoodBoy />,
  },
  {
    title: "Sports",
    path: "/sports",
    icon: <MdIcons.MdOutlineSportsCricket />,
  },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Message 1',
  //       path: '/messages/message1',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Message 2',
  //       path: '/messages/message2',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  // },
];

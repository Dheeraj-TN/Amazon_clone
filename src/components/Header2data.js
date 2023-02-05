import React from 'react'
import * as RiIcons from 'react-icons/fa';
export const Header2data = [
    {
        title: 'Clothing',
        path: '/clothing',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Men',
                path:'./clothing/men'
            },
            {
                title: 'Women',
                path:'./clothing/women',
            },
            {
                title: 'Kids',
                path:'./clothing/kids',
            }
        ]
    },
    {
        title: 'Groceries',
        path: '/groceries',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Vegetables',
                path:'./groceries/vegetables'
            },
            {
                title: 'Fruits',
                path:'./groceries/fruits',
            },
            {
                title: 'Diary',
                path:'./groceries/diary',
            }
        ]
    },
]
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';

import { FaPiggyBank } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Transaction',
        path: '/transaction',
        icon: <BsArrowLeftRight />,
        cName: 'nav-text',
    },
    {
        title: 'Income',
        path: '/Income',
        icon: <FaPiggyBank />,
        cName: 'nav-text',
    },
    {
        title: 'Expenses',
        path: '/Expenses',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
   /*{
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
    },*/
    {
        title: 'Contacts',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
    },
]
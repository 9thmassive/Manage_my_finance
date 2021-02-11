import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GrIcons from 'react-icons/gr'

export const SidebarData = [
    {
        title: 'Profil',
        path: '/profil',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
    {

        title: 'Income',
        path: '/Income',
        icon: <FaIcons.FaCartPlus />,

        title: 'Find Saving',
        path: '/find-saving',
        icon: <IoIcons.IoIosPaper />,

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

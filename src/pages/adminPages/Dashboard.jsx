import DashboardNav from '@/components/DashboardNav';
import Separator from '@/components/Separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <DashboardNav/>
        </>
    )
}

export default Dashboard
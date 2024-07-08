import DashboardNav from '@/components/DashboardNav';
import Separator from '@/components/Separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div className=' w-full h-full overflow-hidden'>
            <div className=' max-container padding-container py-8'>
                <h4 className=' text-2xl font-bold'>BestBirder dashboard</h4>
            </div>
        </div>
    )
}

export default Dashboard
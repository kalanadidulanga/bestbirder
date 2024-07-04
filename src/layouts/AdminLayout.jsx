import DashboardNav from '@/components/DashboardNav'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <DashboardNav/>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AdminLayout
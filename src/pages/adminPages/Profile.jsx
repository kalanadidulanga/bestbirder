import { Button } from '@/components/ui/button'
import { AuthContext } from '@/contexts/AuthProvider'
import Cookies from 'js-cookie'
import { LogOut } from 'lucide-react'
import React, { useContext, useState } from 'react'

const Profile = () => {
  const [userData, setUserData] = useState(localStorage.getItem('userData') && Cookies.get('auth_token') ? JSON.parse(localStorage.getItem('userData')) : null)

  const { logout } = useContext(AuthContext);

  return (
    <div className=' w-full h-full overflow-hidden'>
      <div className=' max-container padding-container py-8'>
        <div className='flex items-center justify-between border-2 p-5 rounded-md'>
          <div className=' font-semibold'>
            <p>Email: {userData?.email}</p>
            <p>Name: {userData?.name}</p>
          </div>
          <Button variant="outline" className="" onClick={logout}>
            <LogOut size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
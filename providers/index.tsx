import React from 'react'
import ReactQueryClientProvider from './query-client.providers'
import WishlistProvider from './wishlist.provider'
import Authcontext from '@/contexts/auth.context'
import AuthProvider from './auth.provider'
const Providers = ({children}:{children:React.ReactNode}) => {
  return (

    <>
    <ReactQueryClientProvider>
        <WishlistProvider>
            <AuthProvider>   
                  {children}
                  </AuthProvider>
        
        </WishlistProvider>

        </ReactQueryClientProvider>
    


    </>

  )
}

export default Providers
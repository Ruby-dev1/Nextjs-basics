import React from 'react'
import ReactQueryClientProvider from './query-client.providers'
import WishlistProvider from './wishlist.provider'

const Providers = ({children}:{children:React.ReactNode}) => {
  return (

    <>
    <ReactQueryClientProvider>
        <WishlistProvider>
            {children}
        </WishlistProvider>

        </ReactQueryClientProvider>
    


    </>

  )
}

export default Providers
'use client'
import { addProductToWishlist, getWishlist, removeProductFromWishlist } from '@/api/wishlist.api'
import WishlistContext from '@/contexts/wishlist.context'
import { TWishlist } from '@/types/wishlist.types'
import { useMutation, useQuery ,useQueryClient} from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { IProduct } from '@/types/product.types'

const WishlistProvider = ({ children }: { children: React.ReactNode }) => {

    const queryClient = useQueryClient()
    const { isLoading, data } = useQuery({
        queryFn: getWishlist,
        queryKey: ['get-wishlist'],
        retry: false,
    })

    const { mutate: create, isPending: createPending } = useMutation({
        mutationFn: addProductToWishlist,
        onSuccess: (response) => {
            toast.success(response.message ?? 'product added to wishlist')
              queryClient.invalidateQueries({
            queryKey: ['get-wishlist'],
        })

        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            toast.error(error.message ?? 'something went wrong')
        },
    })

    const { mutate: remove, isPending: removePending } = useMutation({
        mutationFn: removeProductFromWishlist,
        onSuccess: (response) => {
            toast.success(response.message ?? 'product removed wishlist')
            
              queryClient.invalidateQueries({
            queryKey: ["get-wishlist"],
        });
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            toast.error(error.message ?? 'something went wrong')
        },
    })



    const addToWishlist = (productId: string) => {
       create({ productId })
    }

    const removeFromWishlist = (productId: string) => {
        remove(productId)
    }

   const isExists = (productId: string) => {
    return !!data?.data?.products?.some(
        (product: IProduct) => product._id === productId
    )
}


    return (
        <WishlistContext.Provider value={{
            wishlist: data?.data,
            addToWishlist,
            isLoading: !!isLoading || !!removePending || !!createPending,
            removeFromWishlist,
            isExists,
        }}>
            {children}

        </WishlistContext.Provider>
    )
}

export default WishlistProvider

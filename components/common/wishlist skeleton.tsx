
const WishlistSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-lg bg-white">
      {/* Image */}
      <div className="h-64 w-full rounded-lg bg-gray-200" />

      {/* Content */}
      <div className="mt-4 space-y-3">
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />
        <div className="h-5 w-1/4 rounded bg-gray-200" />
      </div>
    </div>
  )
}

export default WishlistSkeleton
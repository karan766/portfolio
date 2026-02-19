export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple/20 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-purple border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-white-200 text-lg">Loading Portfolio...</p>
      </div>
    </div>
  )
}
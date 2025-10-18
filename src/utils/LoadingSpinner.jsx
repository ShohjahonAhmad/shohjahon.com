function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-violet-500 border-t-transparent"></div>
      </div>
    );
  }
  
  export default LoadingSpinner;
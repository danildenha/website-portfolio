import Link from "next/link"

const Navbar = () => {
    return (
        <div className='h-full flex items-center justify-between 
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* LOGO WITH GRADIENT */}
{/* LOGO WITH GRADIENT */}
<div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
  <Link href="/" className="flex items-center justify-center">
    <span className="text-gradient text-3xl font-extrabold tracking-wide">Denha</span>
    <span className="ml-3 text-white text-sm rounded-md px-4 py-2 shadow-md" style={{ backgroundImage: 'linear-gradient(to right, #000000, #434343)' }}>portfolio</span>
  </Link>
</div>


            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    )
}

export default Navbar
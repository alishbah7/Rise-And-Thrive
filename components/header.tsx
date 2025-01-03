import { Search } from "lucide-react";
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="w-[100%] flex items-center justify-between py-2 md:py-3 px-1 sm:px-3 lg:px-6">

        {/*--=== LOGO ===--*/}
        <div className="text-[#8f6922] text-[20px] sm:text-[30px] font-bold font-[Garamond] logoShd">Rise&Thrive</div>

        {/*--=== NAVIGATION ===--*/}
        <nav className="hidden md:flex space-x-6">
          <Link href={''} className="text-gray-700 hover:text-[#8f6922]">Categories</Link>
          <Link href={''} className="text-gray-700 hover:text-[#8f6922]">Pages</Link>
          <Link href={''} className="text-gray-700 hover:text-[#8f6922]">Contact Us</Link>
          <Link href={''} className="text-gray-700 hover:text-[#8f6922]">About Us</Link>
        </nav>

        {/*--=== SEARCH BAR ===--*/}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search Anything"
            className="bg-transparent focus:outline-none text-sm text-black w-full"
          />
          <Search className="text-black w-5 h-5 cursor-pointer" />
        </div>

        {/*--=== MENU FOR SMALL SCREEN ===--*/}
        <div className="block md:hidden">
            <Sheet>
            <SheetTrigger>
                <Menu className='block md:hidden w-[20px] h-[25px] mt-[5px]'/>
            </SheetTrigger>
            <SheetContent>
                <div className='block md:hidden'>
                <ul className='flex flex-col gap-[40px]'>
                    <li className='mt-[6px]'><Link href={'/'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Home</Link></li>
                    <li className='mt-[6px]'><Link href={'/catalogue'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Catalogue</Link></li>
                    <li className='mt-[6px]'><Link href={'/products'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Products</Link></li>
                </ul>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

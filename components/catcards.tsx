import Image from "next/image";
import Link from "next/link";

//--=== DEFINING PROPERTIES FOR CATEGORIES ===--//
interface Categories {
    id: number;
    title: string;
    image: string;
  };

//--=== DEFINING CATEGORIES AS ARRAY ===--//  
interface CatCardProps {
  categories: Categories[];
};
  
const CatCard: React.FC<CatCardProps> = ({ categories }) => {
  return (

    //--=== CATEGORIES SECTION ===--//
    <div id="categories" className="h-auto lg:h-[100vh] flex justify-center items-center flex-col">
      <h1 className="flex justify-center items-center text-center md:justify-start md:items-start w-[85%] mt-[30px] font-bold text-[#8f6922] text-[35px] tracking-wide">Top Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3 py-3">
        {categories.map((category) => (
          <Link href={''} key={category.id} className="relative group overflow-hidden rounded-lg shadow-lg">

            {/*--=== IMAGE ===--*/}
            <Image
              src={category.image}
              alt={category.title}
              className="h-60 w-full md:w-[350px] object-cover transition-transform duration-300 group-hover:scale-110"
              width={300}
              height={300}
            />

            {/*--=== TITLE ===--*/}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold">{category.title}</div>
          
          </Link>
        ))}
      </div>
    </div>

  );
};
  
export default CatCard;
  
import Image from "next/image";
import confidence  from '../../public/images/confidence.jpg'

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 px-6 lg:px-16 py-10 lg:py-20">

        {/*-==== TITLE, SUB PARA AND MAIN PARA ====--*/}
        <div className="max-w-lg">
            <h3 className="text-sm uppercase font-semibold text-gray-500 mb-4">Explore your inner self</h3>
            <h1 className="text-3xl font-bold text-[#8f6922] mb-6">Rise And Thrive</h1>
            <p className="text-gray-700 mb-6">
            At Rise and Thrive, we are dedicated to inspiring personal growth and well-being. Through meaningful 
            stories and insights, we empower readers to cultivate confidence, embrace a balanced lifestyle, and unlock 
            their full potential.
            </p>
            <p className="text-gray-700 mb-6">
            At Rise and Thrive, we strive to be a positive force for change every day. Through thoughtful
            content and actionable insights, we aim to help readers foster healthier habits, nurture 
            mental well-being, and lead more fulfilling lives.
            </p>
            <button className="px-6 py-3 bg-[#8f6922] text-white rounded-lg">
            Learn More
            </button>
        </div>

        {/*--==== IMAGE ====--*/}
        <div className="w-full lg:w-1/2 h-[400px]">
            <Image
            src={confidence}
            alt="Image"
            width={500}
            height={600}
            className="rounded-lg object-cover h-[400px]"
            />
        </div>

    </div>
  );
}

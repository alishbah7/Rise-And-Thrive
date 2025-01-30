import CatCard from "@/components/catcards";

const cat = [
    { id: 1, title: 'Confidence-Building', image: '/images/mental-wellness.jpg' },
    { id: 2, title: 'Personal Growth', image: '/images/growth.jpg' },
    { id: 3, title: 'Productivity', image: '/images/productivity.jpg' },
    { id: 4, title: 'Inspiration', image: '/images/inspiration.jpg' },
    { id: 5, title: 'Goals', image: '/images/goals.jpg' },
    { id: 6, title: 'Self-Development', image: '/images/development.jpg' },
];

export default function Categories(){
    return(
        <div className="postsBg p-[20px]">
        <CatCard categories={cat}/>
        </div>
    )
}
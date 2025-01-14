import Link from 'next/link'

export default function CategorySlider(){
    return(
        /*--=== CATEGORIES SLIDER ===--*/
        <div className='catSlide'>
            <div className='slider' 
            style={{
            '--width': '250px',
            '--quantity': '9', 
            } as React.CSSProperties}
            >
                <div className='list'>
                    <div className='item item1' style={{'--position': 1} as React.CSSProperties}><Link href={''} className='Link'>#Confidence</Link></div>
                    <div className='item item2' style={{'--position': 2} as React.CSSProperties}><Link href={''} className='Link'>#Self-Development</Link></div>
                    <div className='item item3' style={{'--position': 3} as React.CSSProperties}><Link href={''} className='Link'>#Mental-Wellness</Link></div>
                    <div className='item item4' style={{'--position': 4} as React.CSSProperties}><Link href={''} className='Link'>#Motivation</Link></div>
                    <div className='item item5' style={{'--position': 5} as React.CSSProperties}><Link href={''} className='Link'>#Personal-Growth</Link></div>
                    <div className='item item6' style={{'--position': 6} as React.CSSProperties}><Link href={''} className='Link'>#Productivity</Link></div>
                    <div className='item item7' style={{'--position': 7} as React.CSSProperties}><Link href={''} className='Link'>#Goals</Link></div>
                    <div className='item item8' style={{'--position': 8} as React.CSSProperties}><Link href={''} className='Link'>#Inspiration</Link></div>
                    <div className='item item9' style={{'--position': 9} as React.CSSProperties}><Link href={''} className='Link'>#Health</Link></div>
                </div>
            </div>
        </div>
    )
}
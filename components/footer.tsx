import Link
 from "next/link"
export default function Footer(){
    return(
        <div>
            {/*------====== FOOTER ======------*/}
            <footer>
                <div className="footer">
                    <div className="row">
                        <Link href={''} data-aos='zoom-in'><i className='bx bxl-linkedin'></i></Link>
                        <Link href={''} data-aos='zoom-in'><i className='bx bxl-instagram-alt'></i></Link>
                        <Link href={''} data-aos='zoom-in'><i className='bx bx-envelope'></i></Link>
                    </div>
                    
                    <div className="row">
                        <ul data-aos='zoom-in'>
                            <li><Link href={''}>Contact Us</Link></li>
                            <li><Link href={''}>About Us</Link></li>
                            <li><Link href={''}>Blogs</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/*------====== COPYRIGHT ======------*/}
            <div className="copyright">
                <p>&#169; All Rights Reserved By Alishbah.</p>
            </div>
        </div>
    )
}
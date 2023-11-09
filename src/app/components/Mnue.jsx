import Link from "next/link";
const Mnue = ()=>{
    return(
        <div className="mnue">
            <div className="container">
            <div className="links">
                <ul className="d-flex mb-0">
                    <li><Link href='/best-sellers'>best seller</Link></li>
                    <li><Link href='/best-sellers'>gift ideas</Link></li>
                    <li><Link href='/best-sellers'>new releases</Link></li>
                    <li><Link href='/best-sellers'>today's deal</Link></li>
                    <li><Link href='/best-sellers'>customer service</Link></li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Mnue;
import { MdOutlineFacebook } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-10 bg-[#1A1919] text-[#FFFFFF]">
           <div className="footer max-w-6xl mx-auto">
           <aside>
            <h2 className="text-3xl font-bold">CareerHub</h2>
               
                <p className="text-base">There are many variations of passages <br /> of Lorem Ipsum , 
                    but the majority have <br /> suffered alteration in some form.</p>
                    <div className="flex gap-4 text-xl">
                    <MdOutlineFacebook />
                    <CiTwitter />
                    <FaInstagram />
                    </div>
            </aside>
            <nav>
                <header className="text-[#FFFFFF] text-xl font-semibold">Company</header>
                <a className="link link-hover text-base">About Us</a>
                <a className="link link-hover">Work</a>
                <a className="link link-hover">Latest News</a>
                <a className="link link-hover">Careers</a>
            </nav>
            <nav>
                <header className="text-[#FFFFFF] text-xl font-semibold">Product</header>
                <a className="link link-hover">Prototype</a>
                <a className="link link-hover">Plans & Pricing</a>
                <a className="link link-hover">Customers</a>
                <a className="link link-hover">Integration</a>
            </nav>
            <nav>
                <header className="text-[#FFFFFF] text-xl font-semibold">Support</header>
                <a className="link link-hover">Help Desk</a>
                <a className="link link-hover">Sales</a>
                <a className="link link-hover">Become a Partner</a>
                <a className="link link-hover">Developers</a>
            </nav>
            <nav>
            <header className="text-[#FFFFFF] text-xl font-semibold">Contact</header>
                <a className="link link-hover">524 Broadway , NYC</a>
                <a className="link link-hover">+1 777 - 978 - 5570</a>

            </nav>
           </div>
        </footer>
    );
};

export default Footer;
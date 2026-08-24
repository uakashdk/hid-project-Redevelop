import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { navigation } from "../../data/navigation";

const logo = "/Images/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="hid-container">
                <nav className="relative flex items-center justify-between py-6">

                    {/* Left Navigation */}
                    <div className="hidden lg:flex items-center gap-16">
                        {navigation.slice(0, 3).map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-[11px] uppercase tracking-[0.16em] text-black transition-opacity hover:opacity-60"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Center Logo */}
                    <Link
                        to="/"
                        className="absolute left-1/2 -translate-x-1/2"
                    >
                        <img
                            src={logo}
                            alt="HID Studio"
                            className="w-28 md:w-36 object-contain"
                        />
                    </Link>

                    {/* Right Navigation */}
                    <div className="hidden lg:flex items-center gap-14 ml-auto">
                        <Link
                            to="/publications"
                            className="text-[11px] uppercase tracking-[0.16em] text-black hover:opacity-60"
                        >
                            Publications
                        </Link>

                        <Link
                            to="/career"
                            className="text-[11px] uppercase tracking-[0.16em] text-black hover:opacity-60"
                        >
                            Career
                        </Link>

                        <Link
                            to="/contact-us"
                            className="hid-button"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() =>
                            window.dispatchEvent(new Event("hid:open-menu"))
                        }
                        className="lg:hidden ml-auto text-white text-2xl"
                        aria-label="Open menu"
                    >
                        <FiMenu />
                    </button>
                </nav>
            </div>

            {/* Mobile state */}
            {menuOpen && (
                <div className="hidden">
                    Mobile menu controlled here
                </div>
            )}
        </header>
    );
}

export default Navbar;
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { navigation } from "../../data/navigation";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);

    window.addEventListener("hid:open-menu", handleOpen);

    return () => {
      window.removeEventListener("hid:open-menu", handleOpen);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#4b001b] text-white">
      <div className="hid-container h-full flex flex-col">

        <div className="flex justify-between items-center py-6">
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              src="/Images/logo.png"
              alt="HID Studio"
              className="w-28"
            />
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {navigation.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="font-display text-5xl md:text-7xl py-2 border-b border-white/20"
            >
              <span className="text-sm font-sans mr-5">
                0{index + 1}
              </span>

              {item.label}
            </Link>
          ))}
        </div>

        <div className="pb-10 text-xs tracking-[0.2em] uppercase">
          HID Studio
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
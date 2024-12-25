import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-tr from-black/55 to-black/80 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Navigation Items */}
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-gray-200 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-xl font-bold"><a href="">Register</a></div>
      </div>
    </nav>
  );
};

export default Navbar;

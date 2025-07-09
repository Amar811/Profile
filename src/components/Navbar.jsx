import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  const updateActiveBoxPosition = () => {
    if (lastActiveLink.current && activeBox.current) {
      const rect = lastActiveLink.current.getBoundingClientRect();
      const parentRect = lastActiveLink.current.offsetParent?.getBoundingClientRect();

      if (parentRect) {
        activeBox.current.style.top = `${rect.top - parentRect.top}px`;
        activeBox.current.style.left = `${rect.left - parentRect.left}px`;
        activeBox.current.style.width = `${rect.width}px`;
      }
    }
  };

  useEffect(() => {
    updateActiveBoxPosition();

    const handleResize = () => {
      updateActiveBoxPosition();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navOpen]);

  const handleLinkClick = (event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;

    updateActiveBoxPosition();
  };

  return (
    <nav className={`navbar${navOpen ? " active" : ""}`}>
      {navItems.map(({ label, link, className }, idx) => (
        <a
          href={link}
          className={className}
          ref={idx === 0 ? lastActiveLink : null}
          key={idx}
          onClick={handleLinkClick}
        >
          {label}
        </a>
      ))}
      <div ref={activeBox} className="active-box" />
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;

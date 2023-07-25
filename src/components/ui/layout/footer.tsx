"use client";
import FooterList from "./footerList";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between border-t pt-1">
      <FooterList title="Show Stream" items={["about us", "privacy policy"]} />
      <FooterList
        title="information"
        items={["contact us", "services", "pricing"]}
      />
      <FooterList title="Navigation" items={["about", "services"]} />
      <FooterList title="quick links" items={["blog", "reviews"]} />
    </footer>
  );
};

export default Footer;

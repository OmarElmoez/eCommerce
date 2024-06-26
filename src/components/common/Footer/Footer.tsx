import styles from "./styles.module.css";
const { footerContainer } = styles;

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className={footerContainer}>
      © {currentYear} My Ecom. All rights reserved.
    </footer>
  );
};

export default Footer;

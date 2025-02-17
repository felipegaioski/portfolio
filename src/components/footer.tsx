
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useLanguage } from "../contexts/language-context";

export default function Footer() {
    const { language } = useLanguage();
    return (
        <footer>
            <div className="main-container flex justify-between">
                <p>
                    <a href="https://www.linkedin.com/in/felipe-irineu-gaioski-29557a21a/" target="_blank"
                    className="footer-name">Felipe Gaioski</a> &copy; {new Date().getFullYear()} . { language === "en" ? "All Rights Reserved" : "Todos os direitos reservados" }.
                </p>
                <div className="footer-icons flex gap-4 text-xl">
                    <a href="mailto:felipe.gaioski@hotmail.com" target="_blank"><MdMailOutline /></a>
                    <a href="https://www.linkedin.com/in/felipe-irineu-gaioski-29557a21a/" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/felipegaioski" target="_blank"><FaGithub /></a>
                    <a href="https://www.instagram.com/felipe.gaioski/" target="_blank"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
}

import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useLanguage } from "../contexts/language-context";

export default function Footer() {
    const { language } = useLanguage();
    return (
        <footer>
            <div className="main-container flex flex-col sm:flex-row sm:justify-between sm:flex-row-reverse">
                <div className="footer-icons flex gap-4 text-xl justify-center pb-0 sm:pb-2">
                    <a href="mailto:felipe.gaioski@hotmail.com" target="_blank"><MdMailOutline /></a>
                    <a href="https://www.linkedin.com/in/felipe-irineu-gaioski-29557a21a/" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/felipegaioski" target="_blank"><FaGithub /></a>
                    <a href="https://www.instagram.com/felipe.gaioski/" target="_blank"><FaInstagram /></a>
                </div>
                <p className="pt-2 sm:pt-0">
                    <a href="https://www.linkedin.com/in/felipe-irineu-gaioski-29557a21a/" target="_blank"
                    className="footer-name">Felipe Gaioski</a> &copy; {new Date().getFullYear()} . { language === "en" ? "All Rights Reserved" : "Todos os direitos reservados" }.
                </p>
            </div>
        </footer>
    );
}
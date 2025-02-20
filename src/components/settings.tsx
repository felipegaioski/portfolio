import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";

export default function Settings() {
    return (
        <div className="settings-content">
            <div>
                <LanguageSwitcher />
            </div>
            <hr className="py-2"/>
            <div>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";

export default function Settings() {
    return (
        <div className="settings-content">
            <div className="pb-2">
                <LanguageSwitcher />
            </div>
            <hr/>
            <div className="pt-2">
                <ThemeSwitcher />
            </div>
        </div>
    );
};

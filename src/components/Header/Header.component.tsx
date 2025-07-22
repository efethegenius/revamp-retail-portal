import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Grid3X3, Package, Shield, TrendingUp, FileText, Settings, HelpCircle, LogOut } from "lucide-react";
import styles from "./Header.module.css";
import { isDark as globalIsDark } from "../../constants/data";

interface HeaderProps {
  onThemeToggle?: (isDark: boolean) => void;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(globalIsDark);

  useEffect(() => {
    // Apply theme class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    onThemeToggle?.(newTheme);
  };

  const handleLogout = () => {
    onLogout?.();
    setIsMenuOpen(false);
  };

  const menuItems = [
    { icon: Grid3X3, label: "Dashboard", active: true },
    { icon: Package, label: "Products" },
    { icon: Shield, label: "My Policies" },
    { icon: TrendingUp, label: "Investment" },
    { icon: FileText, label: "Claims" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Support" },
  ];

  return (
    <>
      <header className={`${styles.header} ${isDarkMode ? styles.headerDark : styles.headerLight}`}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <span className={`${styles.logoText} ${isDarkMode ? styles.logoTextDark : styles.logoTextLight}`}>
              CORONATION
            </span>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            {/* Theme Toggle */}
            <button
              className={`${styles.themeToggle} ${isDarkMode ? styles.themeToggleDark : styles.themeToggleLight}`}
              onClick={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              <div className={`${styles.toggleIcon} ${isDarkMode ? styles.toggleIconDark : styles.toggleIconLight}`}>
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </div>
              <div className={`${styles.toggleIcon} ${isDarkMode ? styles.toggleIconLight : styles.toggleIconDark}`}>
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
              </div>
            </button>

            {/* Menu Toggle */}
            <button
              className={`${styles.menuToggle} ${isDarkMode ? styles.menuToggleDark : styles.menuToggleLight}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayOpen : ''} ${isDarkMode ? styles.menuOverlayDark : styles.menuOverlayLight}`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <nav 
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''} ${isDarkMode ? styles.mobileMenuDark : styles.mobileMenuLight}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.menuHeader}>
          <span className={`${styles.menuLogo} ${isDarkMode ? styles.menuLogoDark : styles.menuLogoLight}`}>
            CORONATION
          </span>
        </div>

        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`${styles.menuItem} ${item.active ? styles.menuItemActive : ''} ${isDarkMode ? styles.menuItemDark : styles.menuItemLight}`}
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <item.icon size={20} className={styles.menuItemIcon} />
              <span className={styles.menuItemLabel}>{item.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.menuFooter}>
          <button
            className={`${styles.logoutButton} ${isDarkMode ? styles.logoutButtonDark : styles.logoutButtonLight}`}
            onClick={handleLogout}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <LogOut size={20} className={styles.logoutIcon} />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
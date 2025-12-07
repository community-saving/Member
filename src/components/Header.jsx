import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User } from "lucide-react";
// import { checkUserAdminStatus } from '../utils/userBlocking';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (currentUser) {
        // Since we don't have the checkUserAdminStatus function, 
        // we'll assume non-admin for now to prevent the error
        // TODO: Implement proper admin status checking
        setIsAdmin(false);
      }
    };

    checkAdminStatus();
  }, [currentUser]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-content') && !e.target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('navigation.home') },
    { path: '/dashboard', label: t('navigation.dashboard') },
    { path: '/deposit', label: t('navigation.deposit') },
    { path: '/chat', label: t('navigation.chat') },
    { path: '/loans', label: t('navigation.loans') },
    { path: '/payback', label: t('navigation.payback') },
    { path: '/policies', label: t('navigation.policies') },
    { path: '/usersdashboard', label: t('users Dashboard') },
    // Admin link will be conditionally added below
  ];

  // Add admin link if user is admin
  const adminLinks = isAdmin ? [{ path: '/admin/users', label: t('navigation.adminUsers') }] : [];

  return (
    <>
      <header className="money-box-header">
        <div className="header-container">
          <div className="header-brand">
            <div className="header-title">Money Box</div>
          </div>

          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(v => !v)}
          >
            <span className="hamburger" />
          </button>

          <nav className="header-nav">
            <ul className="nav-list">
              {[...navLinks, ...adminLinks].map((link) => (
                <li key={link.path} className="nav-item">
                  <Link to={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="auth-controls">
              <div className="language-selector-container">
                <LanguageSelector />
              </div>
              
              {currentUser ? (
                <>
                  <button className="sign-out-btn" onClick={handleLogout}>{t('navigation.signOut')}</button>
                  <div>
                    <Link to={"profile"} className={`nav-link ${isActive("profile") ? 'active' : ''}`}>
                      <span className="user-email"><User /></span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/signin" className="btn">{t('navigation.signIn')}</Link>
                  <Link to="/signup" className="btn btn-outline">{t('navigation.signUp')}</Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay and content */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} />
      <div className={`mobile-menu-content ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {[...navLinks, ...adminLinks].map((link) => (
            <li key={link.path} className="mobile-nav-item">
              <Link to={link.path} className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-auth-controls">
          <div className="mobile-language-selector">
            <LanguageSelector />
          </div>
          
          {currentUser ? (
            <>
              <Link to={"profile"} className={`nav-link ${isActive("profile") ? 'active' : ''}`}>
                <div className="user-email mb-2">{currentUser?.email?.slice(0, 1).toLowerCase() || 'U'}</div>
              </Link>
              <button className="sign-out-btn" onClick={handleLogout}>{t('navigation.signOut')}</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn btn-block mb-2">{t('navigation.signIn')}</Link>
              <Link to="/signup" className="btn btn-outline btn-block">{t('navigation.signUp')}</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
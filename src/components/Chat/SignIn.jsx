import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useTranslation } from 'react-i18next';

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/dashboard');
    } catch (err) {
      // Handle different error types
      if (err.message === 'Account is blocked') {
        setError(t('admin.accountBlocked'));
      } else {
        setError(t('errors.generic'));
      }
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2 className="auth-title">{t('auth.signInTitle')}</h2>
        {error && <div className="auth-error">{error}</div>}
        <input 
          type="email" 
          ref={emailRef} 
          placeholder={t('auth.email')} 
          required 
          className="auth-input"
        />
        <input 
          type="password" 
          ref={passwordRef} 
          placeholder={t('auth.password')} 
          required 
          className="auth-input"
        />
        <button disabled={loading} className="auth-button">
          {loading ? (
            <>
              <span className="spinner"></span>
              {t('common.loading')}
            </>
          ) : (
            t('navigation.signIn')
          )}
        </button>
        <p className="auth-footer">
          {t('auth.dontHaveAccount')} <Link to="/signup" className="auth-link">{t('auth.signUpLink')}</Link>
        </p>
      </form>
    </div>
  );
}
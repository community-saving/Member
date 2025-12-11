import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWallet, faHandHoldingUsd, 
  faComments, faChartLine, faUserShield, faHeadset, 
  faArrowRight, faMapMarkerAlt, faPhone, faEnvelope,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faTwitter, faInstagram, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageDemo from '../components/LanguageDemo';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleTryNowClick = () => {
    navigate('/signin');
  };

  return (
    <section id="home" className="hero">
      <div className="heroContent">
        <h1>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
        <button className="ctaButton" onClick={handleTryNowClick}>
          {t('home.tryNow')}
        </button>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceCardsRef = useRef([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: faWallet,
      title: t('home.services'),
      description: t('home.servicesDescription')
    },
    {
      icon: faHandHoldingUsd,
      title: t('home.howItWorks'),
      description: t('home.howItWorksDescription')
    },
    {
      icon: faComments,
      title: t('home.testimonials'),
      description: t('home.testimonialsDescription')
    },
    {
      icon: faChartLine,
      title: t('home.services'),
      description: t('home.servicesDescription')
    },
    {
      icon: faUserShield,
      title: t('home.howItWorks'),
      description: t('home.howItWorksDescription')
    },
    {
      icon: faHeadset,
      title: t('home.testimonials'),
      description: t('home.testimonialsDescription')
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="sectionTitle">
          <h2>{t('home.services')}</h2>
          <p>{t('home.servicesDescription')}</p>
        </div>
        <div className="servicesGrid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="serviceCard" 
              ref={el => serviceCardsRef.current[index] = el}
            >
              <div className="serviceIcon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const stepsRef = useRef([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });
    
    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      title: t('home.howItWorks'),
      description: t('home.howItWorksDescription')
    },
    {
      title: t('home.services'),
      description: t('home.servicesDescription')
    },
    {
      title: t('home.testimonials'),
      description: t('home.testimonialsDescription')
    },
    {
      title: t('home.howItWorks'),
      description: t('home.howItWorksDescription')
    }
  ];

  return (
    <section id="how-it-works" className="howItWorks">
      <div className="container">
        <div className="sectionTitle">
          <h2>{t('home.howItWorks')}</h2>
          <p>{t('home.howItWorksDescription')}</p>
        </div>
        <div className="stepsContainer">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step" 
              ref={el => stepsRef.current[index] = el}
            >
              <div className="stepNumber">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonialsRef = useRef([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    testimonialsRef.current.forEach((testimonial) => {
      if (testimonial) observer.observe(testimonial);
    });
    
    return () => {
      testimonialsRef.current.forEach((testimonial) => {
        if (testimonial) observer.unobserve(testimonial);
      });
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "https://picsum.photos/seed/person1/100/100.jpg",
      content: "Money Box has completely transformed how I manage my finances. The interface is intuitive, and the cashout process is incredibly fast. I couldn't be happier with this platform!"
    },
    {
      name: "Michael Chen",
      role: "Freelance Developer",
      avatar: "https://picsum.photos/seed/person2/100/100.jpg",
      content: "I've tried several financial platforms, but Money Box stands out with its security features and excellent customer support. It's become an essential tool for my daily transactions."
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketer",
      avatar: "https://picsum.photos/seed/person3/100/100.jpg",
      content: "The community feature is what sets Money Box apart. I love being able to connect with others, share insights, and get advice. It's more than just a financial platform; it's a community."
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="sectionTitle">
          <h2>{t('home.testimonials')}</h2>
          <p>{t('home.testimonialsDescription')}</p>
        </div>
        <div className="testimonialsContainer">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial" 
              ref={el => testimonialsRef.current[index] = el}
            >
              <div className="testimonialContent">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonialAuthor">
                <img src={testimonial.avatar} alt={testimonial.name} className="authorAvatar" />
                <div className="authorInfo">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonialRating">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="footerSection">
            <h3>About Money Box</h3>
            <p>Money Box is a modern financial platform designed to make managing your money simple, secure, and efficient. Join thousands of users who trust us with their financial needs.</p>
            <div className="socialLinks">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <div className="footerSection">
            <h3>Quick Links</h3>
            <ul className="footerLinks">
              <li><a href="#home">{t('navigation.home')}</a></li>
              <li><a href="#services">{t('home.services')}</a></li>
              <li><a href="#how-it-works">{t('home.howItWorks')}</a></li>
              <li><a href="#testimonials">{t('home.testimonials')}</a></li>
              <li><a href="#">{t('policies.title')}</a></li>
              <li><a href="#">{t('admin.userManagement')}</a></li>
            </ul>
          </div>
          <div className="footerSection">
            <h3>{t('home.services')}</h3>
            <ul className="footerLinks">
              <li><a href="#">{t('home.services')}</a></li>
              <li><a href="#">{t('home.howItWorks')}</a></li>
              <li><a href="#">{t('home.testimonials')}</a></li>
              <li><a href="#">{t('home.services')}</a></li>
              <li><a href="#">{t('home.howItWorks')}</a></li>
              <li><a href="#">{t('home.testimonials')}</a></li>
            </ul>
          </div>
          <div className="footerSection">
            <h3>{t('admin.contact')}</h3>
            <ul className="footerLinks">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Rwanda. kirihe mahama</li>
              <li><FontAwesomeIcon icon={faPhone} /> +250794489035</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> communitysavings4@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Money Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Footer />
      {/* Language Demo Component for testing
      <LanguageDemo /> */}
    </div>
  );
};

export default Home;
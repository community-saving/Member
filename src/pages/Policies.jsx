import React from 'react';
import './Policies.css';

const Policies = () => {
  const policies = [
    {
      title: "Loan Recovery Process",
      description: "If a user does not repay their loan within 3 months, the case may be forwarded to law enforcement authorities as part of the debt recovery process."
    },
    {
      title: "Initial Membership Period",
      description: "For the first 3 months after joining, users cannot request any loans. They can only deposit money during this period."
    },
    {
      title: "Loan Eligibility",
      description: "After the first 3 months, users are allowed to request loans up to double the amount of their total deposits."
    },
    {
      title: "Cash-Out Schedule",
      description: "Every 6 months, all users will be able to cash out all their available balance."
    }
  ];

  return (
    <div className="policies-page">
      <div className="container">
        <header className="policies-header">
          <h1>User Policies & Loan Rules</h1>
        </header>
        
        <div className="policies-content">
          {policies.map((policy, index) => (
            <div key={index} className="policy-card">
              <h2 className="policy-title">{policy.title}</h2>
              <p className="policy-description">{policy.description}</p>
            </div>
          ))}
        </div>
        
        <footer className="policies-footer">
          <p className="agreement-note">
            By using this platform, you agree to follow all the policies listed above.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Policies;
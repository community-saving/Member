import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, orderBy, query, doc, getDoc } from 'firebase/firestore';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  Users, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
// useNavigate was previously imported but not used; removed to avoid lint warnings
import AdminLoanDetailsModal from '../components/AdminLoanDetailsModal';
import './UsersDashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalloans, setTotalloans] = useState(0);
  const [pendingloans, setPendingloans] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [depositsError, setDepositsError] = useState(false);
  const [loansError, setloansError] = useState(false);
  const [usersError, setUsersError] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [allActivity, setAllActivity] = useState([]); // New state for all activities
  const [showAllActivities, setShowAllActivities] = useState(false); // State to toggle view
  const [_users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [showLoanModal, setShowLoanModal] = useState(false);

  // Track screen size for responsive charts
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to format tooltip time
  const formatTooltipTime = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      hour12: true,
    });
  };

  // Function to fetch users 
  useEffect(() => {
    if (!db) {
      setUsersError('Firestore instance not available');
      setLoading(false);
      return;
    }
  
    const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        try {
          const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setUsers(data);
          setTotalUsers(data.length);
          setLoading(false);
          setUsersError(false);
        } catch (err) {
          console.error('Error processing users snapshot:', err);
          setUsersError('Failed to process users data');
          setLoading(false);
        }
      },
      (err) => {
        console.error('Error fetching users:', err);
        if (err.code === 'permission-denied') {
          setUsersError('Permission denied. Check Firestore rules.');
        } else {
          setUsersError('Failed to load users: ' + (err.message || 'Unknown error'));
        }
        setLoading(false);
      }
    );
  
    return () => unsub();
  }, []);

  // Custom tooltip component with responsive styling
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isMobile = screenSize.width < 768;
      return (
        <div className={`tooltip ${isMobile ? 'tooltip-mobile' : 'tooltip-desktop'}`}>
          <p className="tooltip-time">
            {formatTooltipTime(data.timestamp)}
          </p>
          <p className="tooltip-deposits">
            Deposits: ${data.deposits.toFixed(2)}
          </p>
          <p className="tooltip-loans">
            loans: ${data.loans.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  // Function to generate live scrolling data
  const generateLiveScrollingData = (deposits, loans, maxPoints = 20) => {
    const combined = [];

    deposits.forEach((d) => {
      const timestamp = d.timestamp?.toDate?.() || new Date(d.timestamp);
      combined.push({
        timestamp,
        name: timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        deposits: Number(d.amount) || 0,
        loans: 0,
      });
    });

    loans.forEach((c) => {
      const timestamp = c.timestamp?.toDate?.() || new Date(c.timestamp);
      combined.push({
        timestamp,
        name: timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        deposits: 0,
        loans: Number(c.amount) || 0,
      });
    });

    // Sort by timestamp
    combined.sort((a, b) => a.timestamp - b.timestamp);

    // Keep only the last 'maxPoints'
    return combined.slice(-maxPoints);
  };

  useEffect(() => {
    if (!db) {
      console.error('Firestore database instance not available');
      setDepositsError(true);
      setloansError(true);
      return;
    }

    // Store raw data for live chart
    let depositsData = [];
    let loansData = [];

    // Set up real-time listener for deposits
    const depositsQuery = query(collection(db, 'deposits'), orderBy('timestamp', 'desc'));
    const unsubscribeDeposits = onSnapshot(
      depositsQuery,
      (snapshot) => {
        try {
          let sum = 0;
          depositsData = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.amount) {
              sum += parseFloat(data.amount);
            }
            depositsData.push({
              id: doc.id,
              ...data,
              timestamp: data.timestamp
            });
          });
          setTotalDeposits(sum);
          setDepositsError(false);
          // Update chart data with live scrolling
          const liveData = generateLiveScrollingData(depositsData, loansData);
          setChartData(liveData);
          
          // Update recent activity
          setRecentActivity(prev => {
            const newActivity = depositsData.slice(0, 3).map(deposit => ({
              id: deposit.id,
              type: 'deposit',
              userId: deposit.userId,
              amount: deposit.amount,
              timestamp: deposit.timestamp?.toDate?.() || new Date()
            }));
            return [...newActivity, ...prev].slice(0, 6);
          });
        } catch (error) {
          console.error('Error processing deposits data:', error);
          setDepositsError(true);
        }
      },
      (error) => {
        console.error('Error fetching deposits:', error);
        setDepositsError(true);
      }
    );

    // Set up real-time listener for loans
    const loansQuery = query(collection(db, 'loans'), orderBy('timestamp', 'desc'));
    const unsubscribeloans = onSnapshot(
      loansQuery,
      (snapshot) => {
        try {
          let sum = 0;
          let pendingCount = 0;
          loansData = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.amount) {
              sum += parseFloat(data.amount);
            }
            if (data.status === 'pending') {
              pendingCount += 1;
            }
            loansData.push({
              id: doc.id,
              ...data,
              timestamp: data.timestamp
            });
          });
          setTotalloans(sum);
          setPendingloans(pendingCount);
          setloansError(false);
          
          // Update chart data with live scrolling
          const liveData = generateLiveScrollingData(depositsData, loansData);
          setChartData(liveData);
          
          // Update recent activity
          setRecentActivity(prev => {
            const newActivity = loansData.slice(0, 3).map(cashout => ({
              id: cashout.id,
              type: 'cashout',
              userId: cashout.userId,
              amount: cashout.amount,
              status: cashout.status,
              timestamp: cashout.timestamp?.toDate?.() || new Date()
            }));
            return [...newActivity, ...prev].slice(0, 6);
          });
        } catch (error) {
          console.error('Error processing loans data:', error);
          setloansError(true);
        }
      },
      (error) => {
        console.error('Error fetching loans:', error);
        setloansError(true);
      }
    );

    // Clean up listeners on component unmount
    return () => {
      unsubscribeDeposits();
      unsubscribeloans();
    };
  }, []);

  // Format currency values
  const formatCurrency = (value) => {
    return `$${value.toFixed(2)}`;
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Handle opening loan details modal
  const handleOpenLoanDetails = async (loanId) => {
    try {
      const loanDocRef = doc(db, 'loans', loanId);
      const loanSnapshot = await getDoc(loanDocRef);
      
      if (loanSnapshot.exists()) {
        setSelectedLoan({
          id: loanSnapshot.id,
          ...loanSnapshot.data()
        });
        setShowLoanModal(true);
      } else {
        console.error('Loan not found');
      }
    } catch (error) {
      console.error('Error fetching loan details:', error);
    }
  };

  // Handle closing loan modal
  const handleCloseLoanModal = () => {
    setShowLoanModal(false);
    setSelectedLoan(null);
  };  // Function to handle "View all" button click
  const handleViewAll = () => {
    // Toggle between showing recent activities and all activities
    setShowAllActivities(!showAllActivities);
  };

  // Stats cards (reduced size by adjusting the grid)
  const stats = [
    {
      id: 1,
      name: 'Total Deposits',
      value: depositsError ? 'N/A' : formatCurrency(totalDeposits),
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      iconColor: 'icon-indigo',
    },
    {
      id: 2,
      name: 'Total loans',
      value: loansError ? 'N/A' : formatCurrency(totalloans),
      change: '+8.2%',
      changeType: 'positive',
      icon: CreditCard,
      iconColor: 'icon-red',
    },
    {
      id: 3,
      name: 'Pending loans',
      value: loansError ? 'N/A' : pendingloans,
      change: '+3.1%',
      changeType: 'negative',
      icon: Activity,
      iconColor: 'icon-yellow',
    },
    {
      id: 4,
      name: 'Total Users',
      value: usersError ? 'N/A' : totalUsers,
      change: '+5.4%',
      changeType: 'positive',
      icon: Users,
      iconColor: 'icon-green',
    },
  ];

  // Determine responsive chart properties based on screen size
  const getChartProps = () => {
    const isMobile = screenSize.width < 768;
    const isTablet = screenSize.width >= 768 && screenSize.width < 1024;
    
    return {
      // Responsive margins
      margin: {
        top: isMobile ? 5 : 10,
        right: isMobile ? 10 : 30,
        left: isMobile ? 5 : 20,
        bottom: isMobile ? 10 : 5,
      },
      
      // Responsive font sizes
      tickFontSize: isMobile ? 8 : (isTablet ? 10 : 12),
      
      // Responsive tick settings
      interval: isMobile ? 'preserveStartEnd' : 0,
      minTickGap: isMobile ? 10 : 15,
      
      // Responsive bar settings
      barSize: isMobile ? 10 : 15,
      
      // Animation settings (optimized for mobile)
      animationDuration: isMobile ? 500 : 800,
      
      // Grid settings (simplified on mobile)
      gridStrokeDasharray: isMobile ? '2 2' : '3 3',
    };
  };

  const chartProps = getChartProps();

  if (loading) {
    
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container"> {/* container constraints moved to CSS */}
      {/* Stats cards */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="card">
            <div className="card-header">
              <div>
                <p className="card-title">{stat.name}</p>
                <p className="card-value">{stat.value}</p>
              </div>
              <div className={`card-icon ${stat.iconColor}`}>
                <stat.icon />
              </div>
            </div>
            <div className={`card-change ${stat.changeType}`}>
              {stat.changeType === 'positive' ? (
                <ArrowUpRight />
              ) : (
                <ArrowDownRight />
              )}
              <span className={`card-change-text ${stat.changeType}`}>
                {stat.change}
              </span>
              <span className="card-change-label">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-grid">
        {/* Bar chart */}
        <div className="card">
          <h3 className="activity-title">Live Transactions</h3>
          <div className="chart-container">
            <ResponsiveContainer 
              width="100%" 
              height="100%"
              minWidth={300}
            >
              <BarChart
                data={chartData}
                margin={chartProps.margin}
              >
                <CartesianGrid strokeDasharray={chartProps.gridStrokeDasharray} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: chartProps.tickFontSize }}
                  interval={chartProps.interval}
                  minTickGap={chartProps.minTickGap}
                />
                <YAxis tick={{ fontSize: chartProps.tickFontSize }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="deposits" 
                  fill="#4f46e5" 
                  name="Deposits"
                  barSize={chartProps.barSize}
                  isAnimationActive={true}
                  animationDuration={chartProps.animationDuration}
                  animationEasing="ease-in-out"
                />
                <Bar 
                  dataKey="loans" 
                  fill="#ef4444" 
                  name="loans"
                  barSize={chartProps.barSize}
                  isAnimationActive={true}
                  animationDuration={chartProps.animationDuration}
                  animationEasing="ease-in-out"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line chart */}
        <div className="card">
          <h3 className="activity-title">Transaction Trend</h3>
          <div className="chart-container">
            <ResponsiveContainer 
              width="100%" 
              height="100%"
              minWidth={300}
            >
              <LineChart
                data={chartData}
                margin={chartProps.margin}
              >
                <CartesianGrid strokeDasharray={chartProps.gridStrokeDasharray} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: chartProps.tickFontSize }}
                  interval={chartProps.interval}
                  minTickGap={chartProps.minTickGap}
                />
                <YAxis tick={{ fontSize: chartProps.tickFontSize }} />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="deposits" 
                  stroke="#4f46e5" 
                  activeDot={{ r: screenSize.width < 768 ? 4 : 8 }} 
                  name="Deposits"
                  strokeWidth={screenSize.width < 768 ? 1.5 : 2}
                  isAnimationActive={true}
                  animationDuration={chartProps.animationDuration}
                  animationEasing="ease-in-out"
                />
                <Line 
                  type="monotone" 
                  dataKey="loans" 
                  stroke="#ef4444" 
                  name="loans"
                  strokeWidth={screenSize.width < 768 ? 1.5 : 2}
                  isAnimationActive={true}
                  animationDuration={chartProps.animationDuration}
                  animationEasing="ease-in-out"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="card">
        <div className="activity-header">
          <h3 className="activity-title">Recent Activity</h3>
          <button className="activity-view-all">
            View all
          </button>
        </div>
        <div className="activity-table-container">
          {/* Render a mobile-friendly stacked list for small screens, table for larger screens */}
          {screenSize.width < 640 ? (
            <div className="activity-list">
              {(showAllActivities ? allActivity : recentActivity).length > 0 ? (
                (showAllActivities ? allActivity : recentActivity).map((activity) => (
                  <div
                    key={activity.id}
                    className="activity-card"
                    onClick={() => activity.type === 'cashout' && handleOpenLoanDetails(activity.id)}
                    role={activity.type === 'cashout' ? 'button' : 'listitem'}
                  >
                    <div className="activity-card-top">
                      <div className="activity-type">
                        {activity.type === 'deposit' ? (
                          <div className={`activity-type-icon deposit`}>
                            <DollarSign />
                          </div>
                        ) : (
                          <div className={`activity-type-icon loan`}>
                            <CreditCard />
                          </div>
                        )}
                        <div className="activity-meta">
                          <div className="activity-type-text">{activity.type}</div>
                          <div className="activity-userid">{activity.userId ? activity.userId.substring(0, 8) + '...' : 'N/A'}</div>
                        </div>
                      </div>
                      <div className="activity-amount">{formatCurrency(activity.amount || 0)}</div>
                    </div>
                    <div className="activity-card-bottom">
                      <div className={`activity-status ${activity.type === 'deposit' ? 'completed' : (
                        activity.status === 'Pending' ? 'pending' : activity.status === 'Accepted' ? 'accepted' : 'rejected'
                      )}`}>{activity.type === 'deposit' ? 'Completed' : (activity.status || 'Pending')}</div>
                      <div className="activity-date">{formatDate(activity.timestamp)}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-activity">No activity found</div>
              )}
            </div>
          ) : (
            <table className="activity-table">
              <thead>
                <tr>
                  <th style={{ fontSize: '0.7rem', padding: '0.5rem' }}>Type</th>
                  <th style={{ fontSize: '0.7rem', padding: '0.5rem' }}>User ID</th>
                  <th style={{ fontSize: '0.7rem', padding: '0.5rem' }}>Amount</th>
                  <th style={{ fontSize: '0.7rem', padding: '0.5rem' }}>Status</th>
                  <th style={{ fontSize: '0.7rem', padding: '0.5rem' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {(showAllActivities ? allActivity : recentActivity).length > 0 ? (
                  (showAllActivities ? allActivity : recentActivity).map((activity) => (
                    <tr 
                      key={activity.id}
                      onClick={() => activity.type === 'cashout' && handleOpenLoanDetails(activity.id)}
                      style={{ 
                        cursor: activity.type === 'cashout' ? 'pointer' : 'default',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => activity.type === 'cashout' && (e.currentTarget.style.backgroundColor = '#f3f4f6')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                    >
                      <td style={{ padding: '0.5rem' }}>
                        <div className="activity-type">
                          {activity.type === 'deposit' ? (
                            <div className={`activity-type-icon deposit`} style={{ width: '1.25rem', height: '1.25rem' }}>
                              <DollarSign style={{ height: '0.6rem', width: '0.6rem' }} />
                            </div>
                          ) : (
                            <div className={`activity-type-icon loan`} style={{ width: '1.25rem', height: '1.25rem' }}>
                              <CreditCard style={{ height: '0.6rem', width: '0.6rem' }} />
                            </div>
                          )}
                          <span className="activity-type-text" style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}>
                            {activity.type}
                          </span>
                        </div>
                      </td>
                      <td style={{ fontSize: '0.75rem', padding: '0.5rem' }}>
                        {activity.userId ? activity.userId.substring(0, 8) + '...' : 'N/A'}
                      </td>
                      <td className="activity-amount" style={{ fontSize: '0.75rem', padding: '0.5rem' }}>
                        {formatCurrency(activity.amount || 0)}
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        {activity.type === 'deposit' ? (
                          <span className="activity-status completed" style={{ fontSize: '0.65rem', padding: '0.15rem 0.3rem' }}>
                            Completed
                          </span>
                        ) : (
                          <span className={`activity-status ${
                            activity.status === 'Pending' ? 'pending' : 
                            activity.status === 'Accepted' ? 'accepted' : 
                            'rejected'
                          }`} style={{ fontSize: '0.65rem', padding: '0.15rem 0.3rem' }}>
                            {activity.status || 'Pending'}
                          </span>
                        )}
                      </td>
                      <td className="activity-date" style={{ fontSize: '0.7rem', padding: '0.5rem' }}>
                        {formatDate(activity.timestamp)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-activity" style={{ fontSize: '0.75rem', padding: '0.75rem' }}>
                      No activity found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Admin Loan Details Modal */}
      <AdminLoanDetailsModal 
        loan={selectedLoan}
        isOpen={showLoanModal}
        onClose={handleCloseLoanModal}
      />
    </div>
  );
};

export default Dashboard;
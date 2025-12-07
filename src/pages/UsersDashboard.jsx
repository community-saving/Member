import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

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
  const CustomTooltip = ({ active, payload, label }) => {
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

  // Stats cards
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
    <div className="dashboard-container">
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
          <table className="activity-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>User ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.length > 0 ? (
                recentActivity.map((activity) => (
                  <tr key={activity.id}>
                    <td>
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
                        <span className="activity-type-text">{activity.type}</span>
                      </div>
                    </td>
                    <td>
                      {activity.userId || 'N/A'}
                    </td>
                    <td className="activity-amount">
                      {formatCurrency(activity.amount || 0)}
                    </td>
                    <td>
                      {activity.type === 'deposit' ? (
                        <span className="activity-status completed">
                          Completed
                        </span>
                      ) : (
                        <span className={`activity-status ${
                          activity.status === 'Pending' ? 'pending' : 
                          activity.status === 'Accepted' ? 'accepted' : 
                          'rejected'
                        }`}>
                          {activity.status || 'Pending'}
                        </span>
                      )}
                    </td>
                    <td className="activity-date">
                      {formatDate(activity.timestamp)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-activity">
                    No recent activity
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
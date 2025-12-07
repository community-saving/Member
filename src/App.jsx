import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import { PrivateRoute } from './components/Chat/PrivateRoute';
import './i18n/i18n'; // Import i18n configuration

const SignIn = lazy(() => import('./components/Chat/SignIn'));
const SignUp = lazy(() => import('./components/Chat/SignUp'));
const DepositPage = lazy(() => import('./pages/DepositPage'));
const Payback = lazy(() => import('./pages/Payback'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UsersDashboard = lazy(() => import('./pages/UsersDashboard'));
const Home = lazy(() => import('./pages/Home'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const Loans = lazy(() => import('./pages/Loans'));
const TestTailwind = lazy(() => import('./TestTailwind'));
const Policies = lazy(() => import('./pages/Policies'));
// const Blocked = lazy(() => import('./pages/'));
// const AdminUsers = lazy(() => import('./pages/AdminUsers'));

function App() {
  return (
    <AuthProvider>
      <Header />
      <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/deposit" element={<PrivateRoute><DepositPage /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><ChatPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/loans" element={<PrivateRoute><Loans /></PrivateRoute>} />
          <Route path="/payback" element={<PrivateRoute><Payback /></PrivateRoute>} />
          <Route path="/test" element={<TestTailwind />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/usersdashboard" element={<PrivateRoute><UsersDashboard /></PrivateRoute>} />
          <Route path="/policies" element={<Policies />} />
          {/* <Route path="/blocked" element={<Blocked />} />
          <Route path="/admin/users" element={<PrivateRoute><AdminUsers /></PrivateRoute>} /> */}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
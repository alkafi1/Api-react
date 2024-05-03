import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardHomePage from './pages/Dashboard/DashboardHomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'; // Import the NotFoundPage component

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardHomePage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Add this route for "page not found" */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

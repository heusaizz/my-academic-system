import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import AdminView from './components/AdminView';
import ProfessorView from './components/ProfessorView';
import StudentView from './components/StudentView';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<AdminView />} />
                    <Route path="/professor" element={<ProfessorView />} />
                    <Route path="/student" element={<StudentView />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
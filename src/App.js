import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Login from './components/registartion/Login'

import Signup from './components/registartion/Signup'
import User from './components/Rotation/User'
import ForgotPassword from './components/registartion/ForgotPassword'
import Navbar from './components/Navbar_proto/Navbar'
import LeadingPage from './components/leadingPage_proto/LeadingPage'
import Transaction from './pages/Transaction'
import Income from './pages/Income'
import Expenses from './pages/Expenses'
// import LeadingPage from './components/LeadingPage/LeadingPage'
import FindSaving from './components/findSaving/FindSaving'
import Profil from './components/profil/Profil'
import Dashboard from './components/Rotation/Dashboard'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

function App() {
    const [user, setUser] = useState(null)
    return (
        <div className="App">
            <Router>
                {!user ? <Navbar /> : null}

                <Switch>
                    <Route path="/ransaction" exact component={Transaction} />
                    <Route path="/income" component={Income} />
                    <Route path="/expenses" component={Expenses} />
                    <Route exact path="/">
                        {user ? (
                            <Redirect push to="/dashboard" />
                        ) : (
                            <LeadingPage />
                        )}
                    </Route>
                    <Router exact path="/dashboard">
                        <Dashboard />
                    </Router>
                    <Router exact path="/registration">
                        <Signup setUser={setUser} />
                    </Router>
                    <Route exact path="/login">
                        <Login setUser={setUser} />
                    </Route>
                    <Route exact path="/user">
                        <User />
                    </Route>
                    <Route exact path="/profil">
                        <Profil />
                    </Route>
                    <Route exact path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route exact path="/find-saving">
                        <FindSaving />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

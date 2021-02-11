import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Login from './components/registartion/Login'
import LinerChart from './components/charts/linerChart'
import PieCharts from './components/Rotation/PieCharts'
import Cards from './components/Rotation/Cards'
import Signup from './components/registartion/Signup'
import User from './components/Rotation/User'
import ForgotPassword from './components/registartion/ForgotPassword'
import Navbar from './components/NavBar/Navbar'
import LeadingPage from './components/leadingPage_proto/LeadingPage'
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
                {user ? <Navbar /> : '<Header />'}

                <Switch>
                    <Route exact path="/">
                        {user ? (
                            <Redirect exact to="/dashboard" />
                        ) : (
                            <LeadingPage />
                        )}
                    </Route>
                    <Router exact path="/dashboard">
                        {/* <div className="linerChart">
                            <Cards />
                            <LinerChart />
                        </div>
                        <PieCharts /> */}
                        <Dashboard />
                    </Router>
                    <Router exact path="/registration">
                        <Signup user={setUser} />
                    </Router>
                    <Route exact path="/login">
                        <Login user={setUser} />
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

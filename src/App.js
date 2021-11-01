import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/common/header/Header'
import Sidebar from './components/common/sidebar/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'
import Forms from './pages/forms/Forms'

function App() {

    const [sidebarIsOpen, setSidebarIsOpen] = useState('60px')

    return (
        <Router>
            <div className="app">
                <div className={`app__left ${sidebarIsOpen === '220px' && 'open'}`}>
                    <Sidebar sidebarIsOpen={sidebarIsOpen} />
                </div>
                <div className="app__right">
                    <Header setSidebarIsOpen={setSidebarIsOpen} />
                    <main className="app__mainBody">
                        <Switch>
                            <Route path='/forms' component={Forms} />
                            <Route path='/' component={Dashboard} />
                        </Switch>
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default App

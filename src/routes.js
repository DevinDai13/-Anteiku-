import React from "react"
import { Route, Routes } from "react-router"
import Contact from "./Pages/contact"
import About from "./Pages/about"
import Menu from "./Pages/menu"
import Home from "./App"
import {
  HOME_URL,
  MENU_URL,
  CONTACT_URL,
  ABOUT_URL,
} from "./url"

const SiteRoutes = () => {
  return (
    <Routes>
      <Route exact path={HOME_URL} component={Home} /> 
      <Route exact path={MENU_URL} component={Menu} />
      <Route exact path={CONTACT_URL} component={Contact} />
      <Route exact path={ABOUT_URL} component={About} />
    </Routes>
  )
}

export default SiteRoutes
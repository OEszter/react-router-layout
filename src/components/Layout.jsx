import React from 'react'
import Header from './Header'
import Footer from './Footer'

//a layout mappában vannak benne a fix elemek, pl. header, nav, stb.

function Layout({ children }) { //ez egy fix prop, minden egyes komponensnél ott van, csak nem mindig használjuk. 
  return (
    <main>
			<Header />

			{children}

			<Footer />
		</main>
	)
}

export default Layout
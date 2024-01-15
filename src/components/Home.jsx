import React from 'react'
import Layout from './Layout'

function Home({ data }) {
	return (
    <Layout> {/* Szeretnék childrent-t átadni, ezért nyitó-záró taggel látom el a componentemet. Minden children, ami a nyitó és záró tagek között van. */}
        
        {data}

			<p>
				the content of home page
			</p>

			<button>self destruct</button>

			<h2>my favorite drinks:</h2>
			<ul>
				<li>beer</li>
				<li>wine</li>
				<li>palinka</li>
			</ul>
		</Layout>
	)
}

export default Home
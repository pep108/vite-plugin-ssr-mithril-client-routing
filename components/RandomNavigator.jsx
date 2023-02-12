import m from 'mithril'
import { navigate } from 'vite-plugin-ssr/client/router'
import { clientRouting } from '../renderer/_default.page.client'
const RandomNavigator = () => {
  // @client-side routing
  const randomNavigation = () => {
    console.log('clientRouting ', clientRouting)
    const randomIndex = Math.floor(Math.random() * 3)
    navigate(['/about', '/star-wars', '/'][randomIndex])
  }

  return {
    view: () => (
      <p>
        We <code>export const clientRouting = true</code> to enable Client Routing.
        <br />
        <button onclick={randomNavigation}>Random Page</button>
      </p>
    )
  }
}

export default RandomNavigator
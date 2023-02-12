import m from 'mithril'
import './code.css'
import RandomNavigator from '../../components/RandomNavigator'

function Page () {
  return {
    view: () => (
      <>
        <h1>About</h1>
        <RandomNavigator />
        <p>
          Example of using <code>vite-plugin-ssr</code>.
        </p>
      </>
    )
  }
}

export { Page }

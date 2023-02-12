import m from 'mithril'
import './code.css'
import RandomNavigator from '../../components/RandomNavigator'

function Page () {
  return {
    view: () => (
      <>
        <h1>Star Wars</h1>
        <RandomNavigator />
        <p>
          Luke, I am your father.
        </p>
      </>
    )
  }
}

export { Page }

import m from 'mithril'

import RandomNavigator from '../../components/RandomNavigator'
import { Counter } from './Counter'

const Page = () => {
  return {
    view: () => {
      return (
        <>
          <h1>Welcome</h1>
          <RandomNavigator />
          This page is:
          <ul>
            <li>Rendered to HTML.</li>
            <li>
              Interactive. <Counter />
            </li>
          </ul>
        </>
      )
    }
  }
}

export { Page }

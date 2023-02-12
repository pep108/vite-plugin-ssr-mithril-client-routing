import m from 'mithril'
import { PageShell } from './PageShell'

export const clientRouting = true
/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */

export { render }

async function render (pageContext) {
  const { Page, pageProps } = pageContext

  m.route.prefix = ''

  m.mount(
    document.getElementById('root'), {
      view: () => (
        <PageShell pageContext={pageContext}>
          <Page {...pageProps} />
        </PageShell>
      )
    })
}


import Page from '../components/Page'
import NProgress from 'nprogress';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAfrica, faEnvelope, faPlus, faTimes, faUserPlus, faCaretRight, faCaretDown, faCaretSquareLeft, faCaretSquareRight, faCheckCircle, faAngleDoubleRight, faAngleDoubleLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css'
import '../styles/nprogress.css';

library.add(fab, faGlobeAfrica, faEnvelope, faPlus, faTimes, faUserPlus, faCaretRight, faCaretDown, faCaretSquareLeft, faCaretSquareRight, faCheckCircle, faAngleDoubleRight, faAngleDoubleLeft, faEdit);
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default MyApp

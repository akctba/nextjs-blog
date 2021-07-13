import '../styles/global.css'

export default function App({ Component, pageProps }) {
    // component to keep state when navigate between pages
    // also to load global css
    return <Component {...pageProps} />
}
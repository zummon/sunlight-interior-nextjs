import Footer from './Footer';
import Header from './Header';
import Script from 'next/script';
import 'uikit/dist/css/uikit.min.css';

export default function ({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
        {/* maybe need to fix for best production */}
        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.6/dist/js/uikit.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.6/dist/js/uikit-icons.min.js" />
      </body>
    </html>
  );
}

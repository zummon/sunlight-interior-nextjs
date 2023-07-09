import Link from "next/link";
import Script from "next/script";
import "uikit/dist/css/uikit.min.css";
// import 'uikit/dist/js/uikit.min.js';
// import 'uikit/dist/js/uikit-icons.min.js';

export default function ({ children }) {
  return (
    <html>
      <body>
        {/* header */}
        <div className="uk-padding-small uk-box-shadow-medium">
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <div>
              <Link
                href="/"
                className="uk-link-reset uk-text-light uk-padding-small uk-text-large"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="/service"
                className="uk-link-reset uk-text-light uk-padding-small uk-text-large"
              >
                Service
              </Link>
            </div>
            <div>
              <Link
                href="/#about"
                className="uk-link-reset uk-text-light uk-padding-small uk-text-large"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href="/#contact"
                className="uk-link-reset uk-text-light uk-padding-small uk-text-large"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* body */}
        {children}

        {/* footer */}
        <div className="uk-section uk-section-large">
          <div className="uk-container uk-text-center">
            <div
              className="uk-child-width-1-2@s uk-child-width-1-4@l"
              uk-grid=""
            >
              <div className="">
                <a
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="facebook"
                  href="#"
                ></a>
                <a
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="instagram"
                  href="#"
                ></a>
                <a
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="pinterest"
                  href="#"
                ></a>
                <a
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="twitter"
                  href="#"
                ></a>
                <a
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="youtube"
                  href="#"
                ></a>
              </div>

              <div>
                <h3>Paragraph</h3>
                <p>
                  <span>Made by zummon (Teerapat Anantarattanachai)</span>
                </p>
              </div>

              <div>
                <h3>List</h3>
                <ul className="uk-list">
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                </ul>
              </div>

              <div>
                <h3>List</h3>
                <ul className="uk-list">
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                  <li>
                    <a href="#">Lorem, ipsum.</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* maybe need to fix for best production */}
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/uikit@3.16.6/dist/js/uikit.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/uikit@3.16.6/dist/js/uikit-icons.min.js"
        strategy="lazyOnload"
      />
    </html>
  );
}

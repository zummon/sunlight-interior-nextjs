import Link from "next/link";
import services from "../lib/services.json";

let title = "Sunlight Interior";
let description = "Sapiente qui, enim quidem, aut corporis";

export function generateMetadata({}) {
  let image = { src: "" };
  let date = "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image.src,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image.src],
    },
    other: {
      date,
    },
  };
}

export default function ({}) {
  return (
    <>
      <div
        className="uk-position-relative"
        tabIndex="-1"
        uk-slideshow="animation: slide; autoplay: true; ratio: false; pause-on-hover: false"
      >
        <ul className="uk-slideshow-items" style={{ minHeight: "80vh" }}>
          {services
            .slice(0, 3)
            .map(({ path, image, title, description, date }, index) => (
              <li key={`service-${index}`}>
                <img {...image} uk-cover="" />
                <div className="uk-position-center uk-transition-scale-down uk-position-large">
                  <Link
                    href={`/service/${path}`}
                    className="uk-display-block uk-card uk-card-body uk-card-default uk-card-hover uk-link-toggle"
                    style={{ width: "50vw" }}
                  >
                    <h3 className="uk-card-title uk-text-truncate">{title}</h3>
                    <p className="uk-text-truncate">{description}</p>
                    <p className="uk-link-heading uk-text-right">
                      <span className="">{date}</span>&#160;
                      <span className="uk-text-large">&#8611;</span>
                    </p>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover uk-light"
          href="#"
          uk-slidenav-previous=""
          uk-slideshow-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover uk-light"
          href="#"
          uk-slidenav-next=""
          uk-slideshow-item="next"
        ></a>
      </div>

      <div className="uk-padding uk-text-center">
        <div className="uk-flex uk-flex-wrap uk-flex-bottom uk-flex-center">
          <h1 className="uk-heading-medium">{title}</h1>
          <blockquote>
            <footer>summon</footer>
          </blockquote>
        </div>
        <p className="uk-text-large">{description}</p>
      </div>

      <div className="uk-grid-match uk-grid-collapse" uk-grid="">
        <div className="uk-width-5-6 uk-width-3-4@s uk-width-1-2@l" id="about">
          <div className="uk-padding-small uk-margin-auto-vertical">
            <div className="uk-flex uk-flex-wrap uk-flex-bottom">
              <h2 className="uk-heading-medium">About</h2>
              <blockquote>
                <footer>me</footer>
              </blockquote>
            </div>
            <p className="uk-text-large">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, repellat mollitia blanditiis nobis ratione rerum
              culpa nihil enim!
            </p>
          </div>
        </div>
        <div className="uk-width-1-6 uk-width-1-4@s uk-width-1-2@l uk-cover-container uk-height-viewport uk-box-shadow-medium">
          <img
            src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?w=640"
            alt="Living Room"
            uk-cover=""
          />
        </div>

        <div className="uk-width-1-6 uk-width-1-4@s uk-width-1-2@l uk-cover-container uk-height-viewport uk-box-shadow-medium">
          <img
            src="https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?w=640"
            alt="Sunlight Interior"
            uk-cover=""
          />
        </div>
        <div
          className="uk-width-5-6 uk-width-3-4@s uk-width-1-2@l"
          id="contact"
        >
          <div className="uk-padding-small uk-margin-auto-vertical">
            <div className="uk-flex uk-flex-wrap uk-flex-bottom">
              <h2 className="uk-heading-medium">Contact</h2>
              <blockquote>
                <footer>us</footer>
              </blockquote>
            </div>
            <form>
              <label className="uk-display-block uk-margin">
                <span className="uk-h3 uk-margin-small uk-display-block">
                  Your e-mail
                </span>
                <input
                  className="uk-input uk-form-large"
                  placeholder="example@mail.com"
                  type="email"
                />
              </label>
              <label className="uk-display-block uk-margin">
                <span className="uk-h3 uk-margin-small uk-display-block">
                  Your name
                </span>
                <input
                  className="uk-input uk-form-large"
                  placeholder="Tanya"
                  type="text"
                />
              </label>
              <label className="uk-display-block uk-margin">
                <span className="uk-h3 uk-margin-small uk-display-block">
                  Your message
                </span>
                <textarea
                  className="uk-textarea uk-form-large uk-resize-vertical"
                  placeholder="I have a small house. How you can help?"
                  rows="5"
                ></textarea>
              </label>
              <button className="uk-button uk-button-secondary uk-button-large">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

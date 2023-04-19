import Link from 'next/link';
import services from '../../lib/services.json';

let title = 'Service';
let description = 'Fugit quasi ullam reiciendis totam culpa';

export async function generateMetadata({}) {
  let image = { src: '' };
  let date = '';

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

export default async function ({}) {
  return (
    <>
      <div className="uk-padding uk-text-center uk-box-shadow-medium">
        <div className="uk-flex uk-flex-wrap uk-flex-bottom uk-flex-center">
          <h1 className="uk-heading-medium">{title}</h1>
          <blockquote>
            <footer>creative</footer>
          </blockquote>
        </div>
        <p className="uk-text-large">{description}</p>
      </div>

      <div className="uk-grid-match uk-grid-collapse" uk-grid="masonry: true">
        {services.map(({ image, path, title, description, date }, index) => (
          <div className="uk-width-1-1 uk-width-1-2@s" key={`service-${index}`}>
            <div
              className="uk-cover-container uk-box-shadow-medium"
              style={{ minHeight: '80vh' }}
            >
              <img {...image} uk-cover="" />
              <div className="uk-position-center uk-position-large">
                <Link
                  href={`/service/${path}`}
                  className="uk-display-block uk-card uk-card-body uk-card-default uk-card-hover uk-link-toggle"
                >
                  <h3 className="uk-card-title">{title}</h3>
                  <p>{description}</p>
                  <p className="uk-link-heading uk-text-right">
                    <span className="">{date}</span>&#160;
                    <span className="uk-text-large">&#8611;</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="uk-card uk-card-body uk-card-default uk-margin-auto-left uk-margin-auto-right"
        style={{ width: '50vw' }}
      >
        <h2 className="uk-heading-divider">Total Price</h2>
        <p className="uk-margin-remove-vertical uk-text-lead">
          Labor: {services.reduce((prev, curr) => prev + curr.price.labor, 0)}
        </p>
        <p className="uk-margin-remove-vertical uk-text-lead">
          Material:{' '}
          {services.reduce((prev, curr) => prev + curr.price.material, 0)}
        </p>
      </div>
    </>
  );
}

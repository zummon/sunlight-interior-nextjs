// import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

export default function ({}) {
  // const { pathname } = useRouter();

  return (
    <>
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
    </>
  );
}

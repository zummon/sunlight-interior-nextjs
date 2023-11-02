import services from "../../../lib/services.json";
import Link from "next/link";

export async function generateStaticParams() {
	return services.map((service) => ({
		path: service.path,
	}));
}

export default function ({ params }) {
	let service = services.find((service) => service.path == params.path);
	let { title, description, date, image, images, price } = {
		...service,
	};

	return (
		<>
			<div className="uk-padding uk-text-center">
				<div className="uk-flex uk-flex-wrap uk-flex-bottom uk-flex-center">
					<h1 className="uk-heading-medium">{title}</h1>
					<blockquote>
						<footer>{date}</footer>
					</blockquote>
				</div>
				<p className="uk-text-large">{description}</p>
			</div>

			<div
				className="uk-child-width-1-2@s uk-grid-collapse"
				uk-grid="masonry: true"
				uk-lightbox="animation: slide"
			>
				{[image, ...images]
					.filter((img) => img.src)
					.map((image, index) => (
						<div key={`image-${index}`}>
							<a
								className="uk-display-block uk-box-shadow-medium"
								href={image.src}
								data-caption={image.alt}
							>
								<img {...image} />
							</a>
						</div>
					))}
			</div>

			<Link
				href="/#contact"
				className="uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-margin-auto-left uk-margin-auto-right uk-margin-large-top uk-text-center"
				style={{ width: "50vw" }}
			>
				<h2 className="uk-heading-divider">Price</h2>
				<p className="uk-margin-remove-vertical uk-text-lead">
					Labor: {price.labor}
				</p>
				<p className="uk-margin-remove-vertical uk-text-lead">
					Material: {price.material}
				</p>
				<p className="uk-link-heading uk-text-large uk-text-right">&#8611;</p>
			</Link>
		</>
	);
}

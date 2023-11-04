import Link from "next/link";
import services from "../lib/services.json";
import { useState } from "react";

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
  const [carousel, setCarousel] = useState()

  return (
    <>
<div className="p-10 text-center w-full flex-none">
	<div className="flex flex-wrap items-baseline justify-center mb-10">
		<h1 className="text-4xl lg:text-5xl xl:text-6xl">{title}</h1>
		<span className="before:content-['—_']">summon</span>
	</div>
	<p className="text-2xl">{description}</p>
</div>

<div className="h-full w-full flex items-center justify-center">
	{ services.services .forEach((item,index)=>
		<div className="" key={`carousel-${index}`}>
			<abbr className="" title={item.title}>
				<button
					className="rounded-full inline-flex justify-center items-center w-9 h-9 {carousel ==
					index
						? 'text-black'
						: 'text-gray-300 hover:text-gray-400 focus:text-gray-400'}"
					onClick={() => {
            setCarousel(index)
					}}
				>
					<span className="sr-only">uikit icon nut</span>
					<svg className="" width="20" height="20" viewBox="0 0 20 20"
						><polygon
							fill="none"
							stroke="currentColor"
							points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"
						/><circle
							fill="none"
							stroke="currentColor"
							cx="10"
							cy="10"
							r="3.5"
						/>
						</svg>
				</button>
			</abbr>
		</div>
	)}
</div>

<div className="relative" style={{"height": "65vh"}}>
	{ services .forEach((item,index) =>
		<div key={`service-${index}`}
			className={`h-full w-full bg-cover bg-center flex justify-center absolute shadow-md ${carousel ==
			index
				? 'opacity-100 z-10'
				: 'opacity-0'}`}
			style={{"backgroundImage": `url(${item.image.src})`}}
		>
			<div className={`max-w-lg ${carousel == index ? 'block' : 'hidden'}`}>
				<Link className="block bg-white shadow-md p-4" href={`/service/${item.path}`}>
					<div className="flex flex-wrap items-baseline mb-4">
						<h3 className="text-2xl">{item.title}</h3>
						<span className="before:content-['—_'] text-gray-500">{item.date}</span>
					</div>
					<p className="mb-4 text-gray-500">{item.description}</p>
					<div className="flex justify-end">
						<span
							className="block pl-2 pr-1 py-1 lg:pl-4 border-y-2 border-l-2 border-gray-500"
            >
              Price
            </span>
						<span
							className="block pr-2 pl-1 py-1 lg:pr-4 border-y-2 border-r-2 border-gray-500"
            >
              {(item.price.labor + item.price.material).toLocaleString()}
            </span>
					</div>
				</Link>
			</div>
		</div>
	)}
</div>

<div className="flex items-center" id="about">
	<div className="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
		<div className="flex flex-wrap items-baseline mb-10">
			<h2 className="text-4xl lg:text-5xl xl:text-6xl">About</h2>
			<span className="before:content-['—_']">me</span>
		</div>
		<p className="text-2xl">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
			repellat mollitia blanditiis nobis ratione rerum culpa nihil enim!
		</p>
	</div>
	<div
		className="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md"
		style="height: 80vh;"
	>
		<img
			className="object-cover h-full w-full"
			src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?w=1280"
			alt="Living Room"
		/>
	</div>
</div>

<div className="flex items-center" id="contact">
	<div
		className="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md"
		style="height: 80vh;"
	>
		<img
			className="object-cover h-full w-full"
			src="https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?w=1280"
			alt="Sunlight Interior"
		/>
	</div>
	<div className="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
		<div className="flex flex-wrap items-baseline mb-10">
			<h2 className="text-4xl lg:text-5xl xl:text-6xl">Contact</h2>
			<span className="before:content-['—_']">us</span>
		</div>
		<div className="">
			<label className="block mb-4">
				<span className="text-2xl block mb-2"> Your e-mail </span>
				<input
					className="block w-full"
					placeholder="example@mail.com"
					type="email"
				/>
			</label>
			<label className="block mb-4">
				<span className="text-2xl block mb-2"> Your name </span>
				<input className="block w-full" placeholder="Tanya" type="text" />
			</label>
			<label className="block mb-4">
				<span className="text-2xl block mb-2"> Your message </span>
				<textarea
					className="block w-full"
					placeholder="I have a small house. How you can help?"
					rows="5"
				/>
			</label>
			<button className="px-10 py-4 bg-gray-900 text-white"> Send </button>
		</div>
	</div>
</div>

    </>
  );
}

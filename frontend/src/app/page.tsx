import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-brand-navy min-h-screen">
	<section className="text-brand-white bg-brand-mint p-2 text-center">This website is powered by NextJS and Rust (Github Here)</section>
		<header>
			<nav className="px-8 py-6 flex justify-between">
				<aside className="flex items-center gap-4">
					<img className="w-16" src="/cartoon-logo.png" alt="Kristian's Cartoon Logo" />
					<h1>Kristian Quirapas</h1>
				</aside>

				<ul className="flex items-center gap-8">
					<li><a href="">Blog</a></li>
					<li><a className="hover:bg-brand-mint border-2 border-brand-mint p-2 rounded-lg" href="/kristian-quirapas.pdf" target="_blank">Get Resume</a></li>
				</ul>
			</nav>
		</header>
		<section className="w-100% flex flex-col items-center p-8">
			<div className="w-100% flex flex-col items-center">
				<img className="w-48 mb-4" src="/rust-sticky.png" alt="Rust Sticky" />
				<h1 className="text-center text-3xl w-100% max-w-[600px]">I highly specialize in designing and building Fullstack <strong>Web</strong> and <strong>Blockchain</strong> applications in <a className="text-brand-mint">Rust</a> and <a className="text-brand-mint">Typescript</a>.</h1>
			</div>
		</section>

		<section className="w-100% grid grid-cols-2 p-8 gap-4">
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
			<div className="w-100% flex flex-col items-center border-t-2 border-t-brand-mint p-4">
				<h1 className="text-center text-3xl w-100% max-w-[600px] font-bold">Smart Contracts</h1>
			</div>
		</section>
	</main>
  );
}

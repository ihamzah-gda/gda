import React, { useEffect } from "react";

const ProjectLightbox = ({ imageUrls, selectedIndex, onClose }) => {
	// Close the lightbox if the 'Esc' key is pressed
	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", handleEsc);

		// Add class to body to disable scrolling
		document.body.classList.add("no-scroll");

		return () => {
			window.removeEventListener("keydown", handleEsc);

			// Remove class from body to re-enable scrolling
			document.body.classList.remove("no-scroll");
		};
	}, []);

	return (
		<div
			className="lightbox bg-zinc-950/70 backdrop-blur-2xl"
			onClick={onClose}
		>
			<button
				className="lightbox__close text-4xl font-extrabold z-50"
				onClick={onClose}
			>
				X
			</button>
			<div className="lightbox__content p-6">
				<img
					src={imageUrls[selectedIndex]}
					alt={`Selected project image`}
					className="max-w-[1080px] rounded-2xl w-full items-center"
				/>
			</div>
			<style jsx>{`
				.lightbox {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.lightbox__close {
					position: absolute;
					top: 90px;
					right: 20px;
					background: transparent;
					color: #fff;
					border: none;
				}
			`}</style>
			<style jsx global>{`
				.no-scroll {
					overflow: hidden;
				}
			`}</style>
		</div>
	);
};

export default ProjectLightbox;

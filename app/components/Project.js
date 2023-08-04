"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectLightbox from "./ProjectLightbox";

const Project = ({ imageUrls }) => {
	const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const openLightbox = (index) => {
		setSelectedImageIndex(index);
		setLightboxIsOpen(true);
	};

	return (
		<div
			id="Project Gallery"
			className="max-w-[1080px] gap-6 columns-2 md:columns-3 lg:columns-4"
		>
			{imageUrls.map((imageUrl, index) => (
				<div
					className=" cursor-pointer duration-700 ease-in-out transition-all h-full w-full hover:translate-y-1"
					onClick={() => openLightbox(index)}
					key={index}
				>
					<Image
						src={imageUrl}
						alt={`Project image ${index + 1}`}
						width={500}
						height={300}
						className="object-cover h-auto w-full max-w-full rounded-2xl aspect-auto"
					/>
				</div>
			))}
			{lightboxIsOpen && (
				<ProjectLightbox
					imageUrls={imageUrls}
					selectedIndex={selectedImageIndex}
					onClose={() => setLightboxIsOpen(false)}
				/>
			)}
		</div>
	);
};

export default Project;

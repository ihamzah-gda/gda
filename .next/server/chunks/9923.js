"use strict";
exports.id = 9923;
exports.ids = [9923];
exports.modules = {

/***/ 9923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Project)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(6369);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
;// CONCATENATED MODULE: ./app/components/ProjectLightbox.js



const ProjectLightbox = ({ imageUrls, selectedIndex, onClose })=>{
    // Close the lightbox if the 'Esc' key is pressed
    (0,react_.useEffect)(()=>{
        const handleEsc = (event)=>{
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        // Add class to body to disable scrolling
        document.body.classList.add("no-scroll");
        return ()=>{
            window.removeEventListener("keydown", handleEsc);
            // Remove class from body to re-enable scrolling
            document.body.classList.remove("no-scroll");
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: onClose,
        className: "jsx-99bc22e3af1da895" + " " + "lightbox bg-zinc-950/70 backdrop-blur-2xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onClose,
                className: "jsx-99bc22e3af1da895" + " " + "lightbox__close text-4xl font-extrabold z-50",
                children: "X"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-99bc22e3af1da895" + " " + "lightbox__content p-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: imageUrls[selectedIndex],
                    alt: `Selected project image`,
                    className: "jsx-99bc22e3af1da895" + " " + "max-w-[1080px] rounded-2xl w-full items-center"
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "5f728c32f01bbe0",
                children: ".lightbox.jsx-99bc22e3af1da895{position:fixed;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.lightbox__close.jsx-99bc22e3af1da895{position:absolute;top:90px;right:20px;background:transparent;color:#fff;border:none}"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "b60e6bd163cbeb28",
                children: ".no-scroll{overflow:hidden}"
            })
        ]
    });
};
/* harmony default export */ const components_ProjectLightbox = (ProjectLightbox);

;// CONCATENATED MODULE: ./app/components/Project.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Project = ({ imageUrls })=>{
    const [lightboxIsOpen, setLightboxIsOpen] = (0,react_.useState)(false);
    const [selectedImageIndex, setSelectedImageIndex] = (0,react_.useState)(0);
    const openLightbox = (index)=>{
        setSelectedImageIndex(index);
        setLightboxIsOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "Project Gallery",
        className: "max-w-[1080px] gap-6 columns-2 md:columns-3 lg:columns-4",
        children: [
            imageUrls.map((imageUrl, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " cursor-pointer duration-700 ease-in-out transition-all h-full w-full hover:translate-y-1",
                    onClick: ()=>openLightbox(index),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: imageUrl,
                        alt: `Project image ${index + 1}`,
                        width: 500,
                        height: 300,
                        className: "object-cover h-auto w-full max-w-full rounded-2xl aspect-auto"
                    })
                }, index)),
            lightboxIsOpen && /*#__PURE__*/ jsx_runtime_.jsx(components_ProjectLightbox, {
                imageUrls: imageUrls,
                selectedIndex: selectedImageIndex,
                onClose: ()=>setLightboxIsOpen(false)
            })
        ]
    });
};
/* harmony default export */ const components_Project = (Project);


/***/ })

};
;
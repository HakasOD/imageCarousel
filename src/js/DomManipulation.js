import ImageCarousel from "./ImageCarousel";

//TODO: Add dot navigation things

/**
 * Controls the dom for an image carousel
 */
export default class DomManipulation {
    constructor(container, images, options) {
        this.container = container;
        this.carousel = new ImageCarousel(images, options);

    }

    /**
     * Initilises carousel
     */
    init() {
        this.render();
        this.attachOnClickListeners();
        this.updateDisplayingImage(); 
    }

    /**
     * Renders the base html structure  
     */
    render() {
        this.container.innerHTML = `
            <div class = "image-carousel">
                <div class = "images"></div> 

                <div class = "navigation">
                    <button class = "previous">pre</button>
                    <div class = "navigation-dots"></div>
                    <button class = "next">next</button>
                </div>
            </div>
        `
    }


    /**
     * Attatches on click listeners 
     */
    attachOnClickListeners() {
        const previousBtn = this.container.querySelector(".previous");
        const nextBtn = this.container.querySelector(".next");

        previousBtn.addEventListener("click", () => {
            this.onPreviousBtnClick();
        }) 

        nextBtn.addEventListener("click", () => {
            this.onNextBtnClick();
        })
    }

    /**
     * Updates current image to be the next one.
     */
    onNextBtnClick() {
        this.carousel.nextImage();
        this.updateDisplayingImage();
        this.preloadImage(this.carousel.selectedImageIndex + 1);
    }

    /**
     * Updates current image to previous one.
     */
    onPreviousBtnClick() {
        this.carousel.previousImage();
        this.updateDisplayingImage();
        this.preloadImage(this.carousel.selectedImageIndex - 1);
    }

    /**
     * Updates the image displayed to allign with the selected image in
     * the carousel.
     */
    updateDisplayingImage() {
        const displayingImage = new Image(this.carousel.selectedImageUrl);
        const imagesDiv = this.container.querySelector(".images");

        imagesDiv.appendChild(displayingImage);
    }

    /**
     * Preloads an image at an the index 
     * @param {number} index 
     */
   preloadImage(index) {

        // Allow for looping
        let validIndex = index;
        let carouselLength = this.carousel.images.length;

        if(index < 0) {
            validIndex = carouselLength - 1;
        }
        else if(index > carouselLength - 1) {
            validIndex = 0;
        }

        // Load image
        const image = new Image();
        image.src = this.carousel.images[validIndex];
   } 

}
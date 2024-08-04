import ImageCarousel from "./ImageCarousel";

//TODO: Add dot navigation things

/**
 * Controls the dom for an image carousel
 */
export default class DomManipulation {
    constructor(container, images, options = {}) {
        this.container = container;
        this.carousel = new ImageCarousel(images, options);

        this.init();
    }

    /**
     * Initilises carousel
     */
    init() {
        this.render();

        const imagesDiv = this.container.querySelector(".images");
        this.loadImages(imagesDiv, this.carousel.images);
        
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
        this.toggleImageVisability(this.carousel.selectedImageIndex);
        this.carousel.nextImage();
        this.updateDisplayingImage();
    }

    /**
     * Updates current image to previous one.
     */
    onPreviousBtnClick() {
        this.toggleImageVisability(this.carousel.selectedImageIndex);
        this.carousel.previousImage();
        this.updateDisplayingImage();
    }

    /**
     * Updates the image displayed to allign with the selected image in
     * the carousel.
     */
    updateDisplayingImage() {
        let selectedImageIndex = this.carousel.selectedImageIndex;
        
        this.toggleImageVisability(selectedImageIndex)
    }

   /**
    * Creates Image elements and appends them to parentElement 
    * @param {HTMLDivElement} parentElement 
    * @param {Array} images 
    */
   loadImages(parentElement, images) {
        for(let imageUrl of images) {
            const image = this.createImage(imageUrl);

            image.classList.add("hide-visability");

            parentElement.appendChild(image);
        }
   }

   /**
    * Returns a Image element with src imgSrc 
    * @param {String} imgSrc 
    * @returns Image element 
    */
   createImage(imgSrc) {
        let image = new Image();
        image.src = imgSrc;

        return image;
   }

   /**
    * Toggles visability of image at index
    * @param {number} index 
    */
   toggleImageVisability(index) {
        const imagesContainer = this.container.querySelector('.images');
        const image = imagesContainer.children[index];

        image.classList.toggle("hide-visability");
   }
}
export default class ImageCarousel {

    constructor(images, options) {
        this.images = images;
        this.selectedImageIndex = 0;

        const defaultOptions = {
            height: 600,
            width: 800,
            autoSlide: true,
        }

        this.options = Object.assign({}, options, defaultOptions);  
    }

    get selectedImageUrl() {
        return this.images[this.selectedImageIndex];
    }

    addImage(image) {
        this.images.push(image);
    }

    removeImage(image) {
        let imageIndex = this.images.findIndex((element) => element === image);
        this.images.slice(imageIndex, 1);
    }

    nextImage() {
        this.selectedImageIndex += 1;

        // Loop to lowest index
        if(this.selectedImageIndex > this.images.length - 1) {
            this.selectedImageIndex = 0;
        }
    }

    previousImage() {
        this.selectedImageIndex -= 1;

        // Loop to highest index
        if(this.selectedImageIndex < 0) {
            this.selectedImageIndex = this.images.length - 1;
        }
    }

    
}
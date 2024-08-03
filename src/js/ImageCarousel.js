export default class ImageCarousel {
    defaultOptions = {
        height: 600,
        width: 800,
        autoSlide: true,
    }

    constructor(images, options) {
        this.images = images;
        this.selectedImageIndex = 0;
        this.options = Object.assign({}, options, defaultOptions);  
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
    }

    previousImage() {
        this.selectedImageIndex -= 1;
    }

    
}
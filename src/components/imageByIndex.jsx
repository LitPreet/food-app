import image1 from '../assets/img/caro-1.webp'
import image2 from '../assets/img/caro-2.webp'
import image3 from '../assets/img/caro-3.jpeg'
import image4 from '../assets/img/caro-4.webp'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
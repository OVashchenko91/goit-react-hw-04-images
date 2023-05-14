
import axios from 'axios';

const apiKey = "34751738-d2b2bc2823b3d8a283ca4d922";

export async function getImages(search, page) {
    const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const request = await axios.get(url);
      const response = JSON.parse(request.request.response);
      const totalHits = response.totalHits;
      const images = response.hits.map(hit => {
        return ({id: hit.id, src: hit.webformatURL, srcLarge:hit.largeImageURL, alt: hit.tags})
      });
      return {images, totalHits};
    } catch(error) {
      console.log(error.message);
    };
};
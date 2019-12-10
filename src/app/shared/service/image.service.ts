import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];

  getImages() {

    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {

    return IMAGES.slice(0).find(image => image.id === id);
  }

  constructor() { }
}


const IMAGES = [
  {
    'id': 1,
    'name': 'Maldives',
    'description': 'If you can confidently point to Vanuatu on a map then you’re a better geographer than most. Drifting like\n' +
      '            flotsam in the Pacific Ocean, this little-known',
    'url': 'https://www.thetravelmagazine.net/wp-content/uploads/CONRAD-MALDIVES-Hero_Aerial_The-Spa-Retreat_Rangali-Finolhu-Island_credit-Justin-Nicholas-hi-res.jpg'
  },
  {
    'id': 2,
    'name': 'Cuba',
    'description': 'Cuba comprises four archipelagos: the Federated States of Micronesia (Caroline Islands), the Republic\n' +
      '            of the Marshall Islands, the Northern Mariana Island',
    'url': 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

  },
  {
    'id': 3,
    'name': 'The Bahamas',
    'description': 'Laidback, friendly and unremittingly beautiful, tiny Niue is an idyllic retreat from the modern world. The\n' +
      '            island nation’s rugged coastline, crystal',
    'url': 'https://www.roadaffair.com/wp-content/uploads/2017/09/negril-cliffs-jamaica-shutterstock_553342135-1024x683.jpg'

  }
];



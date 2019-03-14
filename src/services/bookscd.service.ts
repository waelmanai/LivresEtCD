import {Livres} from "../models/Livres";
import {Cd} from "../models/Cd";

export class BookscdService {

  booksList: Livres[] = [
    {
      title: 'Book 1',
      subTitle: '',
      authorName: ['Author 1'],
      publishDate: '2019',
      isLend: true
    },
    {
      title: 'Book 2',
      subTitle: '',
      authorName: ['Author 2'],
      publishDate: '2019',
      isLend: false
    },
    {
      title: 'Book 3',
      subTitle: '',
      authorName: ['Author 3'],
      publishDate: '2019',
      isLend: true
    },
    {
      title: 'Book 4',
      subTitle: '',
      authorName: ['Author 4'],
      publishDate: '2019',
      isLend: false
    },
    {
      title: 'Book 5',
      subTitle: '',
      authorName: ['Author 5'],
      publishDate: '2019',
      isLend: true
    }
  ];

  cdList: Cd[] = [
    {
      albumTitle: 'CD 1',
      artistName: 'Artiste 1',
      publishDate: '2019',
      isLend: false
    },
    {
      albumTitle: 'CD 2',
      artistName: 'Artiste 2',
      publishDate: '2019',
      isLend: true
    },
    {
      albumTitle: 'CD 3',
      artistName: 'Artiste 3',
      publishDate: '2019',
      isLend: false
    },
    {
      albumTitle: 'CD 5',
      artistName: 'Artiste 5',
      publishDate: '2019',
      isLend: true
    }
  ];
}

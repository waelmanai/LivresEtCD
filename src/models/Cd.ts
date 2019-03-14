export class Cd {

  isLend: boolean;

  constructor(public albumTitle: string, public artistName: string, public publishDate: string){
    this.isLend = false;
  }
}

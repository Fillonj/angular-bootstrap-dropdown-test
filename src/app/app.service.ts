import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private listeProgress: Array<any> = [
    {
      lib: 'premier progress',
    },
  ];

  private count: number = 1;

  constructor() {}

  getListeProgress(): Array<any> {
    return this.listeProgress;
  }

  onHide() {
    this.listeProgress.push({
      lib: `progress ${++this.count}`,
    });
  }
}

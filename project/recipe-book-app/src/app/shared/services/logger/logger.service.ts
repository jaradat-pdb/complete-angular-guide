import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {}

  log(lvl: string, msg: string): void {
    console.log(`${lvl} | ${new Date().toISOString()} | ${msg}`);
  }

}

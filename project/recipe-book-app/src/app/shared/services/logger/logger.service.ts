import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {}

  logConstruction(msg: string): void {
    this.traceLog(`Constructing ${msg}`);
  }

  logInitialization(msg: string): void {
    this.traceLog(`Initializing ${msg}`);
  }

  traceLog(msg: string): void {
    this.log('TRACE', msg);
  }

  debugLog(msg: string): void {
    this.log('DEBUG', msg);
  }

  infoLog(msg: string): void {
    this.log('INFO ', msg);
  }

  warnLog(msg: string): void {
    this.log('WARN ', msg);
  }

  errorLog(msg: string): void {
    this.log('ERROR', msg);
  }

  fatalLog(msg: string): void {
    this.log('FATAL', msg);
  }

  private log(lvl: string, msg: string): void {
    console.log(`${lvl} | ${new Date().toISOString()} | ${msg}`);
  }
}

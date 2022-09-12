import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }

  add (a: number, b: number) {
    this.loggerService.log("add is called");
    this.loggerService.log("add is called");
    return a+b;
  }

  subtract (a: number, b: number) {
    this.loggerService.log("subtract is called");
    this.loggerService.log("subtract is called");
    this.loggerService.log("subtract is called");
    this.loggerService.log("subtract is called");
    return a-b;
  }

  chck() {
    this.loggerService.log('a');
  }
}

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('calculatorService', () => {


    it('should add two numbers', () => {
        let logger = new LoggerService();
        spyOn(logger, 'log');
        const calculator = new CalculatorService(logger);
        let result = calculator.add(2,2);
        expect(result).toBe(4);
        expect(logger.log).toHaveBeenCalledTimes(1);
    })

    it('should subtract two numbers', () => {
        let logger = new LoggerService();
        // spyOn(logger, 'log');
        // spyOn(logger, 'log');
        const calculator = new CalculatorService(logger);
        let result = calculator.subtract(2,2);
        expect(result).toBe(0);
        // expect(logger.log).toHaveBeenCalledTimes(4);
    })

    it('sadad', () => {
        let logger = new LoggerService();
        const calculator = new CalculatorService(logger);
        
    })
})
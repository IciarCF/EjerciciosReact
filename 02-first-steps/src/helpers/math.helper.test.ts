import {describe, expect, test} from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
   test('should add two positives numbers', () => {
      //1. Arrange (preparacion)
      const a = 1;
      const b = 2;
      //2. Act (aplicar acciones)
      const result = add(a, b);
      //3. Assert (resultado esperado)
      expect(result).toBe(a + b);
   })
})

describe('subtrac', () =>{
   test('should subtract two numbers', () =>{
      const a = -1;
      const b = 4;

      const result = subtract(a,b);

      expect(result).toBe(a-b);
      expect(result).toBe(-5);
   })
})

describe('multiply', () =>{
   test('should multiply two numbers', () =>{
      const a = 0;
      const b = 5;

      const result = multiply(a,b);

      expect(result).toBe(a*b);
      expect (result).toBe(0);
   })

})

describe('divide', () =>{
   test('should divide two numbers', () =>{
      const a = 0;
      const b = 5;

      const result = divide(a,b);

      expect(result).toBe(a/b);
      expect (result).toBe(a/b);
   })

   
})
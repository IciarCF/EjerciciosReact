import { act, renderHook } from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import { useCounter } from './useCounter';

describe('useCounte', () => {
    const initialValue = 20;
    //Comprueba que se inicializa en el valor por defecto 10
    test('should initialize with defeault value of 10', () =>{
        const {result} = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    })
    //Comprueba que se inicializa en el valor introducido 20
    test("should initialize with value 20", () => {
        const { result } = renderHook(() => useCounter(initialValue));
        expect(result.current.counter).toBe(initialValue);
    });

    //Comprueba que se incrementa el valor
    test('should increment counter when handleAdd is called', () =>{
        const {result} = renderHook(() => useCounter());
        act(()=>{
            result.current.handleAdd();
        })
        expect(result.current.counter).toBe(11);
    });
    //Comprueba que se decrementa el valor
    test("should decrement counter when handleSubstract is called", () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.handleSubstract();
      });

      expect(result.current.counter).toBe(9);
    });
    //Comprueba que se modifica y se reincia el valor
    test("should reset to initialValue the counter when handleReset is called", () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.handleSubstract();
        result.current.handleSubstract();
        result.current.handleSubstract();
        result.current.handleSubstract();
        result.current.handleSubstract();
      });
      
      expect(result.current.counter).toBe(5)

      act(() => {
        result.current.handleReset();
      });

      expect(result.current.counter).toBe(10);
    });

   

    


})
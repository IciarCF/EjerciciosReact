import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.actions";


describe('useGif', () =>{
    test('should return default values and methods', () => {
        const {result} = renderHook(()=>useGifs());

        expect(result.current.showGif.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
    })

    test('should return a list of gifs', async() =>{
        const { result } = renderHook(() => useGifs());

        await act(async() => {
            await result.current.handleSearch('Saitama');
        });

        expect(result.current.showGif.length).toBe(10);
    });

    test('should return a list of when handleTermClicked is called', async () =>{
        const{result} = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleTermClicked('Goku');
            
        });
        expect(result.current.showGif.length).toBe(10);
    })

    test('should return a list of gifs from cache', async () =>{
         const { result } = renderHook(() => useGifs());

         await act(async () => {
           await result.current.handleTermClicked("Goku");
         });
         expect(result.current.showGif.length).toBe(10);

         vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(new Error('This is my custom error'));
         expect(result.current.showGif.length).toBe(10);

         await act(async () => {
            await result.current.handleTermClicked('Goku');
         });
         expect(result.current.showGif.length).toBe(10);
    })

    test ('should return no more then 8 previous terms',async() =>{
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);
        await act(async()=>{
            for(let i = 0; i<=10; i++){
                await result.current.handleSearch(`Goku${i}`);
            }
        })
        expect(result.current.previousTerms.length).toBe(8);
    })
})
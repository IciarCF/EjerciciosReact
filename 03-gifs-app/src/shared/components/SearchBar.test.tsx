import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe('SearchBar', () =>{
    test('should render searchBar correctly', () =>{
        const {container} = render(<SearchBar onQuery={()=>{}}/>)

        expect(container).toMatchSnapshot()
    });

    test('should call onQuery with the correct value after 700',async ()=>{
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery}/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input,{target:{value:'test'}})

        await waitFor(() =>{
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith("test");
        })        
    });

    test('should call only once with the last value(debounce)', async () =>{
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery}/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 't'}});

        await waitFor(() =>{
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith("t");
        })
    })

    test('should call onQuery when button clicked with the input value' , () =>{
         const onQuery = vi.fn();
         render(<SearchBar onQuery={onQuery} />);

         const input = screen.getByRole("textbox");
         fireEvent.change(input, { target: { value: "test" } });

         const button = screen.getByRole('button');
         fireEvent.click(button);

         expect(onQuery).toHaveBeenCalledTimes(1);
         expect(onQuery).toHaveBeenCalledWith('test');

    });

    test('should te input has the correct placeholder value', () =>{
        const value = 'Buscar gif';
        render(<SearchBar onQuery={() =>{}} placeholder={value}/>);
        expect(screen.getAllByPlaceholderText(value)).toBeDefined();
    })
})
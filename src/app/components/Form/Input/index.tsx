import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    // Add any additional props here
}

export function Input(props:IInputProps){
    return (
        <input {...props} className="w-full h-12 px-8 bg-fundo text-input text-cabecalho text-normal border-1 border-input-border rounded-md placeholder-input focus:outline-none focus:border-primary" />
    )
}
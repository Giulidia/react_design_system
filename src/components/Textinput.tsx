import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps {
    children: ReactNode;  
    asChild?: boolean;
}

export function TextInput({}: TextInputProps) {    
    return(
        <input
          className={clsx( 
          '',
        )}
      />
    )
}
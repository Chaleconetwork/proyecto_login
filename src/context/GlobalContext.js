import { createContext } from "react";

export const GlobalContext = createContext ({
    tasks: [
        {
            id: '1',
            title: 'Title one',
            description: 'some dedscription',
            done: false
        }
    ]

})
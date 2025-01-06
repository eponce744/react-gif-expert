import {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([newCategory,...categories ]);
    }
    
    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory 
               onNewCategory = {onAddCategory}
               
            />

            {/* Listado de gif */}
            
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        

                {/* Gif Item */}
        </>
    )
}
import { GifItems } from './GifItems';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({category}) => {

    const{images, isLoading} = useFetchGifs(category);
    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }
            
            <div className="card-grid">
                {
                    images.map( (image)  => (
                        <GifItems 
                            key={ image.id }
                            id={image.id}
                            title = {image.title}
                            url = {image.url}
                            //{ ...image} Sirve para exparsir las propiedades de la imagen
                        
                        ></GifItems>
                    ))
                }
            </div>
        </>
    )
}

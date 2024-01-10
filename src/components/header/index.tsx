import { useState } from "react";
import { Container, ListItem } from "./style";


interface Props {   
    title?:string,
    name: string
} 


function Header({ title, name, }: Props){  
   const [item,setItem] = useState('Home')
   
    return( 
        <Container>   
            <ListItem active = {item === 'Home'}> Home </ListItem>     
            <ListItem active = {item === 'fotos'}> fotos </ListItem>     
            <ListItem active = {item === 'contados'}> contatos </ListItem>
        </Container>   
    
    )
}
export default Header;
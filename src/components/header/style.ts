import styled from "styled-components";

 export const Container = styled.div`   
    background-color:red;
    height : 90px;
`;

export const ListItem = styled.li<{active:Boolean}>`  
list-style: none;
color: ${(props)=> props.active? '#fff' : '#333'} ;
`  
 

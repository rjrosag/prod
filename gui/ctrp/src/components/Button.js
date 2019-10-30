import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background: transparent;
    border:0.05rem solid var(--colum0Color);
    color: var(--colum0Color);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0;
    tansition: all 0.5s ease-in-out;
    &:hover{
        background:var(--colum0Color);
        color:var(--row0Color)
    }
    &:focus{
        outline: none;
    }

`;
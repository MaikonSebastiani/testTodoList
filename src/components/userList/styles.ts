import styled from 'styled-components';

export const Container = styled.div`
    max-width: 933px;
    margin: 0 auto;
    button {
        border: solid 1px;
        padding: 10px;
        display: inline-block;
        cursor: pointer;
        margin: 0 5px 5px 0;
        &:last-child {
            margin: 0 0 5px 0;
        }
        
        span {
            font-size: 10px;
            color: gray;
            display: block;
        }
    }
`;

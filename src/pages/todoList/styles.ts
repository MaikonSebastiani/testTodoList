import styled from 'styled-components';

export const Container = styled.div`
    max-width: 933px;
    margin: 0 auto;

    h1 {
        text-align:  center;
    }

    form {
        display: flex;
        align-items: baseline;
        justify-content:  center;
        margin-bottom: 15px;
    }
`;

export const TodoBox = styled.div`
    display: inline-flex;
    width: 50%;
    vertical-align: middle;
`;

export const TodoContent = styled.div`
    margin: 0 10px 15px;
    padding: 0 10px;
    border: solid 1px;
    border-radius: 5px;
    width: 100%;
    
    p {
        max-width: 50%;
        display: block;
    }
    span {
        display: inline-block;
        font-size: 15px;
        padding-bottom: 10px;
        color: #2525b9;
    }
    button {
        display: inline-block;
        margin-left: 15px;
        background: #4141d3;
        border: solid 1px;
        color: #fff;
        padding: 5px;
        cursor: pointer;
    }
`;

export const Button = styled.button`
        display: inline-block;
        padding: 15px;
        background: #4141d3;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            background: #2a2a8d;
        }
    `;

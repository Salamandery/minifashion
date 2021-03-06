import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        > div {
            border-radius: 4px;
            -background: ${darken(.04, "#ecb3ff")};
            min-height: 200px;
        }
        > img: {
            align-self: center;
            max-width: 250px;
        }
        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }
        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }
        > button {
            background: #a4287d;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;

            display: flex;
            align-items: center;
            transition: background .2s;

            &:hover {
                background: ${darken(.45, "#f5d6eb")}; 
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, .1);

                
                svg {
                    margin-right: 5px;
                }
            }

            > span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
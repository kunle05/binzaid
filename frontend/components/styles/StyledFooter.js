import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #f2f2f2;
    .container {
        padding: 4rem 1.5rem 3rem;
    }
    .d-flex {
        justify-content: space-between;
        .px-3 {
            margin-right: 6rem;
        }
        .px-3:last-child {
            margin-right: 0;
        }
    }
    h6 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .list-group-item {
        padding: 0;
        font-size: 1.6rem;
        border-bottom: 0;
        font-weight: 300;
        line-height: 2.7rem;
        background-color: inherit;
        svg {
            height: 2rem;
            margin-right: .5rem;
            transition: all 0.5s;
        }
        a:hover {
            color: initial;
            text-decoration: underline;
        }
    }
    svg {
        height: 2.5rem;
        width: 2.5rem;
        margin-right: 2.5rem;
        color: var(--blue);
    }
    p {
        margin: 3rem 0;
        font-size: 2.5rem;
        color: #a5a5a5;
    }
    .disclaimer {
        font-size: 1.5rem;
        padding-top: .5rem;
        margin: 0;
    }
`;

export default StyledFooter;
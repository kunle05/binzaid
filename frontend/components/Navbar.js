import { useState } from 'react';
import Link from "next/link";
import styled from "styled-components";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';

const GlobalNav = styled.div`
    color: var(--offWhite);
    .nav-item {
        padding: 0 1.5rem;
        a:hover {
            color: white;
            transition: color 0.5s;
        }
    }
`;

const Logo = styled.h2`
    font-size: 2.5rem;
    color: var(--lightGrey);
    background: black;
    text-transform: uppercase;
    padding: 1rem;
    margin: 0;
    span {
        font-weight: 800;
        vertical-align: middle;
    }
    @media (max-width: 992px) {
        font-size: revert;
    }
    @media (max-width: 720px) {
        text-align: center;
    }
`;

export default function HeaderNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <GlobalNav>
            <Navbar expand="md" className="p-0 dark">
                <Container className="col-md-9">
                    <Link href="/">
                        <a>
                            <Logo>
                                <img src="/binzaid.jpg" alt="BinZaid" width="50" height="50" />
                                <span className="m-1">Bin Zaid</span>
                            </Logo>
                        </a>
                    </Link>
                    <NavbarToggler onClick={toggle} className="dark" />
                    <Collapse isOpen={isOpen} navbar className="px-5">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/comp">Components</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/comp">Components</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </GlobalNav>
    );
};

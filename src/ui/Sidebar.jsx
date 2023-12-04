import styled from "styled-components";

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid(--color-grey-100);
    grid-row-start: 1;
    grid-row-end: -1;
`;

function Sidebar() {
    return <StyledSidebar>SIDEBAR</StyledSidebar>;
}

export default Sidebar;

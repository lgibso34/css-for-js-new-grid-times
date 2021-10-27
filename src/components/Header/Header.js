import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";
import VisuallyHidden from "../VisuallyHidden";
const SearchAndNav = () => (
  <ActionGroup>
    <button>
      <Search size={24} />
      <VisuallyHidden>Search</VisuallyHidden>
    </button>
    <button>
      <Menu size={24} />
      <VisuallyHidden>Navigation Menu</VisuallyHidden>
    </button>
  </ActionGroup>
);

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <SearchAndNav />
          <ActionGroup>
            <button>
              <User size={24} />
              <VisuallyHidden>Profile</VisuallyHidden>
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Side>
          <SearchAndNav />
        </Side>
        <Logo />
        <SubscriberSide>
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <AlreadySubscribed>Already a subscriber?</AlreadySubscribed>
          </SubscribeWrapper>
        </SubscriberSide>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const Side = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    flex: 1;
    display: revert;
  }
`;

const SubscriberSide = styled(Side)`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: flex-end;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AlreadySubscribed = styled.span`
  text-decoration: underline;
  font-style: italic;
  margin-top: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default Header;

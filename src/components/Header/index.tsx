import React from "react";

import { Img, Text, List, Button } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <div className="header-row my-[1px]">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img
                src="images/img_home.svg"
                className="h-[40px] w-[40px]"
                alt="home"
              />
              <Text
                className="font-markoone font-normal not-italic text-left text-orange_A700 w-[auto]"
                variant="body1"
              >
                Ricowell
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between sm:w-[100%] w-[492px] common-row-list">
            <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
              <List
                className="sm:flex-col flex-row gap-[40px] grid grid-cols-3"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                  <a
                    className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                    href="/"
                  >
                    Home
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                  <a
                    className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                    href="/listing"
                  >
                    Listing
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown One"
                  />
                </div>
                <div className="flex flex-row gap-[6px] items-start justify-start w-[77px]">
                  <a
                    className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left w-[auto]"
                    href="/agentlist"
                  >
                    Agents
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown Two"
                  />
                </div>
              </List>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-manrope font-semibold text-[16px] text-center text-gray_900"
                href="/listing"
              >
                Property
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                href="/blogpage"
              >
                Blog
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-[40px] h-[42px] md:h-[auto] sm:hidden items-center justify-start w-[228px]">
            <Button
              className="flex items-center justify-center text-center w-[100%]"
              leftIcon={
                <Img
                  src="images/img_search.svg"
                  className="mr-[8px] text-center"
                  alt="search"
                />
              }
              size="sm"
            >
              <div className="bg-transparent cursor-pointer font-bold font-manrope text-[18px] text-gray_900 text-left">
                Search
              </div>
            </Button>
            <Button
              className="cursor-pointer font-manrope font-semibold text-[16px] text-center text-white_A700 w-[100%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillGray900"
            >
              Log in
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

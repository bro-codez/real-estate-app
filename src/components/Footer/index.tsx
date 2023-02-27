import React from "react";

import { Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[120px] md:gap-[40px] items-start justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-[40px] md:h-[auto] items-center justify-start w-[341px]">
                <Img
                  src="images/img_home.svg"
                  className="h-[40px] w-[40px]"
                  alt="home Two"
                />
                <Text
                  className="font-markoone font-normal not-italic text-left text-orange_A700 w-[auto]"
                  variant="body1"
                >
                  Relasto
                </Text>
              </div>
              <div className="flex flex-col gap-[28px] h-[194px] md:h-[auto] items-start justify-start w-[100%]">
                <Text
                  className="font-manrope font-semibold leading-[160.00%] text-gray_900 text-left"
                  variant="body4"
                >
                  59 Bervely Hill Ave, Brooklyn Town,
                  <br />
                  New York, NY 5630, CA, US
                </Text>
                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    +(123) 456-7890
                  </Text>
                  <Text
                    className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
                    variant="body4"
                  >
                    info@mail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_plus_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="plus"
                    />
                  </div>
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_twitter_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    src="images/img_instagram_orange_a700.svg"
                    className="h-[30px] w-[30px]"
                    alt="instagram"
                  />
                  <Img
                    src="images/img_linkedin.svg"
                    className="h-[30px] w-[30px]"
                    alt="linkedin"
                  />
                  <div className="flex h-[30px] items-center justify-start w-[30px]">
                    <Img
                      src="images/img_clock_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="clock One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] gap-[77px] items-start justify-start w-[100%]">
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  Features
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      Home v1
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Home v2
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      About
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Search
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  Information
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      Listing v1
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Listing v2
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Property Details
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Agent List
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Agent Profile
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  Documentation{" "}
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      Blog
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  Others
                </Text>
                <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                      variant="body4"
                    >
                      Log in
                    </Text>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Enter OTP
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      New Password
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Reset Password
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                      href="javascript:"
                    >
                      Create Account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Text
            className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
            variant="body4"
          >
            © 2022. All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

import React from "react";

import Header from "components/Header";
import { Img, Text, Button, Line, List, SelectBox } from "components";
import Footer from "components/Footer";

const AgentProfilePage: React.FC = () => {
  function handleNavigate() {
    window.location.href = "www.abc.com";
  }

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-center mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <Header className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
          <div className="flex flex-col font-manrope md:px-[20px] relative w-[100%]">
            <div className="flex flex-1 items-center justify-start mx-[auto] w-[100%]">
              <Img
                src="images/img_coverimage_250x1440.png"
                className="h-[250px] sm:h-[auto] object-cover w-[100%]"
                alt="CoverImage"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mt-[-46px] mx-[auto] w-[100%] z-[1]">
              <div className="flex md:flex-col flex-row gap-[30px] items-end justify-start px-[140px] sm:px-[20px] md:px-[40px] w-[100%]">
                <Img
                  src="images/img_rectangle5599_150x150.png"
                  className="h-[150px] md:h-[auto] object-cover rounded-[10px] w-[150px]"
                  alt="Rectangle5599"
                />
                <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] gap-[60px] items-center justify-start w-[100%]">
                  <div className="flex flex-1 md:flex-col flex-row gap-[32px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[25%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four"
                          />
                        </div>
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          4.5 review
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_call_gray_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="call"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body3"
                        >
                          (123) 456-7890
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_mail_1.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail"
                        />
                        <Text
                          className="font-semibold text-gray_900 text-left w-[auto]"
                          variant="body3"
                        >
                          bruno@relasto .com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[112px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="FillGray900"
                  >
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex flex-col gap-[48px] items-center justify-center w-[100%]">
                  <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-[100%]">
                    <Button
                      className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                      shape="RoundedBorder10"
                      size="2xl"
                      variant="FillGray900"
                    >
                      For rent
                    </Button>
                    <Button
                      className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-gray_900 w-[100%]"
                      shape="RoundedBorder10"
                      size="2xl"
                      variant="OutlineGray600"
                    >
                      For sale
                    </Button>
                    <Button
                      className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-gray_900 w-[100%]"
                      shape="RoundedBorder10"
                      size="2xl"
                      variant="OutlineGray600"
                    >
                      About
                    </Button>
                    <Button
                      className="cursor-pointer flex-1 font-semibold text-[16px] text-center text-gray_900 w-[100%]"
                      shape="RoundedBorder10"
                      size="2xl"
                      variant="OutlineGray600"
                    >
                      Review
                    </Button>
                  </div>
                  <div className="flex items-center justify-center w-[100%]">
                    <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                      <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_image_260x384.png"
                          className="h-[260px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          alt="image Six"
                        />
                        <div className="bg-gray_51 border-[1px] border-red_101 border-solid flex items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye"
                              />
                              <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                                2861 62nd Ave, Oakland, CA 94605
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_bookmark.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="bookmark"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    3 Bed Room
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_ticket_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="ticket"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1 Bath
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_icon_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="icon"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1,032 sqft
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_settings_25.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="settings"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    Family
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                              <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                                View Details
                              </Button>
                              <Text className="flex-1 font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px] w-[auto]">
                                $649,900
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_image_16.png"
                          className="h-[260px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          alt="image Seven"
                        />
                        <div className="bg-gray_51 border-[1px] border-red_101 border-solid flex items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye One"
                              />
                              <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                                2861 62nd Ave, Oakland, CA 94605
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_bookmark.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="bookmark One"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    3 Bed Room
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_ticket_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="ticket One"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1 Bath
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_icon_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="icon One"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1,032 sqft
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_settings_26.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="settings One"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    Family
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                              <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                                View Details
                              </Button>
                              <Text className="flex-1 font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px] w-[auto]">
                                $649,900
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_image_17.png"
                          className="h-[260px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          alt="image Eight"
                        />
                        <div className="bg-gray_51 border-[1px] border-red_101 border-solid flex items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye Two"
                              />
                              <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                                2861 62nd Ave, Oakland, CA 94605
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_bookmark.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="bookmark Two"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    3 Bed Room
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_ticket_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="ticket Two"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1 Bath
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_icon_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="icon Two"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1,032 sqft
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_settings_27.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="settings Two"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    Family
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                              <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                                View Details
                              </Button>
                              <Text className="flex-1 font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px] w-[auto]">
                                $649,900
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_image_18.png"
                          className="h-[260px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          alt="image Nine"
                        />
                        <div className="bg-gray_51 border-[1px] border-red_101 border-solid flex items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye Three"
                              />
                              <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                                2861 62nd Ave, Oakland, CA 94605
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_bookmark.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="bookmark Three"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    3 Bed Room
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_ticket_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="ticket Three"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1 Bath
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_icon_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="icon Three"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1,032 sqft
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_settings_28.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="settings Three"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    Family
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                              <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                                View Details
                              </Button>
                              <Text className="flex-1 font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px] w-[auto]">
                                $649,900
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_image_19.png"
                          className="h-[260px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          alt="image Ten"
                        />
                        <div className="bg-gray_51 border-[1px] border-red_101 border-solid flex items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye Four"
                              />
                              <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                                2861 62nd Ave, Oakland, CA 94605
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_bookmark.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="bookmark Four"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    3 Bed Room
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_ticket_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="ticket Four"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1 Bath
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_icon_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="icon Four"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1,032 sqft
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_settings_29.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="settings Four"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    Family
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                              <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                                View Details
                              </Button>
                              <Text className="flex-1 font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px] w-[auto]">
                                $649,900
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                        <Img
                          src="images/img_image_20.png"
                          className="h-[260px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                          alt="image Eleven"
                        />
                        <div className="bg-gray_51 border-[1px] border-red_101 border-solid flex items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye Five"
                              />
                              <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                                2861 62nd Ave, Oakland, CA 94605
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_bookmark.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="bookmark Five"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    3 Bed Room
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_ticket_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="ticket Five"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1 Bath
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_icon_20X20.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="icon Five"
                                  />
                                  <Text className="flex-1 font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    1,032 sqft
                                  </Text>
                                </div>
                                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                                  <Img
                                    src="images/img_settings_30.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="settings Five"
                                  />
                                  <Text className="font-semibold text-[16px] text-gray_700 text-left w-[auto]">
                                    Family
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                              <Button className="bg-gray_900 cursor-pointer flex-1 font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]">
                                View Details
                              </Button>
                              <Text className="flex-1 font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px] w-[auto]">
                                $649,900
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start w-[auto]">
                      <Button
                        className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="OutlineGray700"
                      >
                        1
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="OutlineBluegray102"
                      >
                        2
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="OutlineBluegray102"
                      >
                        3
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="OutlineBluegray102"
                      >
                        4
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold h-[48px] text-[16px] text-center text-gray_900 w-[48px]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="OutlineBluegray102"
                      >
                        5
                      </Button>
                    </div>
                    <Button
                      className="flex items-center justify-center text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrowright_16X16.svg"
                          className="ml-[4px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="RoundedBorder10"
                      size="3xl"
                      variant="OutlineBluegray102"
                    >
                      <div className="bg-transparent cursor-pointer font-semibold text-[16px] text-gray_900 text-left">
                        Next Page
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-center justify-center max-w-[1200px] mx-[auto] p-[42px] md:px-[20px] rounded-[10px] w-[100%]">
            <div className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[65px] items-start justify-center w-[100%]">
                <div className="flex flex-1 flex-col gap-[57px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5599_282x282.png"
                        className="h-[182px] md:h-[auto] object-cover rounded-[10px] w-[182px]"
                        alt="Rectangle5616"
                      />
                      <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Bruno Fernandes
                        </Text>
                        <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-evenly w-[31%]">
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star Five"
                            />
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star Six"
                            />
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star Seven"
                            />
                            <Img
                              src="images/img_star_gray_900.svg"
                              className="h-[16px] w-[16px]"
                              alt="star Eight"
                            />
                            <Img
                              src="images/img_star_gray_600.svg"
                              className="h-[16px] w-[16px]"
                              alt="star Nine"
                            />
                          </div>
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body4"
                          >
                            4.5 review
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_call_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="call One"
                          />
                          <Text
                            className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                            variant="body3"
                          >
                            (123) 456-7890
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_mail_1.svg"
                            className="h-[24px] w-[24px]"
                            alt="mail One"
                          />
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body3"
                          >
                            bruno@relasto .com
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                      variant="body3"
                    >
                      A slider is great way to display a slideshow featuring
                      images or videos, usually on your homepage. Adding sliders
                      to your site is no longer difficult. You don’t have to
                      know coding anymore. Just use a slider widget and it will
                      automatically insert the slider on your web page.
                      <br />
                      One of the best ways to add beautiful sliders with
                      excellent responsiveness and advanced options.{" "}
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold sm:min-w-[100%] min-w-[525px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="FillGray900"
                  >
                    Contact
                  </Button>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Experiences
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      15+ years experience
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Property Types
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Private House, Villa, Townhouse, Apartment
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Area
                    </Text>
                    <Text
                      className="font-semibold text-gray_900 text-left w-[auto]"
                      variant="body3"
                    >
                      California, San Jose, Miami
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Address
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      59 Orchard, NY 5005, US
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        License No
                      </Text>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        BF-0535
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        Website
                      </Text>
                      <a
                        className="common-pointer font-semibold text-[18px] text-gray_600 text-left underline w-[auto]"
                        onClick={handleNavigate}
                      >
                        www.abc.com
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Social
                    </Text>
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_clock_gray_600.svg"
                        className="h-[30px] w-[30px]"
                        alt="clock"
                      />
                      <Img
                        src="images/img_linkedin_gray_600.svg"
                        className="h-[30px] w-[30px]"
                        alt="linkedin"
                      />
                      <Img
                        src="images/img_twitter_gray_600.svg"
                        className="h-[30px] w-[30px]"
                        alt="twitter"
                      />
                      <Img
                        src="images/img_play.svg"
                        className="h-[30px] w-[30px]"
                        alt="play"
                      />
                      <Img
                        src="images/img_signal.svg"
                        className="h-[30px] w-[30px]"
                        alt="signal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start max-w-[1200px] mx-[auto] md:px-[20px] py-[30px] rounded-[10px] w-[100%]">
            <div className="flex items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between sm:px-[20px] md:px-[40px] px-[42px] w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Clients Review
                    </Text>
                    <Button
                      className="flex items-center justify-center text-center"
                      rightIcon={
                        <Img
                          src="images/img_plus.svg"
                          className="ml-[10px] text-center"
                          alt="plus"
                        />
                      }
                      shape="RoundedBorder10"
                      size="5xl"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[18px] text-left text-white_A700">
                        Write a Reveiw
                      </div>
                    </Button>
                  </div>
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-center sm:px-[20px] px-[25px] w-[100%]">
                  <List
                    className="flex-col gap-[25px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-start justify-start sm:px-[20px] px-[30px] py-[39px] rounded-[20px] w-[100%]">
                      <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold leading-[165.00%] md:max-w-[100%] max-w-[1090px] text-gray_600 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
                          <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[552px] w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[50%]">
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Ten"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star One"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Two"
                                />
                                <Img
                                  src="images/img_star_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Three"
                                />
                              </div>
                              <Text
                                className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                                variant="body1"
                              >
                                4.5 review
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                              variant="body1"
                            >
                              02 June 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ellipse2695.png"
                              className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                              alt="Ellipse2695"
                            />
                            <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Taylor Wilson
                              </Text>
                              <Text
                                className="font-semibold text-gray_900 text-left w-[auto]"
                                variant="body3"
                              >
                                Product Manager - Static Mania
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-start justify-start sm:px-[20px] px-[30px] py-[39px] rounded-[20px] w-[100%]">
                      <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold leading-[165.00%] md:max-w-[100%] max-w-[1090px] text-gray_600 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
                          <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[552px] w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[50%]">
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Eleven"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star One One"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Two One"
                                />
                                <Img
                                  src="images/img_star_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Three One"
                                />
                              </div>
                              <Text
                                className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                                variant="body1"
                              >
                                4.5 review
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                              variant="body1"
                            >
                              02 June 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ellipse2695.png"
                              className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                              alt="Ellipse2695 One"
                            />
                            <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Taylor Wilson
                              </Text>
                              <Text
                                className="font-semibold text-gray_900 text-left w-[auto]"
                                variant="body3"
                              >
                                Product Manager - Static Mania
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-start justify-start sm:px-[20px] px-[30px] py-[39px] rounded-[20px] w-[100%]">
                      <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold leading-[165.00%] md:max-w-[100%] max-w-[1090px] text-gray_600 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
                          <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[552px] w-[100%]">
                            <div className="flex flex-1 flex-row gap-[10px] items-center justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[50%]">
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Twelve"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star One Two"
                                />
                                <Img
                                  src="images/img_star_gray_900_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Two Two"
                                />
                                <Img
                                  src="images/img_star_24x24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="star Three Two"
                                />
                              </div>
                              <Text
                                className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                                variant="body1"
                              >
                                4.5 review
                              </Text>
                            </div>
                            <Text
                              className="flex-1 font-semibold text-gray_600 text-left tracking-[-0.40px] w-[auto]"
                              variant="body1"
                            >
                              02 June 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ellipse2695.png"
                              className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                              alt="Ellipse2695 Two"
                            />
                            <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                              <Text
                                className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Taylor Wilson
                              </Text>
                              <Text
                                className="font-semibold text-gray_900 text-left w-[auto]"
                                variant="body3"
                              >
                                Product Manager - Static Mania
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <SelectBox
                    className="font-semibold pr-[18px] text-[16px] text-gray_900 text-left sm:w-[100%] w-[12%]"
                    placeholderClassName="text-gray_900"
                    name="ButtonMedium"
                    placeholder="See more"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_900.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                    variant="OutlineGray600"
                  ></SelectBox>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white_A700 flex items-center justify-center px-[120px] md:px-[20px] py-[80px] w-[100%]" />
      </div>
    </>
  );
};

export default AgentProfilePage;

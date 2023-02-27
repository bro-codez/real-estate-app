import React from "react";

import Header from "components/Header";
import { Text, Button, Input, Img, List, CheckBox, Slider } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPagePage: React.FC = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <Header className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
          <div className="bg-yellow_50 flex font-manrope items-start justify-start pl-[120px] sm:pl-[20px] md:pl-[40px] py-[50px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[100px] md:gap-[40px] items-center justify-start ml-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] text-gray_900 text-left tracking-[-0.92px]"
                    as="h2"
                    variant="h2"
                  >
                    Find a perfect property
                    <br />
                    Where you&#39;ll love to live
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[610px] not-italic text-gray_700 text-left"
                    variant="body1"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-start justify-start p-[24px] sm:px-[20px] rounded-[16px] w-[100%]">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-center w-[100%]">
                      <Button
                        className="cursor-pointer flex-1 font-bold text-[18px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="FillGray900"
                      >
                        Buy
                      </Button>
                      <Button
                        className="cursor-pointer flex-1 font-bold text-[18px] text-center text-gray_900 w-[100%]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="FillGray300"
                      >
                        Sell
                      </Button>
                      <Button
                        className="cursor-pointer flex-1 font-bold text-[18px] text-center text-gray_900 w-[100%]"
                        shape="RoundedBorder10"
                        size="2xl"
                        variant="FillGray300"
                      >
                        Rent
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="TextFieldLarge"
                          placeholder="City/Street"
                          suffix={
                            <Img
                              src="images/img_location.svg"
                              className="ml-[35px] mr-[16px] my-[auto]"
                              alt="location"
                            />
                          }
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineBluegray100"
                        ></Input>
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="TextFieldLarge One"
                          placeholder="Property Type"
                          suffix={
                            <Img
                              src="images/img_sort.svg"
                              className="ml-[35px] mr-[16px] my-[auto]"
                              alt="sort"
                            />
                          }
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineBluegray100"
                        ></Input>
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="TextFieldLarge Two"
                          placeholder="Price Range"
                          suffix={
                            <Img
                              src="images/img_sort.svg"
                              className="ml-[35px] mr-[16px] my-[auto]"
                              alt="sort"
                            />
                          }
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineBluegray100"
                        ></Input>
                      </div>
                      <Button
                        className="cursor-pointer font-bold text-[18px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder10"
                        size="4xl"
                        variant="FillGray900"
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[47%]">
                <Img
                  src="images/img_image_503x610.png"
                  className="h-[503px] md:h-[auto] object-cover w-[100%]"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
            <div className="bg-red_100 flex flex-1 h-[424px] md:h-[auto] items-start justify-center sm:px-[20px] md:px-[40px] px-[50px] py-[46px] rounded-[20px] w-[100%]">
              <div className="flex flex-col gap-[50px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] md:max-w-[100%] max-w-[488px] text-gray_900 text-left tracking-[-0.72px]"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[488px] not-italic text-gray_900 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[138px] text-[16px] text-center text-white_A700 sm:w-[100%] w-[auto]"
                  shape="RoundedBorder10"
                  size="2xl"
                  variant="FillGray900"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-1 items-start justify-start w-[100%]">
              <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_refresh.svg"
                      className="h-[30px] w-[30px]"
                      alt="refresh"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Search  your location
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_instagram.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Visit  Appointment
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_camera_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="camera"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Get your  dream house
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 h-[200px] md:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_instagram_30X30.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram One"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-[-0.56px]"
                      as="h4"
                      variant="h4"
                    >
                      Enjoy your  Appointment
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_50 flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] py-[50px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[100px] md:gap-[40px] items-start justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[100px] md:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[73%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="h-[32px]"
                    alt="clock"
                  />
                </Button>
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $15.4M
                  </Text>
                  <Text
                    className="font-semibold leading-[140.00%] text-bluegray_600 text-left tracking-[-0.40px]"
                    variant="body1"
                  >
                    Owned from
                    <br />
                    Properties transactions
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[32px]"
                    alt="arrowdown Three"
                  />
                </Button>
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    25K+
                  </Text>
                  <Text
                    className="font-semibold leading-[140.00%] md:max-w-[100%] max-w-[225px] text-bluegray_600 text-left tracking-[-0.40px]"
                    variant="body1"
                  >
                    Properties for Buy & sell Successfully
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_reply.svg"
                    className="h-[32px]"
                    alt="reply"
                  />
                </Button>
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    500
                  </Text>
                  <Text
                    className="font-semibold leading-[140.00%] md:max-w-[100%] max-w-[225px] text-bluegray_600 text-left tracking-[-0.40px]"
                    variant="body1"
                  >
                    Daily completed  transactions
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-[100%]">
              <Button
                className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                size="smIcn"
                variant="icbOutlineBluegray30033"
              >
                <Img
                  src="images/img_search_orange_A700.svg"
                  className="h-[32px]"
                  alt="checkmark"
                />
              </Button>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  600+
                </Text>
                <Text
                  className="font-semibold text-bluegray_600 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Reagular Clients
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[60px] md:h-[auto] items-start justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Featured Properties
                </Text>
                <Button
                  className="flex items-center justify-center text-center"
                  onClick={() => navigate("/listing")}
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[8px] text-center"
                      alt="arrow_right"
                    />
                  }
                  size="sm"
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-bold text-[18px] text-left text-orange_A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start w-[100%]">
                <Button className="bg-transparent cursor-pointer font-bold min-w-[159px] text-[18px] text-center text-gray_900 w-[auto]">
                  Resident Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[186px] text-[18px] text-center text-gray_400 w-[auto]">
                  Commercial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[164px] text-[18px] text-center text-gray_400 w-[auto]">
                  Industrial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[180px] text-[18px] text-center text-gray_400 w-[auto]">
                  Agriculture Property
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_260x384.png"
                    className="h-[260px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image One"
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
                              src="images/img_settings.svg"
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
                    alt="image Two"
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
                              src="images/img_settings_20x20.svg"
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
                    alt="image Three"
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
                              src="images/img_settings_1.svg"
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
                    alt="image Four"
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
                              src="images/img_settings_2.svg"
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
                    alt="image Five"
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
                              src="images/img_settings_3.svg"
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
                    alt="image Six"
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
                              src="images/img_settings_4.svg"
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
          </div>
        </div>
        <div className="bg-gray_51 flex font-manrope items-center justify-center p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[150px] md:gap-[40px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[85px] items-center justify-start w-[100%]">
              <div className="flex flex-1 flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] md:max-w-[100%] max-w-[557px] text-gray_900 text-left tracking-[-0.72px]"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[557px] not-italic text-gray_700 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled and when nothing prevents our being
                    able to do what we like best, every pleasure is to be
                    welcomed.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[138px] text-[16px] text-center text-white_A700 sm:w-[100%] w-[auto]"
                  shape="RoundedBorder10"
                  size="2xl"
                  variant="FillGray900"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle18_327x268.png"
                    className="h-[327px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="RectangleEighteen"
                  />
                  <Img
                    src="images/img_rectangle21_218x268.png"
                    className="h-[218px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="RectangleTwentyOne"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle19_218x268.png"
                    className="h-[218px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="RectangleNineteen"
                  />
                  <Img
                    src="images/img_rectangle20_327x268.png"
                    className="h-[327px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="RectangleTwenty"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[157px] md:gap-[40px] items-center justify-start w-[100%]">
              <Img
                src="images/img_rectangle20_589x521.png"
                className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                alt="RectangleTwenty One"
              />
              <div className="flex flex-1 flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="leading-[140.00%] md:max-w-[100%] max-w-[521px] text-gray_900 text-left tracking-[-0.72px]"
                      as="h3"
                      variant="h3"
                    >
                      Best rated host on popular rental sites
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[521px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Find excellent deals"
                      name="Findexcellentdeals"
                      size="sm"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Friendly host & Fast support"
                      name="Friendlyhost"
                      size="sm"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Secure payment system"
                      name="Securepaymentsystem"
                      size="sm"
                    ></CheckBox>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[134px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder10"
                  size="2xl"
                  variant="FillGray900"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope gap-[24px] items-start justify-start w-[100%]">
          <div className="flex items-center justify-center sm:px-[20px] px-[215px] md:px-[40px] w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="max-w-[1010px] mx-[auto] w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex md:flex-col flex-row gap-[100px] md:gap-[40px] items-start justify-start mx-[10px]">
                    <Img
                      src="images/img_rectangle5591_344x455.png"
                      className="flex-1 md:flex-none h-[344px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Rectangle5591"
                    />
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] gap-[73px] items-center justify-start w-[100%]">
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
                          <Img
                            src="images/img_shape_deep_orange_300.svg"
                            className="h-[51px] max-h-[51px] w-[auto]"
                            alt="shape"
                          />
                        </div>
                        <Text
                          className="font-semibold leading-[165.00%] md:max-w-[100%] max-w-[455px] text-gray_700 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
          </div>
          <div className="flex flex-row gap-[30px] items-start justify-between pl-[770px] pr-[215px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="cursor-pointer flex sm:flex-row gap-[8px] w-[auto]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-bold text-gray_604 text-left w-[auto]"
                variant="body3"
              >
                Previews
              </Text>
            </div>
            <div className="cursor-pointer flex gap-[8px] w-[auto]">
              <Text
                className="font-bold text-left text-orange_A700 w-[auto]"
                variant="body3"
              >
                Next
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray_900 flex font-manrope items-center justify-center p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[120px] md:gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="flex-1 text-left text-white_A700 tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  News & Consult
                </Text>
                <Button
                  className="flex items-center justify-center text-center"
                  onClick={() => navigate("/listing")}
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[8px] text-center"
                      alt="arrow_right"
                    />
                  }
                  size="sm"
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-bold text-[18px] text-left text-orange_A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[24px] h-[487px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_350x384.png"
                    className="h-[100%] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="image Thirteen"
                  />
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700 tracking-[-0.48px]">
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%] sm:w-[100%]">
                      <Text className="font-bold text-[18px] text-deep_orange_400 text-left w-[auto]">
                        Read the Article
                      </Text>
                      <Img
                        src="images/img_arrowright_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[487px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_21.png"
                    className="h-[100%] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="image Fourteen"
                  />
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700 tracking-[-0.48px]">
                      Serie Shophouse Launch In July, Opportunity For Investors
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%] sm:w-[100%]">
                      <Text className="font-bold text-[18px] text-deep_orange_400 text-left w-[auto]">
                        Read the Article
                      </Text>
                      <Img
                        src="images/img_arrowright_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[487px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_22.png"
                    className="h-[100%] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="image Fifteen"
                  />
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700 tracking-[-0.48px]">
                      Looking for a New Place? Use This Time to Create Your
                      Wishlist
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%] sm:w-[100%]">
                      <Text className="font-bold text-[18px] text-deep_orange_400 text-left w-[auto]">
                        Read the Article
                      </Text>
                      <Img
                        src="images/img_arrowright_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Three"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-gray_401 flex items-center justify-center px-[100px] sm:px-[20px] md:px-[40px] py-[40px] rounded-[10px] w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start px-[200px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                  <Text
                    className="text-center text-gray_900 tracking-[-0.56px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    For Recent Update, News.
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[600px] not-italic text-center text-gray_900"
                    variant="body3"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start w-[100%]">
                  <Input
                    className="flex-1 font-semibold p-[0] text-[14px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                    wrapClassName="flex-1 w-[100%]"
                    type="email"
                    name="input"
                    placeholder="Enter your Email"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillGray52"
                  ></Input>
                  <Button
                    className="cursor-pointer sm:flex-1 font-semibold min-w-[126px] text-[16px] text-center text-white_A700 sm:w-[100%] w-[auto]"
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="FillGray900"
                  >
                    Subscribe
                  </Button>
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

export default LandingPagePage;

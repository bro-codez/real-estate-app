import React from "react";

import Header from "components/Header";
import { Text, Img, List, Button, Input } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const AboutUsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <Header className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
        <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <Text
                className="leading-[140.00%] text-center text-gray_900 tracking-[-1.08px]"
                as="h1"
                variant="h1"
              >
                Reimagining real estate to <br />
                make it easier to unlock.
              </Text>
              <Text
                className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[1200px] not-italic text-center text-gray_700"
                variant="body3"
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who  are so beguiled and demoralized by the charms
                of pleasure of the moment,  so blinded by desire, that they
                cannot foresee the pain and trouble.
              </Text>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5592_400x792.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="Rectangle5592"
                />
                <Img
                  src="images/img_rectangle5593_400x384.png"
                  className="h-[100%] md:h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="Rectangle5593"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5595_400x384.png"
                  className="h-[100%] md:h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="Rectangle5595"
                />
                <Img
                  src="images/img_rectangle5594_400x792.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
                  alt="Rectangle5594"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_50 flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] py-[50px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1200px] mx-[auto] w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[100px] md:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[73%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
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
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
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
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
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
            <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
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
        <div className="flex font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[84px] items-center justify-start max-w-[1147px] mx-[auto] w-[100%]">
            <div className="flex flex-1 flex-col gap-[56px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  A note from our founders.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[531px] not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour,
                </Text>
              </div>
              <List
                className="flex-col gap-[32px] grid items-start w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-[2px] border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    1
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      It all started in 1995
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-[2px] border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    2
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Donate launches in 2007
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-[2px] border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-[17px] text-center text-gray_900 tracking-[-0.40px] w-[35px]"
                    variant="body1"
                  >
                    3
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.44px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Relasto holds its initial public offering in 2008
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Img
              src="images/img_rectangle20_589x531.png"
              className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
              alt="RectangleTwenty"
            />
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center max-w-[1440px] pl-[170px] pr-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[158px] md:gap-[40px] items-center justify-between max-w-[1150px] mx-[auto] w-[100%]">
            <Img
              src="images/img_rectangle20_589x496.png"
              className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-[10px] w-[auto] sm:w-[auto] md:w-[auto]"
              alt="RectangleTwenty One"
            />
            <div className="flex flex-1 flex-col gap-[56px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Our vision is simple.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment.
                  <br />
                  In a free hour, On the other hand, we denounce with righteous
                  indignation and dislike men .
                </Text>
              </div>
              <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Kausar Pial
                </Text>
                <Text
                  className="font-semibold text-gray_700 text-left w-[auto]"
                  variant="body3"
                >
                  CEO at Static Mania
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <Text
              className="text-center text-gray_900 tracking-[-0.72px] w-[auto]"
              as="h3"
              variant="h3"
            >
              Relasto Team members
            </Text>
            <div className="flex items-start justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5596_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5596"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Kausar Pial
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5597_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5597"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Floyd Miles
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      President of Sales
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5598_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5598"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Darlene Robertson
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5599_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5599"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Guy Hawkins
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5600_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5600"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Jerome Bell
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5601_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5601"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Ralph Edwards
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5602_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5602"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Arlene McCoy
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5603_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5603"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Devon Lane
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5604_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5604"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Courtney Henry
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5605_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5605"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Bessie Cooper
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5606_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5606"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Cody Fisher
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5607_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5607"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                      Cody Fisher
                    </Text>
                    <Text className="font-normal not-italic text-[18px] text-gray_700 text-left w-[auto]">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
              </div>
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
                    alt="image Eighteen"
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
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[487px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_21.png"
                    className="h-[100%] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="image Nineteen"
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
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[487px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_22.png"
                    className="h-[100%] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="image Twenty"
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
                        alt="arrowright Two"
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
                    className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
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
                    className="cursor-pointer font-semibold min-w-[126px] text-[16px] text-center text-white_A700 w-[auto]"
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

export default AboutUsPage;

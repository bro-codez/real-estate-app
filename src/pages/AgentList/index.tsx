import React from "react";

import Header from "components/Header";
import { Text, Input, Img, SelectBox, Button } from "components";
import Footer from "components/Footer";

const AgentListPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col gap-[56px] items-start justify-start w-[100%]">
          <Header className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
          <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <Text
                className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Some Nearby Good Agents
              </Text>
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-start justify-start px-[16px] py-[14px] rounded-[10px] w-[100%]">
                  <Input
                    className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="Frame1000001612"
                    placeholder="Enter your address"
                    suffix={
                      <Img
                        src="images/img_search_1.svg"
                        className="ml-[12px] mr-[0] my-[auto]"
                        alt="search"
                      />
                    }
                    size="sm"
                  ></Input>
                </div>
                <SelectBox
                  className="md:flex-1 font-bold pr-[16px] text-[18px] text-gray_600 text-left md:w-[100%] w-[12%]"
                  placeholderClassName="text-gray_600"
                  name="DropdownLarge"
                  placeholder="Review"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_600.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Button
                  className="flex items-center justify-center text-center"
                  rightIcon={
                    <Img
                      src="images/img_search_70X70.svg"
                      className="ml-[10px] text-center"
                      alt="search"
                    />
                  }
                  shape="RoundedBorder10"
                  size="5xl"
                  variant="FillGray900"
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[18px] text-left text-white_A700">
                    Search
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope md:gap-[40px] gap-[60px] items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5615_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5615"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
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
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5616_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5616"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One One"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two One"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three One"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four One"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5614_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5614"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Two"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Two"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Two"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Two"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5614_1.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5614 One"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Three"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Three"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Three"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Three"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5617_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5617"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Four"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Four"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Four"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Four"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5618_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5618"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Five"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Five"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Five"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Five"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Five"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5619_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5619"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Six"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Six"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Six"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Six"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Six"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5620_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5620"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Seven"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Seven"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Seven"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Seven"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Seven"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5621_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5621"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Eight"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Eight"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Eight"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Eight"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Eight"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5622_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5622"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Nine"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Nine"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Nine"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Nine"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Nine"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5623_282x282.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5623"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Ten"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Ten"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Ten"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Ten"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Ten"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-[auto] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5615_1.png"
                    className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="Rectangle5615 One"
                  />
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text className="font-semibold text-[20px] text-gray_900 text-left tracking-[-0.40px] w-[auto]">
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[40%]">
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Eleven"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Eleven"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Eleven"
                          />
                          <Img
                            src="images/img_star_gray_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Eleven"
                          />
                          <Img
                            src="images/img_star_gray_600.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Four Eleven"
                          />
                        </div>
                        <Text className="flex-1 font-semibold text-[16px] text-gray_900 text-left w-[auto]">
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between max-w-[1200px] mx-[auto] w-[100%]">
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
        <Footer className="bg-white_A700 flex items-center justify-center px-[120px] md:px-[20px] py-[80px] w-[100%]" />
      </div>
    </>
  );
};

export default AgentListPage;

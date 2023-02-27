import React from "react";

import Header from "components/Header";
import { Text, Input, Img, SelectBox, Button } from "components";
import Footer from "components/Footer";

const BlogPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone items-start justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[68px] items-center justify-start w-[100%]">
          <Header className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
          <div className="flex font-manrope items-center justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Real Estate News & Blogs
                </Text>
                <div className="gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-[100%]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 items-center justify-start px-[16px] py-[14px] rounded-[10px] w-[100%]">
                    <Input
                      className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Frame1000001653"
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
                    className="flex-1 font-bold pr-[16px] text-[18px] text-gray_600 text-left w-[100%]"
                    placeholderClassName="text-gray_600"
                    name="DropdownLarge"
                    placeholder="Category"
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
                  <SelectBox
                    className="flex-1 font-bold pr-[16px] text-[18px] text-gray_600 text-left w-[100%]"
                    placeholderClassName="text-gray_600"
                    name="DropdownLarge One"
                    placeholder="Popular"
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
                </div>
              </div>
              <div className="flex items-center justify-center w-[100%]">
                <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 One"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 Two"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 Three"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Three"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 Four"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Four"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 Five"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Five"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 Six"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Six"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 Seven"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Seven"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle5617_350x384.png"
                        className="h-[350px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Rectangle5617 Eight"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
                          Business
                        </Button>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                          <Text className="font-bold leading-[135.00%] md:max-w-[100%] max-w-[384px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 text-left tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold text-[12px] text-gray_600 text-left w-[auto]">
                                July 20, 2022
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                              <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                              <Text className="font-semibold mr-[18px] text-[12px] text-gray_600 text-left w-[auto]">
                                7 min read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text className="font-bold text-[18px] text-gray_600 text-left w-[auto]">
                        Continue Reading
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Eight"
                      />
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
        <Footer className="bg-white_A700 flex items-center justify-center px-[120px] md:px-[20px] py-[80px] w-[100%]" />
      </div>
    </>
  );
};

export default BlogPagePage;

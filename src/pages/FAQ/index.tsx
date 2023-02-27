import React from "react";

import Header1 from "components/Header1";
import { Text, Input, Img, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const FAQPage: React.FC = () => {
  function handleNavigate1() {
    window.location.href = "https://relasto.com";
  }

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone sm:gap-[40px] md:gap-[40px] gap-[68px] items-center justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <Header1 className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
        <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <Text
              className="text-center text-gray_900 tracking-[-0.92px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Search Property / Anything
            </Text>
            <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                wrapClassName="flex gap-[8px] w-[100%]"
                name="search One"
                placeholder="Search Property / Anything"
                prefix={
                  <Img
                    src="images/img_search_1.svg"
                    className="cursor-pointer ml-[26px] mr-[14px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#6e6e6e"
                    />
                  ) : inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#6e6e6e"
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder10"
                size="smSrc"
                variant="srcOutlineBluegray100"
              ></Input>
              <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start sm:px-[20px] px-[30px] py-[28px] rounded-[10px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start max-w-[732px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      You&#39;re viewing sample results.
                    </Text>
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="common-pointer font-semibold text-gray_600 text-left w-[auto]"
                        variant="body4"
                        onClick={handleNavigate1}
                      >
                        https://relasto.com
                      </Text>
                      <Text
                        className="leading-[150.00%] md:max-w-[100%] max-w-[732px] not-italic text-gray_600 text-left"
                        variant="body5"
                      >
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[20px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        Add CMS or Business Hosting and index your site to see
                        real search results!
                      </Text>
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-[auto]"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-bluegray_100 w-[100%]" />
                    <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                        variant="body1"
                      >
                        You&#39;re viewing sample results.
                      </Text>
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_600 text-left w-[auto]"
                          variant="body4"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="not-italic text-gray_600 text-left w-[auto]"
                          variant="body5"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;

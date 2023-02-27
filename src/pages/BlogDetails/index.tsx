import React from "react";

import Header from "components/Header";
import { Text, Img, List, ReactTable, Button } from "components";
import { createColumnHelper } from "@tanstack/react-table";
import Footer from "components/Footer";

type TableRowType = {
  rowfullname: string;
  rowtitle: string;
  rowemailaddress: string;
  rowphonenumber: string;
};

const BlogDetailsPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "uxdesigner@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "uxdesigner@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "uxdesigner@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "uxdesigner@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
    {
      rowfullname: "Zakir Hossen",
      rowtitle: "UI, UX Designer",
      rowemailaddress: "uxdesigner@gmail.com",
      rowphonenumber: "+88 222 5554 444",
    },
  ]);
  const columnHelper = createColumnHelper<TableRowType>();
  const column = [
    columnHelper.accessor("rowfullname", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[9px] pt-[17px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[234px] pr-[10px] py-[10px] md:w-[100%] w-[26%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="p"
            variant="body7"
          >
            Full Name
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowtitle", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[7px] pt-[19px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[234px] pr-[10px] py-[10px] md:w-[100%] w-[26%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="p"
            variant="body7"
          >
            Title
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowemailaddress", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[7px] pt-[19px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[234px] pr-[10px] py-[10px] md:w-[100%] w-[26%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="p"
            variant="body7"
          >
            Email Address
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowphonenumber", {
      cell: (info) => (
        <Text
          className="flex-1 font-semibold pb-[9px] pt-[17px] text-gray_600 text-left"
          as="p"
          variant="body4"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[214px] pr-[10px] py-[10px] md:w-[100%] w-[24%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="p"
            variant="body7"
          >
            Phone Number
          </Text>
        </div>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[111px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <Header className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
        <div className="flex font-manrope items-start justify-start pl-[120px] pr-[324px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
            <Text
              className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
              as="h3"
              variant="h3"
            >
              10 Delightful Dining Room Decor Trends for Spring
            </Text>
            <div className="flex flex-col md:gap-[40px] gap-[84px] items-start justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[16px] items-end justify-between w-[100%]">
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle5618_550x996.png"
                    className="h-[550px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                    alt="Rectangle5618"
                  />
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    What a time we are living in! A lot of things are coming
                    back, bringing back nostalgia. Wondering why I am talking
                    about nostalgia and all? Especially when it is supposed to
                    be an article on websites! Well, because some old famous
                    website technology is coming back too. Yes, I am talking
                    about static websites.
                    <br />
                    Long ago, almost all websites were used to be static sites
                    during the early days of the internet. Then dynamic sites
                    came and blew the space. A lot of websites shifted to it.
                    Obviously dynamic sites have their advantages. But static
                    sites are making a comeback. And it’s coming stronger than
                    before. In this article, you will cover the basics of static
                    websites like what is a static website, what are the
                    advantages, and when you should use a static website. Let’s
                    kick things off.
                  </Text>
                </div>
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[11%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Img
                      src="images/img_facebook_bluegray_100.svg"
                      className="h-[32px] w-[32px]"
                      alt="facebook"
                    />
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[32px] w-[32px]"
                        alt="volume"
                      />
                      <div className="flex items-center justify-start w-[71%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[25px] items-center justify-start w-[auto]"
                          style={{
                            backgroundImage:
                              "url('images/img_frame1000001658.svg')",
                          }}
                        >
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            variant="body7"
                          >
                            Share this
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_twitter_bluegray_100.svg"
                      className="h-[32px] w-[32px]"
                      alt="twitter"
                    />
                    <Img
                      src="images/img_reddit_bluegray_100.svg"
                      className="h-[32px] w-[32px]"
                      alt="reddit"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[48px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Blockquotes
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Blockquotes can be nested. Add a &gt;&gt; in front of the
                    paragraph you want to nest.
                  </Text>
                </div>
                <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start p-[30px] sm:px-[20px] rounded-[10px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[936px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[936px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex-col gap-[40px] grid items-start sm:px-[20px] md:px-[40px] px-[51px] py-[39px] rounded-[10px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[20px] items-start justify-start my-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[894px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[894px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[20px] items-start justify-start my-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                      variant="body1"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Dynamic site CMS like WordPress has a greater
                        dependency. They require an operating system like Linux
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[894px] not-italic text-gray_600 text-left"
                        variant="body3"
                      >
                        Unlike dynamic websites, you don’t have to depend on
                        plugins to add functionalities to your static site.
                        Instead, you can create or include features directly
                        into files. Or, you can insert widgets using a snippet.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Images
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Being a fast loading and more secure website, you can choose
                    a static website for beginner to medium level workload.
                    Hopefully, you have got the answer to what is a static
                    website and why should you use it. Decide carefully does
                    static sites are enough for your need.
                  </Text>
                </div>
                <Img
                  src="images/img_rectangle5619_532x996.png"
                  className="h-[532px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                  alt="Rectangle5619"
                />
              </div>
              <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Lists
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                      variant="body3"
                    >
                      Being a fast loading and more secure website, you can
                      choose a static website for beginner to medium level
                      workload. Hopefully, you have got the answer to what is a
                      static website and why should you use it. Decide carefully
                      does static sites are enough for your need.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-[50%] w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Performance: Faster Loading Speed
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-[50%] w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Less Server-side Dependencies
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-[50%] w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Flexibility: More Freedom to Develop Websites
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-[50%] w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Security: A More Secure Website
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-[50%] w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Scalability: Capability to Handle Massive Traffic
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                      <div className="bg-gray_600 h-[10px] rounded-[50%] w-[10px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body3"
                      >
                        Hosting and Pricing: Saves Your Budget For Good
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold h-[25px] text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      01.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[11px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      02.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Less Server-side Dependencies
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      03.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Flexibility: More Freedom to Develop Websites
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      04.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Security: A More Secure Website
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      05.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Scalability: Capability to Handle Massive Traffic
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      06.
                    </Text>
                    <Text
                      className="font-semibold text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Hosting and Pricing: Saves Your Budget For Good
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Link
                </Text>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  Yes, a static website may have all its benefits, but is it
                  suitable for you? That’s a big question. It depends on why you
                  are going to build a website, what purpose it will serve.
                  That’s why you must when you should use a static website.
                  <br />
                  The followings are the common applications where using the
                  static website is the best choice. - Blog sites- - Small
                  business websites - Websites Under-Development - Personal
                  Portfolio sites - Websites that contain basic information
                </Text>
              </div>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.56px] w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Tables
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    The followings are the common applications where using the
                    static website is the best choice. - Blog sites- - Small
                    business websites.
                  </Text>
                </div>
                <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start sm:px-[20px] px-[40px] py-[50px] rounded-[10px] w-[100%]">
                  <div className="overflow-auto w-[100%]">
                    <ReactTable
                      columns={column}
                      data={tableData.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Writen by
                </Text>
                <div className="flex items-center justify-between sm:pr-[20px] md:pr-[40px] pr-[568px] w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start max-w-[836px] w-[100%]">
                    <Img
                      src="images/img_profilepicture_100x100.png"
                      className="h-[100px] md:h-[auto] rounded-[50%] w-[100px]"
                      alt="profilepicture"
                    />
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[165px]">
                      <Text
                        className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Kristin Watson
                      </Text>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body4"
                      >
                        Co-founder and CDO
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_100 h-[8px] rounded-[50%] w-[8px]"></div>
                      <Text
                        className="font-semibold text-gray_600 text-left w-[auto]"
                        variant="body4"
                      >
                        July 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-start justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <Text
              className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
              as="h3"
              variant="h3"
            >
              Recent News
            </Text>
            <List
              className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
              orientation="horizontal"
            >
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
            </List>
          </div>
        </div>
        <Footer className="bg-white_A700 flex items-center justify-center px-[120px] md:px-[20px] py-[80px] w-[100%]" />
      </div>
    </>
  );
};

export default BlogDetailsPage;

import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button, Line } from "components";

const EnterOTPModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-gray_900_cc fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="sm:h-[auto] md:h-[auto] max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start md:px-[20px] px-[30px] py-[40px] rounded-[10px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-center w-[100%]">
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text
                        className="flex-1 text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Enter OTP
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="common-pointer h-[30px] w-[30px]"
                        onClick={props.onRequestClose}
                        alt="close"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Please check your mail, We sent an OTP code
                    </Text>
                  </div>
                  <div className="gap-[12px] w-[100%]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="cursor-pointer font-bold text-[18px] text-center text-white_A700 w-[100%]"
                  shape="RoundedBorder10"
                  size="4xl"
                  variant="FillGray900"
                >
                  Confirm
                </Button>
                <Button
                  className="cursor-pointer font-bold text-[18px] text-center text-gray_900 w-[100%]"
                  shape="RoundedBorder10"
                  size="4xl"
                  variant="OutlineGray600_1"
                >
                  Request OTP Again
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <div className="flex flex-row gap-[8px] items-start justify-center w-[100%]">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Remember the Password?
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Log in
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default EnterOTPModal;

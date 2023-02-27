import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, Button, Line } from "components";

const ResetPasswordModal = (props) => {
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
                        Reset Password
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="common-pointer h-[30px] w-[30px]"
                        onClick={props.onRequestClose}
                        alt="close"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[420px] not-italic text-gray_900 text-left"
                      variant="body3"
                    >
                      Enter the email address associated with your account and
                      we&#39;ll send you a link to reset your password.
                    </Text>
                  </div>
                  <Input
                    className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    type="email"
                    name="TextFieldLarge"
                    placeholder="user / email address"
                    prefix={
                      <Img
                        src="images/img_mail.svg"
                        className="ml-[16px] mr-[14px] my-[auto]"
                        alt="mail"
                      />
                    }
                    shape="RoundedBorder10"
                    variant="OutlineBluegray100"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="cursor-pointer font-bold text-[18px] text-center text-white_A700 w-[100%]"
                  shape="RoundedBorder10"
                  size="4xl"
                  variant="FillGray900"
                >
                  Get OTP
                </Button>
                <Button
                  className="cursor-pointer font-bold text-[18px] text-center text-gray_900 w-[100%]"
                  shape="RoundedBorder10"
                  size="4xl"
                  variant="OutlineGray600_1"
                >
                  Return to sign in
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <div className="flex flex-row gap-[8px] items-start justify-center w-[100%]">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Don’t have an account?
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Create Account
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ResetPasswordModal;

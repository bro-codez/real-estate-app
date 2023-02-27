import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, CheckBox, Button, Line } from "components";

const CreateAccountModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[48%]"
        overlayClassName="bg-gray_900_cc fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="sm:h-[auto] md:h-[auto] max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start md:px-[20px] px-[30px] py-[40px] rounded-[10px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-center w-[100%]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                    <Text
                      className="flex-1 text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Create Account
                    </Text>
                    <Img
                      src="images/img_close.svg"
                      className="common-pointer h-[30px] w-[30px]"
                      onClick={props.onRequestClose}
                      alt="close"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Input
                        className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                        wrapClassName="flex w-[100%]"
                        type="email"
                        name="TextFieldLarge"
                        placeholder="user / email address"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="ml-[16px] mr-[14px] my-[auto]"
                            alt="user"
                          />
                        }
                        shape="RoundedBorder10"
                        variant="OutlineBluegray100"
                      ></Input>
                      <Input
                        className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                        wrapClassName="flex w-[100%]"
                        type="password"
                        name="TextFieldLarge One"
                        placeholder="Password"
                        prefix={
                          <Img
                            src="images/img_user_24X24.svg"
                            className="ml-[16px] mr-[14px] my-[auto]"
                            alt="user"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_airplane.svg"
                            className="ml-[35px] mr-[16px] my-[auto]"
                            alt="airplane"
                          />
                        }
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                      <Input
                        className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                        wrapClassName="flex w-[100%]"
                        type="email"
                        name="TextFieldLarge Two"
                        placeholder="user / email address"
                        prefix={
                          <Img
                            src="images/img_user.svg"
                            className="ml-[16px] mr-[14px] my-[auto]"
                            alt="user"
                          />
                        }
                        shape="RoundedBorder10"
                        variant="OutlineBluegray100"
                      ></Input>
                      <Input
                        className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                        wrapClassName="flex w-[100%]"
                        type="password"
                        name="TextFieldLarge Three"
                        placeholder="Password"
                        prefix={
                          <Img
                            src="images/img_user_24X24.svg"
                            className="ml-[16px] mr-[14px] my-[auto]"
                            alt="user"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_airplane.svg"
                            className="ml-[35px] mr-[16px] my-[auto]"
                            alt="airplane"
                          />
                        }
                        shape="RoundedBorder10"
                        size="xl"
                        variant="OutlineBluegray100"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <CheckBox
                    className="font-bold text-[18px] text-gray_600 text-left"
                    inputClassName="h-[18px] mr-[5px] w-[18px]"
                    label="I agree to all Terms & Conditions"
                    name="IagreetoallTerms"
                    shape="RoundedBorder4"
                    variant="OutlineGray900"
                  ></CheckBox>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Button
                  className="cursor-pointer font-bold text-[18px] text-center text-white_A700 w-[100%]"
                  shape="RoundedBorder10"
                  size="4xl"
                  variant="FillGray900"
                >
                  Create Account
                </Button>
                <Button
                  className="flex items-center justify-center text-center w-[100%]"
                  leftIcon={
                    <Img
                      src="images/img_refresh_20X20.svg"
                      className="mr-[10px] text-center"
                      alt="refresh"
                    />
                  }
                  shape="RoundedBorder10"
                  size="6xl"
                  variant="OutlineGray600_1"
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900 text-left">
                    Create Account with Google
                  </div>
                </Button>
              </div>
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
              <div className="flex flex-row gap-[8px] items-start justify-center w-[100%]">
                <Text
                  className="font-semibold text-center text-gray_600 tracking-[-0.40px] w-[auto]"
                  variant="body1"
                >
                  Have an account?
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

export default CreateAccountModal;

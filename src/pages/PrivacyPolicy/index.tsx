import React from "react";

import Header1 from "components/Header1";
import { Text } from "components";
import Footer from "components/Footer";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
          <Header1 className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]" />
          <div className="flex font-manrope items-start justify-center pl-[120px] pr-[266px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Last updated: January 2020
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  Hi, welcome to our privacy policy which applies to our
                  customers. This policy sets out how if you are a Relasto.com
                  user or visitor to our site, we treat your personal
                  information.
                  <br />
                  Last updated on March 01, 2020.
                </Text>
              </div>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    1. The type of personal information we collect
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Hi, welcome to our privacy policy which applies to our
                    customers. This policy sets out how if you are a Relasto.com
                    user or visitor to our site, we treat your personal
                    information.
                    <br />
                    Last updated on March 01, 2020.
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    2. Cookies and web analytics
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[1054px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    We use cookies to recognize and monitor users, their on-site
                    behavior, and their preferences for accessing their website.
                    These cookies include the IP and time of visits by visitors.
                    Visitors to Relasto that do not want cookies put on their
                    browsers should configure their browsers to reject cookies
                    before using the Relasto website.
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    3. When do we need to update this policy?
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    We will need to update this policy from time to time to
                    ensure that it remains up-to-date with the latest legal
                    requirements and any improvements to our privacy management
                    practices.
                    <br />
                    When we change the policy, we will make sure that we inform
                    you, if any, of such changes. A copy of this policy’s latest
                    version will always be available at this page.
                  </Text>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    4. Registration
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    To use our Service you will need to create an account and
                    complete the registration process at
                    https://Relasto.com/signup (Registration). 
                    <br />
                    At Registration, you will select logon credentials for each
                    user of the Service, which may be an employee of the
                    Subscriber or other individuals authorised by the Subscriber
                    to use the Service (Authorised User). Logon details should
                    only be used by the Authorised User to whom they are
                    assigned and cannot be shared with any third parties
                    (including another Authorised User). You are solely
                    responsible for the confidentiality and use of all logon
                    details for your account and those assigned to Authorised
                    Users, as well as for any use or misuse of the Service using
                    Subscriber’s or any Authorised Users’ logon details. You
                    shall notify us immediately if you become aware of any loss,
                    theft or unauthorised use of any logon details, and we
                    reserve the right to delete or change them at any time and
                    for any reason.  <br />
                    You warrant and represent to us that the details you provide
                    to us during Registration are accurate, complete and
                    up-to-date. We will hold and treat such information in
                    accordance with the terms of our Privacy Policy.
                    <br />
                    If you or your Participants use a mobile telephone to access
                    our Service, we may need to send SMS messages. You may opt
                    out of this service by replying STOP to the SMS message or
                    by contacting us at support@Relasto.com.
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    5. Marketing Choices regarding your personal data
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] max-w-[1054px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Where we have your permission to do so (e.g. if you
                    subscribed to one of our email lists or indicated that you
                    are interested in receiving deals or information from us),
                    we will send you email marketing messages about products and
                    services which we feel may be of interest to you. You can
                    ‘opt-out’ of such communications if you would prefer not to
                    receive them in the future by using the “unsubscribe”
                    facility provided in the communication itself.
                  </Text>
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

export default PrivacyPolicyPage;

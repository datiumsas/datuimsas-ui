import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const ContactUs =() => {
    
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
         
          {
            title: "France",
            description: (
              <>
                <Address>
                  <AddressLine>12 rue Jean Froissart</AddressLine>
                  <AddressLine>59200 Tourcoing</AddressLine>
                </Address>
                <Email>contact@datium.fr</Email>
                <Phone>111111111111</Phone>
              </>
            ),
          },
         
                

        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
export default ContactUs
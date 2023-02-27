import React from 'react'
import AnimationRevealPage from "helpers/AnimationRevealPage";
import tw from "twin.macro";
import Hero from "components/hero/TwoColumnWithVideo";
import Features from "components/features/ThreeColSimple";
import MainFeature from "components/features/TwoColWithButton";
import Footer from "components/footers/FiveColumnWithBackground";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";

import { Link } from "react-scroll";
import ThreeColContactDetails from 'components/cards/ThreeColContactDetails';
import GetStartedLight from 'components/cta/GetStartedLight';
import TwoColSingleFeatureWithStats from 'components/features/TwoColSingleFeatureWithStats';

const Home = ()=> {
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            VOTRE SPÉCIALISTE EN DÉVELOPPEMENT SUR MESURE{" "}
            <HighlightedText>Digitalisation de vos idées </HighlightedText>
          </>
        }
        description="Une tâche répétitive ? Une idée révolutionnaire ? Un besoin d’accroître la rentabilité de votre entreprise ?"
        imageSrc="https://img.freepik.com/free-vector/having-idea-design_1133-152.jpg?w=740&t=st=1677242009~exp=1677242609~hmac=c5c93ae6108b09347457175e872b45d3e1b7a2815435e1ecae5d40f65984c5f2"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText={
          <Link spy smooth to="contact-us">
            contact us
          </Link>
        }
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2022</Subheading>}
        heading={
          <>
            Votre partenaire IT de confiance

            <wbr /> <HighlightedText>Datium.</HighlightedText>
          </>
        }
        description={
          <Description>
           Chez Datium, Nous concevons des solutions sur mesure pour répondre aux besoins particulières de votre entreprise 
<br />
Notre équipe d'experts s'occupe de toute la démarche  pour vous permettre de vous concentrer sur votre activité principale."

          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "/image/img.jpg"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: "/image/cloud.png",
            title: "Architecture Cloud",
            description: "Nous concevons et déployons des architectures cloud peer-to-peer pour des solutions intelligentes telles que Smart city et Smart home",
          
          },
          {
            imageSrc: "/image/migration.png",
            title: "Migration vers le Cloud",
            description: "Nous élaborons des stratégies de migration fluides pour faciliter le déploiement des infrastructures existantes vers le cloud.",
          },
          {
            imageSrc: "/image/devops.png",
            title: "Devops",
            description: "Nous augmentons l'agilité et accélérons le délai de livraison de vos solutions en automatisant le pipeline de développement ",
           
          },
          {
            imageSrc: "/image/finops.png",
            title: "Administration et FinOps",
            description: "Nous optimisons vos coûts Cloud en gérant les dépenses opérationnelles et en déployant des stratégies d'optimisation pour une utilisation plus efficace des ressources.",
           
          },
          {
            imageSrc: "/image/dev.png",
            title: "Développement ",
            description: "Nous apportons des réponses à vos problématiques métier en développant des solutions techniques fiables, évolutives et faciles à prendre en main.",
           
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature
        subheading="Qui somme nous ?"
        heading="Datium"
        description=" est une entreprise de conseil et de services numériques qui propose des solutions innovantes pour aider les entreprises à réussir leur transformation digitale.
        Nous sommes une équipe de jeunes experts et passionnée par l'innovation et la recherche de solutions  personnalisées, technologiques innovantes et abordables pour les petites et moyennes entreprises qui répondent aux besoin unique de chaque client. 
Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs défis et leurs objectifs pour stimuler leur croissance. 
"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <h1></h1>
      <ThreeColContactDetails></ThreeColContactDetails>
      <Footer />
    </AnimationRevealPage>
  );
}

export default Home
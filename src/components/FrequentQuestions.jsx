import React from "react";
import { Question } from "../components";

const FrequentQuestions = () => {
  return (
    <div className="py-20 mt-8 bg-gray-50">
      <h1 className="text-4xl text-center tracking-wider font-bold text-gray-800	uppercase font-josefin">
        QUESTIONS FRÉQUENTES
      </h1>
      <div>
        <div className="max-w-4xl mx-auto mt-8 space-y-3">
          <Question
            title="Quelle est la mission de JCI ?"
            description="Offrir des opportunités de développement qui permettent aux jeunes de créer un changement positif."
          />
          <Question
            title="Qui sont nos membres ?"
            description="Nos membres sont très divers – des entrepreneurs en démarrage aux personnes travaillant dans des entreprises de premier ordre, des organisations à but non lucratif et des œuvres de bienfaisance. Les membres partagent une passion commune pour se challenger et se développer."
          />
          <Question
            title="Quels sont les principaux domaines de JCI ?"
            description="Nous menons des projets et des événements qui combinent nos quatre domaines principaux : business, formation, communautaire et international. Vous pouvez développer vos compétences de plusieurs manières, de l'aide à l'organisation d'un événement caritatif local à la planification d'une série d'événements professionnels. Et vous pouvez rencontrer des membres JCI internationaux lorsque vous vous rendez à des événements dans d'autres pays."
          />
          <Question
            title="La JCI est-elle bonne pour ma carrière ?"
            description="En rencontrant de nouvelles personnes, vous élargirez vos perspectives et votre compréhension. L'adhésion à la JCI fera ressortir votre CV, car il montre que vous êtes engagé dans votre propre développement personnel et professionnel. Beaucoup de nos membres ont découvert leur passion et trouvé de nouvelles opportunités grâce à leur implication dans JCI. Cela les conduit souvent à une nouvelle carrière. Les compétences générales que vous apprenez à JCI (parler en public, négociation, gestion de projet, etc.) vous seront très utiles tout au long de votre carrière. Alors oui, JCI est formidable pour votre carrière."
          />
          <Question
            title="Quel type de formation propose JCI ?"
            description="JCI propose un vaste programme de formation. Nous nous concentrons sur les compétences générales telles que la présentation, le débat, la prise de parole en public et les compétences en négociation, etc. Vous pouvez assister à des événements de formation locaux et suivre les cours officiels."
          />
          <Question
            title="La JCI est-elle bonne pour mon CV ?"
            description="Curriculum Vitae (CV) signifie « le cours de votre vie ». Avec JCI, vous pouvez vous impliquer dans des projets qui élargiront vos compétences et amélioreront vos talents. Les employeurs potentiels vous remarqueront. Alors oui, JCI est formidable à la fois pour vous et pour votre CV."
          />
          <Question
            title="Comment puis-je contribuer ?"
            description="JCI Menzel Fersi vous donne une chance de redonner à la société en vous impliquant dans des projets communautaires. Vous aimerez peut-être le son d'un événement caritatif, d'un événement de formation dirigé par JCI ou d'un projet . L'adhésion à JCI est ce que vous en faites. Nous encourageons « l'apprentissage par la pratique ». Maintes et maintes fois, nous constatons que plus nos membres investissent dans JCI, plus ils en sortent."
          />
          <Question
            title="Ma contribution peut-elle créer un changement positif ?"
            description="Oui. Chaque fois que vous vous améliorez, améliorez vos pairs, votre communauté ou JCI, vous créez un changement positif. Le monde a plus que jamais besoin de dirigeants qui le font, votre contribution est donc importante."
          />
        </div>
      </div>
      <div className="mx-auto text-center mt-8">
        <h1 className="text-2xl text-center tracking-wider font-bold text-gray-800 font-josefin">
          Vous avez encore une question ?
        </h1>
        <p className="w-1/2 mx-auto mt-6 font-semibold text-gray-800">
          Si vous ne trouvez pas la réponse à votre question dans notre FAQ,
          vous pouvez toujours nous contacter. Nous vous répondrons sous peu.
          Contactez-nous par e-mail à{" "}
          <span className="font-bold block underline text-gray-800">
            contact@jci.menzelfersi.tn
          </span>
        </p>
      </div>
    </div>
  );
};

export default FrequentQuestions;

import React from "react";
import CirleBgk from "../Assets/circle-integrations.svg";
import SlackLogo from "../Assets/integration-logos/01-slack.svg";
import QBLogo from "../Assets/integration-logos/02-quickbooks.svg";
import MailChimplogo from "../Assets/integration-logos/03-mailchimp.svg";
import HubSpotLogo from "../Assets/integration-logos/04-hubspot.svg";
import ZapierLogo from "../Assets/integration-logos/05-zapier.svg";
import GAnalyticsLogo from "../Assets/integration-logos/06-google-analytics.svg";
import MarketoLogo from "../Assets/integration-logos/07-marketo.svg";

interface IntegrateProps {
  publicURL: string;
  name: string;
  id: string;
}

const Integrations = () => {
  const data = [
    {
      publicURL: SlackLogo,
      name: "Slack",
      id: "01-Slack",
    },
    {
      publicURL: QBLogo,
      name: "QuickBooks",
      id: "02-QuickBooks",
    },
    {
      publicURL: MailChimplogo,
      name: "MailChimp",
      id: "03-MailChimp",
    },
    {
      publicURL: HubSpotLogo,
      name: "HubSpot",
      id: "04-HubSpot",
    },
    {
      publicURL: ZapierLogo,
      name: "Zapier",
      id: "05-Zapier",
    },
    {
      publicURL: GAnalyticsLogo,
      name: "GAnalytics",
      id: "06-GAnalytics",
    },
    {
      publicURL: MarketoLogo,
      name: "Marketo",
      id: "07-Marketo",
    },
  ];

  return (
    <div>
      <div className="container mx-auto xl:pb-40 pb-12">
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-8 gap-10 xl:py-18 md:py-12 pt-12 pb-6 xl:px-0 md:px-12 px-0 items-center border-t border-neutral-200 relative">
          <div className="absolute xl:block flex justify-center xl:left-8 inset-x-0 top-0">
            <img
              src={CirleBgk}
              alt="Circle background"
              className="md:w-[624px] md:h-[312px] w-[304px] h-[152px]"
            />
          </div>
          <div className="flex flex-col gap-4 relative xl:text-left text-center">
            <h3 className="lg:text-display-xl md:text-display-lg text-display-md font-semibold">
              Integrate with your favorite tools
            </h3>
            <p className="md:text-body-lg text-body-md font-normal text-neutral-700">
              Connect RegiM with your most favorite sales and marketing tools
            </p>
          </div>
          <div className="flex flex-row flex-wrap xl:gap-18 lg:gap-12 md:gap-18 gap-8 items-center justify-center justify-items-center relative">
            {data.map((node: IntegrateProps) => (
              <img
                src={node.publicURL}
                alt={node.name}
                key={node.id}
                className="shadow-xl rounded-full md:w-20 md:h-20 w-14 h-14"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;

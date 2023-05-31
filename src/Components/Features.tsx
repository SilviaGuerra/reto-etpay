import React, { useState, useEffect } from "react";
import FeatureItem from "./FeatureItem";
import VideoImg from "../images/video-thumbnail.png";
import VideoPlay from "../images/video-play.svg";
import Icon1 from "../images/feature-icons/01.svg";
import Icon2 from "../images/feature-icons/02.svg";
import Icon3 from "../images/feature-icons/03.svg";
import Icon4 from "../images/feature-icons/04.svg";
import Icon5 from "../images/feature-icons/05.svg";
import Icon6 from "../images/feature-icons/06.svg";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const Features = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [showOpacity, setShowOpacity] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollableHeight = scrollHeight - clientHeight;
      const scrollPercentage = (scrollTop / scrollableHeight) * 100;

      if (scrollPercentage >= 20) {
        setShowTransition(true);
      }

      if (scrollPercentage >= 35) {
        setShowOpacity(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    {
      icon: Icon1,
      title: "Event Metrics",
      description:
        "Track your ticket sales, attendees count and more with much ease.",
    },
    {
      icon: Icon2,
      title: "Registration & Ticketing",
      description:
        "Manage your Event registrations and ticket sales easier and receive payments instantly.",
    },
    {
      icon: Icon3,
      title: "Branded Badges",
      description:
        "Create your custom branded badges for your events and get them printed.",
    },
    {
      icon: Icon4,
      title: "Oragniser App",
      description:
        "Manage your events at the palm of your hand with our Oragniser App.",
    },
    {
      icon: Icon5,
      title: "Attendee Engagement",
      description:
        "Engage with your attendees via email, surveys and much more.",
    },
    {
      icon: Icon6,
      title: "Add to Calendar",
      description:
        "Effortless way to add your events to registered users calendars by 1-click.",
    },
  ];

  return (
    <>
      <section className="container mx-auto">
        <div className="flex flex-col gap-12 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-8 text-center">
            <div className="xl:col-span-2 xl:block hidden"></div>
            <div
              className={`xl:col-span-8 flex flex-col gap-12 justify-center flex flex-col gap-2 text-center transition-transform transform ${
                showTransition
                  ? "translate-y-0"
                  : "translate-y-full invisible ease-in-out delay-150 duration-800"
              }`}
            >
              <div className="flex flex-col gap-2 text-center transition-opacity">
                <h3 className="lg:text-display-xl md:text-display-lg text-display-md font-semibold">
                  All-in-one Event Platform
                </h3>
                <p className="md:text-body-lg text-body-md font-normal text-neutral-700">
                  Deliver an exceptional event experience
                </p>
              </div>
              <div className="flex flex-col items-center relative">
                <img src={VideoImg} alt="Video" />
                <div className="flex flex-row items-center md:py-4 py-3 md:pl-4 pl-3 md:pr-5 pr-4 gap-3 bg-white shadow-md rounded-full absolute md:-bottom-7 -bottom-6">
                  <img src={VideoPlay} alt="play video" />
                  <span className="md:text-body-md text-body-sm font-medium">
                    See it in action (2 min)
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 xl:block hidden"></div>
          </div>
          <div
            className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-0 md:pt-10 md:pb-6 items-center transition-opacity ${
              showOpacity
                ? "opacity-100 ease-in-out delay-200 duration-2000"
                : "opacity-0"
            }`}
          >
            {data.map((node: FeaturesProps) => (
              <FeatureItem
                icon={node.icon}
                title={node.title}
                description={node.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

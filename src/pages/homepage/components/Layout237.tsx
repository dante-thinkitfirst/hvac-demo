import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import scheduleIcon from "@/assets/images/schedule_send.svg";
import diagnosisIcon from "@/assets/images/diagnosis.svg";
import automationIcon from "@/assets/images/automation.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons: ButtonProps[];
};

export type Layout237Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout237 = (props: Layout237Props) => {
  const { tagline, heading, description, sections, buttons } = {
    ...props,
    ...Layout237Defaults,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 tagline md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 md:mb-6">{heading}</h2>
              <p className="">{description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center text-center"
              >
                <div className="rb-5 mb-5 md:mb-6">
                  <img
                    src={section.icon.src}
                    className="size-12"
                    alt={section.icon.alt}
                  />
                </div>
                <h3 className="h4 mb-5 md:mb-6">{section.heading}</h3>
                <p className="text-md md:text-lg">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout237Defaults: Props = {
  tagline: "Process",
  heading: "How ArcticAir works",
  description:
    "Our streamlined process ensures fast, efficient, and intelligent HVAC service from start to finish.",
  sections: [
    {
      icon: {
        src: scheduleIcon,
        alt: "Relume logo 1",
      },
      heading: "Request service",
      description:
        "Connect with our AI assistant or schedule a consultation through multiple convenient channels.",
    },
    {
      icon: {
        src: diagnosisIcon,
        alt: "Relume logo 2",
      },
      heading: "System diagnosis",
      description:
        "Our advanced diagnostic tools quickly identify and analyze your HVAC system's specific needs.",
    },
    {
      icon: {
        src: automationIcon,
        alt: "Relume logo 3",
      },
      heading: "Expert resolution",
      description:
        "Certified technicians implement precise, data-driven solutions to restore optimal system performance.",
    },
  ],
  buttons: [
    {
      title: "Learn more",
      variant: "secondary",
      className: "border-border-secondary",
    },
    {
      title: "Contact us",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};

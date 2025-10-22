import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  logos: ImageProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout149Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout149 = (props: Layout149Props) => {
  const { tagline, heading, logos, description, buttons, image } = {
    ...Layout149Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 tagline md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 md:mb-6">{heading}</h2>
              <p className="mb-5 md:mb-6">{description}</p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-14"
                  />
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    className="border-border-secondary"
                    key={index}
                    {...button}
                  >
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={image.src}
            className="size-full object-cover"
            alt={image.alt}
          />
        </div>
      </div>
    </section>
  );
};

export const Layout149Defaults: Props = {
  tagline: "AI assistant",
  heading: "Meet Arctic, your AI HVAC assistant",
  description:
    "Intelligent support that understands your comfort needs. Schedule services, get instant answers, and optimize your home's climate with advanced AI technology.",
  buttons: [
    { title: "Chat now", variant: "secondary" },
    {
      title: "Learn more",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
  logos: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 2",
    },
  ],
};

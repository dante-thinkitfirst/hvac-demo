import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardProps = {
  image: ImageProps;
  logo: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  cards: CardProps[];
};

export type Layout521Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout521 = (props: Layout521Props) => {
  const { tagline, heading, description, cards } = {
    ...Layout521Defaults,
    ...props,
  };

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#DAD9D9]"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 tagline md:mb-4">{tagline}</p>
            <h2 className="mb-5 md:mb-6">{heading}</h2>
            <p className="">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-4">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({
  image,
  logo,
  heading,
  description,
  button,
}) => (
  <div className="relative p-6">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/50" />
      <img src={image.src} className="size-full object-cover" alt={image.alt} />
    </div>
    <div className="relative z-10">
      <div className="mb-3 md:mb-4">
        <img src={logo.src} className="size-12" alt={logo.alt} />
      </div>
      <h3 className="mb-2 text-text-alternative h4">{heading}</h3>
      <p className="text-text-alternative text-base md:text-lg">
        {description}
      </p>
      <div className="mt-5 flex items-center md:mt-6">
        <Button
          className="text-text-alternative text-base md:text-lg font-medium"
          {...button}
        >
          {button.title}
        </Button>
      </div>
    </div>
  </div>
);

const card = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
    alt: "Relume logo",
  },
  heading: "Medium length section heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: {
    title: "Button",
    variant: "link-alt",
    size: "link",
    iconRight: <RxChevronRight />,
  },
};

export const Layout521Defaults: Props = {
  tagline: "Trust",
  heading: "Why choose ArcticAir",
  description:
    "Delivering exceptional service through technology, expertise, and customer-first commitment.",
  cards: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
      },
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
        alt: "Relume logo",
      },
      heading: "Certified technicians",
      description:
        "Highly trained professionals with industry-leading certifications and continuous training.",
      button: {
        title: "Learn more",
        variant: "link-alt",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
      },
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
        alt: "Relume logo",
      },
      heading: "Same-day service",
      description:
        "Rapid response times and immediate scheduling for urgent HVAC needs.",
      button: {
        title: "Book Now",
        variant: "link-alt",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
      },
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
        alt: "Relume logo",
      },
      heading: "Transparent pricing",
      description:
        "Clear, upfront cost estimates with no hidden fees or surprise charges.",
      button: {
        title: "Get estimate",
        variant: "link-alt",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
      },
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg",
        alt: "Relume logo",
      },
      heading: "Smart tracking",
      description:
        "Real-time service updates and intelligent monitoring of your HVAC system's performance.",
      button: {
        title: "Track service",
        variant: "link-alt",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};

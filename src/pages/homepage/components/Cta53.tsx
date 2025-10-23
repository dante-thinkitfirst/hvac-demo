import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Cta53Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta53 = (props: Cta53Props) => {
  const { heading, description, buttons, image } = {
    ...Cta53Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-text-alternative md:mb-6">
              {heading}
            </h2>
            <p className="text-text-alternative">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button
                key={index}
                {...button}
                className={`text-base md:text-lg ${button.className}`}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src={image.src}
            className="size-full object-cover"
            alt={image.alt}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
};

export const Cta53Defaults: Props = {
  heading: "Ready for smarter home comfort?",
  description:
    "Experience the future of HVAC service with intelligent, responsive, and efficient solutions.",
  buttons: [
    { title: "Book Now", className: "text-[#0C0802] bg-white border-white" },
    {
      title: "Learn More",
      variant: "secondary-alt",
      className: "border-border-secondary",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};

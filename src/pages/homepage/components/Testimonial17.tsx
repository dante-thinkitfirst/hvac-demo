import { BiSolidStar } from "react-icons/bi";
import type { ComponentPropsWithoutRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial17Props = ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial17 = (props: Testimonial17Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 md:mb-6">{heading}</h2>
          <p className="">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8 bg-[#F2F2F2]"
            >
              <div className="mb-5 flex md:mb-6">
                {Array(testimonial.numberOfStars)
                  .fill(null)
                  .map((_, starIndex) => (
                    <BiSolidStar key={starIndex} className="mr-1 size-6" />
                  ))}
              </div>
              <blockquote className="text-lg md:text-xl">
                {testimonial.quote}
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="text-base md:text-lg font-semibold">
                    {testimonial.name}
                  </p>
                  <p>
                    <span className="text-base md:text-lg">
                      {testimonial.position}
                    </span>
                    ,{" "}
                    <span className="text-base md:text-lg">
                      {testimonial.companyName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults: Props = {
  heading: "Customer stories",
  description: "Real experiences from homes and businesses we've served",
  testimonials: [
    {
      quote:
        '"ArcticAir transformed our office\'s HVAC system with incredible efficiency and professionalism."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Michael Thompson",
      position: "Facility Manager",
      companyName: "Tech Innovations Inc",
      numberOfStars: 5,
    },
    {
      quote:
        '"Their AI-powered diagnostic tools identified issues I didn\'t even know existed."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Sarah Rodriguez",
      position: "Homeowner",
      companyName: "Green Valley Estates",
      numberOfStars: 5,
    },
    {
      quote:
        '"Fast, reliable, and incredibly smart. ArcticAir is the future of home comfort."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "David Chen",
      position: "Property Manager",
      companyName: "Urban Living Group",
      numberOfStars: 5,
    },
  ],
};

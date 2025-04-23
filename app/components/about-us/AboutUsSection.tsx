import Image from "next/image";
import clsx from "clsx";

interface AboutUsSectionProps {
  title: string;
  description: string;
  description2?: string;
  vatNumber?: string;
  imageSrc: string;
  imageRight?: boolean;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  title,
  description,
  description2,
  vatNumber,
  imageSrc,
  imageRight = false,
}) => {
  return (
    <section className="py-16 bg-background text-foreground px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Side */}
        <div className={clsx("w-full lg:w-1/2", { "lg:order-2": imageRight })}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-foreground-accent">{description}</p>
          <p className="text-lg text-foreground-accent mt-4">{description2}</p>
          {vatNumber && (
            <p className="text-lg text-foreground-accent mt-4">{vatNumber}</p>
          )}
        </div>

        {/* Image Side */}
        <div className={clsx("w-full lg:w-1/2", { "lg:order-1": imageRight })}>
          <Image
            src={imageSrc}
            alt="About us"
            width={600}
            quality={100}
            height={400}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

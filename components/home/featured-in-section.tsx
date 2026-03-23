import Image from "next/image";

type FeaturedLogo =

    | {
          type: "image";
          alt: string;
          src: string;
      };

const featuredLogos: FeaturedLogo[] = [
    { type: "image", alt: "Featured logo", src: "/images/featured-logo-01.svg" },
    { type: "image", alt: "Featured logo", src: "/images/featured-logo-02.svg" },
    { type: "image", alt: "Featured logo", src: "/images/featured-logo-03.svg" },
    { type: "image", alt: "Featured logo", src: "/images/featured-logo-04.svg" },
    { type: "image", alt: "Featured logo", src: "/images/featured-logo-05.svg" },
];

const LOGO_W = 121;
const LOGO_H = 20;

export function FeaturedInSection() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-[0.875rem] uppercase leading-[1.5714] tracking-[0.0714em] text-[#efede8a6]">
                AS FEATURED IN
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {featuredLogos.map((logo, idx) => {
                    return (
                        <div key={`logo-${idx}`} className="h-5">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={LOGO_W}
                                height={LOGO_H}
                                unoptimized
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


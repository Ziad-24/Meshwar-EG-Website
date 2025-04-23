import { ctaDetails } from "@/data/cta";

import AppStoreButton from "../Buttons/AppStoreButton";
import PlayStoreButton from "../Buttons/PlayStoreButton";

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-12">
            <div className="relative z-10 py-12 sm:py-20 px-5">
                <div className="relative max-w-screen-xl mx-auto rounded-3xl overflow-hidden">
                    {/* Background Layers */}
                    <div className="absolute inset-0 -z-10 bg-[#050502] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-95 rounded-3xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C1C,transparent)] rounded-3xl" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center justify-center text-white text-center py-12 px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
                            {ctaDetails.heading}
                        </h2>

                        <p className="mx-auto max-w-xl md:px-5">
                            {ctaDetails.subheading}
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4">
                            <AppStoreButton />
                            <PlayStoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

import React from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/constants";
import { Link } from "react-router-dom";
import { MdEmojiPeople } from "react-icons/md";
import { FiCompass, FiFlag, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { FaBinoculars } from "react-icons/fa";

const AboutUs = () => {

  const tourOperators = [
    {
      name: "Mr. Dhammithra Samarasinghe",
      image: "/images/persons/Dhammithra.jpg",
      imageClassName: "object-cover object-center",
      description:
        "Dhammithra Samarasinghe is one of the talented tour operators in Sri Lanka. He has been working in Bird and Wildlife tourism field nearly 25 years in the country. He has gained knowledge of both fauna and flora in Sri Lanka and also an experienced wildlife researcher in academic and conservation level including local and international platform. Where natural history is concerned his knowledge is sound and scientific and he knows where to creep and crawl in search of the rare jewel of the client desire.",
    },
    {
      name: "Mr. Suranjan Karunarathna",
      image: "/images/persons/suranan.jpg",
      imageClassName: "object-cover object-top",
      description:
        "Mr. Suranjan Karunarathna is an ecologist and herpetologist renowned for his extensive research on amphibians, reptiles, and biodiversity conservation. He has worked with both government and non-government organizations on research and conservation initiatives in Sri Lanka, leading to numerous scientific publications and community-based conservation efforts. He is also the founder of the Nature Exploration and Education Team in Sri Lanka. Beyond research, Suranjan is a licensed National Tourist Guide in Sri Lanka, uniquely bridging science with eco-tourism. With decades of experience as a herping guide, he combines strong scientific expertise with hands-on field guiding across Sri Lanka.",
    },
  ];

  const advisoryBoard = [
    {
      name: "Professor Jiang Aiwu",
      image: "/images/persons/Aiwu.jpg",
      imageClassName: "object-cover object-top",
      lines: [
        "College of Forestry",
        "Behavioral and Community Ecology Conservation Biology Group",
        "Guangxi University",
        "Nanning, PR China.",
      ],
    },
    {
      name: "Dr. Emilio Pagani-Nunez",
      image: "/images/persons/Emileo.jpg",
      imageClassName: "object-cover object-top",
      lines: [
        "School of Applied Science",
        "Edinburgh Napier University",
        "Scotland, United Kingdom.",
      ],
    },
    {
      name: "Professor D.M. Deepthi Yakandawala",
      image: "/images/persons/111.jpg",
      imageClassName: "object-cover object-top",
      lines: [
        "Senior Professor",
        "Department of Botany",
        "Faculty of Science, University of Peradeniya",
        "Sri Lanka.",
      ],
    },
  ];

  return (
    <>
      <PageHeader name="About Us" image={"/images/others/1.jpg"} className={"object-center"} />

      <section className="w-full h-auto overflow-hidden bg-white">
        <div className="max-container padding-container">
          <div className="mx-auto py-10 md:py-14 lg:py-16">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-9 w-9 rounded-xl bg-primary2/10 text-primary2 grid place-items-center">
                  <MdEmojiPeople size={18} />
                </span>
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">
                  Best Birder Sri Lanka
                </p>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                A calm, focused way to explore Sri Lanka’s nature.
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
                We curate birding and wildlife experiences with a strong respect for habitats, local knowledge, and responsible travel.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full text-xs bg-primary2/10 text-primary2 font-semibold">
                  Birding
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-primary2/10 text-primary2 font-semibold">
                  Wildlife
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-primary2/10 text-primary2 font-semibold">
                  Responsible Travel
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-primary2/10 text-primary2 font-semibold">
                  Field Expertise
                </span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-primary2/10 bg-white p-5 md:p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-xl bg-primary2/10 text-primary2 grid place-items-center">
                    <FiCompass size={18} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">Vision</h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                      Our vision to be the most faithful and preferred bird and wildlife tour agency in Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-primary2/10 bg-white p-5 md:p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-xl bg-primary2/10 text-primary2 grid place-items-center">
                    <FiFlag size={18} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">Mission</h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                      To offer an excellent and responsible service that will always give an unforgettable experience with nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-primary2/10 bg-white shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-primary2/5 p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-white border border-primary2/10 text-primary2 grid place-items-center">
                      <FaBinoculars size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">
                        Director
                      </p>
                      <h3 className="text-xl font-bold text-slate-900">Mr. Indika Peabotuwage</h3>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl overflow-hidden border border-primary2/10 bg-white">
                    <img
                      src="/1655642162.jpg"
                      alt="Mr. Indika Peabotuwage"
                      className="w-full h-[320px] object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:col-span-3 p-5 md:p-6">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                    Mr. Indika Peabotuwage is the founder of the Best Birder tour group in Sri Lanka. With nearly 15 years of experience, Indika has worked as a field biologist and ornithologist in South and East Asia. His academic pursuits focus on wildlife conservation and management at the Open University of Sri Lanka and the Postgraduate Institute of Archaeology, University of Kelaniya, Sri Lanka. Indika has also been affiliated with the Department of Botany at the University of Peradeniya, the Young Zoologist Association of Sri Lanka, National Zoo, Xishuangbanna Tropical Botanical Garden of the Chinese Academy of Sciences and the College of Forestry at Guangxi University in China. He possesses extensive knowledge and experience with tropical bird flocks, migratory birds, and flora in South and East Asia.
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-primary2/10 p-4">
                      <p className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">Focus</p>
                      <p className="mt-2 text-sm text-muted-foreground">Bird flocks, migratory birds, tropical ecosystems.</p>
                    </div>
                    <div className="rounded-xl border border-primary2/10 p-4">
                      <p className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">Approach</p>
                      <p className="mt-2 text-sm text-muted-foreground">Field-first guiding with conservation awareness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">Team</p>
                  <h3 className="text-2xl font-bold text-slate-900">Tour Operators</h3>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {tourOperators.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-2xl border border-primary2/10 bg-white shadow-sm overflow-hidden"
                  >
                    <div className="h-full flex flex-col sm:flex-row sm:items-stretch">
                      <div className="relative sm:w-2/5 bg-primary2/5 sm:self-stretch">
                        <img
                          src={person.image}
                          alt={person.name}
                          className={`w-full h-[260px] sm:absolute sm:inset-0 sm:h-full sm:w-full ${person.imageClassName}`}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 p-5 md:p-6">
                        <h4 className="text-lg font-bold text-slate-900">{person.name}</h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-justify">
                          {person.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">People</p>
              <h3 className="text-2xl font-bold text-slate-900">Advisory Board</h3>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                {advisoryBoard.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-2xl border border-primary2/10 bg-white shadow-sm overflow-hidden"
                  >
                    <div className="bg-primary2/5">
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-[350px] md:h-[400px] ${member.imageClassName || "object-cover object-top"}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-bold text-slate-900">{member.name}</p>
                      <div className="mt-2 space-y-1">
                        {member.lines.map((line) => (
                          <p key={line} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-primary2/10 bg-white shadow-sm overflow-hidden">
              <div className="p-5 md:p-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-700 uppercase">Contacts</p>
                <h3 className="text-2xl font-bold text-slate-900">Let’s plan your trip</h3>

                <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-primary2/10 p-4">
                    <div className="flex items-start gap-3">
                      <span className="h-9 w-9 rounded-xl bg-primary2/10 text-primary2 grid place-items-center">
                        <FiMapPin size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Postal Address</p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          662/19, Muttettuwa Watta, Koongahagedara, Kuliyapitiya, 60200, Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-primary2/10 p-4">
                    <div className="flex items-start gap-3">
                      <span className="h-9 w-9 rounded-xl bg-primary2/10 text-primary2 grid place-items-center">
                        <FiMail size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Email</p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          info@bestbirdersl.com / bestbirdersl@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-primary2/10 p-4">
                    <div className="flex items-start gap-3">
                      <span className="h-9 w-9 rounded-xl bg-primary2/10 text-primary2 grid place-items-center">
                        <FiPhoneCall size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Hotline</p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          +94716362389 / +94772723796
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <ul className="flex gap-4">
                    {SOCIALS.links.map((social) => (
                      <Link
                        to={social.href}
                        key={social.src}
                        className="h-10 w-10 rounded-xl border border-primary2/10 bg-white grid place-items-center hover:bg-primary2/5 transition-colors"
                        aria-label="Social link"
                      >
                        <img src={social.src} alt="social" width={18} height={18} />
                      </Link>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="h-11 px-6 bg-primary2 hover:bg-primary text-white rounded-xl"
                    size={"lg"}
                  >
                    <Link to="/contact_us">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

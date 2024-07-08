import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const BestLocations = () => {
  return (
    <>
      {/* <Navbar /> */}

      <PageHeader name="Best Locations" image={"/images/others/6.jpg"} className={"object-center"}/>

      <section className=" w-full h-auto overflow-hidden">
        <div className="bg-image5 bg-cover bg-bottom w-full">
          <div className=" max-container padding-container flexCenter flex-col w-full">
            <h1 className=" bold-32 lg:bold-52 mt-24 mb-10 flex gap-3 items-center">
              <span>
                <FaMapLocationDot />
              </span>
              Best Locations
            </h1>

            <div className=" flex flex-col items-center gap-7 md:gap-10 lg:gap-14 mb-24">
              <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                Sri Lanka has many bird and wildlife attractive places including
                different habitats. Especially National Parks and Rain Forests.
                Some of the most famous sites are Wilpatttu National Park, Yala
                National Park, Udawalawa National Park, Minneriya National Park,
                Sigiriya Sanctuary, Bundala National Park, Horton plains
                National Park, Sinharaja man and biosphere Forest Reserve,
                Makandawa Rain Forest, Anawilundawal Ramsar wetland and Wankalai
                Ramsar wetland. Those places are located in Wet zone, Dry zone
                and Arid zone in Sri Lanka which contains rich diversity in
                Wildlife.
              </p>

              <div className=" flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className=" flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Anawilundawa Ramsar Wetland
                  </h4>
                  <div className=" flex items-start justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/anawilundawa.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Anawilundawa wetland is located in Puttlam District in North
                    Western Province of Sri Lanka. With 1397 hectares of forest
                    land and nine tanks, it has a unique vegetation that harbors
                    many birds and other fauna. Comprises with coast, mangrove and
                    tank ecosystem in the area, it provides ample breeding and
                    feeding grounds for thousands of local and migratory birds in
                    Sri Lanka. Due to these facts, this is a very popular wetland
                    and migratory bird watching spot among local and international
                    birders.
                  </p>
                </div>

                <div className="flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Wilpattu National Park
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/wilpattubear.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Wilpattu is the largest National Park in Sri Lanka. World
                    renowned for its leopard (<i>Panthera pardus kotiya</i>) population,
                    the unique feature of this park is the existence of “Willus”
                    (natural, sand-rimmed water basin or depressions that fill
                    with rainwater). Located in northwest coastal lowland dry zone
                    of Sri Lanka, the park comprises with land area of 131693
                    hectares and ranges from 0-152m above sea level. Nearly 106
                    “Willus” and tanks are found spread throughout Wilpattu. The
                    annual rainfall is about 1000mm and the annual temperature is
                    about 27.2<sup>0</sup> C (81.0<sup>0</sup>F). It is rich of dry zone biodiversity in
                    Sri Lanka.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className=" flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Sigiriya Sanctuary
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/sigiriya.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Sigiriya is the 8<sup>th</sup> Wonder of the world (UNESCO world heritage
                    site). This ancient rock fortress locates in the Matale
                    District of Central Province of Sri Lanka. This area has a
                    unique vegetation type including rock outcrops and dry
                    evergreen forest. It’s one of the best places to observe fauna
                    and flora unique to the dry zone. And also, this place is a
                    very important historical site with ancient rock painting and
                    ruins of one of the ancient kingdoms in Sri Lanka.
                  </p>
                </div>

                <div className="  flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Horton Plains National Park
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/hortonplains1.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Located in the Nuwara Eliya District in Central Province of
                    Sri Lanka, Horton Plains consists of ecosystems such as
                    montane evergreen forest, grassland, marshy lands and aquatic
                    habitats. At an altitude of 2100m above sea level, it spreads
                    across over 3169 hectares of the highest tableland of the
                    island. All of the montane endemic birds of Sri Lanka are
                    found in Horton Plains.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className=" flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Makandawa Forest Reserve Kitulgala
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/makandawakitulgala.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Makandawa is a lowland rain forest, located in the Kegalle
                    District in Sabaragamuwa Province of Sri Lanka (1155
                    hectares). It’s rich in biodiversity and home to many endemic
                    species of fauna and flora. The Makandawa forest reserve is a
                    watershed forest on the Kelani river which is providing unique
                    habitats for freshwater fishes and other fauna and flora
                    species in the country.
                  </p>
                </div>

                <div className=" flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Sinharaja Rain Forest
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/sinharaja.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Sinharaja man and biosphere lowland rainforest is located in
                    Sabaragamuwa and Southern province in southwestern Sri Lanka
                    (500m a.s.l). Sinharaja is the country’s last viable area of
                    primary tropical rainforest. More than 60% of the trees are
                    endemic and many of them are considered endangered. There is
                    much endemic wildlife, especially birds, but the reserve is
                    also home to over 50% of Sri Lanka’s endemic species of
                    mammals and butterflies as well as many kinds of insects,
                    reptiles and rare amphibians. Its covering an area 8864 ha and
                    ranging from an altitude of 300-1170m. It consists of 6092 ha
                    of forest reserve and 2772 ha of proposed forest reserve. The
                    mean annual rainfall is 2500-5000mm and the average annual
                    temperature is nearly 24.6<sup>0</sup>C.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className=" flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Yala National Park
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/yala.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Yala National Park is the second largest National Park in Sri
                    Lanka which is located in the Southern Province of Sri Lanka
                    (151778 hectares). It’s confined with dry mix evergreen
                    forest, riverine vegetation, lagoons, tanks, grasslands and
                    scrublands. The mean annual rainfall is 1000-1500mm and is
                    limited to the northeast and inter monsoon periods. The
                    average annual temperature approximately 29<sup>0</sup>C. It’s home to
                    wildlife such as leopards, elephants, sloth bear and
                    crocodiles, as well as many water bird species.
                  </p>
                </div>

                <div className=" flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Udawalawe National Park
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/udawalawa.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" indent-10 max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Udawalawa National Park is on the boundary of Uva and
                    Sabaragamuwa province of Sri Lanka. The reserve covers 30821
                    hectares in land area. Main vegetation types are dry mix
                    evergreen forest, tanks, grasslands and shrubs. It is
                    important for water birds and Asian elephant. Udawalawa is a
                    famous tourist destination and the third most visited National
                    park in the country.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Bundala National Park
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/bundala.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Bundala National Park is located in the semi-arid zone of the
                    Southern Province of Sri Lanka and the first Ramsar wetland in
                    Sri Lanka (6200 hectares). Main vegetation is coastal, thorn
                    and shrubs. This is very important site for migratory water
                    birds during the migration season (August-April). It harbors
                    nearly 200 species of birds including Greater flamingo. Annual
                    rainfall is below 1000mm and the temperature is approximately
                    31<sup>0</sup>C. The National park was designated as a biosphere reserve
                    by UNESCO in 2005.
                  </p>
                </div>

                <div className="flex flex-col flex-1">
                  <h4 className=" bold-18 md:bold-20 lg:bold-32 mb-2 lg:mb-4 text-primary">
                    Vankalai Sanctuary
                  </h4>
                  <div className=" flex items-center justify-center rounded-md overflow-hidden max-h-[375px] mb-3">
                    <img src="/images/locations/wankalei.jpg" className=" w-full object-cover" alt="Anawilundawa Ramsar Wetland" />
                  </div>
                  <p className=" max-w-5xl text-justify regular-14 md:regular-16 lg:regular-18 tracking-wide">
                    Vankalai bird sanctuary (4839 hectares) is located in Mannar
                    District of Northern province of Sri Lanka. Mainly in
                    association with coastal environment, it consists mostly with
                    short thorny shrubs, mangroves, salt marshes and lagoons. Gulf
                    of Mannar region acts as a funnel for millions of migratory
                    birds including a massive number of shorebirds that enter the
                    island along the Central Asian flyway (August to December).
                    Its harbors more than 150 distinct bird species.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default BestLocations;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogDetail = () => {

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const relatedBlogs = [
        {
            id: 201,
            image: "/image/12.png",
            date: "15 Aug, 2026",
            title: "Pune's Burgeoning Luxury Interior Design Market",
            description: "Pune has become India's housing capital by volume, and its top end is rising fastest of all: sales value of homes above INR 3 crore surged 85 percent year on ye...",
        },
        {
            id: 202,
            image: "/image/14.png",
            date: "13 Aug, 2026",
            title: "Restoring the Lutyens Bungalow: Heritage Architecture Meets Contemporary Luxur...",
            description: "The Lutyens Bungalow Zone covers roughly 26 square kilometres of central New Delhi with about 1,000 bungalows, of which fewer than one in ten are privately held...",
        },
        {
            id: 204,
            image: "/image/18.png",
            date: "05 Aug, 2026",
            title: "Taking Cues from Time-Tested Vaastu Principles for Contemporary Luxury Living",
            description: "Vaastu shastra is a classical Indian doctrine of orientation and proportion, and in contemporary luxury practice it works best treated as a spatial framework to...",
        }
    ];

    return (
        <main className="w-full bg-white text-[#2a2a2a] overflow-hidden">

            {/* HERO TITLE SECTION */}
            <section className="pt-32 pb-12 px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 mx-auto w-full">
                <div className="flex flex-col items-center mb-8">
                    <p className="text-[9px] tracking-[0.2em] uppercase text-black/50 mb-6">
                        DESIGN GROUP
                    </p>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium leading-tight text-[#722838] mb-6">
                    Fusing Beachfront Living with a Contemporary Abu Dhabi Grammar for Saadiyat Island's Culture District
                </h1>

                <p className="text-sm sm:text-base text-[#4a4a4a] mb-12">
                    By Aparna Kaushik Design Group 12 August, 2026
                </p>
            </section>

            {/* HERO IMAGE */}
            <section className="w-full px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 mx-auto mb-16 md:mb-24">
                <img
                    src="/Image/hero.jpg"
                    alt="Saadiyat Island Villa Interior"
                    className="w-full h-auto object-cover max-h-[80vh] rounded-2xl"
                />
            </section>

            {/* CONTENT CONTAINER */}
            <section className="px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 w-full mx-auto mb-20">

                {/* KEY TAKEAWAYS */}
                <div className="border border-gray-200 rounded-sm p-8 sm:p-10 mb-16 relative">
                    <h3 className="text-sm font-medium tracking-wide uppercase mb-6 text-[#2a2a2a]">
                        KEY TAKEAWAYS
                    </h3>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white" />

                    <ul className="space-y-4 text-[15px] sm:text-base text-[#4a4a4a] leading-relaxed list-disc pl-5">
                        <li className="pl-2">
                            Saadiyat Island is Abu Dhabi's definitive luxury address: villa listings average around AED 15 million, beachfront and golf-course homes reach AED 45 million, and trophy properties trade past AED 85 million (industry property data, 2026).
                        </li>
                        <li className="pl-2">
                            The island's identity is cultural, not just coastal. The Saadiyat Cultural District, anchored by the Louvre Abu Dhabi with the Guggenheim to follow, has attached a gallery-city prestige to the address that no other Gulf villa market carries.
                        </li>
                        <li className="pl-2">
                            Saadiyat's beaches are a protected nesting ground for hawksbill turtles, which brings real design constraints: dune setbacks, controlled beachfront lighting and height discipline that shape every serious villa brief on the island.
                        </li>
                        <li className="pl-2">
                            The interiors question on Saadiyat is gallery living: walls and lighting planned for serious art, controlled daylight that protects collections from the Gulf sun, and a restraint of palette that lets both the art and the sea hold the room.
                        </li>
                        <li className="pl-2">
                            Commissioning clients are increasingly international, with Indian families prominent among them, and the brief typically spans architecture, interiors, landscape and turnkey delivery under one team.
                        </li>
                    </ul>
                </div>

                {/* PARAGRAPH 1 */}
                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-12">
                    Saadiyat Island villas carry a brief that exists nowhere else in the Gulf: beachfront living inside a culture district. On one side of the address sits the Louvre Abu Dhabi, with the Guggenheim rising nearby and the wider Saadiyat Cultural District around them; on the other, a protected white-sand shoreline where hawksbill turtles still nest each season. Between the two sits some of the emirate's most valuable residential land, developed largely under Aldar, where villa listings average around AED 15 million and the best beachfront and golf-course properties reach AED 45 million and beyond (industry property data, 2026). AKDG's work reshaping the luxury interior design conversation in Abu Dhabi covers the emirate's wider brief; this guide goes deeper into its definitive island, and what designing a villa here actually demands.
                </p>

                {/* HEADING 2 */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#722838] mb-6 mt-16 leading-tight">
                    How Saadiyat Island Emerged as Abu Dhabi's Definitive Luxury Address
                </h2>

                {/* PARAGRAPHS */}
                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-6">
                    Saadiyat leads Abu Dhabi's luxury market because it concentrated three things no competing district holds together: a protected natural shoreline, a masterplanned cultural quarter of global rank, and villa communities. Saadiyat Beach Villas and Hidd Al Saadiyat among them, built to a density that keeps the island quiet. The Louvre Abu Dhabi gave the address an identity beyond real estate, the Saadiyat Beach Golf Club threaded a championship course between the communities and the sea, and the pipeline of museums keeps the district's prestige compounding rather than fading.
                </p>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-6">
                    The island's development discipline is part of the value. Saadiyat was masterplanned and largely delivered under Aldar, Abu Dhabi's principal developer, which has kept architectural standards, community management and the pace of release under one hand rather than fragmenting the island across competing schemes. For owners this shows up in the mundane ways that matter over a decade of ownership: consistent community upkeep, predictable design review, and a supply pipeline managed to protect values rather than flood them. Scarcity on Saadiyat is designed, not accidental, and the market prices it accordingly.
                </p>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-12">
                    The market reflects it. Villas on the island list from roughly AED 8.4 million for inland community homes to well past AED 85 million for landmark beachfront properties, with the average asking price around AED 15 million and premium family villas near AED 19 million (industry property data, 2026). For buyers comparing the emirate's options, the alternatives each read differently, and the differences are design briefs as much as price points.
                </p>

                {/* TABLE */}
                <div className="mb-16 overflow-x-auto">
                    <p className="text-sm italic mb-4 text-[#5a5a5a]">Saadiyat against Abu Dhabi's other villa addresses</p>
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-[#722838] text-white">
                                <th className="p-4 font-medium text-sm w-[25%] border-b border-[#722838]">Address</th>
                                <th className="p-4 font-medium text-sm w-[45%] border-b border-[#722838]">Character</th>
                                <th className="p-4 font-medium text-sm w-[30%] border-b border-[#722838]">Typical villa positioning</th>
                            </tr>
                        </thead>
                        <tbody className="text-[14px] text-[#3a3a3a]">
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 align-top">Saadiyat Island</td>
                                <td className="p-4 align-top">Culture district, protected beach, golf; the emirate's prestige address</td>
                                <td className="p-4 align-top">AED 8.4m inland to AED 45m beachfront and beyond; trophy homes past AED 85m</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 align-top">Al Hudayriat and Nareel area</td>
                                <td className="p-4 align-top">Newer waterfront masterplans, sport and leisure identity</td>
                                <td className="p-4 align-top">Contemporary waterfront villas; strong value but without the cultural district</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 align-top">Yas Island</td>
                                <td className="p-4 align-top">Entertainment-led: circuit, parks, marina living</td>
                                <td className="p-4 align-top">Family villas and golf communities at gentler prices than Saadiyat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* HEADING 3 */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#722838] mb-6 mt-16 leading-tight">
                    The Saadiyat Brief: Turtle Beaches, Lighting Rules and Height Discipline
                </h2>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-6">
                    Saadiyat's defining constraint is environmental, and it is a genuine one, not a marketing line. The island's beaches are a documented nesting ground for critically endangered hawksbill turtles, and the masterplan protects them with dune buffers, controlled public access and, most consequentially for designers, restrictions on artificial light reaching the beach during nesting season. For a beachfront villa this means exterior lighting designed to be shielded, low-level and warm-toned on the seaward side, glazing and screening choices that manage light spill after dark, and landscape that works with the dune line rather than flattening it.
                </p>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-6">
                    The landscape brief follows the same logic. The most convincing Saadiyat gardens run a gradient rather than a boundary: irrigated planting and lawn held close to the house, transitioning through salt-tolerant regional species to native dune grasses where the plot meets the protected foreshore. A garden that ends in a clipped hedge against wild dune reads as a suburban plot dropped onto a nature reserve; a garden that negotiates the transition reads as if the villa belongs to the island. On a shoreline this closely watched, that judgement is also the difference between a landscape plan that clears review comfortably and one that gets redrawn.
                </p>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-12">
                    Height discipline shapes the rest. The island's low-rise coastal zoning keeps villas within a modest silhouette, which pushes design ambition sideways, into plan depth, volume and architectural massing rather than upward statement. The best Saadiyat villas read as long, calm compositions parallel to the shore, taking the sea in glimpses and full reveals rather than one undifferentiated wall of glass, and their gardens negotiate the transition from irrigated green to native dune planting with some grace. These constraints, handled early, are not the brief's burden; they are its character.
                </p>

                {/* HEADING 4 */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#722838] mb-6 mt-16 leading-tight">
                    Interiors for Gallery Living: Art, Light and Restraint
                </h2>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-6">
                    A villa minutes from the Louvre attracts owners who collect, and the interiors brief on Saadiyat increasingly resembles a private gallery's: proper hanging walls with reinforced fixing zones and clean sightlines, lighting designed in layers with museum-grade colour rendering on the art, and daylight control, deep reveals, screens, interlayers and blinds, that protects works on paper and textiles from a sun that is brutal on bath. Conservation-grade climate stability matters as much as light; a collection's insurer will ask about humidity control before it asks about the view.
                </p>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-12">
                    The palette follows from the same logic. With the sea on one side and art on the walls, the architecture's job is restraint: quiet stone, warm neutrals, and material depth over pattern, so the eye is given a hierarchy rather than a competition, an approach AKDG explored at length in its Palm Jumeirah villa study, where the water demands the same deference. This is also where an integrated studio shows its worth, because hanging walls, lighting, climate zoning and joinery all have to be resolved in the same drawings, not discovered against each other on site.
                </p>

                {/* MIDDLE IMAGE */}
                <div className="w-full mb-16">
                    <img
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Modern Villa Exterior with Pool"
                        className="w-full h-auto rounded-2xl"
                        onError={(e) => {
                            e.currentTarget.src = "/image/4.png";
                        }}
                    />
                </div>

                {/* HEADING 5 */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#722838] mb-6 mt-16 leading-tight">
                    Who Is Commissioning on Saadiyat, and How
                </h2>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-6">
                    The island's buyer profile has internationalised sharply: established Emirati families now share the address with European, East Asian and, prominently, Indian UHNW families for whom Abu Dhabi has become a second base, drawn by the emirate's stability and the island's schools, beach clubs and cultural quarter. Search behaviour tells the same story: queries for the best architect for luxury villas in Abu Dhabi increasingly resolve to Saadiyat-specific briefs, and the commissions arriving at the studio's Abu Dhabi practice are typically full-scope: architecture or gut renovation, interiors, landscape and turnkey delivery held by one team across a client who may be on the island only part of the year.
                </p>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-6">
                    The renovation wave is arriving on schedule as well. Saadiyat Beach Villas' earliest stock is now well into its second decade, and owners who bought for the address are commissioning the same gut-renovation briefs Dubai's prime communities normalised years earlier: opened plans turned properly toward the sea, principal suites rebuilt to spa standard, glazing and shading upgraded to current performance, and the gallery-living layer, hanging walls, lighting, climate stability, added throughout. On an island where new beachfront plots are nearly exhausted, renovating a well-positioned early villa is increasingly the smartest route to a definitive Saadiyat home.
                </p>

                <p className="text-[15px] sm:text-base text-[#3a3a3a] leading-[1.8] mb-12">
                    That last condition matters. A part-time principal and a full-scope brief reward a studio structured to carry a project without weekly client presence, with the design authority to make a thousand small decisions in the spirit of the agreed whole. Aparna Kaushik Design Group's iconic architecture practice is built for exactly that commission, and families considering Saadiyat, a purchase, a new build on one of the remaining plots, or the renovation of an early villa, can get in touch with the studio while the brief is still forming.
                </p>

                {/* QUOTE */}
                <blockquote className="border-l-2 border-[#722838] pl-6 my-16 text-[#3a3a3a]">
                    <p className="text-base sm:text-lg italic mb-4 leading-relaxed">
                        "Saadiyat asks for a rare kind of confidence: architecture that can stand near the Louvre without shouting at it, and interiors that let the art and the sea decide the room."
                    </p>
                    <footer className="text-sm font-medium text-[#722838]">
                        — Aparna Kaushik, Principal Architect and Interior Designer
                    </footer>
                </blockquote>

                {/* FAQ SECTION */}
                <div className="mb-20">
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#722838] mb-10 leading-tight">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-[#2a2a2a] mb-3">How much do Saadiyat Island villas cost?</h3>
                            <p className="text-[15px] sm:text-base text-[#4a4a4a] leading-relaxed">
                                Villa listings on Saadiyat range from roughly AED 8.4 million for inland community homes to past AED 45 million for beachfront and golf-course properties, with landmark trophy villas past AED 85 million. The island's average asking price sits around AED 15 million (industry property data, 2026).
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-[#2a2a2a] mb-3">What are the environmental rules for Saadiyat beachfront villas?</h3>
                            <p className="text-[15px] sm:text-base text-[#4a4a4a] leading-relaxed">
                                Saadiyat's beaches are a protected nesting ground for hawksbill turtles, so beachfront properties observe dune setbacks and controls on artificial light reaching the beach in nesting season. In design terms that means shielded, low-level, warm-toned exterior lighting on the seaward side and landscape that preserves the dune line.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-[#2a2a2a] mb-3">What is the Saadiyat Cultural District?</h3>
                            <p className="text-[15px] sm:text-base text-[#4a4a4a] leading-relaxed">
                                The Saadiyat Cultural District is the island's masterplanned museum quarter, anchored by the Louvre Abu Dhabi with the Guggenheim Abu Dhabi and further institutions following. It gives Saadiyat a gallery-city identity unique among Gulf residential addresses and shapes the character, and the interiors briefs, of the villa communities around it.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-[#2a2a2a] mb-3">Saadiyat or Yas Island for a luxury villa?</h3>
                            <p className="text-[15px] sm:text-base text-[#4a4a4a] leading-relaxed">
                                Saadiyat is the prestige address: protected beach, the cultural district, golf and the emirate's highest villa values. Yas is entertainment-led, with family villa communities at gentler prices. Buyers seeking the definitive Abu Dhabi address and long-term scarcity generally land on Saadiyat.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-[#2a2a2a] mb-3">What should interiors for an art collection include?</h3>
                            <p className="text-[15px] sm:text-base text-[#4a4a4a] leading-relaxed">
                                Reinforced hanging walls with clean sightlines, layered lighting with museum-grade colour rendering, daylight control through reveals, screens and interlayers, and stable conservation-grade climate zoning. These need to be designed into the architecture from the start rather than retrofitted around a finished villa.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-[#2a2a2a] mb-3">Can villas on Saadiyat be renovated?</h3>
                            <p className="text-[15px] sm:text-base text-[#4a4a4a] leading-relaxed">
                                Yes. The island's earlier villa stock is reaching the age where owners renovate rather than move, and the brief follows the same logic as new work: respect the height and environmental disciplines, rework plans toward the sea view, and bring lighting, services and interiors up to the standard the address now commands.
                            </p>
                        </div>
                    </div>
                </div>

                {/* AUTHOR BOX */}
                <div className="bg-[#722838] text-white p-8 sm:p-12 mb-20 relative">
                    <p className="text-[9px] tracking-[0.15em] uppercase mb-4 opacity-80">ABOUT THE AUTHOR</p>
                    <h3 className="text-2xl sm:text-3xl font-medium mb-3">Aparna Kaushik Design Group</h3>
                    <p className="text-xs sm:text-sm font-medium mb-4 opacity-90">Editorial Desk</p>
                    <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-6">
                        Aparna Kaushik founded Aparna Kaushik Design Group in 2008 as an ultra-luxury, principal-led architecture and interior design house and is recognised among India's foremost architects for her large private residential commissions. Her studio's UAE practice serves UHNW clients across Dubai and Abu Dhabi, delivering architecture, interiors, furniture, lighting, landscape, art curation, and turnkey execution as one coordinated service.
                    </p>
                    <p className="text-xs sm:text-sm opacity-80">
                        aparnakaushik.com/about-us | enquiries@aparnakaushik.com | @aparnakaushikofficial
                    </p>
                </div>

                {/* READ ON SECTION */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-medium text-[#722838] mb-10">
                        READ ON
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedBlogs.map((blog) => (
                            <Link to="/readmore" key={blog.id} className="group block">
                                <div className="aspect-[4/3] overflow-hidden mb-5">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                                    />
                                </div>
                                <p className="text-[11px] text-gray-500 mb-2">{blog.date}</p>
                                <h4 className="text-lg font-medium text-[#2a2a2a] leading-tight mb-3 group-hover:text-[#722838] transition-colors">
                                    {blog.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                    {blog.description}
                                </p>
                                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#2a2a2a] group-hover:text-[#722838] transition-colors">
                                    READ MORE +
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
};

export default BlogDetail;

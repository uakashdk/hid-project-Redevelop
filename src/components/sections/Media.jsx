import React, { useMemo, useRef, useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| MEDIA PAGE
|--------------------------------------------------------------------------
| React
| Tailwind CSS
| Framer Motion
|
| No Navbar / Footer included.
|--------------------------------------------------------------------------
*/

const Media = () => {
    const [activeTab, setActiveTab] = useState("PUBLICATIONS");
    const [visibleCount, setVisibleCount] = useState(4);

    /*
    |--------------------------------------------------------------------------
    | PUBLICATIONS
    |--------------------------------------------------------------------------
    */

    const publications = [
        {
            id: 1,
            image: "/image/2.png",
            title: "Architectural Digest",
            category: "PUBLICATIONS",
        },
        {
            id: 2,
            image: "/image/3.png",
            title: "Luxury Interiors",
            category: "PUBLICATIONS",
        },
        {
            id: 3,
            image: "/image/4.png",
            title: "Architectural Publication",
            category: "PUBLICATIONS",
        },
        {
            id: 4,
            image: "/image/5.png",
            title: "Design Journal",
            category: "PUBLICATIONS",
        },
        {
            id: 5,
            image: "/image/6.png",
            title: "Interior Design",
            category: "PUBLICATIONS",
        },
        {
            id: 6,
            image: "/image/7.png",
            title: "Luxury Living",
            category: "PUBLICATIONS",
        },
        {
            id: 7,
            image: "/image/8.png",
            title: "Architecture Today",
            category: "PUBLICATIONS",
        },
        {
            id: 8,
            image: "/image/2.png",
            title: "Design Stories",
            category: "PUBLICATIONS",
        },
        {
            id: 9,
            image: "/image/3.png",
            title: "Architectural Digest",
            category: "PUBLICATIONS",
        },
        {
            id: 10,
            image: "/image/6.png",
            title: "Luxury Homes",
            category: "PUBLICATIONS",
        },
        {
            id: 11,
            image: "/image/8.png",
            title: "Modern Architecture",
            category: "PUBLICATIONS",
        },
        {
            id: 12,
            image: "/image/6.png",
            title: "Design Review",
            category: "PUBLICATIONS",
        },
    ];

    /*
    |--------------------------------------------------------------------------
    | EVENTS
    |--------------------------------------------------------------------------
    */

    const events = [
        {
            id: 101,
            image: "/image/11.png",
            title: "Masterclass at IID Indore",
            category: "EVENTS",
        },
        {
            id: 102,
            image: "/image/13.png",
            title: "ID Salon, New Delhi",
            category: "EVENTS",
        },
        {
            id: 103,
            image: "/image/15.png",
            title: "Maison & Objet, Hong Kong",
            category: "EVENTS",
        },
        {
            id: 104,
            image: "/image/17.png",
            title: "Maison & Objet, Paris",
            category: "EVENTS",
        },
        {
            id: 105,
            image: "/image/21.png",
            title: "Asia One Awards, Dubai",
            category: "EVENTS",
        },
        {
            id: 106,
            image: "/image/23.png",
            title: "Downtown Design, Dubai",
            category: "EVENTS",
        },
        {
            id: 107,
            image: "/image/25.png",
            title: "Maison & Objet, French Embassy, New Delhi",
            category: "EVENTS",
        },
        {
            id: 108,
            image: "/image/27.png",
            title: "Forbes M-Connect, New Delhi",
            category: "EVENTS",
        },
    ];

    /*
    |--------------------------------------------------------------------------
    | BLOG
    |--------------------------------------------------------------------------
    */

    const blogs = [
        {
            id: 201,
            image: "/image/12.png",
            date: "15 Aug, 2026",
            title: "Pune's Burgeoning Luxury Interior Design Market",
            author: "By Aparna Kaushik Design Group",
            description:
                "Pune has become India's housing capital by volume, and its top end is rising fastest of all: sales value of homes above INR 3 crore surged 85 percent year on year in the first half...",
            category: "BLOG",
        },
        {
            id: 202,
            image: "/image/14.png",
            date: "12 Aug, 2026",
            title: "Fusing Beachfront Living with a Contemporary Abu Dhabi Grammar...",
            author: "By Aparna Kaushik Design Group",
            description:
                "Saadiyat Island is Abu Dhabi's definitive luxury address: villa listings average around AED 15 million, beachfront and golf-course homes reach AED 45 million, and trophy properties...",
            category: "BLOG",
        },
        {
            id: 203,
            image: "/image/16.png",
            date: "09 Aug, 2026",
            title: "Restoring the Lutyens Bungalow: Heritage Architecture Meets Contemporary Luxury...",
            author: "By Aparna Kaushik Design Group",
            description:
                "The Lutyens Bungalow Zone covers roughly 26 square kilometres of central New Delhi with about 1,000 bungalows, of which fewer than one in ten are privately held, which is why LBZ h...",
            category: "BLOG",
        },
        {
            id: 204,
            image: "/image/18.png",
            date: "03 Aug, 2026",
            title: "Taking Cues from Time-Tested Vaastu Principles for Contemporary Luxury Living",
            author: "By Aparna Kaushik Design Group",
            description:
                "Vaastu shastra is a classical Indian doctrine of orientation and proportion, and in contemporary luxury practice it works best treated as a spatial framework to design with, not a...",
            category: "BLOG",
        },
        {
            id: 205,
            image: "/image/22.png",
            date: "31 Jul, 2026",
            title: "Landscape Design as a Tool that Reinterprets Luxury Villas of Dubai for...",
            author: "By Aparna Kaushik Design Group",
            description:
                "Luxury landscape design for Dubai villas: zoning pools and majlis terraces, planting that survives 45C summers, lighting, and what a garden adds at resale.",
            category: "BLOG",
        },
        {
            id: 206,
            image: "/image/24.png",
            date: "24 Jul, 2026",
            title: "Luxury Residences that Reinterpret the Holiday Home Template for Goa will...",
            author: "By Aparna Kaushik Design Group",
            description:
                "Goa has become India's definitive second-home market, with premium villas in pockets such as Assagao transacting between INR 4 crore and INR 25 crore and land in the most sought-af...",
            category: "BLOG",
        },
        {
            id: 207,
            image: "/image/26.png",
            date: "23 Jul, 2026",
            title: "Kolkata's Colonial Bones Present a Plethora of Luxury Interior Design Avenues",
            author: "By Aparna Kaushik Design Group",
            description:
                "Kolkata's residential prices rose 6 percent year on year in 2025, and premium homes now account for more than half of all residential sales in the city (Knight Frank India, 2026).",
            category: "BLOG",
        },
        {
            id: 208,
            image: "/image/28.png",
            date: "18 Jul, 2026",
            title: "Deriving from Culture, Climate and Community for a Villa in the Emirates Hills",
            author: "By Aparna Kaushik Design Group",
            description:
                "Emirates Hills is Dubai's most exclusive gated villa community, built around the Montgomerie golf course, with entry-level properties starting above AED 15 million and trophy lakef...",
            category: "BLOG",
        },
    ];

    /*
    |--------------------------------------------------------------------------
    | CURRENT DATA
    |--------------------------------------------------------------------------
    */

    const currentData = useMemo(() => {
        if (activeTab === "EVENTS") return events;
        if (activeTab === "BLOG") return blogs;

        return publications;
    }, [activeTab]);

    const visibleItems = currentData.slice(0, visibleCount);

    /*
    |--------------------------------------------------------------------------
    | CUSTOM CURSOR
    |--------------------------------------------------------------------------
    */

    const cursorRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | TAB CHANGE
    |--------------------------------------------------------------------------
    */

    const changeTab = (tab) => {
        setActiveTab(tab);

        if (tab === "PUBLICATIONS") {
            setVisibleCount(4);
        } else {
            setVisibleCount(8);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /*
    |--------------------------------------------------------------------------
    | LOAD MORE
    |--------------------------------------------------------------------------
    */

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    /*
    |--------------------------------------------------------------------------
    | HERO ANIMATION
    |--------------------------------------------------------------------------
    */

    const heroContainer = {
        hidden: {},

        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const heroItem = {
        hidden: {
            opacity: 0,
            y: 35,
        },

        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    /*
    |--------------------------------------------------------------------------
    | GRID ANIMATION
    |--------------------------------------------------------------------------
    */

    const gridContainer = {
        hidden: {},

        visible: {
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    /*
    |--------------------------------------------------------------------------
    | CARD ANIMATION
    |--------------------------------------------------------------------------
    */

    const cardAnimation = {
        hidden: {
            opacity: 0,
            y: 70,
            scale: 0.96,
        },

        visible: (index) => ({
            opacity: 1,
            y: 0,
            scale: 1,

            transition: {
                duration: 0.85,
                delay: (index % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    /*
    |--------------------------------------------------------------------------
    | LEGACY SCROLL SECTION
    |--------------------------------------------------------------------------
    |
    | This is the main effect from your reference video.
    |
    | The image starts as a small strip.
    |
    | As the user scrolls:
    |
    |       IMAGE
    |         ↑
    |         ↑
    |         ↑
    |         ↑
    |
    | It expands into the viewport.
    |
    |--------------------------------------------------------------------------
    */

    const legacyRef = useRef(null);

    const { scrollYProgress: legacyProgress } = useScroll({
        target: legacyRef,

        offset: [
            "start end",
            "end start",
        ],
    });

    /*
    |--------------------------------------------------------------------------
    | SMOOTH SCROLL VALUE
    |--------------------------------------------------------------------------
    */

    const smoothLegacyProgress = useSpring(legacyProgress, {
        stiffness: 80,
        damping: 25,
        mass: 0.8,
    });

    /*
    |--------------------------------------------------------------------------
    | IMAGE REVEAL
    |--------------------------------------------------------------------------
    |
    | At the beginning:
    | image is pushed down.
    |
    | During scroll:
    | image rises.
    |
    | Final:
    | image reaches its full position.
    |--------------------------------------------------------------------------
    */

    const legacyY = useTransform(
        smoothLegacyProgress,
        [0, 0.15, 0.4, 0.65, 1],
        ["55%", "28%", "8%", "0%", "-3%"]
    );

    /*
    |--------------------------------------------------------------------------
    | IMAGE SCALE
    |--------------------------------------------------------------------------
    */

    const legacyScale = useTransform(
        smoothLegacyProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [1.16, 1.1, 1.05, 1.015, 1]
    );

    /*
    |--------------------------------------------------------------------------
    | IMAGE HEIGHT
    |--------------------------------------------------------------------------
    |
    | This creates the feeling that the image grows from below.
    |--------------------------------------------------------------------------
    */

    const legacyHeight = useTransform(
        smoothLegacyProgress,
        [0, 0.12, 0.3, 0.55, 0.8, 1],
        ["18%", "32%", "52%", "70%", "88%", "100%"]
    );

    /*
    |--------------------------------------------------------------------------
    | BORDER RADIUS
    |--------------------------------------------------------------------------
    |
    | Starts rounded.
    | Gradually becomes a full-width cinematic image.
    |--------------------------------------------------------------------------
    */

    const legacyRadius = useTransform(
        smoothLegacyProgress,
        [0, 0.25, 0.55, 1],
        ["22px", "16px", "8px", "0px"]
    );

    /*
    |--------------------------------------------------------------------------
    | CONTENT REVEAL
    |--------------------------------------------------------------------------
    */

    const legacyContentY = useTransform(
        smoothLegacyProgress,
        [0.15, 0.4, 0.65, 1],
        [80, 45, 15, 0]
    );

    const legacyContentOpacity = useTransform(
        smoothLegacyProgress,
        [0.25, 0.42, 0.65, 1],
        [0, 0.2, 0.75, 1]
    );

    /*
    |--------------------------------------------------------------------------
    | IMAGE OVERLAY
    |--------------------------------------------------------------------------
    */

    const legacyOverlayOpacity = useTransform(
        smoothLegacyProgress,
        [0.15, 0.35, 0.6, 1],
        [0.05, 0.12, 0.2, 0.28]
    );

    /*
    |--------------------------------------------------------------------------
    | IMAGE PARALLAX
    |--------------------------------------------------------------------------
    */

    const legacyImageY = useTransform(
        smoothLegacyProgress,
        [0, 0.5, 1],
        ["-4%", "0%", "4%"]
    );

    /*
    |--------------------------------------------------------------------------
    | LEGACY TEXT
    |--------------------------------------------------------------------------
    */

    const legacyTitle = (
        <>
            A LEGACY OF 300+
            <br />
            ULTRA-LUXURY RESIDENCES
            <br />
            DELIVERED ACROSS INDIA,
            <br />
            THE UAE, AND THE WORLD.
        </>
    );

    return (
        <main className="w-full overflow-hidden bg-white text-[#111] relative">

            {/* ================================================================
                CUSTOM CURSOR
            ================================================================ */}

            <div
                ref={cursorRef}
                className="
                    pointer-events-none
                    fixed
                    top-0
                    left-0
                    z-[9999]
                    w-12
                    h-12
                    -ml-6
                    -mt-6
                    rounded-full
                    border
                    border-black/50
                    transition-transform
                    duration-75
                    ease-out
                    hidden
                    md:block
                "
            />

            {/* ================================================================
                HERO
            ================================================================ */}

            <section
                className="
                    relative
                    w-full
                    px-5
                    pt-28
                    pb-14
                    sm:px-8
                    md:px-10
                    md:pt-36
                    md:pb-16
                    lg:px-12
                "
            >
                <motion.div
                    variants={heroContainer}
                    initial="hidden"
                    animate="visible"
                    className="
                        mx-auto
                        flex
                        max-w-[1600px]
                        flex-col
                        items-center
                        text-center
                    "
                >

                    {/* LOGO */}

                    <motion.div
                        variants={heroItem}
                        className="
                            mb-8
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                    >
                        <img
                            src="/image/120.svg"
                            alt="Aparna Kaushik Design Group"
                            className="
                                h-20
                                sm:h-24
                                md:h-28
                                object-contain
                            "
                            onError={(e) => {
                                e.currentTarget.style.display = "none";

                                if (e.currentTarget.nextElementSibling) {
                                    e.currentTarget.nextElementSibling.style.display =
                                        "flex";
                                }
                            }}
                        />

                        <div
                            style={{ display: "none" }}
                            className="flex-col items-center"
                        >
                            <h2
                                className="
                                    text-sm
                                    sm:text-base
                                    md:text-lg
                                    font-normal
                                    tracking-[0.25em]
                                    uppercase
                                    text-black
                                "
                            >
                                Aparna Kaushik
                            </h2>

                            <p
                                className="
                                    text-[7px]
                                    sm:text-[8px]
                                    md:text-[9px]
                                    font-medium
                                    tracking-[0.4em]
                                    uppercase
                                    text-black/50
                                    mt-2
                                "
                            >
                                Design Group
                            </p>
                        </div>
                    </motion.div>

                    {/* TITLE */}

                    <motion.h1
                        variants={heroItem}
                        className="
                            font-sans
                            text-[42px]
                            font-medium
                            leading-none
                            tracking-[0.05em]
                            text-[#722838]
                            sm:text-[48px]
                            md:text-[58px]
                            lg:text-[64px]
                        "
                    >
                        MEDIA
                    </motion.h1>

                    {/* DESCRIPTION */}

                    <motion.p
                        variants={heroItem}
                        className="
                            mt-6
                            max-w-[700px]
                            text-[9px]
                            font-light
                            uppercase
                            tracking-[0.15em]
                            text-black/70
                            sm:text-[10px]
                            md:text-[11px]
                        "
                    >
                        OUR STORY CAPTURED IN EVENTS, PUBLICATIONS, AND MEDIA.
                    </motion.p>

                </motion.div>
            </section>

            {/* ================================================================
                TABS
            ================================================================ */}

            <section
                className="
                    w-full
                    px-5
                    pb-12
                    pt-8
                    mt-8
                    border-t
                    border-gray-200
                    sm:px-8
                    md:px-10
                    lg:px-12
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        max-w-[1600px]
                        justify-center
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-7
                            sm:gap-10
                            md:gap-14
                            lg:gap-16
                        "
                    >
                        {[
                            "PUBLICATIONS",
                            "EVENTS",
                            "BLOG",
                        ].map((tab) => {
                            const isActive = activeTab === tab;

                            return (
                                <button
                                    key={tab}
                                    onClick={() => changeTab(tab)}
                                    className={`
                                        group
                                        relative
                                        py-3
                                        px-6
                                        rounded-full
                                        border
                                        transition-all
                                        duration-500
                                        text-[9px]
                                        font-medium
                                        tracking-[0.13em]
                                        sm:text-[10px]
                                        md:text-[11px]

                                        ${isActive
                                            ? "border-black/30 text-[#722838]"
                                            : "border-transparent text-black/40 hover:text-black/70 hover:border-black/10"
                                        }
                                    `}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================================================================
                GALLERY
            ================================================================ */}

            <section
                className="
                    relative
                    z-10
                    w-full
                    px-3
                    sm:px-4
                    md:px-5
                "
            >
                <AnimatePresence mode="wait">

                    <motion.div
                        key={activeTab}
                        variants={gridContainer}
                        initial="hidden"
                        animate="visible"
                        exit={{
                            opacity: 0,
                            y: -15,
                            transition: {
                                duration: 0.3,
                            },
                        }}
                        className={`
                            grid
                            w-full

                            ${activeTab === "PUBLICATIONS"
                                ? `
                                        grid-cols-2
                                        gap-4
                                        sm:gap-5
                                        md:grid-cols-3
                                        md:gap-6
                                        lg:grid-cols-4
                                        lg:gap-7
                                    `
                                : `
                                        grid-cols-1
                                        gap-8
                                        sm:gap-10
                                        md:grid-cols-2
                                        lg:grid-cols-3
                                        md:gap-12
                                        lg:gap-14
                                        px-2
                                        sm:px-4
                                    `
                            }
                        `}
                    >

                        {visibleItems.map((item, index) => (
                            <motion.article
                                key={item.id}
                                custom={index}
                                variants={cardAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                    margin: "0px 0px -80px 0px",
                                }}
                                className={`
                                    group
                                    relative
                                    flex
                                    flex-col

                                    ${activeTab === "PUBLICATIONS"
                                        ? "overflow-hidden bg-[#f4f4f4]"
                                        : ""
                                    }
                                `}
                            >

                                {/* IMAGE */}

                                <div
                                    className={`
                                        relative
                                        w-full

                                        ${activeTab === "PUBLICATIONS"
                                            ? "h-full"
                                            : "aspect-[4/3] overflow-hidden"
                                        }
                                    `}
                                >
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        loading={index < 8 ? "eager" : "lazy"}
                                        decoding="async"
                                        className={`
                                            block
                                            w-full
                                            transition-[filter]
                                            duration-700
                                            ease-out
                                            group-hover:brightness-[0.92]

                                            ${activeTab === "PUBLICATIONS"
                                                ? "h-auto object-contain"
                                                : "h-full object-cover"
                                            }
                                        `}
                                        whileHover={{
                                            scale:
                                                activeTab === "PUBLICATIONS"
                                                    ? 1.025
                                                    : 1.05,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        onError={(e) => {
                                            e.currentTarget.style.opacity = "0";
                                        }}
                                    />

                                    {activeTab === "PUBLICATIONS" && (
                                        <div
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                bg-black
                                                opacity-0
                                                transition-opacity
                                                duration-700
                                                group-hover:opacity-[0.025]
                                            "
                                        />
                                    )}
                                </div>

                                {/* EVENTS / BLOG CONTENT */}

                                {activeTab !== "PUBLICATIONS" && (
                                    <div className="flex flex-col mt-4 sm:mt-5">

                                        {activeTab === "BLOG" &&
                                            item.date && (
                                                <span
                                                    className="
                                                        text-[10px]
                                                        sm:text-xs
                                                        text-black/60
                                                        mb-2
                                                    "
                                                >
                                                    {item.date}
                                                </span>
                                            )}

                                        <h3
                                            className={`
                                                text-black
                                                font-medium

                                                ${activeTab === "BLOG"
                                                    ? "text-base sm:text-lg lg:text-xl leading-tight mb-2"
                                                    : "text-sm sm:text-base text-center"
                                                }
                                            `}
                                        >
                                            {item.title}
                                        </h3>

                                        {activeTab === "BLOG" && (
                                            <>
                                                <span
                                                    className="
                                                        text-[10px]
                                                        sm:text-xs
                                                        text-black/60
                                                        italic
                                                        mb-4
                                                    "
                                                >
                                                    {item.author}
                                                </span>

                                                <p
                                                    className="
                                                        text-xs
                                                        sm:text-sm
                                                        text-black/70
                                                        leading-relaxed
                                                        mb-6
                                                        line-clamp-3
                                                    "
                                                >
                                                    {item.description}
                                                </p>

                                                <Link
                                                    to="/readmore"
                                                    className="
                                                        text-[9px]
                                                        sm:text-[10px]
                                                        font-medium
                                                        tracking-[0.15em]
                                                        uppercase
                                                        text-black
                                                        hover:text-[#722838]
                                                        transition-colors
                                                        self-start
                                                    "
                                                >
                                                    READ MORE +
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                )}

                            </motion.article>
                        ))}

                    </motion.div>

                </AnimatePresence>
            </section>

            {/* ================================================================
                LOAD MORE
            ================================================================ */}

            {visibleCount < currentData.length && (
                <section
                    className="
                        relative
                        z-10
                        flex
                        w-full
                        justify-center
                        px-5
                        py-20
                        sm:py-24
                        md:py-28
                        bg-white
                    "
                >
                    <motion.button
                        onClick={handleLoadMore}
                        whileHover="hover"
                        initial="initial"
                        className="
                            group
                            flex
                            flex-col
                            items-center
                            gap-4
                            outline-none
                        "
                    >
                        <div
                            className="
                                relative
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <motion.div
                                variants={{
                                    initial: {
                                        scale: 0,
                                        opacity: 0,
                                    },

                                    hover: {
                                        scale: 1,
                                        opacity: 1,
                                    },
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    absolute
                                    w-[120%]
                                    h-[120%]
                                    rounded-full
                                    border-[0.5px]
                                    border-[#722838]/50
                                    bg-transparent
                                "
                            />

                            <span
                                className="
                                    relative
                                    z-10
                                    text-[10px]
                                    sm:text-[11px]
                                    font-medium
                                    tracking-[0.15em]
                                    text-[#722838]
                                "
                            >
                                (LOAD MORE)
                            </span>
                        </div>
                    </motion.button>
                </section>
            )}

            {/* ================================================================
                CINEMATIC LEGACY REVEAL
            ================================================================ */}
            {/*
                IMPORTANT:

                This section is deliberately taller than the visible image.

                The user scrolls through this section while the image itself
                progressively expands upward.

                This creates the effect from your video:

                LOAD MORE
                    ↓
                small image strip
                    ↓
                image grows upward
                    ↓
                full cinematic image
                    ↓
                footer
            */}

            <section
                ref={legacyRef}
                className="
                    relative
                    z-20
                    w-full
                    h-[135vh]
                    -mt-1
                "
            >

                {/* ============================================================
                    IMAGE STAGE
                ============================================================ */}

                <div
                    className="
                        sticky
                        top-0
                        w-full
                        h-screen
                        overflow-hidden
                    "
                >

                    {/* ========================================================
                        MAIN IMAGE CONTAINER
                    ======================================================== */}

                    <motion.div
                        style={{
                            y: legacyY,
                            height: legacyHeight,
                            borderRadius: legacyRadius,
                        }}
                        className="
                            absolute
                            left-0
                            bottom-0
                            w-full
                            overflow-hidden
                            bg-[#202020]
                            shadow-[0_-15px_50px_rgba(0,0,0,0.08)]
                        "
                    >

                        {/* ====================================================
                            IMAGE
                        ==================================================== */}

                        <motion.img
                            src="/image/legacy.jpg"
                            alt="Aparna Kaushik luxury architecture"
                            style={{
                                y: legacyImageY,
                                scale: legacyScale,
                            }}
                            className="
                                absolute
                                left-0
                                top-0
                                h-[108%]
                                w-full
                                object-cover
                                object-center
                            "
                            onError={(e) => {
                                e.currentTarget.style.opacity = "0";
                            }}
                        />

                        {/* ====================================================
                            FALLBACK
                        ==================================================== */}

                        <div
                            className="
                                absolute
                                inset-0
                                -z-10
                                bg-[#202020]
                            "
                        />

                        {/* ====================================================
                            DARK OVERLAY
                        ==================================================== */}

                        <motion.div
                            style={{
                                opacity: legacyOverlayOpacity,
                            }}
                            className="
                                absolute
                                inset-0
                                bg-black
                            "
                        />

                        {/* ====================================================
                            SUBTLE TOP GRADIENT
                        ==================================================== */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-x-0
                                top-0
                                h-32
                                bg-gradient-to-b
                                from-black/20
                                to-transparent
                            "
                        />

                        {/* ====================================================
                            LEGACY CONTENT
                        ==================================================== */}

                        <motion.div
                            style={{
                                y: legacyContentY,
                                opacity: legacyContentOpacity,
                            }}
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                px-7
                                sm:justify-end
                                sm:px-10
                                md:px-16
                                lg:px-24
                            "
                        >
                            <div
                                className="
                                    w-full
                                    max-w-[620px]
                                    text-center
                                    text-white
                                    sm:text-right
                                "
                            >

                                {/* LABEL */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.25,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    className="
                                        mb-5
                                        text-[8px]
                                        font-medium
                                        tracking-[0.22em]
                                        text-white/75
                                        sm:text-[9px]
                                    "
                                >
                                    OUR LEGACY
                                </motion.div>

                                {/* TITLE */}

                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                        y: 35,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        delay: 0.12,
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                                        text-[23px]
                                        font-light
                                        leading-[1.35]
                                        tracking-[0.015em]
                                        sm:text-[28px]
                                        md:text-[34px]
                                        lg:text-[39px]
                                    "
                                >
                                    {legacyTitle}
                                </motion.h2>

                                {/* DESCRIPTION */}

                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        delay: 0.25,
                                        duration: 0.8,
                                    }}
                                    className="
                                        mt-7
                                        text-[9px]
                                        leading-[1.8]
                                        tracking-[0.08em]
                                        text-white/75
                                        sm:text-[10px]
                                    "
                                >
                                    WHERE ARCHITECTURE MEETS ART,
                                    <br />
                                    CRAFTSMANSHIP AND TIMELESS DESIGN.
                                </motion.p>

                                {/* CTA */}

                                <motion.a
                                    href="#contact"
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.8,
                                    }}
                                    whileHover={{
                                        y: -3,
                                    }}
                                    className="
                                        mt-9
                                        inline-flex
                                        items-center
                                        gap-4
                                        rounded-full
                                        bg-[#722838]
                                        px-6
                                        py-3
                                        text-[8px]
                                        font-medium
                                        tracking-[0.15em]
                                        text-white
                                        transition-all
                                        duration-500
                                        hover:bg-[#842e43]
                                        sm:text-[9px]
                                    "
                                >
                                    LET&apos;S CONNECT

                                    <motion.span
                                        initial={{
                                            x: 0,
                                        }}
                                        whileHover={{
                                            x: 5,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    >
                                        →
                                    </motion.span>
                                </motion.a>

                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </section>

            {/* ================================================================
                BOTTOM SPACING
            ================================================================ */}

            <div
                className="
                    relative
                    z-30
                    h-16
                    w-full
                    bg-white
                    md:h-24
                "
            />

        </main>
    );
};

export default Media;
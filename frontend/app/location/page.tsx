"use client";

import { useState, useEffect, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Building2, Navigation, Users, Clock, Award, Shield } from "lucide-react";
import dynamic from "next/dynamic";
import {
  useMap,
  type MapContainerProps,
  type TileLayerProps,
  type MarkerProps,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Dynamically import react-leaflet components to avoid SSR issues
const MapContainer = dynamic<MapContainerProps>(
  () =>
    import("react-leaflet").then(
      (mod) => mod.MapContainer as ComponentType<MapContainerProps>
    ),
  { ssr: false }
);
const TileLayer = dynamic<TileLayerProps>(
  () =>
    import("react-leaflet").then(
      (mod) => mod.TileLayer as ComponentType<TileLayerProps>
    ),
  { ssr: false }
);
const Marker = dynamic<MarkerProps>(
  () =>
    import("react-leaflet").then(
      (mod) => mod.Marker as ComponentType<MarkerProps>
    ),
  { ssr: false }
);

export const WaveTransition = ({ direction = "bottom" }) => {
  const isTop = direction === "top";

  return (
    <div className={`relative w-full overflow-hidden ${isTop ? "rotate-180 -mb-1" : "-mt-1"}`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[180px]"
        preserveAspectRatio="none"
      >
        <path d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z" fill="#37393b" fillOpacity="0.15" />
        <path d="M0,220C480,320 960,140 1440,220V320H0Z" fill="#93C5FD" fillOpacity="0.25" />
        <path d="M0,260C480,360 960,180 1440,260V320H0Z" fill="#b5c7df" fillOpacity="0.35" />
      </svg>
    </div>
  );
};

import { CONTACT_INFO, LOCATION_PAGE_LOCATIONS, LOCATION_PAGE_OFFICES } from "@/utils/constants";

/* ================= LOCATIONS DATA ================= */
const locations = LOCATION_PAGE_LOCATIONS;

/* Fly animation component */
type FlyToProps = {
  position: [number, number];
  zoom: number;
};

function FlyTo({ position, zoom }: FlyToProps) {
  const map = useMap();
  map.flyTo(position, zoom, { duration: 1.5 });
  return null;
}

/* Floating Objects Component - Optimized for mobile */
const FloatingObjects = () => {
  // Fixed values to prevent hydration mismatch
  const floatingElements = [
    { size: 120, duration: 12, delay: 0, left: 15, top: 20, xMove: 20, yMove: -50 },
    { size: 90, duration: 18, delay: 1, left: 45, top: 60, xMove: -15, yMove: 40 },
    { size: 65, duration: 14, delay: 0.5, left: 75, top: 35, xMove: 25, yMove: -30 },
    { size: 80, duration: 20, delay: 1.5, left: 30, top: 75, xMove: -20, yMove: 45 },
    { size: 55, duration: 16, delay: 0.8, left: 85, top: 85, xMove: 15, yMove: -25 },
    { size: 70, duration: 22, delay: 2, left: 10, top: 45, xMove: -10, yMove: 35 },
    { size: 45, duration: 13, delay: 1.2, left: 60, top: 15, xMove: 30, yMove: -20 },
    { size: 100, duration: 19, delay: 0.3, left: 50, top: 50, xMove: -25, yMove: 25 },
  ];

  const glowDots = [
    { size: 8, duration: 6, left: 20, top: 30, xMove: 30, yMove: -20 },
    { size: 5, duration: 8, left: 50, top: 70, xMove: -25, yMove: 25 },
    { size: 6, duration: 7, left: 80, top: 40, xMove: 20, yMove: -30 },
    { size: 4, duration: 9, left: 35, top: 85, xMove: -15, yMove: 35 },
    { size: 7, duration: 5, left: 65, top: 25, xMove: 40, yMove: -15 },
    { size: 5, duration: 8, left: 15, top: 55, xMove: -30, yMove: 20 },
    { size: 6, duration: 7, left: 90, top: 65, xMove: 25, yMove: -25 },
    { size: 4, duration: 6, left: 40, top: 10, xMove: -20, yMove: 40 },
    { size: 8, duration: 9, left: 70, top: 90, xMove: 35, yMove: -35 },
    { size: 5, duration: 7, left: 25, top: 45, xMove: -25, yMove: 30 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Larger animated floating circles */}
      {floatingElements.map((item, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.left}%`,
            top: `${item.top}%`,
            background: `radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.03) 70%)`,
            border: '1px solid rgba(96, 165, 250, 0.12)',
          }}
          animate={{
            y: [0, item.yMove, 0],
            x: [0, item.xMove, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        />
      ))}

      {/* Floating glow dots */}
      {glowDots.map((item, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.left}%`,
            top: `${item.top}%`,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            border: '1px solid rgba(96, 165, 250, 0.25)',
          }}
          animate={{
            y: [0, item.yMove, 0],
            x: [0, item.xMove, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
export default function Locations() {
  const [active, setActive] = useState(locations[0]);

  // Fix Leaflet marker icons in browser only
  useEffect(() => {
    const fixLeafletIcons = async () => {
      const L = await import("leaflet");

      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    };

    fixLeafletIcons();
  }, []);

  const offices = LOCATION_PAGE_OFFICES;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] w-full overflow-hidden flex items-center justify-center">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/location-hero-bg.png')",
          }}
        />

        {/* Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#020617]/45 to-[#020617]/50" />

        {/* Soft Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.3)_55%,rgba(2,6,23,0.45)_85%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl py-24"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white drop-shadow-lg">
            Our Locations
          </h1>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full z-30">
          <WaveTransition />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden bg-blue-100">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Objects */}
        <FloatingObjects />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent px-4">
              Our Global Presence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-900/70 max-w-3xl mx-auto leading-relaxed px-4">
              Strategic offices across key global markets, delivering exceptional consulting services worldwide
            </p>
          </motion.div>

          {/* STATS BAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-10 sm:mb-12 md:mb-16"
          >
            {[
              { icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "4", label: "Global Offices" },
              { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "50+", label: "Team Members" },
              { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "24/7", label: "Support" },
              { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />, value: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md border border-blue-300/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center shadow-lg shadow-blue-200/50"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-blue-200/60 mb-2 sm:mb-3 md:mb-4">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 text-blue-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-blue-700/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            {/* LOCATIONS LIST WITH IMAGES */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block w-full lg:w-1/2 space-y-5 sm:space-y-6"
            >
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-blue-900">
                  Explore Our Offices
                </h2>
                <p className="text-sm sm:text-base text-blue-700/80">
                  Select a location to view details and explore our presence in key markets worldwide
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {locations.map((loc) => (
                  <motion.button
                    key={loc.id}
                    onClick={() => setActive(loc)}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left rounded-xl sm:rounded-2xl border transition-all duration-300 group overflow-hidden backdrop-blur-sm
                      ${active.id === loc.id
                        ? "bg-blue-200/80 border-blue-500/70 shadow-lg shadow-blue-300/50"
                        : "bg-white/80 border-blue-400/50 shadow-md shadow-blue-200/40"
                      }
                    `}
                  >
                    <div className="flex flex-row">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent z-10" />
                        <img
                          src={loc.image}
                          alt={loc.name === "Florida" ? "Saint Petersburg" : loc.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
                          <span className="text-lg sm:text-xl drop-shadow-md">{loc.flag}</span>
                        </div>
                      </div>
                      <div className="flex-1 p-3 sm:p-4 md:p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className={`font-semibold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 ${active.id === loc.id ? "text-blue-900" : "text-blue-800"
                              }`}>
                              {loc.name === "Florida" ? `${loc.name}, ${loc.country}` : loc.name}
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-1 sm:mb-2">
                              <MapPin className={`w-3 h-3 sm:w-4 sm:h-4 ${active.id === loc.id ? "text-blue-700" : "text-blue-600"
                                }`} />
                              <span className={`text-xs sm:text-sm ${active.id === loc.id ? "text-blue-800" : "text-blue-700"
                                }`}>
                                {loc.city}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-blue-800/80 line-clamp-2 hidden sm:block">
                              {loc.description}
                            </p>
                          </div>
                          <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-2 ${active.id === loc.id
                            ? "border-blue-700 bg-blue-200 shadow-md shadow-blue-300"
                            : "border-blue-500 bg-blue-100/80"
                            }`}>
                            {active.id === loc.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-blue-700"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* MAP SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 sticky top-24"
            >
              <div className="relative bg-white/80 backdrop-blur-md border border-blue-400/60 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl shadow-blue-200/50">

                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-blue-200/70 border border-blue-400/50">
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-700" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900">
                      Interactive Map
                    </h3>

                    <p className="text-xs sm:text-sm text-blue-800/80">
                      Currently viewing: {active.city}
                    </p>
                  </div>
                </div>

                {/* MAP */}
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg sm:rounded-xl overflow-hidden border border-blue-300/60 shadow-lg">
                  <MapContainer
                    center={[active.lat, active.lng]}
                    zoom={active.zoom}
                    className="w-full h-full"
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; OpenStreetMap contributors'
                    />

                    <FlyTo
                      position={[active.lat, active.lng]}
                      zoom={active.zoom}
                    />

                    <Marker position={[active.lat, active.lng]} />
                  </MapContainer>
                </div>

                {/* MOBILE OFFICE ICONS */}
                <div className="flex lg:hidden gap-3 mt-5 overflow-x-auto pb-2 px-2">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setActive(loc)}
                      className={`flex flex-col items-center min-w-[75px] p-2 rounded-2xl border transition-all duration-300
                        ${active.id === loc.id
                          ? "bg-blue-700 border-blue-700 shadow-lg"
                          : "bg-white border-blue-200"
                        }`}
                    >
                      <img
                        src={loc.image}
                        alt={loc.city}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />

                      <span
                        className={`text-[11px] mt-1 font-medium whitespace-nowrap
                          ${active.id === loc.id
                            ? "text-white"
                            : "text-blue-800"
                          }`}
                      >
                        {loc.city}
                      </span>
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-blue-100/80 border border-blue-400/60 backdrop-blur-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">

                      <div className="flex-1">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">

                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl overflow-hidden border border-blue-400/50 flex-shrink-0">
                            <img
                              src={active.image}
                              alt={active.city}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold flex items-center gap-1 sm:gap-2 text-blue-900">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700" />
                              {active.city}
                            </h3>

                            <p className="text-xs sm:text-sm text-blue-800/80 mt-0.5">
                              {active.name === "Florida"
                                ? `${active.name}, ${active.country}`
                                : active.name}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-blue-800/80 break-words">
                          {active.address}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE CARDS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full -mt-1 z-10">
          <WaveTransition direction="top" />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Office Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#020617]/35 to-blue-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,rgba(2,6,23,0.25)_45%,rgba(2,6,23,0.45)_80%)]" />
        </div>

        <div className="relative z-10">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent px-4">
                Countries We Serve
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto px-4">
                State-of-the-art facilities designed for collaboration, innovation, and exceptional client service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
              {offices.map((office, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className={`bg-white/10 backdrop-blur-md border border-white/20
                    rounded-xl sm:rounded-2xl overflow-hidden
                    transition-all duration-500 group
                    hover:shadow-2xl hover:-translate-y-3
                    hover:border-blue-400/50
                    ${i === 0
                      ? "hover:bg-gradient-to-br hover:from-blue-500/25 hover:to-cyan-500/25"
                      : i === 1
                        ? "hover:bg-gradient-to-br hover:from-purple-500/25 hover:to-pink-500/25"
                        : i === 2
                          ? "hover:bg-gradient-to-br hover:from-emerald-500/25 hover:to-teal-500/25"
                          : "hover:bg-gradient-to-br hover:from-amber-500/25 hover:to-orange-500/25"
                    }`}
                >
                  <div className="h-36 sm:h-40 md:h-44 lg:h-48 relative overflow-hidden">
                    <img
                      src={office.image}
                      alt={office.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                      <div className="text-[10px] sm:text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/40 backdrop-blur-sm text-white">
                        {office.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 text-white transition-all duration-300 group-hover:text-cyan-200">
                      {office.title}
                    </h3>
                    <p className="text-blue-100/80 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                      {office.text}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {office.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full
                            bg-white/10 backdrop-blur-sm border border-white/20 text-white/90
                            transition-all duration-300
                            group-hover:bg-white/20 group-hover:border-white/40"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

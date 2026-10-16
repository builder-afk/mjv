import React from "react";

/**
 * HeroAsciiMountain
 * High-precision, minimalist ASCII topography of Mount Judi inspired by vintage
 * cartographic & technical telemetry blueprints (Certain Uncertainties / 333 Lab).
 *
 * Renders in the hero background with simple ASCII characters:
 *   space, dot, colon, hyphen, equals, plus, hash
 * Decorated with cartographic reticles, peak annotations, coordinates, and crosshairs.
 */

const MOUNTAIN_ASCII = "                                                               =.                                                                           \n                                                             :=+--  -                                                                       \n                                                        ..-=+-++--#=##.                                                                     \n                                                        .+===-..=  .=+-:-                                              .. ...               \n                                                      = -=+==+:=     -+::-                                                                  \n                              .:.                  +:====-+== .::   .:==...                                                                 \n                             ++=.=                =+ .-==-.==:       .-=+:- :-=:                  .                                         \n                           ==-:. -=+       .-  ..===:.:-:.:. ++=-=.     =:-=+..+=+=#=                                                       \n                      #-=+#++#-.= -=-  ..  :  .::::=. .   +-=+ -. ::.     :---==.:.+=-          -==-          ...              .            \n         ..:.        #++=-+++++-..=  :  .:.. .--+..    +=##+.= :       :  .. ---:::=:...   ..=.-.++=-       . . ..                          \n          .:..   ..-++-. .-.--:-:.=- -=.:-     : .. . --= =.  :- :.:.  .   ..==:-     :  .  +=:-++++#+=     . .                             \n       . . ..      =-...:.-....:.:. +:=:.===.     =:=:-+=+----...=-=:::=       :::.     :+=+-:-=-=+++:--       ..               :           \n           .   .  .:-==#+++.:     =++=.:- +==#+==-.=-.=:  =   :.:.-=+-==: .        .   =+++#+#.:--:=-=++.+--         .       .=++=          \n                .::+=+=++=.++-+::++++-=.:.:=====+            :  ===+#+--=.-:.  :--= .++++++==+++=. :-=-=-=-:-++=           .==+=.-+-        \n                --=+==+-=:+-==-.=-=---::-::+:=-=-==-.      :- :.:::===-. :-=+-  -:--===+=+++-+##++-#   ::  :=+===:-::=  -:+=++=+=.::.       \n      ..    ...-++--==:= :. ..:---.--=-.-:--.-.=: :+-=- .:  .. :-.  =+=-.:-  --     -==::--+==+-=#++==.   . .:.:+ :--+-.   :.-+=- ...+-.    \n      .  ..::-++=-:.   :.. . . :-+: -- :.-.-.  .. =++#=-.      .  =-.-=+.:-+--- ..-   . :-:=-=-==-+==-=.=+--=.        -=-+=    :-=-:-.:.    \n        .   .-=--:.      ...:-===-:  --- -..:-==.:.====+:-=.=.  :-=.:-=- .  ===++   .  :::-+:++=::.====- --:+=. +  . -==:=-.:-.   :.        \n        .    +==--. :   .  ::=+#=+=-. -.--=:=--+- .++=+++=-= -:::=:.:-:.::....==+-.     --#-++==:+:======+=-++===-==      .:.               \n       :=====-------:     ....++=-+=:=..  :---:::===+=++- +###   . -     .. .--=-==--. --==++=+=+=+#+:- . -=---++++-=--:                    \n      --::-::.:-: ..  :-:..  ..:-+=++--==: ..   :=-==+=+=.--:=.   .   :   .:.:-::-+-:=-=--+=+=-=#=--=+=-.  ::-.:-==+#==+=   .. :.           \n     :..    ..-.        .. ..=-=-+#+ .==+=: : :-:-:-=::+++-.=-+:      .         :++-=-==:=+=:==-...:=-+-=     .=+==-----+--+     .          \n             .      ...:-=+=-==-+.: -:+::-=+::..--:==-+=#==-=--. .        :      ..:==-+---:==-+=-.=+=.--=-.+  ...:.. :. :::--:             \n                    ::.-=-=:-#:.. :  .:.--::::.      -==: :--=- ===---:             .:-.:=.-:=+:.:--: .:=-=..+====-       . .:-- .          \n                 ... :::.-::==+-..--:--:               .   .-+=-==-== :-. :        . .    :==+=-= =--.:      ...-----+=+- .        ..       \n                    .-. :..:+=..:.. .                     ..:.:.. =:-:::: .:..:          . -+=+=.  -:...  ..   .:  =+-=- -.                 \n                           ::--:-.  :   .          ..     -:. .. .. .::..   .     .   . . ::-::.. . -:.      .:. -=-: -.:::-.  .            \n                            .=--   .: :-..                 .  .:     ....                  :-.  .::.           ..:.       .                 \n                                  .. .                                                      ....                     .                  .   \n                                                                                           .                                                ";

export function HeroAsciiMountain() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden flex flex-col justify-start items-center"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.15) 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.15) 90%, transparent 100%)",
      }}
    >
      {/* Background Cartographic Framing & Metadata (Inspired by Reference Blueprint) */}
      <div className="absolute inset-x-0 top-0 pt-6 px-6 sm:px-12 flex items-start justify-between font-mono text-[9px] sm:text-[10px] text-[var(--ink)]/40 pointer-events-none">
        {/* Top-Left Telemetry Header */}
        <div className="flex flex-col gap-1 tracking-widest">
          <div className="flex items-center gap-2 font-semibold text-[var(--ink)]/70">
            <span># 确定的 不确定性 // TOPOGRAPHY MODEL [VOL. 2]</span>
            <span className="px-1.5 py-0.5 border border-[var(--ink)]/30 text-[8px] uppercase">MJV³</span>
          </div>
          <div className="text-[var(--ink-muted)] text-[8px] tracking-wider">
            CERTAIN UNCERTAINTIES · LAT 37.3670°N · LONG 42.4830°E
          </div>
        </div>

        {/* Top-Right Blueprint Header */}
        <div className="flex flex-col items-end gap-1 tracking-widest text-right">
          <div className="flex items-center gap-2">
            <span>[SURVEY.TEAM] / • 333 LAB • / = &#123;</span>
            <span className="inline-block h-2.5 w-2.5 border border-[var(--ink)]/40" />
          </div>
          <div className="text-[var(--ink-muted)] text-[8px] flex items-center gap-2">
            <span>PROGRAM NO. ∞</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
          </div>
        </div>
      </div>

      {/* Crosshairs & Technical Markers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Margin Crosshairs */}
        <div className="absolute top-[28%] left-4 sm:left-8 font-mono text-base font-light text-[var(--ink)]/35 select-none">+</div>
        <div className="absolute top-[58%] left-6 sm:left-10 font-mono text-xs font-light text-[var(--ink)]/25 select-none">+</div>

        {/* Right Margin Crosshairs */}
        <div className="absolute top-[32%] right-6 sm:right-10 font-mono text-base font-light text-[var(--ink)]/35 select-none">+</div>
        <div className="absolute top-[68%] right-8 sm:right-12 font-mono text-xs font-light text-[var(--ink)]/25 select-none">+</div>

        {/* Center Field Markers */}
        <div className="absolute top-[18%] left-[34%] font-mono text-[10px] text-[var(--ink)]/25 select-none">+</div>
        <div className="absolute top-[22%] right-[32%] font-mono text-[10px] text-[var(--ink)]/25 select-none">+</div>

        {/* Right Margin Vertical Text (A Study in Uncertainty) */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--ink)]/30 select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          A Study in Uncertainty — The Mountain Remains³
        </div>
      </div>

      {/* Main ASCII Mountain Presentation */}
      <div className="relative w-full max-w-[1520px] mx-auto pt-16 sm:pt-20 md:pt-24 flex flex-col items-center justify-center px-2">
        <div className="relative inline-block w-full text-center">
          {/* Preformatted ASCII Characters */}
          <pre
            className="font-mono text-[6.5px] xs:text-[7.5px] sm:text-[9.5px] md:text-[11.5px] lg:text-[13px] xl:text-[14.5px] leading-[0.80] tracking-[-0.04em] text-[var(--ink)]/35 whitespace-pre inline-block select-none transform-gpu transition-all"
            style={{
              fontFamily: `"JetBrains Mono", "SF Mono", "Consolas", monospace`,
            }}
          >
            {MOUNTAIN_ASCII}
          </pre>

          {/* Precision Peak Callout Reticles (Overlaying the Mountain Silhouette) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* PEAK 1: Left Summit (MT.01) */}
            <div className="absolute left-[18%] sm:left-[21%] top-[34%] sm:top-[36%] hidden sm:block -translate-x-1/2">
              <div className="flex flex-col items-start bg-[var(--paper)]/85 border border-[var(--ink)]/35 px-2 py-1 shadow-xs">
                <span className="font-mono text-[9px] font-bold text-[var(--ink)] flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 bg-[#8b1836]" />
                  MT.01
                </span>
                <span className="font-mono text-[8px] text-[var(--ink-muted)] leading-tight">
                  37.3620°N 42.4463°E
                </span>
                <span className="font-mono text-[8px] text-[var(--ink-muted)] font-medium">
                  ALT. 4,812 m
                </span>
              </div>
              <div className="w-px h-6 bg-[var(--ink)]/30 mx-auto" />
              <div className="h-2 w-2 border border-[var(--ink)]/50 mx-auto" />
            </div>

            {/* PEAK 2: Central Summit (RIDGE.04 / MOUNT JUDI) */}
            <div className="absolute left-[48%] sm:left-[49.5%] top-[10%] sm:top-[12%] -translate-x-1/2 hidden sm:block">
              <div className="flex flex-col items-center bg-[var(--paper)]/90 border border-[var(--ink)]/45 px-3 py-1.5 shadow-sm">
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[var(--ink)] tracking-wider">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--gold)]" />
                  RIDGE.04
                </div>
                <div className="font-mono text-[8px] text-[var(--ink-muted)]">
                  37.3670°N 42.4830°E
                </div>
                <div className="font-mono text-[8.5px] font-semibold text-[var(--ink)]">
                  ALT. 5,206 m // MOUNT JUDI
                </div>
              </div>
              <div className="w-px h-8 bg-[var(--ink)]/35 mx-auto" />
              <div className="h-2.5 w-2.5 border border-[var(--ink)]/60 mx-auto rotate-45" />
            </div>

            {/* PEAK 3: Right Summit (PV.12) */}
            <div className="absolute left-[70%] sm:left-[72%] top-[34%] sm:top-[38%] hidden sm:block -translate-x-1/2">
              <div className="flex flex-col items-start bg-[var(--paper)]/85 border border-[var(--ink)]/35 px-2 py-1 shadow-xs">
                <span className="font-mono text-[9px] font-bold text-[var(--ink)] flex items-center gap-1">
                  <span className="inline-block h-1 w-1 bg-[var(--ink)]" />
                  PV.12
                </span>
                <span className="font-mono text-[8px] text-[var(--ink-muted)] leading-tight">
                  37.3650°N 42.4610°E
                </span>
                <span className="font-mono text-[8px] text-[var(--ink-muted)] font-medium">
                  ALT. 4,376 m
                </span>
              </div>
              <div className="w-px h-5 bg-[var(--ink)]/30 mx-auto" />
              <div className="h-2 w-2 border border-[var(--ink)]/50 mx-auto" />
            </div>

            {/* PEAK 4: Right Satellite (CLD.07) */}
            <div className="absolute left-[87%] sm:left-[89%] top-[48%] sm:top-[52%] hidden md:block -translate-x-1/2">
              <div className="flex flex-col items-start bg-[var(--paper)]/80 border border-[var(--ink)]/30 px-1.5 py-0.5">
                <span className="font-mono text-[8px] font-bold text-[var(--ink)]">
                  CLD.07
                </span>
                <span className="font-mono text-[7.5px] text-[var(--ink-muted)]">
                  ALT. 3,912 m
                </span>
              </div>
              <div className="w-px h-3 bg-[var(--ink)]/25 mx-auto" />
              <div className="h-1.5 w-1.5 border border-[var(--ink)]/40 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

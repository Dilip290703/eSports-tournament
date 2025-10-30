import React, { useEffect } from "react";
import "./coc_rules_style.css";
import "boxicons/css/boxicons.min.css";

const CocRules = () => {
  // Parallax Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const topDistance = window.pageYOffset;
      const layers = document.querySelectorAll("[data-type='parallax']");
      layers.forEach((layer) => {
        const depth = layer.getAttribute("data-depth");
        const movement = -(topDistance * depth);
        const translate3d = `translate3d(0, ${movement}px, 0)`;
        layer.style.transform = translate3d;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="coc-rules-page animated fadeIn">
      {/* Header */}
      <header className="coc-rules-header">
        <nav className="coc-rules-navbar">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Parallax Layers */}
      <div id="coc-rules-hero">
        <div className="coc-rules-layer coc-rules-layer-bg" data-depth="0.10" data-type="parallax"></div>
        <div className="coc-rules-layer coc-rules-layer-1" data-depth="0.20" data-type="parallax"></div>
        <div className="coc-rules-layer coc-rules-layer-2" data-depth="0.50" data-type="parallax"></div>
        <div className="coc-rules-layer coc-rules-layer-3" data-depth="0.80" data-type="parallax"></div>
        <div className="coc-rules-layer coc-rules-layer-overlay" data-depth="0.85" data-type="parallax"></div>
        <div className="coc-rules-layer coc-rules-layer-4" data-depth="1.00" data-type="parallax"></div>
      </div>

      <div id="coc-rules-hero-mobile"></div>

      {/* Main Content */}
      <div id="coc-rules-content">
        <div className="coc-rules-container">
          <section className="coc-rules-section">
            <div className="coc-rules-row">
              <div className="coc-rules-col">
                <h1>[ Rules and Regulations ]</h1>
              </div>
            </div>

            <div className="coc-rules-row">
              <div className="coc-rules-col">
                <p>
                  1) <strong>All tournaments must be free to enter—no exceptions.</strong><br />
                  This includes membership or season passes. You may charge spectators to enter a live venue but not to compete. Refund any spectator fee to participants.
                </p>

                <p>
                  2) <strong>You must provide all prizes for your event.</strong><br />
                  Players cannot fund prizes. Total prize value cannot exceed 50,000 EUR. Contact Supercell if you wish to go higher.
                </p>

                <p>
                  3) <strong>Supercell controls its games, but hosts control their events.</strong><br />
                  Do not call your event “official” or imply Supercell’s involvement or endorsement.
                </p>

                <p>
                  4) <strong>Ensure your event complies with all local laws and regulations.</strong><br />
                  Follow your country’s legal and gaming policies strictly.
                </p>

                <p>
                  5) <strong>Your event cannot involve gambling, raffles, or fantasy sports betting.</strong><br />
                  Events must promote fair play and honest competition.
                </p>

                <p>
                  6) <strong>Hosts and players must meet local age and legal requirements.</strong><br />
                  Minimum participant age is 13. Minors need parental consent for cash-prize tournaments.
                </p>

                <p>
                  7) <strong>Tournaments must be fair and skill-based.</strong><br />
                  Match-fixing, cheating, or unfair practices are strictly forbidden.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CocRules;

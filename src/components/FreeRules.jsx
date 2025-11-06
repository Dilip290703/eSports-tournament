import React, { useEffect } from "react";
import "./free_rules_style.css";
import "boxicons/css/boxicons.min.css";

const FreeRules = () => {
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
    <div className="free-rules-page animated fadeIn">
      {/* Header */}
      <header className="free-rules-header">
        <nav className="free-rules-navbar">
          <a href="/">Home</a>
          <a href="#">News & Updates</a>
          <a href="#">Live eSports</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Parallax Layers */}
      <div id="free-rules-hero">
        <div className="free-rules-layer free-rules-layer-bg" data-depth="0.10" data-type="parallax"></div>
        <div className="free-rules-layer free-rules-layer-1" data-depth="0.20" data-type="parallax"></div>
        <div className="free-rules-layer free-rules-layer-2" data-depth="0.50" data-type="parallax"></div>
        <div className="free-rules-layer free-rules-layer-3" data-depth="0.80" data-type="parallax"></div>
        <div className="free-rules-layer free-rules-layer-overlay" data-depth="0.85" data-type="parallax"></div>
        <div className="free-rules-layer free-rules-layer-4" data-depth="1.00" data-type="parallax"></div>
      </div>

      <div id="free-rules-hero-mobile"></div>

      {/* Main Content */}
      <div id="free-rules-content">
        <div className="free-rules-container">
          <section className="free-rules-section">
            <div className="free-rules-row">
              <div className="free-rules-col">
                <h1>[ Free Fire Rules and Regulations ]</h1>
              </div>
            </div>

            <div className="free-rules-row">
              <div className="free-rules-col">
                <p>
                  1) <strong>Do Not Use Unauthorized Programs or Devices</strong><br />
                  Using third-party tools or cheats in Free Fire is strictly prohibited and may result in a permanent ban.
                </p>

                <p>
                  2) <strong>Do Not Modify the Game Client, Servers or Data</strong><br />
                  Modifying or tampering with game files or data packets violates the game’s fair play policy.
                </p>

                <p>
                  3) <strong>Do Not Exploit Bugs or Glitches</strong><br />
                  Abusing bugs or glitches to gain unfair advantage can lead to penalties or item removal.
                </p>

                <p>
                  4) <strong>Do Not Harass or Discriminate Against Others</strong><br />
                  Using offensive language, hate speech, or harassment of any kind is not tolerated.
                </p>

                <p>
                  5) <strong>Do Not Use Inappropriate Nicknames</strong><br />
                  Offensive or misleading nicknames are subject to renaming or bans.
                </p>

                <p>
                  6) <strong>Do Not Team Kill</strong><br />
                  Intentionally harming or sabotaging teammates is a serious offense.
                </p>

                <p>
                  7) <strong>Do Not Team Up Outside of Allowed Modes</strong><br />
                  Forming alliances outside the game’s intended mode limits is not allowed.
                </p>

                <p>
                  8) <strong>Do Not Stalk Other Players</strong><br />
                  Following or repeatedly targeting players across matches is a punishable action.
                </p>

                <p>
                  9) <strong>Do Not Share Personal Information</strong><br />
                  Disclosing private data of others is a severe violation and may lead to permanent bans.
                </p>

                <p>
                  10) <strong>Do Not Manipulate Match Results</strong><br />
                  Boosting, win trading, or using multiple accounts for advantage will be penalized.
                </p>

                <p>
                  11) <strong>Do Not Hack or Steal Accounts</strong><br />
                  Accessing or attempting to access another user’s account is a major violation.
                </p>

                <p>
                  12) <strong>Do Not Stay AFK (Away From Keyboard)</strong><br />
                  Being inactive during matches repeatedly may result in penalties or item removal.
                </p>

                <p>
                  13) <strong>Do Not Trade or Sell Accounts</strong><br />
                  Buying, selling, or sharing accounts violates Free Fire’s terms of service.
                </p>

                <p>
                  14) <strong>Do Not Spread False Information</strong><br />
                  Impersonating developers or spreading fake news is subject to penalties.
                </p>

                <p>
                  15) <strong>Do Not Play Abnormally</strong><br />
                  Using external scripts or performing impossible in-game actions is forbidden.
                </p>

                <p>
                  16) <strong>Undefined Misconduct</strong><br />
                  Any unfair behavior not mentioned above may still result in disciplinary action.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FreeRules;

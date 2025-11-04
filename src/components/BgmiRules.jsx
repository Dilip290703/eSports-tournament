import React, { useEffect } from "react";
import "./bgmi_rules_style.css";
import "boxicons/css/boxicons.min.css";

const BgmiRules = () => {
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
    <div className="bgmi-rules-page animated fadeIn">
      {/* Header */}
      <header className="bgmi-rules-header">
        <nav className="bgmi-rules-navbar">
          <a href="/">Home</a>
          <a href="#">News & Updates</a>
          <a href="#">Live eSports</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Parallax Layers */}
      <div id="bgmi-rules-hero">
        <div className="bgmi-rules-layer bgmi-rules-layer-bg" data-depth="0.10" data-type="parallax"></div>
        <div className="bgmi-rules-layer bgmi-rules-layer-1" data-depth="0.20" data-type="parallax"></div>
        <div className="bgmi-rules-layer bgmi-rules-layer-2" data-depth="0.50" data-type="parallax"></div>
        <div className="bgmi-rules-layer bgmi-rules-layer-3" data-depth="0.80" data-type="parallax"></div>
        <div className="bgmi-rules-layer bgmi-rules-layer-overlay" data-depth="0.85" data-type="parallax"></div>
        <div className="bgmi-rules-layer bgmi-rules-layer-4" data-depth="1.00" data-type="parallax"></div>
      </div>

      <div id="bgmi-rules-hero-mobile"></div>

      {/* Main Content */}
      <div id="bgmi-rules-content">
        <div className="bgmi-rules-container">
          <section className="bgmi-rules-section">
            <div className="bgmi-rules-row">
              <div className="bgmi-rules-col">
                <h1>[ Rules and Regulations ]</h1>
              </div>
            </div>

            <div className="bgmi-rules-row">
              <div className="bgmi-rules-col">
                <p>
                  1) <strong>Do Not Use Unauthorized Programs or Hardware Devices</strong><br />
                  If you use unauthorized programs or hardware devices that are not permitted by KRAFTON that promote unfair gameplay using specific mouse or other hardware device (“Unauthorized Programs or Devices”), you may be subject to strong penalties such as permanent bans. Developing, advertising, or distributing such software/hardware can result in legal action.
                </p>

                <p>
                  2) <strong>Do Not Modify the Game Client, Servers or Game Data</strong><br />
                  Unauthorized changes to the Game client, servers, or data packets interfere with services and violate copyright laws. Do not engage in these activities.
                </p>

                <p>
                  3) <strong>Do Not Exploit Vulnerabilities in the Game (Bugs and Glitches)</strong><br />
                  Users exploiting bugs for unfair advantages will face penalties. Unfairly obtained items or currency will be removed.
                </p>

                <p>
                  4) <strong>Do Not Discriminate Against Others</strong><br />
                  Offensive language or harassment based on race, gender, or nationality is prohibited. Disrespecting customer service staff can also result in bans.
                </p>

                <p>
                  5) <strong>Do Not Use Inappropriate Nicknames</strong><br />
                  Nicknames that are offensive or provoke negative imagery may lead to penalties.
                </p>

                <p>
                  6) <strong>Do Not Team Kill</strong><br />
                  Intentional team killing disrupts gameplay and can lead to bans.
                </p>

                <p>
                  7) <strong>Do Not Team Up Beyond Allowed Limits</strong><br />
                  Teaming beyond the intended game mode limits is prohibited and will be penalized.
                </p>

                <p>
                  8) <strong>Do Not Stalk Other Players</strong><br />
                  Following specific players across matches to harass or interfere with gameplay is not allowed.
                </p>

                <p>
                  9) <strong>Do Not Publish Personal Information</strong><br />
                  Sharing personal or private data of others is considered a severe violation.
                </p>

                <p>
                  10) <strong>Do Not Manipulate Match Results</strong><br />
                  Manipulating outcomes or trading wins for money or rewards can result in bans and item loss.
                </p>

                <p>
                  11) <strong>Do Not Steal Another User’s Account</strong><br />
                  Unauthorized account access attempts result in permanent bans.
                </p>

                <p>
                  12) <strong>Do Not AFK (Away From Keyboard)</strong><br />
                  Being AFK frequently disrupts team play. Repeated offenses lead to penalties or item removal.
                </p>

                <p>
                  13) <strong>Do Not Trade or Sell Accounts</strong><br />
                  Selling or transferring accounts without company approval is forbidden.
                </p>

                <p>
                  14) <strong>Do Not Disturb Business Operations</strong><br />
                  Spreading misinformation or impersonating staff can result in bans.
                </p>

                <p>
                  15) <strong>Do Not Play the Game Abnormally</strong><br />
                  Performing impossible in-game actions will trigger anti-cheat enforcement.
                </p>

                <p>
                  16) <strong>Other Undefined Misconduct</strong><br />
                  Any action harming fair play or KRAFTON’s service integrity may result in disciplinary action after review.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BgmiRules;

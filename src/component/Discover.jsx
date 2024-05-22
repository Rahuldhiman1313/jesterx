import React, { useState } from "react";
import xsw from "../images/ccww.png";
import cfeee from "../images/cfeee.png";
import barx from "../images/helo.png";
import barxqw from "../images/jeater.png";

export default function Discover() {
  // State to manage the open/close state of accordion sections
  const [openSection, setOpenSection] = useState("acc0"); // Initialize with the ID of the first section

  // Function to toggle the open/close state of a section
  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };
  return (
    <div>
      <section className="innovation" id="Jesterx">
        <div className="container-fluid swqz">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="Welcome Igniting Magicss cdx wzxx">
                <span>Jester X Ecosystem</span>
                <h2>
                  Discover the Magic of <br />
                  Jester X Protocol
                </h2>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="committed">
                <p>
                  At Jester X Coin, we are committed to disrupting the ordinary
                  and leveraging chaos as a catalyst for positive change. Our
                  innovative coin mechanism empowers our community and drives
                  significant innovation
                </p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration="2000">
            <div className="col-12">
              <div className="ooox">
                <article className="accordion">
                  <section
                    id="acc0"
                    onClick={() => toggleSection("acc0")}
                    className={openSection === "acc0" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc0">Token Reward Distribution Mechanism</a>
                    </h2>
                    <h3 className="Mechanismxxx">
                      1.Token Reward Distribution Mechanism
                    </h3>
                    <div className="conxx">
                      <div className="lcs">
                        <ul>
                          <li>Total Coin Supply: 21 million coins</li>
                          <li>
                            Transparent Minting Process: All coins are created
                            through a fair minting process, ensuring
                            transparency
                          </li>
                          <li>Transaction Fee Allocation</li>
                        </ul>
                        <img src={xsw} className="img-fluid" alt="" />
                      </div>
                      <div className="row">
                        <div className="col-8 col-sm-6 col-md-8 col-lg-8">
                          <div className="bcxxx">
                            <div className="ccmc">
                              <div className="xvb"></div>
                            </div>
                            <div className="ccmc">
                              <p>Reward Nodes and Super Nodes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 col-sm-6 col-md-4 col-lg-4">
                          <div className="bcxxx xvdes">
                            <div className="ccmc">
                              <div className="xvb xxs"></div>
                            </div>
                            <div className="ccmc">
                              <p>DevOps Team</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row wsxss">
                        <div className="col-8 col-sm-6 col-md-8 col-lg-8">
                          <div className="bcxxx">
                            <div className="ccmc">
                              <div className="xvb wxx"></div>
                            </div>
                            <div className="ccmc">
                              <p>Bonus for Coin Holders</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 col-sm-6 col-md-4 col-lg-4">
                          <div className="bcxxx xvdes">
                            <div className="ccmc">
                              <div className="xvb xxs xwssxx"></div>
                            </div>
                            <div className="ccmc">
                              <p>Other Uses</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="acc1"
                    onClick={() => toggleSection("acc1")}
                    className={openSection === "acc1" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc1">Token Allocation Strategy</a>
                    </h2>
                    <h3 className="Mechanismxxx">
                      2.Token Allocation Strategy
                    </h3>
                    <div className="conxx">
                      <div className="lcs">
                        <ul>
                          <li>
                            Ethical Token Generation: Send ETH to the Jester X
                            contract address and receive tokens worth 103% of
                            your transfer value—the extra 3% magically pulled
                            from the blockchain ether!
                          </li>
                          <li>Liquidity and Reward Allocation</li>
                        </ul>
                        <img src={cfeee} className="img-fluid" alt="" />
                      </div>
                      <div className="row">
                        <div className="col-8 col-sm-6 col-md-8 col-lg-8">
                          <div className="bcxxx">
                            <div className="ccmc">
                              <div className="xvb"></div>
                            </div>
                            <div className="ccmc">
                              <p>Liquidity Pool </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 col-sm-6 col-md-4 col-lg-4">
                          <div className="bcxxx xvdes">
                            <div className="ccmc">
                              <div className="xvb xxs xwssxx"></div>
                            </div>
                            <div className="ccmc">
                              <p>Super Nodes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row wsxss">
                        <div className="col-8 col-sm-6 col-md-8 col-lg-8">
                          <div className="bcxxx">
                            <div className="ccmc">
                              <div className="xvb wxx"></div>
                            </div>
                            <div className="ccmc">
                              <p>DevOps Team </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    id="acc2"
                    onClick={() => toggleSection("acc2")}
                    className={openSection === "acc2" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc2">Sustainable Burning Policy</a>
                    </h2>
                    <h3 className="Mechanismxxx">
                      3.Sustainable Burning Policy
                    </h3>
                    <div className="conxx">
                      <div className="lcs">
                        <ul className="burn">
                          <li>
                            Transaction fees are set at 5%. Selling actions
                            trigger an automatic token burn at 203% of the
                            transaction value, which enhances token value and
                            market stability.
                          </li>
                          <li>
                            In Jester X's world, this dynamic approach ensures
                            that chaos leads to growth and dividends
                          </li>
                        </ul>
                        <a href="/" className="JOIN cxpx">
                          JOIN US NOW
                        </a>
                      </div>
                    </div>
                  </section>
                  <section
                    id="acc3"
                    onClick={() => toggleSection("acc3")}
                    className={openSection === "acc3" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc3">Holder Reward System</a>
                    </h2>
                    <h3 className="Mechanismxxx">4.Holder Reward System</h3>
                    <div className="conxx">
                      <div className="lcs">
                        <ul className="burn">
                          <li>
                            Holder Incentives: Owners of 3000+ coins enjoy a
                            continuous bonus of 1.5% from transaction fees.
                          </li>
                          <li>
                            Controlled Minting Limits: Minting is tactfully
                            capped between 0.05 and 1 ETH to maintain market
                            stability and fun.
                          </li>
                          <li>
                            Our Chaos Nexus system ensures a balanced and fair
                            environment for all participants.
                          </li>
                        </ul>
                        <a href="/" className="JOIN cxpx">
                          JOIN US NOW
                        </a>
                      </div>
                    </div>
                  </section>
                  <section
                    id="acc4"
                    onClick={() => toggleSection("acc4")}
                    className={openSection === "acc4" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc4">Node Hierarchical Benefits</a>
                    </h2>
                    <h3 className="Mechanismxxx">
                      5.Node Hierarchical Benefits
                    </h3>
                    <div className="conxx">
                      <div className="lcs gfdc">
                        <p>
                          Node Prioritization: 500 USDT > NFT (Gift) >
                          Evaluation > 20 Whitelists.
                        </p>
                        <p>Access and Quotas</p>
                        <ul className="Initial">
                          <li>Initial Access Token: 80 USDT</li>
                          <li>Minting Limit: 0.05 ETH.</li>
                        </ul>
                        <p>Node Benefits:</p>
                        <ul className="Initial">
                          <li>
                            Buy/Sell Slippage: Consistent 2% rate for smooth
                            transactions.
                          </li>
                          <li>
                            Discounted Access Token: 40% discount on entry
                            token.
                          </li>
                          <li>
                            Minting Quota: 0.15 ETH quota for whitelist
                            participants.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section
                    id="acc5"
                    onClick={() => toggleSection("acc5")}
                    className={openSection === "acc5" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc5">Super Node Privileges</a>
                    </h2>
                    <h3 className="Mechanismxxx">6.Super Node Privileges</h3>
                    <div className="conxx">
                      <div className="lcs">
                        <p className="Become">
                          Become a Super Node by inviting{" "}
                          <span className="FIVE">FIVE</span> nodes and unlock
                          exclusive benefits:
                        </p>

                        <ul>
                          <li>
                            Stable Transactions: Enjoy a consistent 2% slippage
                            rate.
                          </li>
                          <li>
                            Increased Token Value: Get a 60% increase in entry
                            token value.
                          </li>
                          <li>
                            Exclusive Access: Special privileges with a 150 USDT
                            Node Ticket.
                          </li>
                          <li>Bonus Minting: Earn a 2.5% minting bonus.</li>
                          <li>Higher Minting Limit: Mint up to 0.25 ETH.</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section
                    id="acc6"
                    onClick={() => toggleSection("acc6")}
                    className={openSection === "acc6" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc6">Join the Realm of Jester X Chaos</a>
                    </h2>
                    <h3 className="Mechanismxxx">
                      7.Join the Realm of Jester X Chaos
                    </h3>
                    <div className="conxx">
                      <div className="lcs">
                        <ul>
                          <li>Scan the Jester X wallet address.</li>
                          <li>
                            Transfer 80 USDT to activate your Jester X rebellion
                            ticket!
                          </li>
                          <li>
                            Send your blockchain transfer transaction to our
                            email address: support@jesterx.io.
                          </li>
                          <li>
                            Jester will check the email after finishing the
                            mission in orbit. Evil Smile…
                          </li>
                          <li>
                            Join our Telegram and Twitter to be ready for the
                            skyrocketing Chaos!
                          </li>
                        </ul>
                        <img src={barx} className="img-fluid readys" alt="" />
                      </div>
                    </div>
                  </section>
                  <section
                    id="acc7"
                    onClick={() => toggleSection("acc7")}
                    className={openSection === "acc7" ? "open" : ""}
                  >
                    <h2>
                      <a href="#acc7">Jester X NFTs</a>
                    </h2>
                    <h3 className="Mechanismxxx">7.Jester X NFTs</h3>
                    <div className="conxx">
                      <div className="lcs gfdc">
                        <p>
                          Welcome to the whimsical world of Jester NFTs! Each
                          token is a gateway to a story of mischief and
                          creativity. Collect, trade, and treasure these unique
                          digital artworks that embody the spirit of Jester X.
                          Dive into a universe where chaos sparks creativity and
                          every token tells a tale.
                        </p>
                        <p>
                          Join us in the Jester X NFT universe, where chaos
                          meets creativity in every artwork!
                        </p>
                        <img
                          src={barxqw}
                          className="img-fluid readys2"
                          alt=""
                        />
                      </div>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

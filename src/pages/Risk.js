import React from 'react';
import Navbar from '../components/Navbar';

export default function Risk() {
  return (
    <div>
      <Navbar />
      <h1>Risk Management</h1>
      <div className="row">
        <div className="col-4">
          <div id="list-example" className="list-group">
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Risk Management
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Item 2
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Item 3
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Item 4
            </a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabindex="0"
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>
              For every rupee of profit made by a trader, there must be a trader
              losing that rupee. As an extension of this, if a group of traders
              consistently make money, then there must be another group of
              traders consistently losing money. Usually, this group making
              money consistently is small instead of the group of traders who
              consistently lose money. The difference between these two groups
              is their understanding of Risk and their techniques of money
              management. In his book ‘The Disciplined Trader’, Mark Douglas
              says successful trading is 80% money management and 20% strategy.
              I could not agree more. Money management and associated topics
              largely involve the assessment of risk. So in this sense,
              understanding risk and its many forms become essential at this
              point. For this reason, let us break down the risk to its
              elementary form to get a better understanding of risk. The usual
              layman definition of risk in the stock market context is the
              ‘probability of losing money. When you transact in the markets,
              you are exposed to risk, which means you can (possibly) lose
              money. For example, when you buy a company’s stock, whether you
              like it or not, you are exposed to risk. Further, at a very high
              level, risk can be broken down into two types – Systemic Risk and
              Unsystemic Risk. You are automatically exposed to both these
              categories of risks when you own a stock.
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>...</p>
            <h4 id="list-item-3">Item 3</h4>
            <p>...</p>
            <h4 id="list-item-4">Item 4</h4>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';

export default function Mid() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Mid term</h1>
      <div class="row">
        <div class="col-4">
          <div id="list-example" class="list-group">
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Determine your investment time horizon
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Assess market conditions
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Define the mid-term based on your strategy
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Consider fundamental and technical analysis
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-5"
            >
              Monitor your investments
            </a>
          </div>
        </div>
        <div class="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <h4 id="list-item-1">Determine your investment time horizon</h4>
            <p>
              Before discussing the mid-term, it's essential to identify your
              investment time horizon. Are you a long-term investor planning to
              hold stocks for years, or are you a short-term trader looking to
              capitalize on shorter price movements? This will provide a
              reference point for understanding what mid-term means to you.
            </p>
            <h4 id="list-item-2">Assess market conditions</h4>
            <p>
              Evaluate the current market conditions, including economic
              indicators, trends, and sentiment. Determine if the market is
              experiencing short-term fluctuations or if there are broader,
              longer-lasting trends at play. This analysis will help you gain
              insights into the potential duration of the mid-term.
            </p>
            <h4 id="list-item-3">Define the mid-term based on your strategy</h4>
            <p>
              Once you have an understanding of the market conditions, align
              your investment strategy with your time horizon. Consider factors
              such as risk tolerance, financial goals, and the level of
              involvement you want in managing your investments. This will help
              you determine how long you plan to hold stocks and what mid-term
              means to you in this context.
            </p>
            <h4 id="list-item-4">
              Consider fundamental and technical analysis
            </h4>
            <p>
              Use fundamental analysis to evaluate the underlying factors that
              impact the performance of individual stocks or the broader market.
              This analysis may involve assessing financial statements, industry
              trends, competitive landscape, and company management.
              Additionally, utilize technical analysis to study price patterns,
              indicators, and historical data to identify potential entry and
              exit points.
            </p>
            <h4 id="list-item-5">Monitor your investments</h4>
            <p>
              Once you have made your investment decisions, regularly monitor
              your portfolio's performance. Keep an eye on news, market trends,
              and any developments that may impact your investments. Adjust your
              strategy if needed based on changing market conditions or if your
              mid-term outlook changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

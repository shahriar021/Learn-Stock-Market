import React from 'react';
import Navbar from '../components/Navbar';

export default function Short() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Short Term Trading</h1>
      <div class="row">
        <div class="col-4">
          <div id="list-example" class="list-group">
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Watch the Moving Averages
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Understand Overall Cycles or Patterns
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Technical Analysis
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Buy and Sell Indicators
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
            <h4 id="list-item-1">Watch the Moving Averages</h4>
            <p>
              A moving average is the average price of a stock over a specific
              period of time. The most common time frames are 15, 20, 30, 50,
              100, and 200 days. The overall idea is to show whether a stock is
              trending upward or downward. Generally, a good candidate will have
              a moving average that is sloping upward. If you are looking for a
              good stock to short, you generally want to find one with a moving
              average that is flattening out or declining.
            </p>
            <h4 id="list-item-2">Understand Overall Cycles or Patterns</h4>
            <p>
              Generally, the markets trade-in cycles, which makes it important
              to watch the calendar at particular times. From 1950 to 2021, most
              of the gains in the S&P 500 have come in the November to April
              time frame, while during the May to October period, the averages
              have been relatively static. 1 As a trader, cycles can be used to
              your advantage to determine good times to enter into long or short
              positions.
            </p>
            <h4 id="list-item-3">Technical Analysis</h4>
            <p>
              There is an old saying on Wall Street: "Never fight the tape."
              Whether most admit it or not, the markets are always looking
              forward and pricing in what is happening. This means that
              everything we know about earnings, company management, and other
              factors is already priced into the stock. Staying ahead of
              everyone else requires that you use technical analysis. Technical
              analysis is a process of evaluating and studying stocks or markets
              using previous prices and patterns to predict what will happen in
              the future. In short-term trading, this is an important tool to
              help you understand how to make profits while others are unsure.
              Below, we will uncover some of the various tools and techniques of
              technical analysis.
            </p>
            <h4 id="list-item-4">Buy and Sell Indicators</h4>
            <p>
              Several indicators are used to determine the right time to buy and
              sell. Two of the more popular ones include the relative strength
              index (RSI) and the stochastic oscillator. The RSI compares the
              relative strength or weakness of a stock compared to other stocks
              in the market. Generally, a reading of 70 indicates a topping
              pattern, while a reading below 30 shows that the stock has been
              oversold. However, it is important to keep in mind that prices can
              remain at overbought or oversold levels for a considerable period
              of time. The stochastic oscillator is used to decide whether a
              stock is expensive or cheap based on the stock's closing price
              range over a period of time. A reading of 80 signals the stock is
              overbought (expensive), while a reading of 20 signals the stock is
              oversold (inexpensive). RSI and stochastics can be used as
              stock-picking tools, but you must use them in conjunction with
              other tools to spot the best opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

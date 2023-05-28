import React from 'react';
import Navbar from '../components/Navbar';

export default function Intra() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Intraday Trading</h1>
      <br></br>
      <div class="row">
        <div class="col-4">
          <div id="list-example" class="list-group">
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              What is Intraday Trading?
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Timeframe
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Short-term focus
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Technical analysis
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-5"
            >
              Volatility and liquidity
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-6"
            >
              Risk management
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-7"
            >
              Active monitoring
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-8"
            >
              Margin trading
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-9"
            >
              Intraday Trading Tips
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-10"
            >
              Intraday Trading indicators
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-11"
            >
              How to make profit in intraday trading
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
            <h4 id="list-item-1">what is Intraday trading?</h4>
            <p>
              Intraday trading, also known as day trading, refers to the
              practice of buying and selling financial instruments within the
              same trading day. In this trading approach, traders aim to profit
              from short-term price fluctuations in stocks, commodities,
              currencies, or other financial instruments.An online trading
              account is used for the purpose of intraday trading. While doing
              intraday trading, you need to specify that the orders are specific
              to intraday trading. As the orders are squared off before the end
              of the trading day, it is also called as Intraday Trading.
            </p>
            <h4 id="list-item-2">Timeframe</h4>
            <p>
              {" "}
              Intraday traders typically open and close their positions within
              the same trading day. They do not hold positions overnight and aim
              to avoid exposure to the risks associated with overnight market
              movements.
            </p>
            <h4 id="list-item-3">Short-term focus</h4>
            <p>
              Intraday traders focus on taking advantage of short-term price
              movements. They aim to identify opportunities to buy low and sell
              high (or sell high and buy low in case of short selling) within a
              single trading session.
            </p>
            <h4 id="list-item-4">Technical analysis</h4>
            <p>
              Intraday traders often rely on technical analysis to make trading
              decisions. They study charts, patterns, indicators, and other
              technical tools to identify potential entry and exit points.
              Technical analysis helps them assess market trends, support and
              resistance levels, and price patterns to guide their trading
              strategies.
            </p>
            <h4 id="list-item-5">Volatility and liquidity</h4>
            <p>
              Intraday traders often seek stocks or other instruments that
              exhibit sufficient volatility and liquidity. Volatility provides
              opportunities for potential price movements that can be exploited
              for profit. Liquidity ensures that traders can easily enter and
              exit positions without significantly impacting the market price.
            </p>
            <h4 id="list-item-6">Risk management</h4>
            <p>
              Due to the short-term nature of intraday trading, risk management
              is crucial. Traders typically employ stop-loss orders to limit
              potential losses and set profit targets to lock in gains. They
              also closely monitor their trades throughout the day and may use
              trailing stops or other risk management techniques.
            </p>
            <h4 id="list-item-7">Active monitoring</h4>
            <p>
              Intraday traders closely monitor the markets throughout the
              trading day. They pay attention to news, market trends, and any
              factors that may impact their positions. Real-time market data and
              trading platforms play a vital role in providing them with
              up-to-date information for making informed decisions.
            </p>
            <h4 id="list-item-8">Margin trading</h4>
            <p>
              Intraday trading often involves margin accounts, where traders can
              borrow funds to increase their trading capital. Margin trading can
              amplify both profits and losses, so it requires careful risk
              management and an understanding of the associated costs and
              obligations.
            </p>
            <h4 id="list-item-9">Intraday Trading Tips</h4>
            <p>
              Intraday trading is riskier than investing in the regular stock
              market. It is important, especially for beginners, to understand
              the basics of such trading to avoid losses. Individuals are
              advised to invest only the amount they can afford to lose without
              facing financial difficulties. A few intraday trading tips will
              help you learn the art of trading.
            </p>
            <h4 id="list-item-10">Intraday Trading indicators</h4>
            <p>
              When it comes to booking profits in intraday trading, you will
              require to do a lot of research. For the same purpose, you need to
              follow certain indicators. Often intraday tips are believed to be
              the Holy Grail; this, however, is not entirely accurate. Intraday
              trading indicators are beneficial tools when used with a
              comprehensive strategy to maximize returns. To get a detailed
              understanding of intraday trading indicators, and its effect on
              trading strategy
            </p>
            <h4 id="list-item-11">How to make profit in intraday trading</h4>
            <p>
              Intraday traders always face inherent risks that exist in the
              stock markets. Price volatility and daily volume are a couple of
              factors that play an important role in the stocks picked for daily
              trading. Traders must not risk over two per cent of their total
              trading capital on a single trade to ensure the right risk
              management. So here are a few tips shared to make profit in
              intraday trading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

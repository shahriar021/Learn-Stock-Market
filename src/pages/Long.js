import React from 'react';
import Navbar from '../components/Navbar';

export default function Long() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Long Term Trading</h1>
      <div class="row">
        <div class="col-4">
          <div id="list-example" class="list-group">
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              What is long term trading?
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Pick a Strategy and Stick with It
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Understand Investing Risks
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Diversify Well for Successful Long-Term Investing
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
            <h4 id="list-item-1">What is long term trading?</h4>
            <p>
              Long-term investing refers to a strategy where you hold on to your
              investments for a long period, which is generally five years or
              more. It's one of the ways to make meaningful gains from stock
              market and equity mutual funds investments, which give the desired
              results only when you remain committed for the long haul.
            </p>
            <h4 id="list-item-2">Pick a Strategy and Stick with It</h4>
            <p>
              Once you’ve established your investing goals and time horizon,
              choose an investing strategy and stick with it. It may even be
              helpful to break your overall time horizon into narrower segments
              to guide your choice of asset allocation. Stacy Francis, president
              and CEO of Francis Financial in New York City, divvies long-term
              investing into three different buckets, based on the target date
              of your goal: five to 15 years away, 15 to 30 years away and more
              than 30 years away. The shortest timeline should be the most
              conservatively invested with, Francis suggests, a portfolio of 50%
              to 60% in stocks and the rest in bonds. The most aggressive could
              go up to 85% to 90% stocks. “It’s great to have guidelines,”
              Francis says. “But realistically, you have to do what’s right for
              you.” It’s especially important to choose a portfolio of assets
              you’re comfortable with, so that you can be sure to stick with
              your strategy, no matter what. “When there is a market downturn,
              there’s a lot of fear and anxiety as you see your portfolio tank,”
              Francis says. “But selling at that time and locking in losses is
              the worst thing you can do.”
            </p>
            <h4 id="list-item-3">Understand Investing Risks</h4>
            <p>
              To avoid knee-jerk reactions to market dips, be sure you know the
              risks inherent in investing in different assets before you buy
              them. Stocks are typically considered riskier investments than
              bonds, for instance. That’s why Francis suggests trimming your
              stock allocation as you approach your goal. This way you can lock
              in some of your gains as you reach your deadline. But even within
              the category of stocks, some investments are riskier than others.
              For example, U.S. stocks are thought to be safer than stocks from
              countries with still-developing economies because of the usually
              greater economic and political uncertainties in those regions.
              Bonds can be less risky, but they’re not 100% safe. For example,
              corporate bonds are only as secure as the issuer’s bottom line. If
              the firm goes bankrupt, it may not be able to repay its debts, and
              bondholders would have to take the loss. To minimize this default
              risk, you should stick with investing in bonds from companies with
              high credit ratings. Assessing risk is not always as simple as
              looking at credit ratings, however. Investors must also consider
              their own risk tolerance, or how much risk they’re able to
              stomach. “It includes being able to watch the value of one’s
              investments going up and down without it impacting their ability
              to sleep at night,” King says. Even highly rated companies and
              bonds can underperform at certain points in time.
            </p>
            <h4 id="list-item-4">
              Diversify Well for Successful Long-Term Investing
            </h4>
            <p>
              Spreading your portfolio across a variety of assets allows you to
              hedge your bets and boost the odds you’re holding a winner at any
              given time over your long investing timeframe. “We don’t want two
              or more investments that are highly correlated and moving in the
              same direction,” Schulte says. “We want our investments to move in
              different directions, the definition of diversification.” Your
              asset allocation likely starts with a mix of stocks and bonds, but
              diversifying drills deeper than that. Within the stock portion of
              your portfolio, you may consider the following types of
              investments, among others: Large-company stocks, or large-cap
              stocks, are shares of companies that typically have a total market
              capitalization of more than $10 billion. Mid-company stocks, or
              mid-cap stocks, are shares of companies with market caps between
              $2 billion and $10 billion. Small-company stocks, or small-cap
              stocks, are shares of companies with market caps below $2 billion.
              Growth stocks are shares of companies that are experiencing frothy
              gains in profits or revenues. Value stocks are shares that are
              priced below what analysts (or you) determine to be the true worth
              of a company, usually as reflected in a low price-to-earnings or
              price-to-book ratio. Stocks may be classified as a combination of
              the above, blending size and investing style. You might, for
              example, have large-value stocks or small-growth stocks. The
              greater mix of different types of investments you have, generally
              speaking, the greater your odds for positive long-term returns.
              Diversification via Mutual Funds and ETFs To boost your
              diversification, you may choose to invest in funds instead of
              individual stocks and bonds. Mutual funds and exchange-traded
              funds (ETFs) allow you to easily build a well-diversified
              portfolio with exposure to hundreds or thousands of individual
              stocks and bonds. “To have true broad exposure, you need to own a
              whole lot of individual stocks, and for most individuals, they
              don’t necessarily have the amount of money to be able to do that,”
              Francis says. “So one of the most wonderful ways that you can get
              that diversification is through mutual funds and exchange-traded
              funds.” That’s why most experts, including the likes of Warren
              Buffett, recommend average people invest in index funds that
              provide cheap, broad exposure to hundreds of companies’ stocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

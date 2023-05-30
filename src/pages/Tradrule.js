import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Tradrule() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Trading Rules</h1>
      <br />
      <div className="row">
        <div className="col-4">
          <div
            id="simple-list-example"
            className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
          >
            <a className="p-1 rounded" href="#simple-list-item-1">
              Rule 1
            </a>
            <a className="p-1 rounded" href="#simple-list-item-2">
              Rule 2
            </a>
            <a className="p-1 rounded" href="#simple-list-item-3">
              Rule 3
            </a>
            <a className="p-1 rounded" href="#simple-list-item-4">
              Rule 4
            </a>
            <a className="p-1 rounded" href="#simple-list-item-5">
              Rule 5
            </a>
            <a className="p-1 rounded" href="#simple-list-item-6">
              Rule 6
            </a>
            <a className="p-1 rounded" href="#simple-list-item-7">
              Rule 7
            </a>
            <a className="p-1 rounded" href="#simple-list-item-8">
              Rule 8
            </a>
            <a className="p-1 rounded" href="#simple-list-item-9">
              Rule 9
            </a>
            <a className="p-1 rounded" href="#simple-list-item-10">
              Rule 10
            </a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabindex="0"
          >
            <h4 id="simple-list-item-1">Rule 1: Always Use a Trading Plan</h4>
            <p>
              A trading plan is a set of rules that specifies a trader's entry,
              exit, and money management criteria for every purchase. With
              today's technology, test a trading idea before risking real money.
              Known as backtesting, this practice allows you to apply your
              trading idea using historical data and determine if it is viable.
              Once a plan has been developed and backtesting shows good results,
              the plan can be used in real trading. Sometimes your trading plan
              won't work. Bail out of it and start over. The key here is to
              stick to the plan. Taking trades outside of the trading plan, even
              if they turn out to be winners, is considered poor strategy.
            </p>
            <h4 id="simple-list-item-2">
              Rule 2: Treat Trading Like a Business
            </h4>
            <p>
              To be successful, you must approach trading as a full or part-time
              business, not as a hobby or a job. If it's approached as a hobby,
              there is no real commitment to learning. If it's a job, it can be
              frustrating because there is no regular paycheck. Trading is a
              business and incurs expenses, losses, taxes, uncertainty, stress,
              and risk. As a trader, you are essentially a small business owner,
              and you must research and strategize to maximize your business's
              potential.
            </p>
            <h4 id="simple-list-item-3">
              Rule 3: Use Technology to Your Advantage
            </h4>
            <p>
              Trading is a competitive business. It's safe to assume that the
              person on the other side of a trade is taking full advantage of
              all the available technology. Charting platforms give traders
              infinite ways to view and analyze markets. Backtesting an idea
              using historical data prevents costly missteps. Getting market
              updates via smartphone allows us to monitor trades anywhere.
              Technology that we take for granted, like a high-speed internet
              connection, can increase trading performance. Using technology to
              your advantage, and keeping current with new products, can be fun
              and rewarding in trading.
            </p>
            <h4 id="simple-list-item-4">
              Rule 4: Protect Your Trading Capital
            </h4>
            <p>
              Saving enough money to fund a trading account takes time and
              effort. It can be even more difficult if you have to do it twice.
              It is important to note that protecting your trading capital is
              not synonymous with never experiencing a losing trade. All traders
              have losing trades. Protecting capital entails not taking
              unnecessary risks and doing everything you can to preserve your
              trading business.
            </p>
            <h4 id="simple-list-item-5">
              Rule 5: Become a Student of the Markets
            </h4>
            <p>
              Think of it as continuing education. Traders need to remain
              focused on learning more each day. It is important to remember
              that understanding the markets and their intricacies is an
              ongoing, lifelong process. Hard research allows traders to
              understand the facts, like what the different economic reports
              mean. Focus and observation allow traders to sharpen their
              instincts and learn the nuances. World politics, news events,
              economic trends—even the weather—all impact the markets. The
              market environment is dynamic. The more traders understand the
              past and current markets, the better prepared they are to face the
              future.
            </p>
            <h4 id="simple-list-item-6">
              Rule 6: Risk Only What You Can Afford to Lose
            </h4>
            <p>
              Before using real cash, make sure that money in that trading
              account is expendable. If it's not, the trader should keep saving
              until it is. Money in a trading account should not be allocated
              for college tuition or the mortgage. Traders must never allow
              themselves to think they are simply borrowing money from these
              other important obligations. Losing money is traumatic enough. It
              is even more so if it is capital that should have never been
              risked in the first place.
            </p>
            <h4 id="simple-list-item-7">
              Rule 7: Develop a Methodology Based on Facts
            </h4>
            <p>
              Taking the time to develop a sound trading methodology is worth
              the effort. It may be tempting to believe in the "so easy it's
              like printing money" trading scams that are prevalent on the
              internet. But facts, not emotions or hope, should develop a
              trading plan. Traders who are not in a hurry to learn typically
              have an easier time sifting through all of the information
              available on the internet. If you were to start a new career, you
              would need to study at a college or university for at least a year
              or two before you qualify to apply for a position in the new
              field. Learning to trade demands the same amount of time and
              fact-driven research and study.
            </p>
            <h4 id="simple-list-item-8">Rule 8: Always Use a Stop Loss</h4>
            <p>
              A stop loss is a predetermined amount of risk that a trader is
              willing to accept with each trade. The stop loss can be a dollar
              amount or percentage, but it limits the trader's exposure during a
              trade. Using a stop loss can take some of the stress out of
              trading since we know we will only lose X amount on any given
              trade. Not having a stop loss is bad practice, even if it leads to
              a winning trade. Exiting with a stop loss, and therefore a losing
              trade is still good trading if it falls within the trading plan's
              rules. The idea is to exit all trades with a profit, but not
              realistic. Using a protective stop loss helps ensure that losses
              and risks are limited and that you have preserved enough capital
              to trade another day.
            </p>
            <h4 id="simple-list-item-9">Rule 9: Know When to Stop Trading</h4>
            <p>
              There are two reasons to stop trading: an ineffective trading plan
              and an ineffective trader. An ineffective trading plan shows
              greater losses than anticipated in historical testing. That
              happens. Markets may have changed, or volatility may have
              lessened. For whatever reason, the trading plan simply is not
              performing as expected. Stay unemotional and businesslike. It's
              time to reevaluate the trading plan and make a few changes or
              start a new trading plan. An unsuccessful trading plan is a
              problem that needs to be solved. It is not necessarily the end of
              the trading business. An ineffective trader makes a trading plan
              but is unable to follow it. External stress, poor habits, and lack
              of physical activity can all contribute to this problem. A trader
              not in peak condition for trading should consider taking a break.
              After any difficulties and challenges have been dealt with, the
              trader can return to business.
            </p>
            <h4 id="simple-list-item-10">
              Rule 10: Keep Trading in Perspective
            </h4>
            <p>
              Stay focused on the big picture when trading. A losing trade
              should not surprise us; It's a part of trading. A winning trade is
              just one step to a profitable business. It is the cumulative
              profits that make a difference. Once a trader accepts wins and
              losses as part of the business, emotions have less effect on
              trading performance. That is not to say that we cannot be excited
              about a particularly fruitful trade, but we must keep in mind that
              a losing trade is never far off. Setting realistic goals is an
              essential part of keeping trading in perspective. Your business
              should earn a reasonable return in a reasonable amount of time. If
              you expect to be a multi-millionaire by next Tuesday, you're
              setting yourself up for failure.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

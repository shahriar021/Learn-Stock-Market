import React from 'react';
import Navbar from '../components/Navbar';

export default function Cn() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-4">
          <div id="list-example" className="list-group">
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Hammer
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Inverse hammer
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Bullish engulfing
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Piercing line
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-5"
            >
              Morning star
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-6"
            >
              Three white soldiers
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-7"
            >
              Hanging man
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-8"
            >
              Shooting star
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
            <h4 id="list-item-1">Hammer</h4>
            <p>
              The hammer candlestick pattern is formed of a short body with a
              long lower wick, and is found at the bottom of a downward trend. A
              hammer shows that although there were selling pressures during the
              day, ultimately a strong buying pressure drove the price back up.
              The colour of the body can vary, but green hammers indicate a
              stronger bull market than red hammers.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/hammer.png" />
            </p>
            <h4 id="list-item-2">Inverse hammer</h4>
            <p>
              A similarly bullish pattern is the inverted hammer. The only
              difference being that the upper wick is long, while the lower wick
              is short. It indicates a buying pressure, followed by a selling
              pressure that was not strong enough to drive the market price
              down. The inverse hammer suggests that buyers will soon have
              control of the market.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/inverse-hammer.png" />
            </p>
            <h4 id="list-item-3">Bullish engulfing</h4>
            <p>
              The bullish engulfing pattern is formed of two candlesticks. The
              first candle is a short red body that is completely engulfed by a
              larger green candle. Though the second day opens lower than the
              first, the bullish market pushes the price up, culminating in an
              obvious win for buyers.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/bullish-engulfing.png" />
            </p>
            <h4 id="list-item-4">Piercing line</h4>
            <p>
              The piercing line is also a two-stick pattern, made up of a long
              red candle, followed by a long green candle. There is usually a
              significant gap down between the first candlestick’s closing
              price, and the green candlestick’s opening. It indicates a strong
              buying pressure, as the price is pushed up to or above the
              mid-price of the previous day.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/piercing-line.png" />
            </p>
            <h4 id="list-item-5">Morning star</h4>
            <p>
              The morning star candlestick pattern is considered a sign of hope
              in a bleak market downtrend. It is a three-stick pattern: one
              short-bodied candle between a long red and a long green.
              Traditionally, the ‘star’ will have no overlap with the longer
              bodies, as the market gaps both on open and close. It signals that
              the selling pressure of the first day is subsiding, and a bull
              market is on the horizon.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/morning-star.png" />
            </p>
            <h4 id="list-item-6">Three white soldiers</h4>
            <p>
              The three white soldiers pattern occurs over three days. It
              consists of consecutive long green (or white) candles with small
              wicks, which open and close progressively higher than the previous
              day. It is a very strong bullish signal that occurs after a
              downtrend, and shows a steady advance of buying pressure.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/three-white-soldiers.png" />
            </p>
            <h4 id="list-item-7">Hanging man</h4>
            <p>
              The hanging man is the bearish equivalent of a hammer; it has the
              same shape but forms at the end of an uptrend. It indicates that
              there was a significant sell-off during the day, but that buyers
              were able to push the price up again. The large sell-off is often
              seen as an indication that the bulls are losing control of the
              market.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/hanging-man.png" />
            </p>
            <h4 id="list-item-8">Shooting star</h4>
            <p>
              The shooting star is the same shape as the inverted hammer, but is
              formed in an uptrend: it has a small lower body, and a long upper
              wick. Usually, the market will gap slightly higher on opening and
              rally to an intra-day high before closing at a price just above
              the open – like a star falling to the ground.
              <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/shooting-star.png" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

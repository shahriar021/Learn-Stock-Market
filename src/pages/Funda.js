import React from 'react';

export default function Funda() {
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Toggle first element
        </a>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Toggle second element
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample3"
          aria-expanded="false"
          aria-controls="multiCollapseExample3"
        >
          Toggle 3rd element
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample4"
          aria-expanded="false"
          aria-controls="multiCollapseExample4"
        >
          Toggle 4 element
        </button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
              Some placeholder content for the first collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample3">
            <div className="card card-body">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>

        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample4">
            <div className="card card-body">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

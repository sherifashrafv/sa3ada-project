import React from "react";
import "./index.css";
export default function Skeleton() {
  const fakeProdcuts = Array(24).fill("");
  console.log(fakeProdcuts);
  return (
    <div class="cards">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-5 sm:grid-cols-2 gap-5">
        {fakeProdcuts.map((ele, idx) => (
          <div key={idx} class="card is-loading">
            <div class="image"></div>
            <div class="content">
              <h2>{ele}</h2>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import "./Test1.css";
import { useRef } from "react";

export default function Stack() {
  return (
    <div class="container">
      <ul id="cards">
        <li class="card" id="card1">
          <div class="card-body">
            {/* <h2>Card 1</h2> */}
            <img src="/3.png" className="rounded-3xl" alt="Image" />
          </div>
        </li>
        <li class="card" id="card2">
          <div class="card-body">
            <img src="/3.png" className="rounded-3xl" alt="Image" />
            {/* <h2>Card 2</h2> */}
          </div>
        </li>
        <li class="card" id="card3">
          <div class="card-body">
            <img src="/3.png" className="rounded-3xl" alt="Image" />
            {/* <h2>Card 3</h2> */}
          </div>
        </li>
        <li class="card" id="card4">
          <div class="card-body">
            {/* <h2>Card 4</h2> */}
            <img src="/3.png" className="rounded-3xl" alt="Image" />
          </div>
        </li>
      </ul>
    </div>
  );
}

"use client";
import "./Test1.css";

export default function Stack() {
  return (
    <div class="container">
      <ul id="cards">
        <li class="card " id="card1">
          <div class="card-body">
            <img src="/3.png" className="rounded-3xl" alt="Image" />
          </div>
        </li>
        <li class="card" id="card2">
          <div class="card-body">
            <img src="/3.png" className="rounded-3xl" alt="Image" />
          </div>
        </li>
        <li class="card" id="card3">
          <div class="card-body">
            <img src="/3.png" className="rounded-3xl" alt="Image" />
          </div>
        </li>
        <li class="card" id="card4">
          <div class="card-body">
            <img src="/3.png" className="rounded-3xl" alt="Image" />
          </div>
        </li>
      </ul>
    </div>
  );
}

"use client";
// import "./Test1.css";
import StackCard from "../../components/StackCard";
export default function Stack() {
  return (
    <div className="container  justify-center items-center">
      {/* <ul id="cards">
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
      </ul> */}
      <div>
        <StackCard bg="/services/bg-ai.png" type="AI" />
        <StackCard bg="/services/bg-consult.png" type="Consulting" />
        <StackCard bg="/services/bg-digital.png" type="Digital" />
        <StackCard bg="/services/bg-web.png" type="Web" />
      </div>
    </div>
  );
}

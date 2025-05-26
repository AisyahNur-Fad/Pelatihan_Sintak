import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

function ProductPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section />
      <Footer />
    </>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[540px] "
        style={{
          backgroundImage: "url(/product.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-6xl font-bold text-amber-100">
              Our Coffee Products
            </h1>
            <p className="mb-5 text-2xl text-amber-100">
              Premium Arabica and Robusta beans from Indonesia's finest growing
              regions
            </p>
            <button className="btn mr-5 text-md bg-amber-800 border-amber-800 text-white shadow-none">
              Requst Samples <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content text-center">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="\kopi1.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kopi Hitam</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="\kopi1.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kopi Hitam</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="\kopi1.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kopi Hitam</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center gap-4">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="\kopi1.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kopi Hitam</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="\kopi1.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kopi Hitam</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="\kopi1.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kopi Hitam</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

        </div>
    </>
  );
}

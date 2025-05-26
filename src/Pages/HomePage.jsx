import React from "react";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section />
      <Section2 />
      <Footer/>
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[540px] "
        style={{
          backgroundImage: " url(src/assets/kopii.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-6xl font-bold text-amber-100">
              Aroma Sriwijaya
            </h1>
            <p className="mb-5 text-2xl text-amber-100 ">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <button className="btn mr-5 text-md bg-amber-800 border-amber-800 text-white shadow-none">
              View Coffee Catalog <FaArrowRight />
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
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src\assets\alat.jpg"
            className="max-w-2xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Coffee Beans from the Heart of Indonesia
            </h1>
            <p className="py-6 text-2xl">
              Aroma Sriwijaya works directly with local farmers across Indonesia
              to source the finest Arabica and Robusta coffee beans. Our
              commitment to quality and sustainability ensures that every bean
              we export meets the highest standards.
            </p>
            <button className="btn text-md bg-amber-800 border-amber-800 text-white shadow-none ">
              Learn About Our Process
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">Our Commitment to Excellence</h1>
            <p className="py-6 text-2xl">
              Discover why coffee businesses around the world trust Aroma
              Sriwijaya for their premium Indonesian coffee needs.
            </p>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
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
    </>
  );
}

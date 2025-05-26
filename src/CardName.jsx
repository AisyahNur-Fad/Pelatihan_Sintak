import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="h-screen bg-amber-50 flex justify-center items-center ">
        <div className="w-96 h-auto shadow-2xl bg-white p-4 rounded-2xl">
          <div className="flex justify-center items-center flex-col">
            <img
              src="src\assets\foto.jpg"
              alt=""
              className="w-30 rounded-full shadow-x1 border-2 "
            />
            <h1 className="text-x1 font-bold"> Aisyah Nur Fadhilah</h1>

            <p className="text-gray-500">Mahasiswa</p>
          </div>

          <div className="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quibusdam aspernatur assumenda iusto, rerum sapiente eos maxime
              praesentium molestiae repudiandae distinctio nisi repellendus
              explicabo nam nostrum nobis, incidunt deleniti corrupti.
            </p>
          </div>
          <LinkSocial 
            text="Instagram"
            icon={<FaInstagram className="mr-2 text-red-500"/>}
            link="https://www.instagram.com/aiscaa12_/"
          />
          <LinkSocial 
            text="Facebook"
            icon={<FaFacebook />}
            link="https://www.facebook.com/ariel.khamal"
          />
          <LinkSocial 
            text="Github"
            icon={<FaGithub />}
            link="https://github.com/AisyahNur-Fad"
            />
        </div>
      </div>
    </>
  );
}

export default CardName;

function LinkSocial(props) {
  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <a
          className="bg-black text-amber-50 p-2 w-full rounded-lg text-center flex justify-center items-center "
          href={props.link}
          target="blank"
        >
          {props.icon}
          {props.text}
        </a>
      </div>
    </>
  );
}

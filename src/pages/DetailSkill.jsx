import React from "react";
import { useParams } from "react-router-dom";
import dataDetailSkill from "../constant/dataDetailSkill";
import Header from "../components/Header";
import ModalMenu from "../components/ModalMenu";
import SkillCard from "../components/SkillCard";

export default function DetailSkill() {
  const { item } = useParams();

  return (
    <div className="w-screen min-h-screen flex flex-col p-[30px] bg-slate-100 overflow-hidden max-w-[500px] mx-auto">
      <Header tittle={item} />

      <div className="mt-12 flex flex-col gap-2">
        <img
          src={dataDetailSkill[item].bannerImage}
          alt={"HTML"}
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <p>{dataDetailSkill[item].description}</p>

        <div className="flex flex-col gap-4 mt-4">
          {dataDetailSkill[item].data.map((v) => {
            return (
              <SkillCard
                tittle={item}
                content={v.tittle}
                image={v.image}
                multiLink={v.multiLink}
                key={v.id}
              />
            );
          })}
        </div>
      </div>

      <ModalMenu />
    </div>
  );
}

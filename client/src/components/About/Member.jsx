import React from "react";
import { BsGithub } from "react-icons/bs";

const Member = () => {
  const Menus = [
    { key: "xxrjun", value: "https://github.com/xxrjun" },
    { key: "Tsu-Yu", value: "https://github.com/Tsu-Yu" },
    { key: "Chen-LiYin", value: "https://github.com/Chen-LiYin" },
    { key: "heyuhsuan", value: "https://github.com/heyuhsuan" },
    { key: "Elly", value: "https://github.com/Elly520" },
    { key: "HankLiu", value: "https://github.com/HankLiu20" },
    { key: "Joe", value: "https://github.com/Joe-qwe" },
  ];

  return (
    <div>
      <div className="flex flex-wrap px-10">
        {Menus.map((item) => (
          <a href={item.value}>
            <div className="flex py-2 items-center w-60">
              <BsGithub className="text-2xl mx-2" />
              <h1 className="text-2xl">{item.key}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Member;

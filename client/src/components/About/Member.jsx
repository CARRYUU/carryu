import React from 'react'

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
            {/*需要照片*/}
            <div className=' '>
                <article>
                    <ul >
                        <li>
                            {Menus.map(item=> (
                                <li>
                                    <div className='flex px-20 py-2'>
                                        <img class=" w-10 h-10 rounded-full " src="/docs/images/people/profile-picture-5.jpg" alt="" />
                                        <a href = {item.value}>{item.key}</a>
                                    </div>
                                </li>
                            ))}
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    )
}

export default Member
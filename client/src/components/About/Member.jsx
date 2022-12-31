import React from 'react'

const Member = () => {
    return (
        <div>
            {/*需要照片*/}
            <div className=' px-20 py-10 flex flex-col  content-center '>
                <article>
                    <ul className="flex flex-col md:flex-row  justify-center content-center space-x-40">
                        <li>
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <a href="https://github.com/xxrjun" className='space-y-1 font-medium'>xxrjun </a>
                        </li>
                        <li>
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <a href='https://github.com/Tsu-Yu' className=" space-y-1 font-medium ">Tsu-Yu carrie57 </a>
                        </li>
                        <li>
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <a href='https://github.com/Chen-LiYin' className=" space-y-1 font-medium ">Chen-LiYin </a>
                        </li>

                    </ul>

                    <ul className="flex flex-row  justify-center space-x-40 pt-20">
                        <li>
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <a href="https://github.com/heyuhsuan" className='space-y-1 font-medium'>heyuhsuan </a>
                        </li>
                        <li>
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <a href='https://github.com/Elly520' className=" space-y-1 font-medium ">Elly520 </a>
                        </li>
                        <li>
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <a href='https://github.com/HankLiu20' className=" space-y-1 font-medium ">HankLiu20 </a>
                        </li>
                        <li>
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <a href='https://github.com/Joe-qwe' className=" space-y-1 font-medium ">Joe-qwe </a>
                        </li>

                    </ul>
                </article>
            </div>
        </div>
    )
}

export default Member
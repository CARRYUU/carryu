import React from 'react'

const Member = () => {
    return (
        <div>
            {/*需要照片*/}
            <div className=' px-28 py-10 flex flex-row content-center space-x-60'>
                <article>
                    <div className="flex flex-col ">
                        <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class=" space-y-1 font-medium ">
                            <a href="https://github.com/xxrjun">xxrjun </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="flex flex-col ">
                        <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class=" space-y-1 font-medium ">
                            <a href='https://github.com/Tsu-Yu'>Tsu-Yu carrie57 </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="flex items-center mb-4 space-x-4">
                        <div className="flex flex-col ">
                            <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            <div class=" space-y-1 font-medium ">
                                <a href='https://github.com/Chen-LiYin'>Chen-LiYin </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className='px-10 py-10 flex flex-row content-center space-x-48'>

                <article>
                    <div className="flex flex-col ">
                        <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class=" space-y-1 font-medium ">
                            <a href='https://github.com/heyuhsuan'>heyuhsuan </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="flex flex-col ">
                        <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class=" space-y-1 font-medium ">
                            <a href='https://github.com/Elly520' >Elly520 </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="flex flex-col ">
                        <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class=" space-y-1 font-medium ">
                            <a href='https://github.com/HankLiu20' >HankLiu20 </a>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="flex flex-col ">
                        <img class=" w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div class=" space-y-1 font-medium ">
                            <a href='https://github.com/Joe-qwe' >Joe-qwe </a>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    )
}

export default Member
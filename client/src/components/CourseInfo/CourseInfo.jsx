import React from 'react';

// create a course info component
const CourseInfo = () => {
  return (
    <div className="course-info">
      <div className="course-info__title">
        <h1>課程名稱</h1>
      </div>
      <div className="course-info__vedio">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="course-info__description">
        <h2>課程描述</h2>
        <p>這是一段很長的影片資訊，會告訴你這堂課有關的詳細內容，可以不用太仔細看，謝謝。</p>
      </div>
      <div className="course-info__badge">
        <h2>標籤</h2>
        <div className="course-info__badge--tag">
          <span>html</span>
          <span>css</span>
          <span>react</span>
        </div>
      </div>
      <div className="course-info__price">
        <h2>價格</h2>
        <div className="course-info__price--sale">
          <span>250</span>
        </div>
        <div className="course-info__price--original">
          <span>500</span>
        </div>
      </div>
    </div>
  );
};
import React from 'react'

const ButtonFounder = () => {
  return (
    <div className="absolute bottom-5 right-5 w-fit h-fit">
      <a
        href="#"
        className="w-full relative inline-flex items-center rounded-full py-1.5 pl-1.5 pr-8 transition-all duration-300 group"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 rounded-full bg-background"></div>
        <div className="w-14 h-14 mr-3 rounded-full flex items-center justify-center overflow-hidden relative z-20 transition-all duration-300 group-hover:translate-x-[11.5rem]">
          <picture>
            <source
              type="image/webp"
              srcSet="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&amp;h=200&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1651143173&amp;s=be043bcd94bb13283574b35d1df6ee93 200w"
              sizes="100vw"
            />
            <img
              src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&amp;h=200&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1651143173&amp;s=be043bcd94bb13283574b35d1df6ee93"
              srcSet="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Individuals-Black-Wall/Shape-April-2022-HR-186.jpg?w=200&amp;h=200&amp;q=95&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1651143173&amp;s=c31b97c2e5ac1293be90453dc40a496a 200w"
              sizes="100vw"
              alt="Shape April 2022 HR 186"
              className="w-full absolute top-0 left-0 h-full object-cover z-0"
              loading="lazy"
              width="200"
              height="200"
            />
          </picture>
        </div>
        <div className="tracking-tight leading-tight relative z-10 transition-all duration-300 group-hover:-translate-x-12">
          <div className="dark:text-grayDark-100">Hear from Andy</div>
          <div className="font-light text-gray-400 dark:text-grayDark-200">
            Co-Founder of Shape
          </div>
        </div>
      </a>
    </div>
  );
};

export default ButtonFounder;
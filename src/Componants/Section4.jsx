import React from "react";

function Section4() {
  const members = [
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      image:
        "https://i.pinimg.com/originals/5c/0d/d9/5c0dd914b573f76f09acab8a7cc77307.jpg",
    },
    {
      image:
        " https://idealmagazine.co.uk/wp-content/uploads/2018/05/valerie-elash-631660-unsplash.jpg",
    },
    {
      image: "  https://miro.medium.com/max/750/1*7N8GjSsfeHGQwR9KkjkG5g.jpeg",
    },
  ];
  return (
    <div className="mt-32 flex flex-col w-full h-fit gap-8 p-4">
      <span className="mx-auto w-fit text-6xl text-center font-bold bg-gradient-to-r from-[#BFD7EA] to-[#F7996E] bg-clip-text text-transparent">
        The Team
      </span>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((m) => (
          <div className="hover:scale-105 hover:border-white  transition-all ease-in-out p-4 flex flex-col gap-2 rectangle w-fit rounded-2xl  border-2 border-white/40">
            <img
              className="w-48 aspect-square object-cover rounded-lg"
              src={m.image}
              alt="spaceship"
            />
            <p className=" text-xl font-bold text-white ">John Green </p>
            <p className="w-48 flex-grow text-sm font-medium text-white ">
              CEO, Co-Founder{" "}
            </p>
            <div className="flex gap-4 mt-6">
              <svg
                className="hover:scale-105 transition-all ease-in-out"
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.7143 0H4.28571C1.92 0 0 1.92 0 4.28571V31.7143C0 34.08 1.92 36 4.28571 36H31.7143C34.08 36 36 34.08 36 31.7143V4.28571C36 1.92 34.08 0 31.7143 0ZM11.1429 13.7143V30H6V13.7143H11.1429ZM6 8.97429C6 7.77429 7.02857 6.85714 8.57143 6.85714C10.1143 6.85714 11.0829 7.77429 11.1429 8.97429C11.1429 10.1743 10.1829 11.1429 8.57143 11.1429C7.02857 11.1429 6 10.1743 6 8.97429ZM30 30H24.8571C24.8571 30 24.8571 22.0629 24.8571 21.4286C24.8571 19.7143 24 18 21.8571 17.9657H21.7886C19.7143 17.9657 18.8571 19.7314 18.8571 21.4286C18.8571 22.2086 18.8571 30 18.8571 30H13.7143V13.7143H18.8571V15.9086C18.8571 15.9086 20.5114 13.7143 23.8371 13.7143C27.24 13.7143 30 16.0543 30 20.7943V30Z"
                  fill="white"
                  className="hover:fill-[#0077b5] "
                />
              </svg>
              <svg
                className="hover:scale-105 transition-all ease-in-out"
                width="30"
                height="20"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.6471 2.84083C28.5559 3.32358 27.3837 3.64845 26.1534 3.79497C27.4099 3.04529 28.3734 1.8583 28.8272 0.442993C27.6528 1.13702 26.3507 1.64135 24.9641 1.91396C23.8547 0.73605 22.2743 0 20.5252 0C17.1661 0 14.4433 2.71362 14.4433 6.05878C14.4433 6.53358 14.498 6.99702 14.6006 7.43887C9.54599 7.18671 5.06489 4.7741 2.06381 1.10748C1.54159 2.00256 1.24171 3.04302 1.24171 4.15505C1.24171 6.25642 2.31466 8.11132 3.94633 9.19722C2.94977 9.16541 2.01136 8.8928 1.19154 8.43959C1.19154 8.46571 1.19154 8.48956 1.19154 8.51569C1.19154 11.4519 3.28728 13.9009 6.07057 14.4563C5.56089 14.5949 5.0227 14.6687 4.46741 14.6687C4.07631 14.6687 3.69434 14.6301 3.32376 14.5608C4.09798 16.9678 6.34423 18.7204 9.00552 18.7693C6.9246 20.3947 4.30208 21.3636 1.45151 21.3636C0.961212 21.3636 0.476615 21.3352 0 21.2784C2.69208 22.997 5.88814 24 9.32364 24C20.5116 24 26.6277 14.7676 26.6277 6.76075C26.6277 6.49837 26.622 6.23711 26.6106 5.977C27.7999 5.12168 28.8318 4.05509 29.6471 2.84083Z"
                  fill="white"
                  className="hover:fill-[#00acee] "
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;

import React, { useState } from "react";
import quarter from "../Assets/quarter.svg";

function Section3() {
  const [rotation, setrotation] = useState(45);
  return (
    <div className=" mt-32 flex flex-col w-full h-fit gap-8 p-4">
      <span className="mx-auto w-fit text-6xl font-bold bg-gradient-to-r from-[#BFD7EA] to-[#F7996E] bg-clip-text text-transparent">
        The Circle{" "}
      </span>
      <div
        className={`relative rotate-[${rotation}deg]  flex gap-1 mx-auto h-[540px] w-[540px] `}
      >
        <div className="w-1/2 h-full space-y-1">
          <div
            onClick={() => setrotation(45)}
            className="relative w-full h-1/2 hover:scale-105 transition-all ease-in"
          >
            <span className="absolute -rotate-45 top-1/2 left-1/2 -translate-x-[50px]  -translate-y-[50px] w-fit h-fit text-3xl font-bold text-white">
              text1
            </span>
            <svg
              className="absolute top-0 left-0 w-full h-full "
              width="271"
              height="267"
              viewBox="0 0 271 267"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_370_267)">
                <mask id="path-1-inside-1_370_267" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M270.038 12.4504C270.038 5.82214 264.652 0.421635 258.03 0.712718C119.77 6.79032 8.51928 116.859 0.571089 254.625C0.185799 261.304 5.61076 266.785 12.3001 266.785H70.1865C76.7253 266.785 82.0202 261.535 82.5483 255.017C90.0631 162.268 164.84 88.5282 258.039 82.6376C264.652 82.2196 270.038 76.8873 270.038 70.2611V12.4504Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M270.038 12.4504C270.038 5.82214 264.652 0.421635 258.03 0.712718C119.77 6.79032 8.51928 116.859 0.571089 254.625C0.185799 261.304 5.61076 266.785 12.3001 266.785H70.1865C76.7253 266.785 82.0202 261.535 82.5483 255.017C90.0631 162.268 164.84 88.5282 258.039 82.6376C264.652 82.2196 270.038 76.8873 270.038 70.2611V12.4504Z"
                  fill="url(#paint0_linear_370_267)"
                  fill-opacity="0.7"
                />
                <path
                  d="M82.5483 255.017L80.5548 254.856L82.5483 255.017ZM0.571089 254.625L-1.42559 254.51L0.571089 254.625ZM-1.42559 254.51C6.58161 115.721 118.656 4.83737 257.942 -1.28535L258.118 2.71079C120.884 8.74327 10.4569 117.997 2.56777 254.741L-1.42559 254.51ZM70.1865 268.785H12.3001L12.3001 264.785H70.1865V268.785ZM258.165 84.6336C165.959 90.4614 91.9764 163.418 84.5417 255.179L80.5548 254.856C88.1497 161.118 163.72 86.595 257.913 80.6416L258.165 84.6336ZM272.038 12.4504V70.2611H268.038V12.4504L272.038 12.4504ZM257.913 80.6416C263.555 80.2849 268.038 75.751 268.038 70.2611H272.038C272.038 78.0236 265.749 84.1542 258.165 84.6336L257.913 80.6416ZM70.1865 264.785C75.6045 264.785 80.1044 260.415 80.5548 254.856L84.5417 255.179C83.9361 262.654 77.8462 268.785 70.1865 268.785V264.785ZM257.942 -1.28535C265.758 -1.6289 272.038 4.7396 272.038 12.4504L268.038 12.4504C268.038 6.90468 263.546 2.47217 258.118 2.71079L257.942 -1.28535ZM2.56777 254.741C2.252 260.214 6.70264 264.785 12.3001 264.785L12.3001 268.785C4.51889 268.785 -1.8804 262.393 -1.42559 254.51L2.56777 254.741Z"
                  fill="url(#paint1_linear_370_267)"
                  fill-opacity="0.7"
                  mask="url(#path-1-inside-1_370_267)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_370_267"
                  x="-35.4482"
                  y="-35.2985"
                  width="341.486"
                  height="338.083"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_370_267"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_370_267"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_370_267"
                  x1="74.7458"
                  y1="0.701474"
                  x2="325.312"
                  y2="221.682"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_370_267"
                  x1="74.7458"
                  y1="0.701474"
                  x2="325.312"
                  y2="221.682"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            onClick={() => setrotation(135)}
            className="relative w-full h-1/2 hover:scale-105 transition-all ease-in bg-red-500 "
          >
            <span className="absolute -rotate-45 top-1/2 left-1/2 -translate-x-[50px]  -translate-y-[50px] w-fit h-fit text-3xl font-bold text-white">
              text3
            </span>
            <svg
              className="w-full h-full"
              width="267"
              height="270"
              viewBox="0 0 267 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_370_258)">
                <mask id="path-1-inside-1_370_258" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4505 0.43831C5.80766 0.43831 0.401252 5.84707 0.714697 12.4825C7.22623 150.328 117.117 261.117 254.587 269.048C261.265 269.433 266.746 264.008 266.746 257.319V199.432C266.746 192.894 261.496 187.599 254.978 187.071C162.495 179.577 88.913 105.208 82.6512 12.3821C82.2066 5.79186 76.8832 0.43831 70.2779 0.43831H12.4505Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4505 0.43831C5.80766 0.43831 0.401252 5.84707 0.714697 12.4825C7.22623 150.328 117.117 261.117 254.587 269.048C261.265 269.433 266.746 264.008 266.746 257.319V199.432C266.746 192.894 261.496 187.599 254.978 187.071C162.495 179.577 88.913 105.208 82.6512 12.3821C82.2066 5.79186 76.8832 0.43831 70.2779 0.43831H12.4505Z"
                  fill="url(#paint0_linear_370_258)"
                  fill-opacity="0.7"
                />
                <path
                  d="M82.6512 12.3821L80.6557 12.5168L82.6512 12.3821ZM254.472 271.044C115.981 263.055 5.2768 151.446 -1.28307 12.5769L2.71247 12.3882C9.17565 149.21 118.253 259.179 254.702 267.051L254.472 271.044ZM268.746 199.432V257.319H264.746V199.432H268.746ZM84.6467 12.2475C90.8417 104.084 163.643 177.664 255.14 185.077L254.817 189.064C161.348 181.491 86.9843 106.332 80.6557 12.5168L84.6467 12.2475ZM12.4505 -1.56169H70.2779V2.43831H12.4505V-1.56169ZM80.6557 12.5168C80.2765 6.89436 75.7505 2.43831 70.2779 2.43831V-1.56169C78.0158 -1.56169 84.1368 4.68937 84.6467 12.2475L80.6557 12.5168ZM264.746 199.432C264.746 194.014 260.376 189.515 254.817 189.064L255.14 185.077C262.615 185.683 268.746 191.773 268.746 199.432H264.746ZM-1.28307 12.5769C-1.65303 4.74507 4.72292 -1.56169 12.4505 -1.56169V2.43831C6.89241 2.43831 2.45554 6.94907 2.71247 12.3882L-1.28307 12.5769ZM254.702 267.051C260.175 267.367 264.746 262.916 264.746 257.319H268.746C268.746 265.1 262.355 271.499 254.472 271.044L254.702 267.051Z"
                  fill="url(#paint1_linear_370_258)"
                  fill-opacity="0.7"
                  mask="url(#path-1-inside-1_370_258)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_370_258"
                  x="-35.2983"
                  y="-35.5616"
                  width="338.044"
                  height="340.629"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_370_258"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_370_258"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_370_258"
                  x1="0.701718"
                  y1="195.109"
                  x2="220.894"
                  y2="-55.324"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_370_258"
                  x1="0.701718"
                  y1="195.109"
                  x2="220.894"
                  y2="-55.324"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-1/2 h-full space-y-1">
          <div
            onClick={() => setrotation(225)}
            className="relative w-full h-1/2 hover:scale-105 transition-all ease-in"
          >
            <span className="absolute rotate-45 top-1/2 left-1/2 -translate-x-[30px]  -translate-y-[50px] w-fit h-fit text-3xl font-bold text-white">
              text2
            </span>
            <svg
              className="w-full h-full"
              width="267"
              height="270"
              viewBox="0 0 267 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_370_237)">
                <mask id="path-1-inside-1_370_237" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M254.84 269.43C261.483 269.43 266.889 264.021 266.576 257.385C260.064 119.54 150.173 8.75116 12.7034 0.820281C6.02519 0.435 0.543992 5.85997 0.543992 12.5493V70.4355C0.543992 76.9743 5.79429 82.2692 12.3117 82.7973C104.795 90.2905 178.377 164.66 184.639 257.486C185.083 264.076 190.407 269.43 197.012 269.43H254.84Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M254.84 269.43C261.483 269.43 266.889 264.021 266.576 257.385C260.064 119.54 150.173 8.75116 12.7034 0.820281C6.02519 0.435 0.543992 5.85997 0.543992 12.5493V70.4355C0.543992 76.9743 5.79429 82.2692 12.3117 82.7973C104.795 90.2905 178.377 164.66 184.639 257.486C185.083 264.076 190.407 269.43 197.012 269.43H254.84Z"
                  fill="url(#paint0_linear_370_237)"
                  fill-opacity="0.7"
                />
                <path
                  d="M12.3117 82.7973L12.4732 80.8038L12.3117 82.7973ZM12.8186 -1.1764C151.309 6.81338 262.014 118.422 268.573 257.291L264.578 257.48C258.115 120.658 149.037 10.689 12.5882 2.81696L12.8186 -1.1764ZM-1.45601 70.4355V12.5493H2.54399V70.4355H-1.45601ZM182.643 257.62C176.448 165.784 103.647 92.2041 12.1502 84.7907L12.4732 80.8038C105.942 88.3769 180.306 163.536 186.634 257.351L182.643 257.62ZM254.84 271.43H197.012V267.43H254.84V271.43ZM186.634 257.351C187.014 262.974 191.54 267.43 197.012 267.43V271.43C189.274 271.43 183.153 265.179 182.643 257.62L186.634 257.351ZM2.54399 70.4355C2.54399 75.8535 6.91382 80.3534 12.4732 80.8038L12.1502 84.7907C4.67476 84.185 -1.45601 78.0951 -1.45601 70.4355H2.54399ZM268.573 257.291C268.943 265.123 262.567 271.43 254.84 271.43V267.43C260.398 267.43 264.835 262.919 264.578 257.48L268.573 257.291ZM12.5882 2.81696C7.11505 2.5012 2.54399 6.95182 2.54399 12.5493H-1.45601C-1.45601 4.76813 4.93533 -1.6312 12.8186 -1.1764L12.5882 2.81696Z"
                  fill="url(#paint1_linear_370_237)"
                  fill-opacity="0.7"
                  mask="url(#path-1-inside-1_370_237)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_370_237"
                  x="-35.456"
                  y="-35.199"
                  width="338.045"
                  height="340.629"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_370_237"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_370_237"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_370_237"
                  x1="266.266"
                  y1="75.0367"
                  x2="46.394"
                  y2="325.159"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_370_237"
                  x1="266.266"
                  y1="75.0367"
                  x2="46.394"
                  y2="325.159"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            onClick={() => setrotation(315)}
            className="relative w-full h-1/2 hover:scale-105 transition-all ease-in"
          >
            <span className="absolute -rotate-45 top-1/2 left-1/2 -translate-x-[50px]  -translate-y-[50px] w-fit h-fit text-3xl font-bold text-white">
              text4
            </span>
            <svg
              className="w-full h-full"
              width="267"
              height="270"
              viewBox="0 0 267 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_370_251)">
                <mask id="path-1-inside-1_370_251" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M254.678 0.438371C261.321 0.438371 266.727 5.84713 266.414 12.4826C259.902 150.328 150.012 261.117 12.5419 269.048C5.86367 269.433 0.382462 264.008 0.382462 257.319L0.382462 199.433C0.382462 192.894 5.63276 187.599 12.1502 187.071C104.633 179.578 178.216 105.208 184.477 12.3822C184.922 5.79194 190.245 0.438371 196.851 0.438371L254.678 0.438371Z"
                  />
                </mask>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M254.678 0.438371C261.321 0.438371 266.727 5.84713 266.414 12.4826C259.902 150.328 150.012 261.117 12.5419 269.048C5.86367 269.433 0.382462 264.008 0.382462 257.319L0.382462 199.433C0.382462 192.894 5.63276 187.599 12.1502 187.071C104.633 179.578 178.216 105.208 184.477 12.3822C184.922 5.79194 190.245 0.438371 196.851 0.438371L254.678 0.438371Z"
                  fill="url(#paint0_linear_370_251)"
                  fill-opacity="0.7"
                />
                <path
                  d="M184.477 12.3822L186.473 12.5168L184.477 12.3822ZM196.851 0.438371V2.43837V0.438371ZM0.382462 199.433H2.38246H0.382462ZM12.1502 187.071L12.3117 189.064L12.1502 187.071ZM266.414 12.4826L268.412 12.577L266.414 12.4826ZM254.678 0.438371V-1.56163V0.438371ZM12.5419 269.048L12.6571 271.044L12.5419 269.048ZM0.382462 257.319H-1.61754H0.382462ZM12.6571 271.044C151.148 263.055 261.852 151.446 268.412 12.577L264.416 12.3882C257.953 149.21 148.876 259.179 12.4267 267.051L12.6571 271.044ZM-1.61754 199.433L-1.61754 257.319H2.38246L2.38246 199.433H-1.61754ZM182.482 12.2476C176.287 104.084 103.486 177.664 11.9887 185.077L12.3117 189.064C105.781 181.491 180.144 106.332 186.473 12.5168L182.482 12.2476ZM254.678 -1.56163L196.851 -1.56163V2.43837L254.678 2.43837V-1.56163ZM186.473 12.5168C186.852 6.89443 191.378 2.43837 196.851 2.43837V-1.56163C189.113 -1.56163 182.992 4.68945 182.482 12.2476L186.473 12.5168ZM2.38246 199.433C2.38246 194.015 6.7523 189.515 12.3117 189.064L11.9887 185.077C4.51323 185.683 -1.61754 191.773 -1.61754 199.433H2.38246ZM268.412 12.577C268.782 4.74512 262.406 -1.56163 254.678 -1.56163V2.43837C260.236 2.43837 264.673 6.94913 264.416 12.3882L268.412 12.577ZM12.4267 267.051C6.95353 267.367 2.38246 262.916 2.38246 257.319H-1.61754C-1.61754 265.1 4.77381 271.499 12.6571 271.044L12.4267 267.051Z"
                  fill="url(#paint1_linear_370_251)"
                  fill-opacity="0.7"
                  mask="url(#path-1-inside-1_370_251)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_370_251"
                  x="-35.6176"
                  y="-35.5616"
                  width="338.044"
                  height="340.629"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_370_251"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_370_251"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_370_251"
                  x1="266.427"
                  y1="195.109"
                  x2="46.2348"
                  y2="-55.324"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_370_251"
                  x1="266.427"
                  y1="195.109"
                  x2="46.2348"
                  y2="-55.324"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#919191" />
                  <stop offset="0.0001" stop-color="#919191" />
                  <stop offset="1" stop-color="#909090" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/6 h-4/6 infuse-gradient rounded-full"></div>
      </div>
    </div>
  );
}

export default Section3;

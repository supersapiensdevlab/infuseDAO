import React, { useState } from "react";
import quarter from "../Assets/quarter.svg";

function Section3() {
  const [rotation, setrotation] = useState("0");
  return (
    <div className=" mt-32 flex flex-col w-full h-fit gap-4 md:p-4">
      <span className="mx-auto w-fit text-6xl font-bold bg-gradient-to-r from-[#BFD7EA] to-[#F7996E] bg-clip-text text-transparent">
        The Circle{" "}
      </span>
      <div
        className={`relative rotate-[${rotation}deg] mx-auto transition-all transform-gpu ease-in-out w-screen md:h-[520px] md:w-[520px] `}
      >
        <span className="text-lg text-white m-auto absolute top-0 left-1/2 -translate-x-1/2">
          text1
        </span>
        <span className="text-lg text-white m-auto -rotate-90 absolute left-0 top-1/2 -translate-y-1/2">
          text2
        </span>
        <span className="text-lg text-white m-auto rotate-180 absolute bottom-0 left-1/2 -translate-x-1/2 ">
          text3
        </span>
        <span className="text-lg text-white m-auto rotate-90 absolute right-0 top-1/2 -translate-y-1/2">
          text4
        </span>

        <svg
          className="h-full w-full scale-125"
          viewBox="0 0 795 795"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_370_316)">
            <mask id="path-1-inside-1_370_316" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M196.399 217.612C191.712 212.925 184.084 212.914 179.614 217.807C87.5177 318.619 87.8537 474.145 179.845 577.213C184.298 582.203 192.009 582.243 196.738 577.513L236.921 537.331C241.546 532.706 241.577 525.247 237.334 520.27C176.924 449.383 176.859 345.044 237.637 275.819C242.009 270.84 242.048 263.261 237.363 258.576L196.399 217.612Z"
              />
            </mask>
            <path
              onClick={() => {
                setrotation(`90`);
                console.log(rotation);
              }}
              className="fill-blue-600"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M196.399 217.612C191.712 212.925 184.084 212.914 179.614 217.807C87.5177 318.619 87.8537 474.145 179.845 577.213C184.298 582.203 192.009 582.243 196.738 577.513L236.921 537.331C241.546 532.706 241.577 525.247 237.334 520.27C176.924 449.383 176.859 345.044 237.637 275.819C242.009 270.84 242.048 263.261 237.363 258.576L196.399 217.612Z"
              fill="url(#paint0_linear_370_316)"
              fill-opacity="0.7"
            />
            <path
              d="M237.637 275.819L236.134 274.5L237.637 275.819ZM179.845 577.213L178.353 578.545L179.845 577.213ZM178.353 578.545C85.6951 474.73 85.3325 318.046 178.137 216.458L181.09 219.156C89.7028 319.193 90.0124 473.56 181.337 575.882L178.353 578.545ZM238.335 538.745L198.153 578.927L195.324 576.099L235.507 535.916L238.335 538.745ZM239.14 277.139C179.033 345.599 179.075 448.824 238.857 518.972L235.812 521.567C174.773 449.943 174.685 344.488 236.134 274.5L239.14 277.139ZM197.813 216.198L238.777 257.162L235.948 259.99L194.984 219.026L197.813 216.198ZM236.134 274.5C239.866 270.249 239.83 263.871 235.948 259.99L238.777 257.162C244.266 262.651 244.151 271.431 239.14 277.139L236.134 274.5ZM235.507 535.916C239.339 532.084 239.43 525.811 235.812 521.567L238.857 518.972C243.724 524.683 243.752 533.328 238.335 538.745L235.507 535.916ZM178.137 216.458C183.415 210.681 192.361 210.746 197.813 216.198L194.984 219.026C191.062 215.104 184.753 215.147 181.09 219.156L178.137 216.458ZM181.337 575.882C184.988 579.972 191.367 580.056 195.324 576.099L198.153 578.927C192.651 584.429 183.609 584.434 178.353 578.545L181.337 575.882Z"
              fill="url(#paint1_linear_370_316)"
              fill-opacity="0.7"
              mask="url(#path-1-inside-1_370_316)"
            />
          </g>
          <g filter="url(#filter1_b_370_316)">
            <mask id="path-3-inside-2_370_316" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M577.178 598.391C581.864 603.078 581.876 610.705 576.982 615.176C476.17 707.272 320.645 706.936 217.576 614.945C212.586 610.491 212.547 602.781 217.276 598.051L257.459 557.869C262.083 553.244 269.542 553.213 274.52 557.455C345.406 617.866 449.745 617.931 518.97 557.153C523.949 552.781 531.528 552.742 536.214 557.427L577.178 598.391Z"
              />
            </mask>
            <path
              onClick={() => {
                setrotation(`180`);
                console.log(rotation);
              }}
              className="fill-gray-700 "
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M577.178 598.391C581.864 603.078 581.876 610.705 576.982 615.176C476.17 707.272 320.645 706.936 217.576 614.945C212.586 610.491 212.547 602.781 217.276 598.051L257.459 557.869C262.083 553.244 269.542 553.213 274.52 557.455C345.406 617.866 449.745 617.931 518.97 557.153C523.949 552.781 531.528 552.742 536.214 557.427L577.178 598.391Z"
              fill="url(#paint2_linear_370_316)"
              fill-opacity="0.7"
            />
            <path
              d="M518.97 557.153L520.29 558.655L518.97 557.153ZM217.576 614.945L216.244 616.437L217.576 614.945ZM216.244 616.437C320.06 709.095 476.743 709.457 578.331 616.653L575.633 613.699C475.597 705.087 321.229 704.777 218.908 613.453L216.244 616.437ZM256.045 556.454L215.862 596.637L218.69 599.466L258.873 559.283L256.045 556.454ZM517.651 555.65C449.19 615.757 345.965 615.715 275.817 555.933L273.222 558.977C344.847 620.017 450.301 620.105 520.29 558.655L517.651 555.65ZM578.592 596.977L537.628 556.013L534.799 558.841L575.763 599.805L578.592 596.977ZM520.29 558.655C524.541 554.923 530.918 554.96 534.799 558.841L537.628 556.013C532.138 550.523 523.358 550.638 517.651 555.65L520.29 558.655ZM258.873 559.283C262.705 555.451 268.978 555.36 273.222 558.977L275.817 555.933C270.106 551.066 261.462 551.038 256.045 556.454L258.873 559.283ZM578.331 616.653C584.109 611.374 584.044 602.429 578.592 596.977L575.763 599.805C579.685 603.727 579.642 610.037 575.633 613.699L578.331 616.653ZM218.908 613.453C214.817 609.802 214.733 603.423 218.69 599.466L215.862 596.637C210.36 602.139 210.355 611.181 216.244 616.437L218.908 613.453Z"
              fill="url(#paint3_linear_370_316)"
              fill-opacity="0.7"
              mask="url(#path-3-inside-2_370_316)"
            />
          </g>
          <g filter="url(#filter2_b_370_316)">
            <mask id="path-5-inside-3_370_316" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M217.607 196.394C212.921 191.707 212.909 184.08 217.803 179.609C318.615 87.513 474.141 87.8491 577.209 179.84C582.199 184.294 582.238 192.004 577.509 196.734L537.326 236.916C532.702 241.541 525.243 241.572 520.265 237.33C449.379 176.919 345.04 176.854 275.815 237.633C270.836 242.004 263.257 242.043 258.572 237.358L217.607 196.394Z"
              />
            </mask>
            <path
              onClick={() => {
                setrotation(`0`);
                console.log(rotation);
              }}
              className="fill-green-600"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M217.607 196.394C212.921 191.707 212.909 184.08 217.803 179.609C318.615 87.513 474.141 87.8491 577.209 179.84C582.199 184.294 582.238 192.004 577.509 196.734L537.326 236.916C532.702 241.541 525.243 241.572 520.265 237.33C449.379 176.919 345.04 176.854 275.815 237.633C270.836 242.004 263.257 242.043 258.572 237.358L217.607 196.394Z"
              fill="url(#paint4_linear_370_316)"
              fill-opacity="0.7"
            />
            <path
              d="M275.815 237.633L274.495 236.13L275.815 237.633ZM537.326 236.916L535.912 235.502L537.326 236.916ZM520.265 237.33L521.563 235.808L520.265 237.33ZM577.509 196.734L578.923 198.148L577.509 196.734ZM578.541 178.348C474.726 85.6904 318.042 85.3279 216.454 178.132L219.152 181.086C319.188 89.6981 473.556 90.0077 575.877 181.332L578.541 178.348ZM538.74 238.331L578.923 198.148L576.095 195.319L535.912 235.502L538.74 238.331ZM277.134 239.135C345.595 179.028 448.82 179.07 518.968 238.852L521.563 235.808C449.938 174.768 344.484 174.68 274.495 236.13L277.134 239.135ZM216.193 197.808L257.157 238.772L259.986 235.944L219.022 194.98L216.193 197.808ZM274.495 236.13C270.244 239.862 263.867 239.825 259.986 235.944L257.157 238.772C262.647 244.262 271.427 244.147 277.134 239.135L274.495 236.13ZM535.912 235.502C532.08 239.334 525.807 239.425 521.563 235.808L518.968 238.852C524.679 243.719 533.324 243.748 538.74 238.331L535.912 235.502ZM216.454 178.132C210.676 183.411 210.741 192.356 216.193 197.808L219.022 194.98C215.1 191.058 215.143 184.748 219.152 181.086L216.454 178.132ZM575.877 181.332C579.968 184.983 580.052 191.362 576.095 195.319L578.923 198.148C584.425 192.646 584.43 183.604 578.541 178.348L575.877 181.332Z"
              fill="url(#paint5_linear_370_316)"
              fill-opacity="0.7"
              mask="url(#path-5-inside-3_370_316)"
            />
          </g>
          <g filter="url(#filter3_b_370_316)">
            <mask id="path-7-inside-4_370_316" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M598.395 577.182C603.082 581.869 610.71 581.88 615.18 576.986C707.276 476.174 706.94 320.649 614.949 217.581C610.495 212.591 602.785 212.551 598.056 217.281L557.873 257.463C553.248 262.088 553.217 269.547 557.459 274.524C617.87 345.41 617.935 449.75 557.157 518.975C552.785 523.954 552.746 531.533 557.431 536.218L598.395 577.182Z"
              />
            </mask>
            <path
              onClick={() => {
                setrotation(`270`);
                console.log(rotation);
              }}
              className="fill-yellow-400"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M598.395 577.182C603.082 581.869 610.71 581.88 615.18 576.986C707.276 476.174 706.94 320.649 614.949 217.581C610.495 212.591 602.785 212.551 598.056 217.281L557.873 257.463C553.248 262.088 553.217 269.547 557.459 274.524C617.87 345.41 617.935 449.75 557.157 518.975C552.785 523.954 552.746 531.533 557.431 536.218L598.395 577.182Z"
              fill="url(#paint6_linear_370_316)"
              fill-opacity="0.7"
            />
            <path
              d="M557.157 518.975L558.66 520.294L557.157 518.975ZM557.873 257.463L559.287 258.878L557.873 257.463ZM557.459 274.524L558.982 273.227L557.459 274.524ZM614.949 217.581L616.441 216.249L614.949 217.581ZM598.056 217.281L596.641 215.866L598.056 217.281ZM616.441 216.249C709.099 320.064 709.461 476.748 616.657 578.335L613.704 575.637C705.091 475.601 704.781 321.234 613.457 218.912L616.441 216.249ZM556.459 256.049L596.641 215.866L599.47 218.695L559.287 258.878L556.459 256.049ZM555.654 517.655C615.761 449.194 615.719 345.97 555.937 275.821L558.982 273.227C620.021 344.851 620.109 450.305 558.66 520.294L555.654 517.655ZM596.981 578.596L556.017 537.632L558.845 534.804L599.809 575.768L596.981 578.596ZM558.66 520.294C554.927 524.545 554.964 530.922 558.845 534.804L556.017 537.632C550.527 532.143 550.642 523.363 555.654 517.655L558.66 520.294ZM559.287 258.878C555.455 262.71 555.364 268.982 558.982 273.227L555.937 275.821C551.07 270.111 551.042 261.466 556.459 256.049L559.287 258.878ZM616.657 578.335C611.379 584.113 602.433 584.048 596.981 578.596L599.809 575.768C603.731 579.69 610.041 579.647 613.704 575.637L616.657 578.335ZM613.457 218.912C609.806 214.822 603.427 214.738 599.47 218.695L596.641 215.866C602.143 210.365 611.185 210.36 616.441 216.249L613.457 218.912Z"
              fill="url(#paint7_linear_370_316)"
              fill-opacity="0.7"
              mask="url(#path-7-inside-4_370_316)"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_370_316"
              x="74.6964"
              y="178.117"
              width="202.201"
              height="438.893"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_370_316"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_370_316"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_370_316"
              x="177.78"
              y="517.893"
              width="438.893"
              height="202.201"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_370_316"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_370_316"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_b_370_316"
              x="178.112"
              y="74.6918"
              width="438.893"
              height="202.201"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_370_316"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_370_316"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_b_370_316"
              x="517.897"
              y="177.785"
              width="202.201"
              height="438.893"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="18" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_370_316"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_370_316"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_370_316"
              x1="51.7892"
              y1="345.615"
              x2="382.826"
              y2="322.46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#919191" />
              <stop offset="0.0001" stop-color="#919191" />
              <stop offset="1" stop-color="#909090" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_370_316"
              x1="51.7892"
              y1="345.615"
              x2="382.826"
              y2="322.46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#919191" />
              <stop offset="0.0001" stop-color="#919191" />
              <stop offset="1" stop-color="#909090" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_370_316"
              x1="449.174"
              y1="743"
              x2="472.33"
              y2="411.963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#919191" />
              <stop offset="0.0001" stop-color="#919191" />
              <stop offset="1" stop-color="#909090" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_370_316"
              x1="449.174"
              y1="743"
              x2="472.33"
              y2="411.963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#919191" />
              <stop offset="0.0001" stop-color="#919191" />
              <stop offset="1" stop-color="#909090" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_370_316"
              x1="345.611"
              y1="51.7845"
              x2="322.455"
              y2="382.822"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#919191" />
              <stop offset="0.0001" stop-color="#919191" />
              <stop offset="1" stop-color="#909090" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_370_316"
              x1="345.611"
              y1="51.7845"
              x2="322.455"
              y2="382.822"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#919191" />
              <stop offset="0.0001" stop-color="#919191" />
              <stop offset="1" stop-color="#909090" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_370_316"
              x1="743.005"
              y1="449.179"
              x2="411.968"
              y2="472.334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#919191" />
              <stop offset="0.0001" stop-color="#919191" />
              <stop offset="1" stop-color="#909090" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_370_316"
              x1="743.005"
              y1="449.179"
              x2="411.968"
              y2="472.334"
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
  );
}

export default Section3;

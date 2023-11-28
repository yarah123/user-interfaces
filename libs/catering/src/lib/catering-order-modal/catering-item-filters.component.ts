import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CateringOrderStateService } from './catering-order-state.service';

const ICONS = {
    coffee: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_605_8664)">
    <path d="M38.388 21.2474C37.8243 20.7996 37.1598 20.4847 36.4474 20.3278C35.735 20.1708 34.9944 20.1762 34.2846 20.3434C34.2476 19.7774 34.2049 19.2037 34.1483 18.6155C34.1243 18.3664 34.0043 18.1349 33.8119 17.9668C33.6195 17.7986 33.3687 17.706 33.1088 17.707H1.26151C1.00166 17.706 0.750839 17.7986 0.558442 17.9668C0.366045 18.1349 0.246035 18.3664 0.222073 18.6155C-0.42931 25.3581 0.106585 30.5307 4.80024 35.4799C8.88062 39.7819 15.7271 39.9998 17.0599 39.9998H17.3047C18.6375 39.9998 25.4863 39.7774 29.5643 35.4799C30.5412 34.4597 31.3937 33.3353 32.1052 32.1286C32.2481 32.1199 32.3875 32.0819 32.514 32.0174C34.0959 31.2139 35.6169 30.3039 37.0656 29.2943C38.3815 28.4227 39.3664 27.1618 39.871 25.7028C40.0702 24.9006 40.0372 24.0612 39.7758 23.2757C39.5144 22.4902 39.0344 21.7887 38.388 21.2474ZM28.0329 34.13C24.4699 37.8905 18.0323 37.9984 17.3093 37.9984H17.0645C16.3426 37.9984 9.90389 37.8872 6.34092 34.13C2.37257 29.9436 1.75351 25.466 2.21549 19.7085H32.1583C32.6214 25.4649 32.0024 29.9425 28.0329 34.13ZM37.8498 25.2091C37.4485 26.2369 36.7212 27.117 35.771 27.7243C35.024 28.2636 34.2434 28.7582 33.4334 29.2053C34.1268 27.0036 34.4428 24.7078 34.3689 22.4082C34.3839 22.4027 34.3989 22.4082 34.4139 22.3982C34.8447 22.2182 35.3192 22.1579 35.7837 22.2242C36.2482 22.2905 36.6841 22.4808 37.0421 22.7733C37.4001 23.0659 37.6658 23.4491 37.8092 23.8796C37.9525 24.3101 37.9678 24.7707 37.8533 25.2091H37.8498Z" fill="currentcolor"/>
    <path d="M9.43243 8.16274C9.85735 8.48322 10.2069 8.88673 10.4582 9.34669C10.7094 9.80666 10.8565 10.3126 10.89 10.8313C10.7939 11.9569 10.2754 13.0103 9.43128 13.7946C9.32937 13.883 9.24664 13.9899 9.18786 14.1092C9.12907 14.2286 9.0954 14.3579 9.08878 14.4898C9.08216 14.6217 9.10275 14.7536 9.14931 14.8778C9.19588 15.002 9.26753 15.1161 9.36012 15.2136C9.45271 15.311 9.56442 15.3898 9.6888 15.4455C9.81319 15.5012 9.9478 15.5326 10.0849 15.538C10.2219 15.5433 10.3587 15.5225 10.4874 15.4767C10.6161 15.4309 10.734 15.3611 10.8345 15.2712C12.1048 14.1093 12.8679 12.5254 12.9688 10.8413C12.9432 10.042 12.7392 9.25727 12.3708 8.5405C12.0023 7.82373 11.478 7.19166 10.8334 6.68722C10.4067 6.38353 10.055 5.99283 9.80341 5.54303C9.55184 5.09323 9.40662 4.59547 9.37815 4.08534C9.51392 3.18283 10.0073 2.36595 10.7548 1.80591C10.9718 1.64618 11.1147 1.41065 11.1528 1.15024C11.1908 0.889843 11.1208 0.625512 10.958 0.414392C10.7951 0.203272 10.5525 0.062327 10.2826 0.0220596C10.0127 -0.0182078 9.73715 0.0454338 9.51559 0.199206C8.90219 0.651996 8.39004 1.21933 8.0098 1.86721C7.62956 2.5151 7.38907 3.2302 7.30273 3.9697C7.30292 4.77855 7.49485 5.5767 7.86392 6.30333C8.23298 7.02996 8.76944 7.66592 9.43243 8.16274Z" fill="currentcolor"/>
    <path d="M23.0984 8.16274C23.5234 8.48322 23.8729 8.88673 24.1242 9.34669C24.3754 9.80666 24.5225 10.3126 24.556 10.8313C24.4599 11.9569 23.9414 13.0103 23.0973 13.7946C22.9954 13.883 22.9126 13.9899 22.8539 14.1092C22.7951 14.2286 22.7614 14.3579 22.7548 14.4898C22.7482 14.6217 22.7687 14.7536 22.8153 14.8778C22.8619 15.002 22.9335 15.1161 23.0261 15.2136C23.1187 15.311 23.2304 15.3898 23.3548 15.4455C23.4792 15.5012 23.6138 15.5326 23.7509 15.538C23.8879 15.5433 24.0247 15.5225 24.1534 15.4767C24.2821 15.4309 24.4 15.3611 24.5005 15.2712C25.7708 14.1093 26.5339 12.5254 26.6348 10.8413C26.6092 10.042 26.4052 9.25727 26.0368 8.5405C25.6683 7.82373 25.144 7.19166 24.4994 6.68722C24.0727 6.38353 23.721 5.99283 23.4694 5.54303C23.2178 5.09323 23.0726 4.59547 23.0442 4.08534C23.1799 3.18283 23.6733 2.36595 24.4208 1.80591C24.6378 1.64618 24.7807 1.41065 24.8188 1.15024C24.8568 0.889843 24.7868 0.625512 24.624 0.414392C24.4611 0.203272 24.2185 0.062327 23.9486 0.0220596C23.6787 -0.0182078 23.4032 0.0454338 23.1816 0.199206C22.5682 0.651996 22.0561 1.21933 21.6758 1.86721C21.2956 2.5151 21.0551 3.2302 20.9688 3.9697C20.9689 4.77855 21.1609 5.5767 21.5299 6.30333C21.899 7.02996 22.4355 7.66592 23.0984 8.16274Z" fill="currentcolor"/>
    <path d="M16.2645 8.16274C16.6894 8.48322 17.039 8.88673 17.2902 9.34669C17.5414 9.80666 17.6886 10.3126 17.722 10.8313C17.626 11.9569 17.1074 13.0103 16.2633 13.7946C16.1614 13.883 16.0787 13.9899 16.0199 14.1092C15.9611 14.2286 15.9274 14.3579 15.9208 14.4898C15.9142 14.6217 15.9348 14.7536 15.9813 14.8778C16.0279 15.002 16.0996 15.1161 16.1922 15.2136C16.2847 15.311 16.3964 15.3898 16.5208 15.4455C16.6452 15.5012 16.7798 15.5326 16.9169 15.538C17.054 15.5433 17.1908 15.5225 17.3194 15.4767C17.4481 15.4309 17.5661 15.3611 17.6666 15.2712C18.9368 14.1093 19.6999 12.5254 19.8009 10.8413C19.7752 10.042 19.5713 9.25727 19.2028 8.5405C18.8343 7.82373 18.31 7.19166 17.6654 6.68722C17.2387 6.38353 16.887 5.99283 16.6354 5.54303C16.3839 5.09323 16.2386 4.59547 16.2102 4.08534C16.346 3.18283 16.8393 2.36595 17.5869 1.80591C17.8038 1.64618 17.9468 1.41065 17.9848 1.15024C18.0228 0.889843 17.9528 0.625512 17.79 0.414392C17.6271 0.203272 17.3845 0.062327 17.1146 0.0220596C16.8447 -0.0182078 16.5692 0.0454338 16.3476 0.199206C15.7342 0.651996 15.2221 1.21933 14.8418 1.86721C14.4616 2.5151 14.2211 3.2302 14.1348 3.9697C14.1349 4.77855 14.3269 5.5767 14.6959 6.30333C15.065 7.02996 15.6015 7.66592 16.2645 8.16274Z" fill="currentcolor"/>
    <path d="M7.16328 29.7138C5.86597 27.7051 5.17938 25.3866 5.18141 23.0212C5.18141 22.7558 5.07191 22.5013 4.87697 22.3136C4.68204 22.1259 4.41765 22.0205 4.14198 22.0205C3.8663 22.0205 3.60191 22.1259 3.40698 22.3136C3.21204 22.5013 3.10254 22.7558 3.10254 23.0212C3.10081 25.7653 3.89738 28.4551 5.40201 30.7857C5.55001 31.0072 5.78275 31.1637 6.04976 31.2211C6.31677 31.2784 6.59652 31.2322 6.82832 31.0923C7.06012 30.9524 7.22529 30.7301 7.288 30.4737C7.35071 30.2174 7.30588 29.9475 7.16328 29.7227V29.7138Z" fill="currentcolor"/>
    <path d="M9.06498 32.7103C8.94112 32.6482 8.84235 32.548 8.78434 32.4257C8.73082 32.3026 8.65227 32.1911 8.55334 32.0977C8.45441 32.0043 8.33708 31.9309 8.20825 31.8818C8.07942 31.8327 7.9417 31.8089 7.80317 31.8118C7.66464 31.8146 7.5281 31.8441 7.40159 31.8986C7.27508 31.953 7.16115 32.0312 7.06649 32.1286C6.97184 32.226 6.89837 32.3407 6.8504 32.4658C6.80244 32.591 6.78094 32.7241 6.78719 32.8574C6.79344 32.9906 6.8273 33.1213 6.88678 33.2418C7.13536 33.7758 7.56332 34.2136 8.10177 34.4849C8.34682 34.6079 8.63256 34.6321 8.89616 34.5523C9.15975 34.4724 9.37959 34.295 9.50732 34.0591C9.63505 33.8232 9.6602 33.5481 9.57725 33.2943C9.49429 33.0405 9.31003 32.8289 9.06498 32.7059V32.7103Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_605_8664">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
    drinks: `<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8203)">
    <path d="M0 0L0.662157 8.11078C0.662157 8.12619 0.653028 8.1394 0.653028 8.15481C0.658117 8.18851 0.664982 8.22193 0.673584 8.25496L3.1852 39H25.1048L28.0034 0H0ZM25.7932 1.98093L25.4085 7.16985C25.3982 7.16985 25.3902 7.16985 25.3799 7.16985H2.64519L2.22279 1.98642L25.7932 1.98093ZM23.1948 37.0191H5.08147L2.80846 9.14527H25.2612L23.1948 37.0191Z" fill="currentcolor"/>
    <path d="M6.24983 23.3122C6.28864 23.3122 6.32861 23.3122 6.364 23.3122C6.49825 23.2972 6.6281 23.2567 6.74613 23.1933C6.86415 23.1298 6.96804 23.0445 7.05181 22.9423C7.13559 22.8401 7.19762 22.7229 7.23436 22.5975C7.2711 22.4722 7.28181 22.341 7.26589 22.2117C7.0661 20.5444 6.86517 18.8155 6.66538 17.0855C6.4576 15.2861 6.24869 13.4846 6.03862 11.7502C5.99894 11.4962 5.85848 11.267 5.64686 11.111C5.43525 10.955 5.16904 10.8843 4.90438 10.9138C4.63973 10.9434 4.39731 11.0708 4.22831 11.2694C4.0593 11.4679 3.9769 11.722 3.9985 11.978C4.20628 13.7091 4.41522 15.5084 4.623 17.3056C4.82392 19.0378 5.02485 20.77 5.22578 22.4395C5.25574 22.6807 5.37661 22.9029 5.56542 23.0638C5.75424 23.2247 5.99781 23.3131 6.24983 23.3122Z" fill="currentcolor"/>
    <path d="M6.05485 24.414C5.9204 24.4288 5.79029 24.469 5.67201 24.5323C5.55372 24.5957 5.44958 24.6809 5.36557 24.7832C5.28156 24.8854 5.21933 25.0027 5.18245 25.1282C5.14557 25.2537 5.13477 25.385 5.15067 25.5145L5.31392 26.8857C5.34197 27.1276 5.46141 27.351 5.64945 27.5134C5.83748 27.6758 6.08096 27.7658 6.33341 27.7662C6.37223 27.7662 6.41105 27.7662 6.44759 27.7607C6.5817 27.7462 6.71152 27.7063 6.82966 27.6434C6.9478 27.5806 7.05194 27.4959 7.13612 27.3942C7.22029 27.2925 7.28287 27.1758 7.32027 27.0508C7.35766 26.9258 7.36913 26.7949 7.35404 26.6656L7.1908 25.2889C7.15839 25.0286 7.02114 24.791 6.80864 24.6273C6.59614 24.4636 6.32541 24.387 6.05485 24.414Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8203">
    <rect width="28" height="39" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
    snacks: `<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9739 12.3839H39.9673C39.8416 11.3068 39.529 10.2613 39.0441 9.29623C38.2937 7.89066 37.2396 6.67826 35.9616 5.75118C34.6837 4.82411 33.2156 4.20677 31.669 3.94605C31.658 3.94605 31.6471 3.94605 31.635 3.94605C29.7116 1.41671 26.4577 0.0219894 22.162 0.00292969C17.7851 0.0287164 14.3819 1.44362 12.4015 3.94605C12.3773 3.94605 12.3553 3.94605 12.3312 3.94605C10.7845 4.20721 9.31631 4.82484 8.03823 5.75207C6.76016 6.6793 5.70574 7.89174 4.95505 9.29734C4.47112 10.2623 4.15888 11.3074 4.03289 12.3839H4.02631C2.34137 14.0479 1.12087 16.1402 0.490328 18.4457C-0.140217 20.7512 -0.15805 23.1866 0.438675 25.5015C1.16762 28.1328 2.30494 29.6228 3.81991 29.9323C4.02143 29.975 4.22667 29.9968 4.43249 29.9973C5.03503 29.925 5.61546 29.722 6.13483 29.4017C6.6542 29.0815 7.1005 28.6516 7.44377 28.1407C8.13563 27.3077 8.96125 26.601 9.88529 26.0508C10.6588 25.658 11.4715 25.3513 12.3092 25.136C12.7407 25.007 13.2105 24.8624 13.7122 24.6875C14.2182 24.7717 14.7299 24.8148 15.2426 24.8164C16.5191 24.8132 17.7827 24.5561 18.963 24.0597C19.2243 24.1678 19.4915 24.2603 19.7633 24.3366C20.4624 24.5255 21.1737 24.6634 21.892 24.7492C21.9649 24.7584 22.0386 24.7584 22.1115 24.7492C22.8298 24.6634 23.5411 24.5255 24.2402 24.3366C24.5121 24.2602 24.7794 24.1674 25.0405 24.0585C26.6985 24.7663 28.5179 24.9843 30.2913 24.6875C30.7941 24.8568 31.2639 25.0014 31.6954 25.136C32.5326 25.3518 33.3449 25.6585 34.1182 26.0508C35.0422 26.6006 35.8675 27.3074 36.5586 28.1407C36.9021 28.6516 37.3486 29.0816 37.8682 29.4018C38.3877 29.722 38.9683 29.925 39.571 29.9973C39.7765 29.9968 39.9813 29.975 40.1825 29.9323C41.6986 29.6228 42.8359 28.1317 43.5648 25.5015C44.1604 23.1863 44.1418 20.7509 43.5107 18.4455C42.8796 16.1401 41.6588 14.0479 39.9739 12.3839ZM8.94886 24.276C7.83296 24.927 6.83512 25.7694 5.99906 26.7661C5.09447 27.7561 4.76074 28.07 4.20854 27.9568C3.49936 27.8111 2.83628 26.7459 2.34227 24.9543C1.92223 23.3112 1.86627 21.5932 2.17848 19.9252C2.4907 18.2572 3.16322 16.6814 4.14706 15.3124C4.29059 16.0686 4.52165 16.8048 4.83539 17.5054C6.01506 20.1182 8.00316 22.2624 10.4935 23.6078C9.96108 23.7857 9.44437 24.0092 8.94886 24.276ZM14.1514 22.7266C13.9962 22.6555 13.8256 22.6265 13.6562 22.6425C12.1235 22.2411 10.6976 21.4958 9.48221 20.461C8.26685 19.4261 7.2926 18.1277 6.63029 16.66C6.16216 15.6502 5.92631 14.5445 5.94077 13.4274C5.95523 12.3102 6.21962 11.2112 6.71373 10.2145C7.64306 8.45293 9.17618 7.10357 11.0193 6.42493C9.99726 9.36013 10.6472 13.6553 12.7165 17.6365C13.6785 19.5654 15.0132 21.2752 16.6401 22.6627C15.8195 22.8232 14.9787 22.8448 14.1514 22.7266ZM23.7451 22.3903C23.1716 22.5448 22.5889 22.6613 22.0007 22.7389C21.4117 22.6614 20.8283 22.5449 20.254 22.3903C18.2033 21.8521 16.0374 19.7219 14.462 16.6925C12.6704 13.2438 12.0469 9.47672 12.8834 7.09538C14.473 2.55356 19.9093 2.03223 22.1653 2.01765C25.4445 2.03783 29.66 2.93475 31.1157 7.09538C31.9501 9.4756 31.3353 13.2427 29.5393 16.6903C27.9628 19.7197 25.798 21.851 23.7451 22.3891V22.3903ZM27.3579 22.6649C28.9873 21.2782 30.3233 19.5673 31.2848 17.6365C33.353 13.6542 34.0019 9.36013 32.9798 6.42493C34.8231 7.1032 36.3564 8.45266 37.2854 10.2145C37.7798 11.2111 38.0446 12.31 38.0594 13.4271C38.0743 14.5442 37.8388 15.6501 37.371 16.66C36.7089 18.1267 35.7356 19.4246 34.5215 20.4595C33.3074 21.4945 31.883 22.2405 30.3517 22.6436C30.1773 22.6248 30.0013 22.6546 29.8423 22.73C29.0162 22.8474 28.1769 22.825 27.3579 22.6638V22.6649ZM41.6601 24.9555C41.165 26.7493 40.5009 27.8122 39.7939 27.9579C39.2516 28.07 38.9156 27.7595 38.0033 26.7673C37.1671 25.7707 36.1693 24.9284 35.0536 24.2772C34.5589 24.0089 34.0429 23.7839 33.5111 23.6045C36.0014 22.2591 37.9895 20.1148 39.1692 17.502C39.4825 16.8016 39.7135 16.0659 39.8575 15.3101C40.8408 16.6799 41.5127 18.2562 41.8245 19.9245C42.1364 21.5927 42.0802 23.311 41.6601 24.9543V24.9555Z" fill="currentColor"/>
    <path d="M17.3428 15.7782C16.1626 13.048 15.7674 10.0313 16.2032 7.08028C16.2231 6.94931 16.2174 6.81565 16.1867 6.68691C16.1559 6.55816 16.1006 6.43686 16.024 6.32994C15.9473 6.22302 15.8508 6.13257 15.7399 6.06375C15.629 5.99493 15.5059 5.94908 15.3777 5.92884C15.2495 5.90859 15.1186 5.91434 14.9925 5.94576C14.8665 5.97717 14.7477 6.03365 14.643 6.11194C14.5383 6.19023 14.4497 6.2888 14.3824 6.40205C14.315 6.5153 14.2701 6.641 14.2503 6.77197C13.7579 10.1061 14.2045 13.5144 15.538 16.5989C15.5889 16.7227 15.6636 16.8349 15.7575 16.9289C15.8515 17.0229 15.9628 17.0967 16.0851 17.1462C16.2074 17.1956 16.3381 17.2197 16.4695 17.2168C16.601 17.214 16.7306 17.1844 16.8507 17.1298C16.9709 17.0752 17.0791 16.9966 17.1691 16.8987C17.2591 16.8008 17.3291 16.6855 17.3749 16.5597C17.4208 16.4338 17.4415 16.2998 17.436 16.1656C17.4305 16.0315 17.3988 15.8997 17.3428 15.7782Z" fill="currentColor"/>
    <path d="M19.696 19.2067C19.2865 18.9533 18.9569 18.5852 18.7464 18.146C18.6921 18.023 18.6143 17.9124 18.5174 17.8206C18.4206 17.7288 18.3067 17.6578 18.1825 17.6118C18.0583 17.5658 17.9263 17.5456 17.7944 17.5526C17.6625 17.5596 17.5333 17.5935 17.4144 17.6524C17.2955 17.7112 17.1894 17.7939 17.1023 17.8953C17.0153 17.9968 16.949 18.1151 16.9075 18.2432C16.866 18.3712 16.85 18.5065 16.8606 18.641C16.8712 18.7755 16.908 18.9065 16.969 19.0262C17.3477 19.8156 17.9407 20.4772 18.6772 20.9321C18.7884 21.0004 18.9117 21.0457 19.0401 21.0654C19.1684 21.085 19.2993 21.0786 19.4253 21.0466C19.5512 21.0146 19.6698 20.9576 19.7741 20.8788C19.8785 20.8 19.9666 20.701 20.0335 20.5874C20.1004 20.4738 20.1448 20.3478 20.164 20.2168C20.1832 20.0857 20.177 19.952 20.1456 19.8234C20.1143 19.6947 20.0585 19.5737 19.9813 19.4671C19.9041 19.3605 19.8072 19.2705 19.696 19.2022V19.2067Z" fill="currentColor"/>
    </svg>
    `,
    meals: `<svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8219)">
    <path d="M42.941 2.11595C42.7415 1.9851 42.4981 1.93888 42.2644 1.98745C42.0307 2.03602 41.8259 2.1754 41.695 2.37496L34.006 14.102C33.3796 13.6496 32.7178 13.2483 32.027 12.902C32.0551 12.8557 32.0786 12.8068 32.097 12.756L35.4431 1.14795C35.5094 0.91841 35.4818 0.671927 35.3663 0.46273C35.2509 0.253533 35.0571 0.098759 34.8275 0.0324549C34.598 -0.0338492 34.3515 -0.0062506 34.1423 0.109178C33.9331 0.224607 33.7783 0.41841 33.712 0.647954L30.382 12.202C28.8498 11.6558 27.2357 11.3751 25.609 11.372C23.5868 11.3208 21.5789 11.7248 19.7337 12.5541C17.8886 13.3834 16.2534 14.6167 14.949 16.163C13.472 15.5617 11.8698 15.3326 10.2834 15.4959C8.69704 15.6593 7.17511 16.21 5.85156 17.0996C4.528 17.9893 3.44339 19.1906 2.69314 20.5978C1.94289 22.0051 1.54999 23.5752 1.54904 25.17H0.900049C0.781014 25.1699 0.663159 25.1936 0.553309 25.2394C0.443459 25.2853 0.343801 25.3524 0.260096 25.4371C0.176391 25.5217 0.110305 25.6221 0.0656684 25.7325C0.0210317 25.8428 -0.00126705 25.9609 5.5571e-05 26.08C0.0892682 29.5951 1.16582 33.0142 3.10662 35.9464C5.04743 38.8786 7.77413 41.2054 10.975 42.661V45.147C10.975 45.3856 11.0699 45.6146 11.2386 45.7834C11.4074 45.9521 11.6364 46.047 11.8751 46.047H29.692C29.9307 46.047 30.1596 45.9521 30.3284 45.7834C30.4972 45.6146 30.592 45.3856 30.592 45.147V42.665C33.7927 41.2092 36.5191 38.8822 38.4597 35.9501C40.4004 33.018 41.4768 29.599 41.566 26.084C41.5674 25.9649 41.5451 25.8468 41.5004 25.7365C41.4558 25.6261 41.3897 25.5257 41.306 25.4411C41.2223 25.3565 41.1226 25.2893 41.0128 25.2434C40.9029 25.1976 40.7851 25.1739 40.666 25.174H39.976C39.82 21.3924 38.1759 17.8258 35.402 15.251L43.197 3.36196C43.3282 3.16274 43.3749 2.91961 43.3269 2.68598C43.2789 2.45235 43.1401 2.24733 42.941 2.11595ZM11.292 17.249C13.3949 17.2513 15.4113 18.0864 16.9 19.5716C18.3887 21.0568 19.2286 23.0711 19.236 25.174H18.476C18.4537 23.2835 17.6871 21.4779 16.3423 20.149C14.9976 18.82 13.1832 18.0747 11.2925 18.0747C9.4019 18.0747 7.58747 18.82 6.24273 20.149C4.89799 21.4779 4.13134 23.2835 4.10903 25.174H3.34905C3.35619 23.0712 4.1959 21.0569 5.68447 19.5717C7.17304 18.0865 9.18928 17.2513 11.292 17.249ZM30.46 25.174C30.3295 24.0738 29.829 23.0506 29.0406 22.2723C28.2521 21.494 27.2226 21.0067 26.1208 20.8904C25.019 20.7742 23.9104 21.0358 22.9769 21.6324C22.0433 22.2291 21.3403 23.1252 20.983 24.174C20.8976 23.3879 20.7156 22.6154 20.441 21.874C21.2275 20.8287 22.312 20.0461 23.5519 19.6292C24.7917 19.2124 26.1287 19.1807 27.3869 19.5384C28.6451 19.8962 29.7655 20.6265 30.6005 21.6334C31.4356 22.6402 31.9461 23.8763 32.065 25.179L30.46 25.174ZM28.66 25.174H22.555C22.6942 24.4666 23.0746 23.8296 23.6314 23.3717C24.1882 22.9138 24.8867 22.6634 25.6075 22.6634C26.3284 22.6634 27.0269 22.9138 27.5837 23.3717C28.1404 23.8296 28.5209 24.4666 28.66 25.174ZM33.8661 25.174C33.7524 23.5697 33.1734 22.0335 32.1999 20.7533C31.2265 19.4731 29.9008 18.5046 28.3853 17.9663C26.8698 17.428 25.2303 17.3434 23.6674 17.7227C22.1045 18.102 20.6862 18.9288 19.5861 20.102C19.3425 19.7013 19.0704 19.3187 18.772 18.957C19.6483 18.0285 20.7095 17.2942 21.8871 16.8014C23.0648 16.3086 24.3327 16.0683 25.609 16.096C28.0701 16.1 30.4374 17.0409 32.2298 18.7275C34.0222 20.414 35.1053 22.7196 35.259 25.176L33.8661 25.174ZM15.376 25.174C15.376 24.0911 14.9459 23.0525 14.1802 22.2868C13.4145 21.5211 12.3759 21.091 11.2931 21.091C10.2102 21.091 9.17165 21.5211 8.40594 22.2868C7.64023 23.0525 7.21005 24.0911 7.21005 25.174H5.91003C5.92931 23.7594 6.5048 22.4093 7.51193 21.4158C8.51906 20.4223 9.87684 19.8653 11.2915 19.8653C12.7062 19.8653 14.064 20.4223 15.0712 21.4158C16.0783 22.4093 16.6537 23.7594 16.673 25.174H15.376ZM13.576 25.174H9.01205C9.02455 24.5769 9.27051 24.0085 9.6972 23.5906C10.1239 23.1728 10.6973 22.9387 11.2945 22.9387C11.8918 22.9387 12.4652 23.1728 12.8919 23.5906C13.3186 24.0085 13.5646 24.5769 13.5771 25.174H13.576ZM12.7761 44.251V43.132H28.792V44.251H12.7761ZM29.136 41.332H12.436C9.52258 40.1406 6.99281 38.1712 5.12332 35.6389C3.25383 33.1066 2.11663 30.109 1.83605 26.974H39.7281C39.4482 30.1081 38.3122 33.1051 36.4441 35.6373C34.5761 38.1695 32.048 40.1395 29.136 41.332ZM38.178 25.174H37.0601C36.9048 22.2401 35.6312 19.4773 33.5013 17.4538C31.3713 15.4303 28.547 14.2998 25.609 14.295C24.0957 14.2643 22.5927 14.55 21.1962 15.1338C19.7996 15.7176 18.5404 16.5865 17.499 17.685C17.2087 17.4481 16.9052 17.2277 16.5901 17.025C17.7218 15.7645 19.1155 14.7668 20.6734 14.1017C22.2314 13.4367 23.9159 13.1204 25.609 13.175C28.8438 13.1792 31.9531 14.4275 34.2929 16.6611C36.6327 18.8948 38.0237 21.9428 38.178 25.174Z" fill="currentColor"/>
    <path d="M3.39209 30.1722C4.045 32.6025 5.31628 34.8222 7.08209 36.6152C7.16443 36.7021 7.26327 36.7717 7.37286 36.8199C7.48244 36.8682 7.60056 36.8941 7.72027 36.8961C7.83999 36.8981 7.95888 36.8762 8.07003 36.8317C8.18118 36.7872 8.28235 36.7209 8.36758 36.6368C8.45281 36.5528 8.52038 36.4525 8.56637 36.342C8.61237 36.2314 8.63585 36.1128 8.63543 35.9931C8.63501 35.8733 8.6107 35.7549 8.56393 35.6447C8.51716 35.5344 8.44888 35.4347 8.36306 35.3512C6.81633 33.7796 5.70257 31.8346 5.13006 29.7052C5.1013 29.589 5.04966 29.4797 4.97815 29.3837C4.90663 29.2878 4.81669 29.207 4.71359 29.1462C4.61049 29.0854 4.49631 29.0458 4.37771 29.0297C4.25912 29.0136 4.1385 29.0213 4.02291 29.0523C3.90733 29.0834 3.7991 29.1372 3.70456 29.2106C3.61001 29.284 3.53106 29.3755 3.47232 29.4798C3.41357 29.584 3.3762 29.699 3.36242 29.8179C3.34865 29.9368 3.35875 30.0572 3.39209 30.1722Z" fill="#323232"/>
    <path d="M10.5356 39.5502C10.7282 39.6767 10.962 39.7245 11.1889 39.6838C11.4157 39.643 11.6182 39.5168 11.7547 39.3312C11.8913 39.1456 11.9514 38.9146 11.9227 38.6859C11.8941 38.4573 11.7788 38.2483 11.6006 38.1022L10.3336 37.1752C10.1407 37.0392 9.90209 36.9844 9.66918 37.0226C9.43627 37.0609 9.2277 37.1891 9.08843 37.3797C8.94915 37.5702 8.89031 37.8079 8.92458 38.0414C8.95884 38.2749 9.08345 38.4857 9.27159 38.6282L10.5356 39.5502Z" fill="#323232"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8219">
    <rect width="43.348" height="46.051" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
};

@Component({
    selector: 'catering-item-filters',
    template: `
        <div class="px-4 mt-3 mb-2" [class.sm:hidden]="!search">
            <mat-form-field appearance="outline" class="w-full h-14">
                <app-icon matPrefix class="text-xl">search</app-icon>
                <input
                    matInput
                    [ngModel]="(filters | async)?.search"
                    (ngModelChange)="setFilters({ search: $event })"
                    placeholder="Search menu..."
                />
            </mat-form-field>
        </div>
        <h3 class="hidden sm:block font-medium px-2 py-2" *ngIf="!search" i18n>
            Options
        </h3>
        <div class="flex flex-col px-2" *ngIf="!search">
            <mat-checkbox
                [(ngModel)]="at_time"
                (ngModelChange)="at_timeChange.next($event)"
                matTooltip="Deliver at exactly specified time. Note that changes to the booking will not be reflected in the order if this is set."
            >
                Exact Time
            </mat-checkbox>
            <label>Deliver After:</label>
            <a-duration-field
                [(ngModel)]="offset"
                (ngModelChange)="offsetChange.next($event)"
                [time]="(filters | async)?.date"
                [step]="5"
                [min]="0"
                [max]="(filters | async)?.duration || 60"
            ></a-duration-field>
        </div>
        <h3 class="hidden sm:block font-medium px-2 py-4" *ngIf="!search" i18n>
            Catergories
        </h3>
        <div
            class="flex flex-col px-2 space-y-4"
            [class.sm:hidden]="search"
            [class.sm:pt-1]="!search"
        >
            <mat-checkbox
                *ngFor="let item of categories | async"
                [attr.name]="item"
                [ngModel]="(filters | async)?.categories?.includes(item)"
                (ngModelChange)="toggleCategory(item)"
            >
                {{ item }}
            </mat-checkbox>
        </div>
    `,
    styles: [
        `
            :host {
                min-width: 16rem;
            }
        `,
    ],
})
export class CateringItemFiltersComponent {
    @Input() public search = false;

    @Input() public at_time = false;
    @Output() public at_timeChange = new EventEmitter<boolean>();
    @Input() public offset = 0;
    @Output() public offsetChange = new EventEmitter<number>();

    public readonly icons = ICONS;

    public readonly filters = this._state.filters;

    public readonly setFilters = (f) => this._state.setFilters(f);

    public readonly categories = this._state.categories;

    constructor(private _state: CateringOrderStateService) {}

    public async toggleCategory(name: string) {
        const { categories } = await this.filters.pipe(take(1)).toPromise();
        if (categories.includes(name))
            this.setFilters({
                categories: categories.filter((_) => _ !== name),
            });
        else this.setFilters({ categories: [...categories, name] });
    }

    public async toggleTag(tag: string) {
        const { tags } = await this.filters.pipe(take(1)).toPromise();
        if (tags.includes(tag))
            this.setFilters({ tags: tags.filter((_) => _ !== tag) });
        else this.setFilters({ tags: [...tags, tag] });
    }
}

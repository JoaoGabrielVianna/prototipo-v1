import React from "react";

const DestaqueIcon = ({ ativo }) => {
    if (ativo) {
        return(
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_170_496)">
<path d="M20.65 41.5917L28 37.1583L35.35 41.65L33.425 33.25L39.9 27.65L31.3833 26.8917L28 18.9583L24.6167 26.8333L16.1 27.5917L22.575 33.25L20.65 41.5917ZM28 42.6417L18.3167 48.475C17.8889 48.7472 17.4417 48.8639 16.975 48.825C16.5083 48.7861 16.1 48.6305 15.75 48.3583C15.4 48.0861 15.1278 47.7458 14.9333 47.3375C14.7389 46.9292 14.7 46.4722 14.8167 45.9667L17.3833 34.9417L8.80833 27.5333C8.41944 27.1833 8.17638 26.7847 8.07916 26.3375C7.98194 25.8903 8.01111 25.4528 8.16666 25.025C8.32222 24.5972 8.55555 24.2472 8.86666 23.975C9.17777 23.7028 9.60555 23.5278 10.15 23.45L21.4667 22.4583L25.8417 12.075C26.0361 11.6083 26.3375 11.2583 26.7458 11.025C27.1542 10.7917 27.5722 10.675 28 10.675C28.4278 10.675 28.8458 10.7917 29.2542 11.025C29.6625 11.2583 29.9639 11.6083 30.1583 12.075L34.5333 22.4583L45.85 23.45C46.3944 23.5278 46.8222 23.7028 47.1333 23.975C47.4444 24.2472 47.6778 24.5972 47.8333 25.025C47.9889 25.4528 48.018 25.8903 47.9208 26.3375C47.8236 26.7847 47.5805 27.1833 47.1917 27.5333L38.6167 34.9417L41.1833 45.9667C41.3 46.4722 41.2611 46.9292 41.0667 47.3375C40.8722 47.7458 40.6 48.0861 40.25 48.3583C39.9 48.6305 39.4917 48.7861 39.025 48.825C38.5583 48.8639 38.1111 48.7472 37.6833 48.475L28 42.6417Z" fill="url(#paint0_linear_170_496)"/>
</g>
<path d="M28.7822 35.8784C28.3047 35.5866 27.7044 35.5849 27.2253 35.8739L22.908 38.478L24.0366 33.5873C24.161 33.0483 23.9786 32.4845 23.562 32.1205L19.7327 28.7741L24.7497 28.3274C25.299 28.2785 25.7772 27.9321 25.9949 27.4254L27.9949 22.7701L30.0036 27.4801C30.2205 27.9887 30.6996 28.3367 31.2503 28.3857L36.2423 28.8302L32.4438 32.1154C32.0239 32.4786 31.8389 33.0439 31.9629 33.5851L33.092 38.5122L28.7822 35.8784ZM14.8291 49.5423L15.75 48.3583L14.8291 49.5424C15.4219 50.0035 16.1109 50.2582 16.8504 50.3198C17.6644 50.3876 18.4289 50.1769 19.1047 49.7514L28 44.3928L36.8952 49.7513C37.571 50.1768 38.3355 50.3876 39.1496 50.3198C39.8891 50.2582 40.578 50.0035 41.1709 49.5424C41.7092 49.1237 42.1281 48.5974 42.4209 47.9824C42.7821 47.224 42.826 46.414 42.6449 45.6294L42.6443 45.6265L40.2831 35.4842L48.1723 28.6684C48.1752 28.6659 48.1781 28.6634 48.181 28.6608C48.1857 28.6567 48.1904 28.6525 48.1951 28.6483C48.783 28.1192 49.2133 27.4534 49.3866 26.6561C49.5436 25.9337 49.4959 25.2079 49.243 24.5124C49.01 23.8715 48.6413 23.3013 48.1211 22.8461C47.53 22.329 46.8012 22.0706 46.0621 21.9651C46.0351 21.9612 46.0081 21.9581 45.9809 21.9557L35.5647 21.0429L31.5429 11.4981C31.5425 11.497 31.5421 11.496 31.5416 11.4949C31.2298 10.7482 30.7156 10.1325 29.9984 9.72262C29.3865 9.37299 28.7142 9.17499 28 9.17499C27.2858 9.17499 26.6135 9.37299 26.0016 9.72262C25.2844 10.1325 24.7703 10.7481 24.4584 11.4948C24.4579 11.4959 24.4575 11.497 24.457 11.4981L20.4353 21.0429L10.0191 21.9557C9.99191 21.9581 9.96484 21.9612 9.93786 21.9651C9.19881 22.0706 8.46994 22.329 7.8789 22.8461C7.35869 23.3013 6.99003 23.8715 6.75697 24.5124C6.50404 25.2079 6.45634 25.9337 6.6134 26.6561C6.78673 27.4534 7.21698 28.1192 7.80488 28.6483C7.81242 28.655 7.82002 28.6618 7.8277 28.6684L15.7169 35.4842L13.3557 45.6265L13.3551 45.6294C13.174 46.414 13.2179 47.224 13.579 47.9824C13.8719 48.5974 14.2908 49.1237 14.8291 49.5423Z" stroke="url(#paint1_linear_170_496)" stroke-width="3" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_170_496" x="5.02307" y="7.67499" width="45.9539" height="48.1573" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.970833 0 0 0 0 0.546094 0 0 0 0 0.800937 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_170_496"/>
</filter>
<linearGradient id="paint0_linear_170_496" x1="28" y1="10.675" x2="28" y2="48.8323" gradientUnits="userSpaceOnUse">
<stop stop-color="#F72046"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint1_linear_170_496" x1="28" y1="10.675" x2="28" y2="48.8323" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7206D" stop-opacity="0.51"/>
<stop offset="1" stop-color="#FF007A" stop-opacity="0.06"/>
</linearGradient>
</defs>
</svg>

        )
    }
    else {
        return(
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.75 29.7083L20 26.5417L25.25 29.75L23.875 23.75L28.5 19.75L22.4167 19.2083L20 13.5417L17.5833 19.1667L11.5 19.7083L16.125 23.75L14.75 29.7083ZM20 30.4583L13.0833 34.625C12.7778 34.8194 12.4583 34.9028 12.125 34.875C11.7917 34.8472 11.5 34.7361 11.25 34.5417C11 34.3472 10.8056 34.1042 10.6667 33.8125C10.5278 33.5208 10.5 33.1944 10.5833 32.8333L12.4167 24.9583L6.29167 19.6667C6.01389 19.4167 5.84028 19.1319 5.77084 18.8125C5.70139 18.4931 5.72223 18.1806 5.83334 17.875C5.94445 17.5694 6.11112 17.3194 6.33334 17.125C6.55556 16.9306 6.86112 16.8056 7.25 16.75L15.3333 16.0417L18.4583 8.625C18.5972 8.29167 18.8125 8.04167 19.1042 7.875C19.3958 7.70833 19.6944 7.625 20 7.625C20.3056 7.625 20.6042 7.70833 20.8958 7.875C21.1875 8.04167 21.4028 8.29167 21.5417 8.625L24.6667 16.0417L32.75 16.75C33.1389 16.8056 33.4444 16.9306 33.6667 17.125C33.8889 17.3194 34.0556 17.5694 34.1667 17.875C34.2778 18.1806 34.2986 18.4931 34.2292 18.8125C34.1597 19.1319 33.9861 19.4167 33.7083 19.6667L27.5833 24.9583L29.4167 32.8333C29.5 33.1944 29.4722 33.5208 29.3333 33.8125C29.1944 34.1042 29 34.3472 28.75 34.5417C28.5 34.7361 28.2083 34.8472 27.875 34.875C27.5417 34.9028 27.2222 34.8194 26.9167 34.625L20 30.4583Z" fill="white"/>
            </svg>

        )
    }
}

export default DestaqueIcon;
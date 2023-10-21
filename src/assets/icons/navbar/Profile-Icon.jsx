import React from "react";

const ProfileIcon = ({ ativo }) => {
    if (ativo) {
        return(
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_170_145)">
<path d="M28 28C25.4333 28 23.2361 27.0861 21.4083 25.2583C19.5805 23.4306 18.6666 21.2333 18.6666 18.6667C18.6666 16.1 19.5805 13.9028 21.4083 12.075C23.2361 10.2472 25.4333 9.33334 28 9.33334C30.5666 9.33334 32.7639 10.2472 34.5916 12.075C36.4194 13.9028 37.3333 16.1 37.3333 18.6667C37.3333 21.2333 36.4194 23.4306 34.5916 25.2583C32.7639 27.0861 30.5666 28 28 28ZM9.33331 42V40.1333C9.33331 38.8111 9.67359 37.5958 10.3541 36.4875C11.0347 35.3792 11.9389 34.5333 13.0666 33.95C15.4778 32.7445 17.9278 31.8403 20.4166 31.2375C22.9055 30.6347 25.4333 30.3333 28 30.3333C30.5666 30.3333 33.0944 30.6347 35.5833 31.2375C38.0722 31.8403 40.5222 32.7445 42.9333 33.95C44.0611 34.5333 44.9653 35.3792 45.6458 36.4875C46.3264 37.5958 46.6666 38.8111 46.6666 40.1333V42C46.6666 43.2833 46.2097 44.382 45.2958 45.2958C44.3819 46.2097 43.2833 46.6667 42 46.6667H14C12.7166 46.6667 11.618 46.2097 10.7041 45.2958C9.79026 44.382 9.33331 43.2833 9.33331 42ZM14 42H42V40.1333C42 39.7056 41.893 39.3167 41.6791 38.9667C41.4653 38.6167 41.1833 38.3445 40.8333 38.15C38.7333 37.1 36.6139 36.3125 34.475 35.7875C32.3361 35.2625 30.1778 35 28 35C25.8222 35 23.6639 35.2625 21.525 35.7875C19.3861 36.3125 17.2666 37.1 15.1666 38.15C14.8166 38.3445 14.5347 38.6167 14.3208 38.9667C14.1069 39.3167 14 39.7056 14 40.1333V42ZM28 23.3333C29.2833 23.3333 30.3819 22.8764 31.2958 21.9625C32.2097 21.0486 32.6666 19.95 32.6666 18.6667C32.6666 17.3833 32.2097 16.2847 31.2958 15.3708C30.3819 14.457 29.2833 14 28 14C26.7166 14 25.618 14.457 24.7041 15.3708C23.7903 16.2847 23.3333 17.3833 23.3333 18.6667C23.3333 19.95 23.7903 21.0486 24.7041 21.9625C25.618 22.8764 26.7166 23.3333 28 23.3333Z" fill="url(#paint0_linear_170_145)"/>
</g>
<path d="M12.3958 32.6084L12.3775 32.6177C11.0011 33.3296 9.89568 34.3675 9.07589 35.7026C8.24782 37.0512 7.83331 38.5389 7.83331 40.1333V42C7.83331 43.6843 8.45054 45.1636 9.64348 46.3565C10.8364 47.5495 12.3157 48.1667 14 48.1667H42C43.6843 48.1667 45.1635 47.5495 46.3565 46.3565C47.5494 45.1636 48.1666 43.6843 48.1666 42V40.1333C48.1666 38.5389 47.7521 37.0512 46.9241 35.7026C46.1043 34.3675 44.9989 33.3296 43.6224 32.6177L43.6041 32.6084C41.0971 31.3549 38.5409 30.4104 35.9364 29.7797C34.4169 29.4116 32.8832 29.151 31.3359 28.9976C32.9347 28.4878 34.3795 27.5918 35.6523 26.319C37.7591 24.2122 38.8333 21.6343 38.8333 18.6667C38.8333 15.699 37.7591 13.1212 35.6523 11.0143C33.5455 8.90751 30.9676 7.83334 28 7.83334C25.0323 7.83334 22.4545 8.90751 20.3477 11.0143C18.2408 13.1212 17.1666 15.699 17.1666 18.6667C17.1666 21.6343 18.2408 24.2122 20.3477 26.319C21.6205 27.5918 23.0653 28.4878 24.664 28.9976C23.1167 29.151 21.5831 29.4116 20.0636 29.7797C17.4591 30.4104 14.9028 31.3549 12.3958 32.6084ZM40.5 40.1333V40.5H15.5V40.1333C15.5 39.9692 15.5371 39.853 15.6007 39.7488C15.6779 39.6225 15.7656 39.5377 15.8735 39.4737C17.8683 38.4793 19.871 37.738 21.8825 37.2443C23.9057 36.7477 25.9441 36.5 28 36.5C30.0559 36.5 32.0942 36.7477 34.1174 37.2443C36.1289 37.738 38.1317 38.4794 40.1265 39.4737C40.2343 39.5377 40.322 39.6225 40.3992 39.7488C40.4629 39.853 40.5 39.9692 40.5 40.1333ZM30.2352 20.9018C29.6003 21.5367 28.8823 21.8333 28 21.8333C27.1176 21.8333 26.3996 21.5367 25.7648 20.9018C25.13 20.267 24.8333 19.549 24.8333 18.6667C24.8333 17.7843 25.13 17.0663 25.7648 16.4315C26.3996 15.7967 27.1176 15.5 28 15.5C28.8823 15.5 29.6003 15.7967 30.2352 16.4315C30.87 17.0663 31.1666 17.7843 31.1666 18.6667C31.1666 19.549 30.87 20.267 30.2352 20.9018Z" stroke="url(#paint1_linear_170_145)" stroke-width="3" stroke-linejoin="round"/>
<defs>
<filter id="filter0_i_170_145" x="6.33331" y="6.33334" width="43.3333" height="47.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.970833 0 0 0 0 0.546094 0 0 0 0 0.800937 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_170_145"/>
</filter>
<linearGradient id="paint0_linear_170_145" x1="28" y1="9.33334" x2="28" y2="46.6667" gradientUnits="userSpaceOnUse">
<stop stop-color="#F72046"/>
<stop offset="1" stop-color="#FF007A"/>
</linearGradient>
<linearGradient id="paint1_linear_170_145" x1="28" y1="9.33334" x2="28" y2="46.6667" gradientUnits="userSpaceOnUse">
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
                <path d="M20 20C18.1667 20 16.5972 19.3472 15.2917 18.0417C13.9861 16.7361 13.3334 15.1667 13.3334 13.3333C13.3334 11.5 13.9861 9.93055 15.2917 8.62499C16.5972 7.31943 18.1667 6.66666 20 6.66666C21.8334 6.66666 23.4028 7.31943 24.7084 8.62499C26.0139 9.93055 26.6667 11.5 26.6667 13.3333C26.6667 15.1667 26.0139 16.7361 24.7084 18.0417C23.4028 19.3472 21.8334 20 20 20ZM6.66669 30V28.6667C6.66669 27.7222 6.90974 26.8542 7.39585 26.0625C7.88196 25.2708 8.5278 24.6667 9.33335 24.25C11.0556 23.3889 12.8056 22.743 14.5834 22.3125C16.3611 21.8819 18.1667 21.6667 20 21.6667C21.8334 21.6667 23.6389 21.8819 25.4167 22.3125C27.1945 22.743 28.9445 23.3889 30.6667 24.25C31.4722 24.6667 32.1181 25.2708 32.6042 26.0625C33.0903 26.8542 33.3334 27.7222 33.3334 28.6667V30C33.3334 30.9167 33.007 31.7014 32.3542 32.3542C31.7014 33.0069 30.9167 33.3333 30 33.3333H10C9.08335 33.3333 8.29863 33.0069 7.64585 32.3542C6.99308 31.7014 6.66669 30.9167 6.66669 30ZM10 30H30V28.6667C30 28.3611 29.9236 28.0833 29.7709 27.8333C29.6181 27.5833 29.4167 27.3889 29.1667 27.25C27.6667 26.5 26.1528 25.9375 24.625 25.5625C23.0972 25.1875 21.5556 25 20 25C18.4445 25 16.9028 25.1875 15.375 25.5625C13.8472 25.9375 12.3334 26.5 10.8334 27.25C10.5834 27.3889 10.382 27.5833 10.2292 27.8333C10.0764 28.0833 10 28.3611 10 28.6667V30ZM20 16.6667C20.9167 16.6667 21.7014 16.3403 22.3542 15.6875C23.007 15.0347 23.3334 14.25 23.3334 13.3333C23.3334 12.4167 23.007 11.6319 22.3542 10.9792C21.7014 10.3264 20.9167 9.99999 20 9.99999C19.0834 9.99999 18.2986 10.3264 17.6459 10.9792C16.9931 11.6319 16.6667 12.4167 16.6667 13.3333C16.6667 14.25 16.9931 15.0347 17.6459 15.6875C18.2986 16.3403 19.0834 16.6667 20 16.6667Z" fill="white"/>
            </svg>

        )
    }
}

export default ProfileIcon;
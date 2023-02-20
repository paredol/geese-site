const icons = [
  // Apple
  <svg
    className="social_icons"
    width="28"
    height="33"
    viewBox="0 0 28 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.4102 17.4387C23.3953 14.7348 24.6302 12.694 27.1297 11.1911C25.7311 9.20926 23.6185 8.11889 20.8289 7.90523C18.1881 7.69894 15.3018 9.43029 14.2455 9.43029C13.1296 9.43029 10.5707 7.97891 8.56217 7.97891C4.41126 8.04521 0 11.2574 0 17.7923C0 19.7226 0.357067 21.7167 1.0712 23.7746C2.02338 26.4785 5.46015 33.1091 9.0457 32.9986C10.9203 32.9544 12.2444 31.6799 14.6844 31.6799C17.0499 31.6799 18.2774 32.9986 20.3677 32.9986C23.983 32.9471 27.0925 26.9205 28 24.2093C23.1498 21.9475 23.4102 17.5786 23.4102 17.4387ZM19.1998 5.34137C21.2306 2.95433 21.0446 0.780946 20.9851 0C19.1923 0.103144 17.1169 1.20826 15.9341 2.57123C14.6323 4.02997 13.8661 5.83499 14.0298 7.8684C15.9713 8.01574 17.7418 7.02851 19.1998 5.34137Z"
      fill="#333333"
    />
  </svg>,
  // Floral
  <svg
    width="40"
    height="27"
    viewBox="0 0 40 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 24.7566C3.90278 25.2797 10.8167 26.0121 15.25 24.7566C20.7917 23.1872 28.7083 16.9094 32.6667 16.9094C36.625 16.9094 39 21.6177 34.25 22.4024C29.5 23.1872 22.375 18.4789 20.7917 16.9094C19.2083 15.34 12.0833 5.9234 9.70833 9.84698C7.33333 13.7706 16.8333 15.3402 20.7917 15.3402M20.7917 15.3402C24.75 15.3402 34.25 12.201 32.6667 9.84698C30.4154 6.5 24.75 10.6319 22.375 13.7707C21.0315 15.5464 14.0626 22.4024 9.70833 22.4024C7.33333 22.4024 1.79167 18.4787 5.75 16.9094C9.70833 15.3402 21.5833 23.9717 24.75 24.7566C27.9167 25.5415 35.8333 27.1107 39 24.7566M20.7917 15.3402C22.6389 10.8935 25.225 2 20.7917 2C16.3583 2 18.9444 10.8935 20.7917 15.3402Z"
      stroke="#747474"
      strokeWidth="2.5"
    />
  </svg>,
  // Instagram
  <svg
    className="social_icons"
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.0036 8.03922C11.4632 8.03922 7.801 11.8167 7.801 16.5C7.801 21.1833 11.4632 24.9608 16.0036 24.9608C20.5439 24.9608 24.2061 21.1833 24.2061 16.5C24.2061 11.8167 20.5439 8.03922 16.0036 8.03922ZM16.0036 22.0006C13.0695 22.0006 10.6708 19.5338 10.6708 16.5C10.6708 13.4662 13.0624 10.9994 16.0036 10.9994C18.9448 10.9994 21.3363 13.4662 21.3363 16.5C21.3363 19.5338 18.9376 22.0006 16.0036 22.0006ZM26.4549 7.69313C26.4549 8.7903 25.5982 9.66657 24.5417 9.66657C23.478 9.66657 22.6284 8.78294 22.6284 7.69313C22.6284 6.60331 23.4851 5.71968 24.5417 5.71968C25.5982 5.71968 26.4549 6.60331 26.4549 7.69313ZM31.8876 9.69603C31.7662 7.05249 31.1808 4.71087 29.3033 2.7816C27.4329 0.852337 25.1627 0.248522 22.5999 0.115977C19.9585 -0.0386589 12.0415 -0.0386589 9.40011 0.115977C6.8444 0.241158 4.57423 0.844974 2.69671 2.77424C0.819186 4.7035 0.240937 7.04513 0.112437 9.68866C-0.0374791 12.4132 -0.0374791 20.5794 0.112437 23.304C0.233798 25.9475 0.819186 28.2891 2.69671 30.2184C4.57423 32.1477 6.83726 32.7515 9.40011 32.884C12.0415 33.0387 19.9585 33.0387 22.5999 32.884C25.1627 32.7588 27.4329 32.155 29.3033 30.2184C31.1737 28.2891 31.7591 25.9475 31.8876 23.304C32.0375 20.5794 32.0375 12.4206 31.8876 9.69603ZM28.4752 26.2273C27.9184 27.6706 26.8404 28.7825 25.434 29.3642C23.3281 30.2258 18.3308 30.0269 16.0036 30.0269C13.6763 30.0269 8.67195 30.2184 6.57312 29.3642C5.1739 28.7899 4.09593 27.678 3.53196 26.2273C2.69671 24.0551 2.88946 18.9005 2.88946 16.5C2.88946 14.0995 2.70385 8.93758 3.53196 6.77268C4.08879 5.32941 5.16676 4.21751 6.57312 3.63578C8.67909 2.77424 13.6763 2.97306 16.0036 2.97306C18.3308 2.97306 23.3352 2.7816 25.434 3.63578C26.8332 4.21014 27.9112 5.32205 28.4752 6.77268C29.3104 8.94494 29.1177 14.0995 29.1177 16.5C29.1177 18.9005 29.3104 24.0624 28.4752 26.2273Z"
      fill="#333333"
    />
  </svg>,
  // Spotify
  <svg
    className="social_icons"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 0C7.39173 0 0 7.39173 0 16.5C0 25.6083 7.39173 33 16.5 33C25.6083 33 33 25.6083 33 16.5C33 7.39173 25.6083 0 16.5 0ZM23.1998 24.2776C22.9204 24.2776 22.7474 24.1911 22.4879 24.0381C18.3363 21.5365 13.506 21.43 8.73569 22.4081C8.47621 22.4746 8.1369 22.581 7.94395 22.581C7.29859 22.581 6.89274 22.0688 6.89274 21.5298C6.89274 20.8446 7.29859 20.5185 7.79758 20.4121C13.2466 19.2079 18.8153 19.3143 23.5657 22.1552C23.9716 22.4147 24.2111 22.6476 24.2111 23.253C24.2111 23.8585 23.7387 24.2776 23.1998 24.2776ZM24.9895 19.9131C24.6436 19.9131 24.4107 19.7601 24.1712 19.6337C20.0129 17.172 13.8121 16.1806 8.29657 17.6776C7.97722 17.7641 7.80423 17.8506 7.50484 17.8506C6.79294 17.8506 6.21411 17.2718 6.21411 16.5599C6.21411 15.848 6.56008 15.3756 7.24536 15.1827C9.09496 14.6637 10.9845 14.2778 13.7522 14.2778C18.0702 14.2778 22.2417 15.349 25.5284 17.305C26.0673 17.6244 26.2802 18.0369 26.2802 18.6157C26.2736 19.3343 25.7147 19.9131 24.9895 19.9131ZM27.052 14.8433C26.7061 14.8433 26.4931 14.7569 26.1938 14.5839C21.4567 11.7563 12.9871 11.0776 7.50484 12.6079C7.26532 12.6744 6.96593 12.7808 6.64657 12.7808C5.76835 12.7808 5.09637 12.0956 5.09637 11.2107C5.09637 10.3058 5.65524 9.79355 6.25403 9.62057C8.59597 8.93528 11.2173 8.60927 14.0716 8.60927C18.9284 8.60927 24.0181 9.62056 27.7373 11.7895C28.2563 12.0889 28.5956 12.5014 28.5956 13.2931C28.5956 14.198 27.8637 14.8433 27.052 14.8433Z"
      fill="#333333"
    />
  </svg>,
  // TikTok
  <svg
    className="social_icons"
    width="29"
    height="33"
    viewBox="0 0 29 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29 13.5328C26.1493 13.5396 23.3686 12.6544 21.0505 11.0024V22.5243C21.0497 24.6583 20.3946 26.7412 19.1728 28.4945C17.951 30.2478 16.2206 31.5879 14.2132 32.3356C12.2058 33.0834 10.0169 33.2031 7.93929 32.6788C5.86168 32.1545 3.99434 31.0111 2.58698 29.4016C1.17962 27.7922 0.299307 25.7932 0.0637617 23.6722C-0.171784 21.5511 0.248662 19.409 1.26888 17.5322C2.2891 15.6555 3.86046 14.1336 5.77285 13.1701C7.68524 12.2065 9.8475 11.8472 11.9705 12.1402V17.9354C10.999 17.6311 9.95581 17.6403 8.98986 17.9616C8.02391 18.2829 7.18461 18.8998 6.59184 19.7243C5.99906 20.5489 5.68311 21.5388 5.68911 22.5528C5.69511 23.5668 6.02275 24.5529 6.62524 25.3704C7.22773 26.188 8.07426 26.795 9.04395 27.1049C10.0136 27.4149 11.0569 27.4118 12.0247 27.0962C12.9925 26.7805 13.8354 26.1685 14.4331 25.3475C15.0307 24.5264 15.3525 23.5383 15.3525 22.5243V0H21.0505C21.0466 0.479098 21.0869 0.957543 21.171 1.42929C21.369 2.48238 21.7807 3.48419 22.3809 4.37344C22.9811 5.26268 23.7572 6.02066 24.6617 6.60103C25.9485 7.44821 27.4573 7.89976 29 7.89944V13.5328Z"
      fill="#333333"
    />
  </svg>,
  // Twitter
  <svg
    className="social_icons"
    width="41"
    height="33"
    viewBox="0 0 41 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.7856 8.22419C36.8117 8.58511 36.8117 8.94611 36.8117 9.30703C36.8117 20.3156 28.3567 33 12.9036 33C8.14278 33 3.7202 31.6335 0 29.2618C0.676423 29.3391 1.32674 29.3648 2.02919 29.3648C5.95744 29.3648 9.57362 28.05 12.4613 25.8071C8.76715 25.7297 5.67132 23.3321 4.60467 20.032C5.12502 20.1093 5.64529 20.1609 6.19166 20.1609C6.94608 20.1609 7.70058 20.0577 8.40295 19.8774C4.5527 19.1039 1.66491 15.7523 1.66491 11.7047V11.6016C2.78353 12.2203 4.0844 12.6071 5.46311 12.6586C3.19977 11.1632 1.71696 8.6109 1.71696 5.72338C1.71696 4.17653 2.13313 2.75856 2.8616 1.52106C6.99805 6.57418 13.2157 9.87412 20.1878 10.2351C20.0577 9.61637 19.9797 8.9719 19.9797 8.32735C19.9797 3.73824 23.7259 0 28.3826 0C30.802 0 32.9873 1.00547 34.5222 2.62969C36.4213 2.26877 38.2423 1.57264 39.8554 0.618755C39.2309 2.55239 37.9042 4.17661 36.1612 5.20779C37.8522 5.02741 39.4912 4.56324 41 3.91878C39.8555 5.56871 38.4246 7.03818 36.7856 8.22419Z"
      fill="#333333"
    />
  </svg>,
];

export default function Icon({ num }: { num: number }): JSX.Element {
  return icons[num];
}
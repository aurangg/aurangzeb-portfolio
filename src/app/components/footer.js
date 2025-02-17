import { email, linkedin, twitter } from "@/constants/urls";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-chip">
        Made with Love{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <g clipPath="url(#clip0_289_261)">
            <path
              d="M8.5409 5.46099L8.23634 5.85724C8.28965 5.89818 8.35066 5.92794 8.41573 5.94476C8.4808 5.96158 8.5486 5.96511 8.61506 5.95513C8.68153 5.94516 8.7453 5.92188 8.80257 5.88671C8.85984 5.85153 8.90942 5.80516 8.94837 5.75038L8.5409 5.46099ZM8.11258 14.169C6.99486 13.5312 5.78696 12.9257 4.77357 12.0801C3.78074 11.2503 3.01987 10.2231 2.80239 8.77404L1.81347 8.92246C2.07726 10.6801 3.01031 11.9113 4.13306 12.8477C5.23514 13.7676 6.56531 14.4376 7.61666 15.0376L8.11258 14.169ZM2.80239 8.77404C2.58966 7.35658 3.2122 6.04701 4.23085 5.38247C5.22069 4.73708 6.66799 4.65132 8.23634 5.85724L8.84556 5.06539C6.98589 3.63421 5.0747 3.63858 3.68449 4.54495C2.32507 5.43187 1.54513 7.13448 1.81347 8.92246L2.80239 8.77404ZM7.61666 15.0376C7.99484 15.2531 8.4 15.4822 8.79947 15.642C9.19895 15.8018 9.64438 15.913 10.0993 15.8447L9.95086 14.8558C9.74649 14.8864 9.49463 14.8433 9.17042 14.7134C8.84564 14.5841 8.50042 14.3906 8.11258 14.169L7.61666 15.0376ZM12.2356 14.3443C13.0644 13.4616 14.1395 12.4319 14.9229 11.2283C15.7212 10.0029 16.2518 8.55279 15.9881 6.79514L14.9991 6.94356C15.2166 8.39267 14.7908 9.59788 14.0853 10.6826C13.3648 11.7885 12.3878 12.7218 11.5066 13.6596L12.2356 14.3443ZM15.9881 6.79514C15.7197 5.00717 14.475 3.60841 12.9145 3.15972C11.3194 2.70138 9.49248 3.25802 8.13344 5.17159L8.94837 5.75038C10.0937 4.13787 11.5023 3.79433 12.638 4.12073C13.8069 4.45697 14.7863 5.52544 14.9991 6.94356L15.9881 6.79514ZM11.5066 13.6596C11.2008 13.9853 10.9277 14.2717 10.6551 14.4905C10.3826 14.7094 10.1552 14.8251 9.95086 14.8558L10.0993 15.8447C10.5542 15.7764 10.9473 15.5388 11.2823 15.2694C11.618 14.9993 11.9374 14.6615 12.2356 14.3443L11.5066 13.6596Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_289_261">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.0859375 3.02246) rotate(-8.5352)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-head">
              <svg
                width="130"
                height="31"
                viewBox="0 0 130 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.96 10.6697C20.3472 11.3743 20.7489 12.0886 21.1631 12.8052C23.9667 17.6563 27.1019 22.1935 29.9101 24.7115L24.5694 30.6678C21.2938 27.7307 18.1308 23.2649 15.4832 18.9117C12.9446 23.0955 9.7956 27.5105 6.32865 30.6533L0.955713 24.7261C3.78051 22.1654 6.64451 18.1529 9.12964 13.9507C9.77411 12.8609 10.3818 11.778 10.9455 10.7299C9.57275 8.02667 8.48706 5.6608 7.8184 4.06378L15.1977 0.974103C15.5521 1.82054 16.0532 2.94289 16.6732 4.24885L21.8896 6.40922C21.4089 7.56993 20.7558 9.02991 19.96 10.6697Z"
                  fill="#011438"
                />
                <path
                  d="M120.704 17.481C119.536 17.481 118.536 17.2866 117.703 16.8978V17.8521C117.703 18.3822 117.969 18.7003 118.5 18.8064L123.227 19.6811C124.13 19.8578 124.927 20.0787 125.618 20.3438C126.308 20.5912 126.848 20.9535 127.238 21.4307C127.627 21.8901 127.822 22.5175 127.822 23.3127C127.822 24.161 127.539 24.9474 126.972 25.6719C126.423 26.4142 125.6 27.0062 124.502 27.448C123.422 27.9074 122.068 28.1372 120.439 28.1372C119.04 28.1372 117.925 27.987 117.093 27.6865C116.278 27.4038 115.694 27.0327 115.34 26.5732C114.986 26.1137 114.809 25.6189 114.809 25.0888C114.809 24.4526 115.021 23.8164 115.446 23.1802C115.889 22.544 116.455 22.0138 117.146 21.5897C116.066 21.1832 115.526 20.5382 115.526 19.6546C115.526 19.3188 115.605 19.0096 115.765 18.7268C115.924 18.4441 116.119 18.1613 116.349 17.8786L117.305 16.6857C116.03 15.9435 115.393 14.786 115.393 13.2132C115.393 11.9231 115.844 10.8805 116.747 10.0852C117.668 9.28997 118.987 8.89235 120.704 8.89235C122.422 8.89235 123.75 9.28997 124.688 10.0852C125.255 9.99685 125.786 9.85548 126.282 9.66108C126.777 9.46669 127.238 9.20161 127.663 8.86584L128.034 9.13092V10.6154H125.166C125.733 11.3223 126.016 12.1882 126.016 13.2132C126.016 14.4679 125.556 15.4929 124.635 16.2881C123.732 17.0833 122.422 17.481 120.704 17.481ZM120.651 16.7652C121.395 16.7652 121.935 16.4825 122.271 15.917C122.625 15.3338 122.803 14.406 122.803 13.1336C122.803 11.8789 122.634 10.9777 122.298 10.4298C121.962 9.88199 121.439 9.60807 120.731 9.60807C120.023 9.60807 119.492 9.89082 119.138 10.4563C118.801 11.0042 118.633 11.9143 118.633 13.1867C118.633 14.459 118.792 15.378 119.111 15.9435C119.43 16.4913 119.943 16.7652 120.651 16.7652ZM116.88 24.32C116.88 25.292 117.19 26.0165 117.81 26.4937C118.429 26.9885 119.412 27.2359 120.758 27.2359C122.245 27.2359 123.343 26.9885 124.051 26.4937C124.777 26.0165 125.14 25.3804 125.14 24.5851C125.14 24.0903 124.954 23.7015 124.582 23.4188C124.228 23.136 123.626 22.9151 122.776 22.7561L118.022 21.8283C117.951 21.8106 117.88 21.7929 117.81 21.7753C117.544 22.1287 117.323 22.5352 117.146 22.9946C116.969 23.4541 116.88 23.8959 116.88 24.32Z"
                  fill="#011438"
                />
                <path
                  d="M106.958 17.481C105.79 17.481 104.789 17.2866 103.957 16.8978V17.8521C103.957 18.3822 104.223 18.7003 104.754 18.8064L109.481 19.6811C110.384 19.8578 111.181 20.0787 111.872 20.3438C112.562 20.5912 113.102 20.9535 113.492 21.4307C113.881 21.8901 114.076 22.5175 114.076 23.3127C114.076 24.161 113.793 24.9474 113.226 25.6719C112.677 26.4142 111.854 27.0062 110.756 27.448C109.676 27.9074 108.322 28.1372 106.693 28.1372C105.294 28.1372 104.179 27.987 103.346 27.6865C102.532 27.4038 101.948 27.0327 101.594 26.5732C101.24 26.1137 101.062 25.6189 101.062 25.0888C101.062 24.4526 101.275 23.8164 101.7 23.1802C102.143 22.544 102.709 22.0138 103.4 21.5897C102.32 21.1832 101.78 20.5382 101.78 19.6546C101.78 19.3188 101.859 19.0096 102.019 18.7268C102.178 18.4441 102.373 18.1613 102.603 17.8786L103.559 16.6857C102.284 15.9435 101.647 14.786 101.647 13.2132C101.647 11.9231 102.098 10.8805 103.001 10.0852C103.922 9.28997 105.241 8.89235 106.958 8.89235C108.676 8.89235 110.004 9.28997 110.942 10.0852C111.509 9.99685 112.04 9.85548 112.536 9.66108C113.031 9.46669 113.492 9.20161 113.917 8.86584L114.288 9.13092V10.6154H111.42C111.987 11.3223 112.27 12.1882 112.27 13.2132C112.27 14.4679 111.81 15.4929 110.889 16.2881C109.986 17.0833 108.676 17.481 106.958 17.481ZM106.905 16.7652C107.649 16.7652 108.189 16.4825 108.525 15.917C108.879 15.3338 109.056 14.406 109.056 13.1336C109.056 11.8789 108.888 10.9777 108.552 10.4298C108.215 9.88199 107.693 9.60807 106.985 9.60807C106.277 9.60807 105.746 9.89082 105.391 10.4563C105.055 11.0042 104.887 11.9143 104.887 13.1867C104.887 14.459 105.046 15.378 105.365 15.9435C105.684 16.4913 106.197 16.7652 106.905 16.7652ZM103.134 24.32C103.134 25.292 103.444 26.0165 104.064 26.4937C104.683 26.9885 105.666 27.2359 107.011 27.2359C108.499 27.2359 109.596 26.9885 110.305 26.4937C111.031 26.0165 111.394 25.3804 111.394 24.5851C111.394 24.0903 111.208 23.7015 110.836 23.4188C110.482 23.136 109.88 22.9151 109.03 22.7561L104.276 21.8283C104.205 21.8106 104.134 21.7929 104.064 21.7753C103.798 22.1287 103.577 22.5352 103.4 22.9946C103.223 23.4541 103.134 23.8959 103.134 24.32Z"
                  fill="#011438"
                />
                <path
                  d="M85.9707 22.0138V21.5102L86.3956 21.4041C86.9799 21.2274 87.272 20.7945 87.272 20.1052V12.2854C87.2543 11.9143 87.1924 11.6315 87.0861 11.4371C86.9799 11.2251 86.7497 11.0837 86.3956 11.013L85.9707 10.907V10.4298L90.2731 8.89235L90.5918 9.18394L90.7777 10.8274C91.4151 10.2619 92.1233 9.80246 92.9023 9.44902C93.6991 9.07791 94.4781 8.89235 95.2394 8.89235C96.408 8.89235 97.3021 9.21045 97.9218 9.84664C98.5592 10.4828 98.8778 11.4548 98.8778 12.7625V20.1318C98.8778 20.821 99.1965 21.2539 99.8339 21.4306L100.126 21.5102V22.0138H94.0178V21.5102L94.4161 21.4041C95.0004 21.2098 95.2925 20.7768 95.2925 20.1052V12.2324C95.2925 11.6138 95.1597 11.1632 94.8942 10.8805C94.6286 10.5977 94.186 10.4563 93.5663 10.4563C92.6987 10.4563 91.7957 10.8363 90.8574 11.5962V20.1318C90.8574 20.821 91.1672 21.2539 91.7869 21.4306L92.0525 21.5102V22.0138H85.9707Z"
                  fill="#011438"
                />
                <path
                  d="M76.2584 22.3849C75.2492 22.3849 74.3905 22.1022 73.6822 21.5367C72.9917 20.9535 72.6465 20.1229 72.6465 19.0449C72.6465 18.1967 73.0537 17.4191 73.8681 16.7122C74.7003 15.9877 76.0016 15.4575 77.7722 15.1217C78.0731 15.051 78.4184 14.9892 78.8079 14.9362C79.2151 14.8655 79.6135 14.7948 80.003 14.7241V12.842C80.003 11.6403 79.8525 10.8098 79.5515 10.3503C79.2505 9.89082 78.7725 9.66108 78.1174 9.66108H78.0377C77.6305 9.66108 77.303 9.79362 77.0551 10.0587C76.8249 10.3061 76.6744 10.7214 76.6036 11.3046L76.5239 11.6492C76.4708 12.3561 76.2849 12.8774 75.9662 13.2132C75.6475 13.5313 75.2492 13.6903 74.7711 13.6903C74.3285 13.6903 73.9567 13.5578 73.6557 13.2927C73.3724 13.0099 73.2308 12.6477 73.2308 12.2059C73.2308 11.4813 73.4786 10.8716 73.9744 10.3768C74.4701 9.88198 75.1252 9.51087 75.9397 9.26346C76.7718 9.01605 77.6659 8.89235 78.622 8.89235C80.1978 8.89235 81.4017 9.2723 82.2339 10.0322C83.066 10.7921 83.4821 12.0291 83.4821 13.7433V19.6546C83.4821 20.4145 83.8451 20.7945 84.571 20.7945H85.1818L85.4474 21.086C85.1287 21.4925 84.7746 21.8018 84.3851 22.0138C83.9956 22.2436 83.4644 22.3584 82.7916 22.3584C82.0303 22.3584 81.4194 22.1817 80.9591 21.8283C80.5165 21.4572 80.2243 20.9712 80.0827 20.3703C79.5161 20.9712 78.9584 21.4572 78.4095 21.8283C77.8607 22.1994 77.1436 22.3849 76.2584 22.3849ZM77.7987 20.6884C78.1528 20.6884 78.4892 20.6089 78.8079 20.4499C79.1266 20.2908 79.525 20.0257 80.003 19.6546V15.4133C79.5427 15.484 79.0735 15.5724 78.5955 15.6784C77.8341 15.8551 77.2144 16.1821 76.7364 16.6592C76.2761 17.1363 76.0459 17.7814 76.0459 18.5943C76.0459 19.3012 76.2052 19.8313 76.5239 20.1848C76.8603 20.5205 77.2853 20.6884 77.7987 20.6884Z"
                  fill="#011438"
                />
                <path
                  d="M61.3848 22.0138V21.5102L61.7831 21.3776C62.1372 21.2893 62.3763 21.1391 62.5002 20.927C62.6418 20.7149 62.7127 20.4322 62.7127 20.0787V12.3119C62.695 11.9231 62.6241 11.6315 62.5002 11.4371C62.3763 11.2251 62.1372 11.0837 61.7831 11.013L61.3848 10.907V10.4298L65.7137 8.89235L66.0324 9.18394L66.2714 11.5166V11.7022C66.537 11.2074 66.8734 10.7479 67.2806 10.3238C67.6878 9.89965 68.1305 9.55505 68.6085 9.28997C69.0866 9.02489 69.5646 8.89235 70.0426 8.89235C70.7154 8.89235 71.22 9.06907 71.5564 9.42251C71.8928 9.77595 72.061 10.2266 72.061 10.7744C72.061 11.3753 71.8928 11.8347 71.5564 12.1528C71.22 12.4533 70.8128 12.6035 70.3348 12.6035C69.6266 12.6035 69.0157 12.2854 68.5023 11.6492L68.4492 11.5962C68.2721 11.3841 68.0685 11.2692 67.8383 11.2516C67.6259 11.2162 67.4134 11.3223 67.2009 11.5697C67.0239 11.7464 66.8557 11.9584 66.6963 12.2059C66.5547 12.4356 66.4219 12.7095 66.298 13.0276V19.9727C66.298 20.3085 66.3688 20.5912 66.5104 20.821C66.6521 21.033 66.8911 21.1832 67.2275 21.2716L68.0242 21.5102V22.0138H61.3848Z"
                  fill="#011438"
                />
                <path
                  d="M51.2257 22.3849C50.5352 22.3849 49.9067 22.2612 49.3401 22.0138C48.7736 21.7487 48.3221 21.3246 47.9857 20.7414C47.667 20.1405 47.5165 19.3541 47.5342 18.3822L47.6139 11.7287C47.6139 11.3399 47.5519 11.0571 47.428 10.8804C47.304 10.7037 47.0827 10.58 46.764 10.5093L46.4453 10.4033V9.92611L50.9867 9.05135L51.2789 9.34293L51.1461 13.0806V19.0979C51.1461 19.6987 51.3054 20.1405 51.6241 20.4233C51.9605 20.6884 52.3766 20.8209 52.8723 20.8209C53.3858 20.8209 53.8461 20.7502 54.2533 20.6088C54.6783 20.4498 55.112 20.2201 55.5547 19.9196L55.6343 11.7552C55.6343 11.3487 55.5724 11.066 55.4484 10.9069C55.3422 10.7479 55.1298 10.6242 54.8111 10.5358L54.5189 10.4563V9.97913L58.9541 9.05135L59.2462 9.34293L59.1666 13.0806V20.0257C59.1666 20.3968 59.2108 20.6972 59.2993 20.9269C59.4056 21.139 59.6269 21.2981 59.9633 21.4041L60.3085 21.5101V22.0138L55.8203 22.2789L55.5812 20.6088C54.9793 21.1213 54.3242 21.5455 53.6159 21.8812C52.9077 22.217 52.111 22.3849 51.2257 22.3849Z"
                  fill="#011438"
                />
                <path
                  d="M36.8619 22.3849C35.8527 22.3849 34.994 22.1022 34.2858 21.5367C33.5953 20.9535 33.25 20.1229 33.25 19.0449C33.25 18.1967 33.6572 17.4191 34.4717 16.7122C35.3038 15.9877 36.6051 15.4575 38.3757 15.1217C38.6767 15.051 39.0219 14.9892 39.4114 14.9362C39.8187 14.8655 40.217 14.7948 40.6065 14.7241V12.842C40.6065 11.6403 40.456 10.8098 40.1551 10.3503C39.8541 9.89082 39.376 9.66108 38.7209 9.66108H38.6413C38.234 9.66108 37.9065 9.79362 37.6586 10.0587C37.4284 10.3061 37.2779 10.7214 37.2071 11.3046L37.1275 11.6492C37.0743 12.3561 36.8884 12.8774 36.5697 13.2132C36.251 13.5313 35.8527 13.6903 35.3746 13.6903C34.932 13.6903 34.5602 13.5578 34.2592 13.2927C33.9759 13.0099 33.8343 12.6477 33.8343 12.2059C33.8343 11.4813 34.0821 10.8716 34.5779 10.3768C35.0736 9.88198 35.7287 9.51087 36.5432 9.26346C37.3753 9.01605 38.2694 8.89235 39.2255 8.89235C40.8013 8.89235 42.0053 9.2723 42.8374 10.0322C43.6696 10.7921 44.0856 12.0291 44.0856 13.7433V19.6546C44.0856 20.4145 44.4486 20.7945 45.1745 20.7945H45.7853L46.0509 21.086C45.7322 21.4925 45.3781 21.8018 44.9886 22.0138C44.5991 22.2436 44.0679 22.3584 43.3951 22.3584C42.6338 22.3584 42.023 22.1817 41.5626 21.8283C41.12 21.4572 40.8279 20.9712 40.6862 20.3703C40.1196 20.9712 39.5619 21.4572 39.0131 21.8283C38.4642 22.1994 37.7471 22.3849 36.8619 22.3849ZM38.4022 20.6884C38.7563 20.6884 39.0927 20.6089 39.4114 20.4499C39.7301 20.2908 40.1285 20.0257 40.6065 19.6546V15.4133C40.1462 15.484 39.677 15.5724 39.199 15.6784C38.4376 15.8551 37.818 16.1821 37.3399 16.6592C36.8796 17.1363 36.6494 17.7814 36.6494 18.5943C36.6494 19.3012 36.8088 19.8313 37.1275 20.1848C37.4639 20.5205 37.8888 20.6884 38.4022 20.6884Z"
                  fill="#011438"
                />
              </svg>
              <p className="footer-head-text">
                © Aurangg 2025. All rights reserved
              </p>
            </div>
          </div>
          <div className="col-lg-6 flex-end">
            <div className="footer-bottom">
              <a href={`${twitter}`} target="_blank" className="tool-tip">
                <div className="tool-tip-after">X</div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_289_188)">
                    <path
                      d="M14.2341 10.6625L22.9764 0.5H20.9046L13.3138 9.32375L7.25081 0.5H0.257812L9.42619 13.8433L0.257812 24.5H2.32969L10.3461 15.1818L16.7488 24.5H23.7418L14.2335 10.6625H14.2341ZM11.3964 13.9606L10.4674 12.632L3.07613 2.05962H6.25838L12.2229 10.592L13.1518 11.9206L20.9055 23.0112H17.7236L11.3964 13.9612V13.9606Z"
                      fill="#011438"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_289_188">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href={`${linkedin}`} target="_blank" className="tool-tip">
                <div className="tool-tip-after">LinkedIn</div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4705 2.50014H3.53055C3.34013 2.4975 3.15105 2.53239 2.97411 2.60282C2.79718 2.67326 2.63585 2.77786 2.49934 2.91065C2.36284 3.04344 2.25383 3.20182 2.17854 3.37675C2.10325 3.55167 2.06316 3.73972 2.06055 3.93014V21.0701C2.06316 21.2606 2.10325 21.4486 2.17854 21.6235C2.25383 21.7985 2.36284 21.9568 2.49934 22.0896C2.63585 22.2224 2.79718 22.327 2.97411 22.3975C3.15105 22.4679 3.34013 22.5028 3.53055 22.5001H20.4705C20.661 22.5028 20.85 22.4679 21.027 22.3975C21.2039 22.327 21.3652 22.2224 21.5017 22.0896C21.6383 21.9568 21.7473 21.7985 21.8226 21.6235C21.8978 21.4486 21.9379 21.2606 21.9405 21.0701V3.93014C21.9379 3.73972 21.8978 3.55167 21.8226 3.37675C21.7473 3.20182 21.6383 3.04344 21.5017 2.91065C21.3652 2.77786 21.2039 2.67326 21.027 2.60282C20.85 2.53239 20.661 2.4975 20.4705 2.50014ZM8.09055 19.2401H5.09055V10.2401H8.09055V19.2401ZM6.59055 8.98014C6.17681 8.98014 5.78002 8.81578 5.48746 8.52323C5.1949 8.23067 5.03055 7.83388 5.03055 7.42014C5.03055 7.0064 5.1949 6.60961 5.48746 6.31705C5.78002 6.0245 6.17681 5.86014 6.59055 5.86014C6.81024 5.83522 7.03272 5.85699 7.24342 5.92402C7.45412 5.99105 7.64829 6.10183 7.8132 6.2491C7.97812 6.39637 8.11007 6.57682 8.20042 6.77862C8.29076 6.98043 8.33746 7.19904 8.33746 7.42014C8.33746 7.64124 8.29076 7.85985 8.20042 8.06166C8.11007 8.26346 7.97812 8.44391 7.8132 8.59118C7.64829 8.73845 7.45412 8.84923 7.24342 8.91626C7.03272 8.98329 6.81024 9.00505 6.59055 8.98014ZM18.9105 19.2401H15.9105V14.4101C15.9105 13.2001 15.4805 12.4101 14.3905 12.4101C14.0532 12.4126 13.7247 12.5184 13.4494 12.7133C13.174 12.9082 12.965 13.1828 12.8505 13.5001C12.7723 13.7352 12.7384 13.9827 12.7505 14.2301V19.2301H9.75055V10.2301H12.7505V11.5001C13.0231 11.0272 13.4195 10.6377 13.897 10.3733C14.3745 10.109 14.9151 9.97999 15.4605 10.0001C17.4605 10.0001 18.9105 11.2901 18.9105 14.0601V19.2401Z"
                    fill="#011438"
                  />
                </svg>
              </a>
              <a href={`mailTo:${email}`} target="_blank" className="tool-tip">
                <div className="tool-tip-after">Email</div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.5C12.81 15.5 13.5 15.2 14.11 14.61C14.7 14 15 13.31 15 12.5C15 11.69 14.7 11 14.11 10.39C13.5 9.8 12.81 9.5 12 9.5C11.19 9.5 10.5 9.8 9.89 10.39C9.3 11 9 11.69 9 12.5C9 13.31 9.3 14 9.89 14.61C10.5 15.2 11.19 15.5 12 15.5ZM12 2.5C14.75 2.5 17.1 3.5 19.05 5.45C21 7.4 22 9.75 22 12.5V13.95C22 14.95 21.65 15.8 21 16.5C20.3 17.17 19.5 17.5 18.5 17.5C17.3 17.5 16.31 17 15.56 16C14.56 17 13.38 17.5 12 17.5C10.63 17.5 9.45 17 8.46 16.04C7.5 15.05 7 13.88 7 12.5C7 11.13 7.5 9.95 8.46 8.96C9.45 8 10.63 7.5 12 7.5C13.38 7.5 14.55 8 15.54 8.96C16.5 9.95 17 11.13 17 12.5V13.95C17 14.36 17.16 14.72 17.46 15.03C17.76 15.34 18.11 15.5 18.5 15.5C18.92 15.5 19.27 15.34 19.57 15.03C19.87 14.72 20 14.36 20 13.95V12.5C20 10.31 19.23 8.43 17.65 6.85C16.07 5.27 14.19 4.5 12 4.5C9.81 4.5 7.93 5.27 6.35 6.85C4.77 8.43 4 10.31 4 12.5C4 14.69 4.77 16.57 6.35 18.15C7.93 19.73 9.81 20.5 12 20.5H17V22.5H12C9.25 22.5 6.9 21.5 4.95 19.55C3 17.6 2 15.25 2 12.5C2 9.75 3 7.4 4.95 5.45C6.9 3.5 9.25 2.5 12 2.5Z"
                    fill="#011438"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

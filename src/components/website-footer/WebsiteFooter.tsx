import type { MouseEvent } from 'react';
import { forwardRef, useEffect, useId, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Icon } from '../icon';
import { Logo } from '../logo';
import type {
  WebsiteFooterBadge,
  WebsiteFooterLink,
  WebsiteFooterLinkGroup,
  WebsiteFooterProps
} from './WebsiteFooter.types';

// Inline SVG components for app store badges with customizable colors
const GooglePlayBadge = ({ className }: { className?: string }) => (
  <svg width="116" height="36" viewBox="0 0 116 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M67.6069 19.4902C68.5876 19.4902 69.3722 19.9802 69.8628 20.4697V19.7842H71.6274V27.2256C71.6273 30.2606 69.8621 31.5332 67.7056 31.5332C65.6473 31.5331 64.4711 30.1628 63.981 29.0859L65.5493 28.4004C65.7452 29.0856 66.5293 29.8689 67.6069 29.8691C68.9798 29.8691 69.8628 28.9875 69.8628 27.4209V26.834H69.7642C69.3719 27.3235 68.5875 27.8125 67.6069 27.8125C65.4511 27.8122 63.5884 26.0499 63.5884 23.7002C63.5885 21.3506 65.549 19.4905 67.6069 19.4902ZM67.7056 21.1543C66.4314 21.1545 65.3532 22.2317 65.353 23.7002C65.353 25.1687 66.4313 26.2459 67.7056 26.2461C68.98 26.2461 69.9604 25.1688 69.9604 23.7002C69.9603 22.2316 68.9799 21.1543 67.7056 21.1543Z" fill="currentColor"/>
    <path d="M110.936 25.0713H111.034L113.091 19.7842H115.052L110.053 31.3379H108.191L110.053 27.2256L106.818 19.7842H108.779L110.936 25.0713Z" fill="currentColor"/>
    <path d="M14.5737 18.3164C15.652 19.3934 16.8287 20.4706 18.103 21.6455C13.0057 24.4849 7.90833 27.324 2.81104 30.0654H2.71338C6.63426 26.1492 10.6529 22.2327 14.5737 18.3164Z" fill="currentColor"/>
    <path d="M1.63428 5.19531C5.84939 9.40548 9.96639 13.616 14.0835 17.8262C9.86858 21.7424 5.7516 25.8545 1.53662 30.0645C1.14451 29.8687 0.947754 29.3792 0.947754 28.8896V6.85938C0.947819 6.46807 1.0461 6.17449 1.14404 5.7832C1.2421 5.58738 1.43822 5.39108 1.63428 5.19531Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M49.4722 19.5879C51.8252 19.5879 53.688 21.351 53.688 23.7988C53.6878 26.2463 51.825 28.0088 49.4722 28.0088C47.1201 28.0086 45.2576 26.1483 45.2573 23.7988C45.2573 21.3511 47.1199 19.5881 49.4722 19.5879ZM49.4722 21.1543C48.1986 21.1545 47.1198 22.2318 47.1196 23.7002C47.1196 25.1687 48.1985 26.2459 49.4722 26.2461C50.7466 26.2461 51.8257 25.2667 51.8257 23.7002C51.8256 22.1337 50.7465 21.1543 49.4722 21.1543Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M58.5894 19.5879C60.9417 19.588 62.8042 21.3511 62.8042 23.7988C62.804 26.2463 60.9416 28.0087 58.5894 28.0088C56.2371 28.0088 54.3748 26.1485 54.3745 23.7988C54.3745 21.351 56.2369 19.5879 58.5894 19.5879ZM58.5894 21.1543C57.315 21.1543 56.2369 22.2316 56.2368 23.7002C56.2368 25.1688 57.3149 26.2461 58.5894 26.2461C59.8637 26.246 60.9419 25.2667 60.9419 23.7002C60.9418 22.1338 59.8636 21.1544 58.5894 21.1543Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M79.5669 19.5879C81.7228 19.5879 82.704 21.2523 83.0962 22.2314L83.2915 22.7217L77.7046 25.0713C78.1946 25.9523 78.7831 26.3438 79.7632 26.3438C80.7432 26.3437 81.3317 25.8542 81.8218 25.1689L83.1938 26.1484C82.8016 26.8339 81.6252 28.0087 79.7632 28.0088C77.4109 28.0088 75.6462 26.1485 75.646 23.7988C75.646 21.2532 77.4104 19.588 79.5669 19.5879ZM79.5669 21.1543C78.6847 21.1545 77.4107 22.0361 77.4106 23.6025L81.1353 22.0361C80.9395 21.5466 80.2528 21.1543 79.5669 21.1543Z" fill="currentColor"/>
    <path d="M38.6899 14.9863C40.6504 14.9863 42.0228 15.7699 43.1011 16.749L41.8267 18.0215C41.0425 17.3362 39.9644 16.7491 38.5923 16.749C36.0437 16.749 33.985 18.8048 33.9849 21.4482C33.9849 24.0918 35.9456 26.1484 38.5923 26.1484C40.2584 26.1483 41.2386 25.4624 41.8267 24.875C42.3167 24.3854 42.7091 23.6021 42.8071 22.623H38.5923V20.8613H44.6694C44.7674 21.155 44.7671 21.547 44.7671 21.9385C44.767 23.2112 44.3749 24.876 43.1987 26.0508C42.0225 27.3233 40.6502 27.9101 38.6899 27.9102C35.161 27.9102 32.1226 24.973 32.1226 21.4482C32.1227 17.9235 35.1611 14.9863 38.6899 14.9863Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M102.996 19.5879C105.054 19.5879 106.721 20.763 106.917 23.0146V27.7148H105.152V26.7354H105.053C104.563 27.3227 103.976 27.91 102.702 27.9102C101.133 27.9102 99.6626 26.8335 99.6626 25.1689C99.6627 23.4068 101.427 22.4279 103.191 22.4277C103.975 22.4277 104.759 22.7211 105.053 22.917V22.8193C104.955 21.8402 104.073 21.2529 103.093 21.2529C102.407 21.253 101.819 21.4487 101.427 22.1338L99.7603 21.4482C100.25 20.1756 101.623 19.5879 102.996 19.5879ZM103.29 23.8965C102.407 23.8965 101.329 24.19 101.329 25.1689C101.329 25.9523 102.211 26.2461 102.799 26.2461C103.779 26.246 104.76 25.4629 104.956 24.2881C104.466 24.0923 104.074 23.8965 103.29 23.8965Z" fill="currentColor"/>
    <path d="M74.6655 27.6172H72.8032V15.3779H74.6655V27.6172Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M91.6245 15.3779C93.6825 15.378 95.6429 16.8466 95.6431 19.1963C95.6431 21.5461 93.6826 23.0145 91.6245 23.0146H89.0757V27.6172H87.2134V15.3779H91.6245ZM89.0757 21.3506H91.7222C92.9966 21.3506 93.7805 20.1754 93.8784 19.1963C93.8783 18.3151 93.0943 17.1406 91.7222 17.1406H89.0757V21.3506Z" fill="currentColor"/>
    <path d="M98.4858 27.6172H96.6235V15.3779H98.4858V27.6172Z" fill="currentColor"/>
    <path d="M18.8862 13.9102C19.2783 14.106 19.6709 14.302 20.063 14.5957C21.0432 15.1832 22.1219 15.6724 23.1021 16.2598C23.396 16.3577 23.5916 16.5541 23.7876 16.8477C24.1797 17.3372 24.1797 17.8269 23.7876 18.3164C23.5917 18.512 23.3958 18.7078 23.1021 18.8057C21.7297 19.6869 20.259 20.4707 18.7886 21.2539C17.5143 20.0791 16.3383 18.9034 15.064 17.7285C16.3382 16.4558 17.6121 15.1829 18.8862 13.9102Z" fill="currentColor"/>
    <path d="M2.81104 5C7.90835 7.83935 13.0054 10.6792 18.2007 13.5186C17.0244 14.6934 15.7499 15.8679 14.5737 17.1406C10.6528 13.1264 6.63429 9.11185 2.71338 5.09766C2.71346 5.09222 2.71591 5 2.81104 5Z" fill="currentColor"/>
    <path d="M35.4546 5.02832C35.8584 5.02844 36.2614 5.12916 36.6616 5.3291C37.0565 5.52631 37.3645 5.72907 37.5708 6.03809L37.6021 6.08594L37.0171 6.66992L36.9683 6.60938C36.5921 6.14 36.1238 5.95033 35.4546 5.9502C34.8811 5.9502 34.3153 6.14102 33.9399 6.60938L33.9351 6.61523L33.9292 6.62012C33.4612 6.99412 33.2691 7.55808 33.269 8.23047C33.269 8.90299 33.4612 9.46676 33.9292 9.84082C34.4163 10.23 34.8911 10.5117 35.4546 10.5117C35.7904 10.5116 36.0753 10.4632 36.3345 10.3574C36.5936 10.2515 36.832 10.0861 37.0718 9.84668C37.34 9.57866 37.52 9.2266 37.5376 8.79004H35.3853V7.96582H38.3667V8.3291C38.3666 9.12283 38.1672 9.82889 37.6597 10.3359C37.0586 10.9362 36.3548 11.2371 35.4546 11.2373C34.5541 11.2373 33.8497 10.9363 33.2485 10.3359C32.6475 9.73544 32.3462 9.03233 32.3462 8.13281C32.3462 7.2333 32.6474 6.53019 33.2485 5.92969C33.8497 5.32937 34.5541 5.02832 35.4546 5.02832Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M61.8228 5.02832C62.7229 5.02847 63.427 5.32952 64.0278 5.92969C64.6286 6.53014 64.9311 7.23338 64.9312 8.13281C64.9312 8.93321 64.6295 9.73461 64.0278 10.3359C63.427 10.9362 62.7229 11.2372 61.8228 11.2373C60.9223 11.2373 60.2182 10.9362 59.6167 10.3359C59.0158 9.73545 58.7144 9.03234 58.7144 8.13281C58.7144 7.23328 59.0158 6.53018 59.6167 5.92969C60.2182 5.3294 60.9223 5.02832 61.8228 5.02832ZM61.8228 5.85254C61.2495 5.85254 60.6845 6.04346 60.3091 6.51172L60.3042 6.51758C59.9239 6.89748 59.6372 7.46771 59.6372 8.13281C59.6372 8.70372 59.8277 9.27291 60.3032 9.74805C60.6849 10.1291 61.2565 10.4131 61.8228 10.4131C62.3965 10.4129 62.9621 10.2224 63.3374 9.75391L63.3423 9.74805L63.48 9.59668C63.7892 9.22399 64.0073 8.71469 64.0073 8.13281C64.0073 7.4604 63.8159 6.8965 63.3481 6.52246L63.3423 6.51758C62.9608 6.13658 62.3894 5.85276 61.8228 5.85254Z" fill="currentColor"/>
    <path d="M42.8745 5.9502H40.228V7.67188H42.6792V8.49609H40.228V10.2178H42.8745V11.042H39.3052V5.02832H42.8745V5.9502Z" fill="currentColor"/>
    <path d="M47.7769 5.85254H46.1108V11.042H45.187V5.85254H43.521V5.02832H47.7769V5.85254Z" fill="currentColor"/>
    <path d="M51.4028 11.042H50.48V5.02832H51.4028V11.042Z" fill="currentColor"/>
    <path d="M56.3071 5.85254H54.6401V10.9033H54.6685V11.042H53.8159V5.85254H52.1489V5.02832H56.3071V5.85254Z" fill="currentColor"/>
    <path d="M69.5962 9.4541V5.02832H70.519V11.042H69.6274L69.6069 11.0098L66.6958 6.41309V11.042H65.8716V5.02832H66.8618L69.5962 9.4541Z" fill="currentColor"/>
  </svg>
);

const AppStoreBadge = ({ className }: { className?: string }) => (
  <svg width="116" height="36" viewBox="0 0 116 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M50.8711 19.1338C51.9798 19.1338 52.9042 19.572 53.6435 20.4473C54.3822 21.3226 54.7519 22.4778 54.7519 23.9014C54.7519 25.4936 54.3187 26.7537 53.4531 27.6816C52.6767 28.5042 51.7104 28.916 50.5595 28.916C49.3139 28.9159 48.4224 28.4725 47.8789 27.5869V32.5068H45.7929V22.4092C45.7929 21.4073 45.7668 20.3784 45.7138 19.3291H47.5508L47.667 20.8164H47.7041C48.4013 19.6986 49.4568 19.1339 50.8711 19.1338ZM50.1953 20.8008C49.6839 20.8009 49.2139 20.9743 48.7969 21.3115C48.3802 21.6543 48.1049 22.103 47.9785 22.6514C47.9205 22.857 47.8889 23.0733 47.8838 23.2842V24.8506C47.8839 25.5306 48.0946 26.1056 48.5117 26.5801C48.9283 27.0493 49.4727 27.2861 50.1426 27.2861C50.9292 27.2861 51.5422 26.98 51.9804 26.3789C52.4076 25.7674 52.6298 24.9714 52.6299 23.9805C52.6299 23.0683 52.4232 22.3142 52.0117 21.7236C51.5626 21.1067 50.9557 20.8008 50.1953 20.8008Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M61.6728 19.1338C62.7816 19.1338 63.7055 19.572 64.4443 20.4473C65.1785 21.3226 65.5527 22.4778 65.5527 23.9014C65.5526 25.4937 65.1201 26.7537 64.2539 27.6816C63.4781 28.5042 62.5122 28.916 61.3613 28.916C60.1155 28.916 59.2232 28.4726 58.6797 27.5869V32.5068H56.5937V22.4092C56.5937 21.4073 56.5676 20.3784 56.5146 19.3291H58.3525L58.4687 20.8164H58.5049C59.2015 19.6985 60.2578 19.1338 61.6728 19.1338ZM60.9922 20.8008C60.4799 20.8008 60.0092 20.9741 59.5869 21.3115C59.1702 21.6543 58.8959 22.103 58.7695 22.6514C58.7058 22.9097 58.6689 23.1207 58.6689 23.2842V24.8506C58.669 25.5306 58.8803 26.1056 59.2969 26.5801C59.714 27.0492 60.2576 27.286 60.9336 27.2861C61.7196 27.2861 62.3322 26.98 62.7705 26.3789C63.2086 25.7673 63.4257 24.9715 63.4258 23.9805C63.4258 23.0684 63.2196 22.3142 62.8076 21.7236C62.3591 21.1067 61.752 20.8008 60.9922 20.8008Z" fill="currentColor"/>
    <path d="M14.3183 11.1875C15.3003 11.1874 17.164 9.83677 19.0908 10.0371C19.8987 10.0582 22.1899 10.3538 23.6679 12.5049C23.5465 12.5734 20.9387 14.1082 20.9648 17.2559C20.9965 21.0228 24.2638 22.2743 24.3115 22.3027C24.2895 22.3901 23.7982 24.1024 22.5693 25.8408C21.5453 27.3698 20.4686 28.867 18.7636 28.8936C17.1059 28.9305 16.546 27.918 14.6455 27.918C12.7293 27.918 12.1327 28.8673 10.5439 28.9307C8.91795 28.9887 7.67726 27.296 6.61619 25.7773C4.48868 22.6768 2.83642 17.0454 5.05369 13.2119C6.12538 11.3348 8.08387 10.1215 10.1797 10.0898C11.8108 10.0583 13.3206 11.1875 14.3183 11.1875Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M90.3808 19.1445C91.7587 19.1445 92.8673 19.6035 93.7011 20.5156C94.4929 21.3962 94.8945 22.5408 94.8945 23.9434C94.8945 25.3828 94.4827 26.5695 93.6592 27.4922C92.7986 28.4464 91.6534 28.9209 90.2226 28.9209C88.8446 28.9209 87.7462 28.4626 86.9277 27.5557C86.1098 26.6435 85.7041 25.4883 85.7041 24.1016C85.7041 22.6462 86.126 21.4593 86.9707 20.5312C87.8153 19.6033 88.9505 19.1445 90.3808 19.1445ZM90.2969 20.6631C89.4625 20.6631 88.8189 21.0379 88.3857 21.7812C88.0112 22.3981 87.8261 23.1473 87.8261 24.0332C87.8262 24.8925 88.0113 25.6302 88.3857 26.2471C88.8347 26.9904 89.4677 27.3651 90.2803 27.3652C91.0777 27.3652 91.701 26.9855 92.1553 26.2314C92.5405 25.5935 92.7304 24.8496 92.7304 23.9902C92.7304 23.1309 92.5449 22.3928 92.1699 21.7812C91.7322 21.038 91.1095 20.6632 90.2969 20.6631Z" fill="currentColor"/>
    <path d="M74.1894 15.5117C75.3722 15.5117 76.3598 15.7176 77.1465 16.1289L76.624 17.8262C75.8847 17.4254 75.0556 17.2305 74.1211 17.2305C73.3874 17.2305 72.8066 17.41 72.3945 17.7686C72.0462 18.0902 71.8721 18.4804 71.872 18.9443C71.872 19.4558 72.0733 19.8827 72.4746 20.2148C72.8229 20.5207 73.4507 20.8582 74.3642 21.2168C75.4832 21.6702 76.3068 22.1924 76.8349 22.7988C77.3626 23.4052 77.6269 24.1599 77.6269 25.0615C77.6268 26.1686 77.2412 27.0701 76.4707 27.7607C75.626 28.52 74.438 28.8994 72.9228 28.8994C71.5238 28.8994 70.3992 28.6311 69.5488 28.0879L70.0293 26.3525C70.9428 26.8956 71.9511 27.165 73.0439 27.165C73.8302 27.165 74.4426 26.9859 74.8808 26.6328C75.3191 26.2795 75.541 25.8044 75.541 25.2139C75.541 24.6866 75.3562 24.2437 74.997 23.8799C74.6379 23.5214 74.0418 23.1837 73.2031 22.8779C70.9224 22.029 69.7812 20.7846 69.7812 19.1553C69.7812 18.0901 70.1826 17.2144 70.9902 16.5342C71.7927 15.8541 72.8595 15.5118 74.1894 15.5117Z" fill="currentColor"/>
    <path d="M82.2461 19.335H84.5469L84.542 20.8955H82.2402V25.4463C82.2403 26.6061 82.6468 27.1806 83.4599 27.1807C83.8343 27.1807 84.1405 27.1492 84.3886 27.0859L84.4472 28.668C84.0357 28.8209 83.4967 28.8994 82.8261 28.8994C82.0028 28.8993 81.3589 28.6463 80.8945 28.1455C80.4301 27.6445 80.1973 26.8012 80.1972 25.6201V20.8955H78.8301V19.335H80.1972V17.6152L82.2461 16.999V19.335Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M107.111 19.124C108.462 19.1241 109.486 19.6251 110.184 20.627C110.727 21.4231 111.007 22.4038 111.007 23.5742C111.012 23.8905 110.985 24.2066 110.933 24.5176H104.672C104.693 25.4456 105 26.1522 105.58 26.6426C106.108 27.0801 106.789 27.2968 107.628 27.2969C108.557 27.2969 109.402 27.1488 110.162 26.8535L110.489 28.2988C109.602 28.6837 108.552 28.8789 107.343 28.8789C105.886 28.8788 104.745 28.4518 103.911 27.5977C103.082 26.7434 102.666 25.5937 102.666 24.1543C102.666 22.7413 103.051 21.5655 103.827 20.627C104.635 19.6251 105.733 19.124 107.111 19.124ZM106.947 20.5635C106.267 20.5635 105.712 20.848 105.284 21.4121C104.936 21.8603 104.73 22.4037 104.666 23.0312L109.017 23.0361C109.032 22.4194 108.895 21.887 108.61 21.4336C108.251 20.8536 107.692 20.5635 106.947 20.5635Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M43.9931 28.7051H41.7705L40.5508 24.8867H36.3222L35.1611 28.7051H32.9961L37.1875 15.7012H39.7744L43.9931 28.7051ZM38.3916 17.4365C38.2649 17.9902 38.0532 18.8078 37.7734 19.8887L36.6914 23.2842H40.1865L39.083 19.8887C38.9669 19.5406 38.7454 18.723 38.4287 17.4365H38.3916Z" fill="currentColor"/>
    <path d="M101.155 19.1338C101.351 19.1338 101.52 19.1498 101.679 19.1709V21.1641C101.462 21.1272 101.24 21.1065 101.019 21.1064C100.285 21.1064 99.7196 21.3809 99.3183 21.9346C98.9702 22.4248 98.7959 23.0419 98.7959 23.7852V28.7051H96.7109V22.2822C96.7109 21.2962 96.6944 20.3151 96.6523 19.3291H98.4687L98.542 21.1221H98.6006C98.8225 20.5052 99.1661 20.0091 99.6465 19.6348C100.079 19.3081 100.612 19.1339 101.155 19.1338Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M42.9902 6.34766C44.3205 6.34766 45.2129 7.30738 45.2129 8.70996C45.2129 10.1494 44.2947 11.1561 42.917 11.1562C41.5709 11.1562 40.6945 10.1497 40.6943 8.78418C40.6943 7.36056 41.5861 6.34783 42.9902 6.34766ZM42.9531 7.09668C42.2143 7.09698 41.7392 7.78779 41.7392 8.75781C41.7394 9.70677 42.2255 10.3975 42.9433 10.3975C43.6664 10.3973 44.1465 9.65897 44.1465 8.73633C44.1517 7.79778 43.6764 7.09668 42.9531 7.09668Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M64.8574 6.34766C66.1874 6.34783 67.08 7.30751 67.0801 8.70996C67.0801 10.1495 66.156 11.1562 64.7832 11.1562C63.4372 11.1562 62.5607 10.1497 62.5605 8.78418C62.5605 7.36044 63.4532 6.34766 64.8574 6.34766ZM64.8203 7.09668C64.0809 7.09668 63.6064 7.78758 63.6064 8.75781C63.6065 9.70677 64.0919 10.3975 64.8095 10.3975C65.5328 10.3972 66.0127 9.65895 66.0127 8.73633C66.0127 7.79788 65.5436 7.09684 64.8203 7.09668Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M77.8281 9.80664C77.8281 10.2496 77.8381 10.6715 77.8642 11.0459H76.957V11.0508L76.9092 10.3125H76.8828C76.5874 10.8715 76.091 11.1562 75.3994 11.1562C74.2856 11.1562 73.4619 10.1809 73.4619 8.80469C73.462 7.36543 74.3174 6.34788 75.4834 6.34766C76.1015 6.34766 76.5392 6.55375 76.7822 6.97559H76.8037V4.32812H77.8281V9.80664ZM75.7265 7.14355C74.9663 7.14371 74.5019 7.81897 74.5019 8.7627C74.5019 9.69074 74.9826 10.3291 75.706 10.3291C76.3496 10.3289 76.8086 9.76974 76.8086 9.10547V8.34082C76.8085 7.69752 76.3811 7.14355 75.7265 7.14355Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M84.417 6.34766C85.7469 6.34784 86.6386 7.30752 86.6386 8.70996C86.6386 10.1494 85.7207 11.1562 84.3428 11.1562C82.9967 11.1562 82.1202 10.1497 82.1201 8.78418C82.1201 7.36044 83.0122 6.34766 84.417 6.34766ZM84.3799 7.09668C83.6405 7.09668 83.165 7.78758 83.165 8.75781C83.1651 9.70677 83.6515 10.3975 84.3691 10.3975C85.0924 10.3972 85.5722 9.65894 85.5722 8.73633C85.5774 7.79789 85.1026 7.09686 84.3799 7.09668Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M70.1728 6.34277C71.3761 6.34277 71.9892 6.97534 71.9892 8.24609V9.94434C71.9892 10.4081 72.0098 10.7718 72.0576 11.0459L71.123 11.0508L71.0488 10.5186H71.0234C70.7121 10.9457 70.2524 11.1514 69.6719 11.1514C68.8425 11.1514 68.2568 10.571 68.2568 9.7959C68.257 8.65718 69.2439 8.07229 70.9541 8.07227V7.9873C70.954 7.38108 70.6324 7.0752 69.999 7.0752C69.5448 7.07521 69.1432 7.19126 68.7949 7.41797L68.5888 6.74316C69.0168 6.47954 69.5497 6.34283 70.1728 6.34277ZM70.9804 8.75781C69.8401 8.75789 69.2705 9.03178 69.2705 9.68555C69.2705 10.1706 69.5662 10.4082 69.9726 10.4082C70.4955 10.408 70.9802 10.0125 70.9804 9.46973V8.75781Z" fill="currentColor"/>
    <path d="M97.915 6.4375H99.0449L99.0508 7.21289H97.9209V9.44824C97.9209 10.0175 98.1156 10.3025 98.5166 10.3027C98.6959 10.3027 98.8499 10.2813 98.9717 10.2549L98.997 11.0303C98.7967 11.104 98.5324 11.1465 98.2002 11.1465C97.3922 11.1463 96.9072 10.7027 96.9072 9.53223V7.20703H96.2314V6.4375H96.9072V5.59375L97.915 5.28809V6.4375Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M108.157 6.34766C109.334 6.34785 110.073 7.218 110.073 8.53613C110.083 8.68374 110.073 8.84223 110.041 8.99512H106.964C106.985 9.86495 107.561 10.3604 108.416 10.3604C108.869 10.3603 109.292 10.2869 109.661 10.1445L109.82 10.8564C109.382 11.0463 108.869 11.1406 108.272 11.1406C106.832 11.1404 105.977 10.228 105.977 8.82031C105.977 7.40735 106.853 6.34766 108.157 6.34766ZM108.089 7.04883C107.497 7.04883 107.033 7.56044 106.969 8.26172H109.102C109.102 7.55 108.743 7.04901 108.089 7.04883Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M35.9902 4.61328C38.3816 4.61328 39.4853 5.78904 39.4853 7.70312C39.4799 9.91233 38.1807 11.1094 35.7207 11.1094C35.1402 11.1094 34.6387 11.0826 34.2217 11.0352V4.74512C34.8076 4.65547 35.399 4.608 35.9902 4.61328ZM36.0752 5.41992C35.7532 5.41992 35.4779 5.44087 35.251 5.48828V10.2656C35.3723 10.2867 35.61 10.292 35.9424 10.292C37.5102 10.292 38.4033 9.40065 38.4033 7.73438C38.398 6.24235 37.59 5.42006 36.0752 5.41992Z" fill="currentColor"/>
    <path d="M101.505 7.09668H101.526C101.849 6.59576 102.319 6.34766 102.915 6.34766C103.891 6.34788 104.488 7.1075 104.488 8.30957L104.482 11.0508H103.458V8.4248C103.458 7.60253 103.147 7.18653 102.529 7.18652C101.996 7.18652 101.505 7.5446 101.505 8.27734V11.0566H100.48V4.32812H101.505V7.09668Z" fill="currentColor"/>
    <path d="M47.7998 8.63086C47.9216 9.15274 48.0265 9.6431 48.1113 10.1123H48.1328C48.2068 9.72217 48.3329 9.24244 48.5127 8.6416L49.167 6.44238H50.001L50.6299 8.59375C50.7829 9.11565 50.904 9.62728 50.999 10.1123H51.0254C51.0942 9.63781 51.1941 9.13673 51.3369 8.59375L51.8965 6.44238H52.8994L51.458 11.0508H50.5185L49.9219 9.05273C49.7739 8.56236 49.6478 8.06632 49.5527 7.56543H49.5312C49.4572 8.06631 49.3152 8.57294 49.1621 9.05273L48.5283 11.0508H47.5781L46.2217 6.44238H47.2773L47.7998 8.63086Z" fill="currentColor"/>
    <path d="M56.6162 6.34766C57.582 6.34766 58.2205 7.08576 58.2207 8.29297L58.2158 11.0508H57.1914V8.4043C57.1914 7.58715 56.88 7.18082 56.2627 7.18066C55.6559 7.18066 55.2383 7.70319 55.2383 8.30957V11.0508H54.2148V7.76074C54.2148 7.35479 54.2039 6.91694 54.1777 6.44238H55.0801L55.1269 7.1543H55.1533C55.4282 6.664 55.9879 6.34771 56.6162 6.34766Z" fill="currentColor"/>
    <path d="M61.04 11.0508H60.0166V4.32812H61.04V11.0508Z" fill="currentColor"/>
    <path d="M90.5556 6.34766C91.522 6.34766 92.1609 7.08576 92.1611 8.29297V11.0508H91.1308V8.4043C91.1308 7.58699 90.8197 7.18066 90.2021 7.18066C89.5949 7.1808 89.1787 7.70327 89.1787 8.30957V11.0508H88.1543V7.76074C88.1543 7.35479 88.1439 6.91694 88.1172 6.44238H89.0195L89.0674 7.1543H89.0937C89.3687 6.6641 89.928 6.34772 90.5556 6.34766Z" fill="currentColor"/>
    <path d="M19.1113 4C19.2749 5.47644 18.6892 6.92666 17.834 7.99707C16.9417 9.04628 15.5109 9.84724 14.1279 9.74707C13.9433 8.32879 14.651 6.82109 15.4375 5.89844C16.3243 4.85447 17.8761 4.05287 19.1113 4Z" fill="currentColor"/>
  </svg>
);

const defaultBadges: WebsiteFooterBadge[] = [
  {
    id: 'google-play',
    href: 'https://play.google.com/store/apps/details?id=com.bitcoin.mwallet&pli=1',
    alt: 'Get it on Google Play',
    imageSrc: '' // Will use inline SVG component instead
  },
  {
    id: 'app-store',
    href: 'https://apps.apple.com/us/app/bitcoin-com-wallet-buy-sell/id1252903728?ls=1',
    alt: 'Download on the App Store',
    imageSrc: '' // Will use inline SVG component instead
  }
];

const defaultLinkGroups: WebsiteFooterLinkGroup[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: 'https://www.bitcoin.com/about-us/' },
      { label: 'Contact', href: 'https://www.bitcoin.com/contact-us/' },
      { label: 'Advertise', href: 'https://www.bitcoin.com/advertise/' },
      { label: 'Legal', href: 'https://www.bitcoin.com/legal/user-agreement/' },
      { label: 'Sitemap', href: 'https://www.bitcoin.com/sitemap/' }
    ]
  },
  {
    heading: 'Insights',
    links: [
      { label: 'News', href: 'https://news.bitcoin.com/' },
      { label: 'Markets', href: 'https://markets.bitcoin.com/' },
      { label: 'Expert Reviews', href: 'https://www.bitcoin.com/directory/' },
      { label: 'Learning Center', href: 'https://www.bitcoin.com/get-started/' }
    ]
  },
  {
    heading: 'Products & Services',
    links: [
      { label: 'Bitcoin.com Account', href: 'https://accounts.bitcoin.com/' },
      { label: 'Bitcoin.com Wallet', href: 'https://wallet.bitcoin.com/' },
      { label: 'Buy Bitcoin', href: 'https://buy.bitcoin.com/' },
      { label: 'Verse DEX', href: 'https://verse.bitcoin.com/' }
    ]
  },
  {
    heading: 'Reviews',
    links: [{ label: 'Exchanges', href: 'https://www.bitcoin.com/exchanges/' }]
  },
  {
    heading: 'Follow',
    links: [
      { label: 'Telegram', href: 'https://t.me/GetVerse/1/' },
      { label: 'X', href: 'https://x.com/bitcoincom/' },
      { label: 'Discord', href: 'https://discord.com/invite/bitcoin-com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bitcoin.com/' }
    ]
  }
];

const defaultLegalText = `© ${new Date().getFullYear()} Saint Bitts LLC Bitcoin.com. All rights reserved.`;

const createLinkKey = (group: WebsiteFooterLinkGroup, link: WebsiteFooterLink, index: number) =>
  `${group.heading}-${link.label}-${index}`;

const badgeFocusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-100 focus-visible:ring-offset-shades-almost-black rounded-sm';

export const WebsiteFooter = forwardRef<HTMLElement, WebsiteFooterProps>(
  (
    {
      showDownloadSection = true,
      downloadTitle = 'Download the app',
      badges = defaultBadges,
      linkGroups = defaultLinkGroups,
      legalText = defaultLegalText,
      contentClassName,
      className,
      ...rest
    },
    ref
  ) => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
      return Object.fromEntries(linkGroups.map((group) => [group.heading, false]));
    });

    useEffect(() => {
      setOpenSections((current) => {
        const next: Record<string, boolean> = {};
        linkGroups.forEach((group) => {
          next[group.heading] = current[group.heading] ?? false;
        });
        return next;
      });
    }, [linkGroups]);

    const mobileAccordionBaseId = useId();

    const renderedBadges = useMemo(
      () =>
        badges.map((badge) => (
          <a
            key={badge.id}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[56px] w-full items-center justify-center rounded-radius-xsml border border-[#87858E] transition-colors hover:border-shades-semi-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-shades-almost-black rounded-md"
            aria-label={badge.alt}
          >
            {badge.id === 'google-play' ? (
              <GooglePlayBadge className="h-auto w-auto max-h-[30px] text-[#87858E]" />
            ) : (
              <AppStoreBadge className="h-auto w-auto max-h-[30px] text-[#87858E]" />
            )}
          </a>
        )),
      [badges]
    );

    const handleLinkClick =
      (link: WebsiteFooterLink) =>
      (event: MouseEvent<HTMLAnchorElement>): void => {
        if (link.onClick) {
          event.preventDefault();
          link.onClick();
        }
      };

    return (
      <footer
        ref={ref}
        className={twMerge('w-full bg-[#1C1C1C] text-shades-white', className)}
        {...rest}
      >
        <div className='h-[27px] w-full bg-shades-white rounded-b-3xl'></div>
        <div
          className={twMerge(
            'mx-auto flex w-full max-w-[1344px] flex-col gap-xl px-m py-xl md:px-xl md:py-xxl',
            contentClassName
          )}
        >
          {/* Desktop Layout - Grid with columns */}
          <div 
            className="hidden lg:grid gap-xl"
            style={{
              gridTemplateColumns: `repeat(${linkGroups.length + (showDownloadSection ? 2 : 0)}, minmax(0, 1fr))`
            }}
          >
            {showDownloadSection && (
              <div className="col-span-2 flex flex-col gap-m max-w-[240px]">
                <p className="text-heading-sm text-[#FFFFFF]">{downloadTitle}</p>
                <div className="flex flex-col gap-xs max-w-[300px]">{renderedBadges}</div>
              </div>
            )}
            {linkGroups.map((group) => (
              <div key={group.heading} className="flex flex-col gap-s">
                <p className="text-heading-sm text-[#FFFFFF] leading-6">{group.heading}</p>
                <ul className="space-y-xs">
                  {group.links.map((link, index) => (
                    <li key={createLinkKey(group, link, index)}>
                      <a
                        href={link.href}
                        onClick={handleLinkClick(link)}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        className="text-body text-[#67666B] transition-colors hover:text-shades-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-shades-almost-black"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tablet Layout - Two columns with download buttons on left and accordion on right */}
          <div className="hidden md:flex lg:hidden">
            {showDownloadSection && (
              <div className="flex flex-1 flex-col gap-m">
                <p className="text-heading-sm text-[#FFFFFF]">{downloadTitle}</p>
                <div className="flex flex-col gap-xs max-w-[300px]">{renderedBadges}</div>
              </div>
            )}
            <div className={twMerge(
              "flex flex-col gap-m",
              showDownloadSection ? "flex-1" : "w-full"
            )}>
              <div className="divide-y divide-shades-dark border-t border-shades-dark">
                {linkGroups.map((group, index) => {
                  const sectionId = `${mobileAccordionBaseId}-tablet-${index}`;
                  const isOpen = openSections[group.heading] ?? false;

                  return (
                    <div key={group.heading}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-m text-left border-t border-[#87858E] first:border-t-0"
                        aria-expanded={isOpen}
                        aria-controls={`${sectionId}-content`}
                        onClick={() =>
                          setOpenSections((current) => ({
                            ...current,
                            [group.heading]: !isOpen
                          }))
                        }
                      >
                        <span className="text-heading-sm text-[#FFFFFF]">
                          {group.heading}
                        </span>
                        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary-100">
                          <Icon
                            type={isOpen ? 'icon-remove' : 'icon-add'}
                            size="sm"
                            className="text-shades-almost-black"
                            ariaHidden
                          />
                        </div>
                      </button>
                      <div
                        id={`${sectionId}-content`}
                        className={twMerge('pb-m', isOpen ? 'block' : 'hidden')}
                      >
                        <ul className="space-y-xs">
                          {group.links.map((link, linkIndex) => (
                            <li key={createLinkKey(group, link, linkIndex)}>
                              <a
                                href={link.href}
                                onClick={handleLinkClick(link)}
                                target={link.isExternal ? '_blank' : undefined}
                                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                                className="text-body text-shades-semi-dark transition-colors hover:text-shades-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-shades-almost-black"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-l md:hidden">
            {showDownloadSection && (
              <div className="flex flex-col gap-m">
                <p className="text-heading-sm text-[#FFFFFF]">{downloadTitle}</p>
                <div className="flex flex-col gap-xs">{renderedBadges}</div>
              </div>
            )}
            <div className="divide-y divide-[#87858E] border-t border-[#87858E]">
              {linkGroups.map((group, index) => {
                const sectionId = `${mobileAccordionBaseId}-${index}`;
                const isOpen = openSections[group.heading] ?? false;

                return (
                  <div key={group.heading}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-m text-left"
                      aria-expanded={isOpen}
                      aria-controls={`${sectionId}-content`}
                      onClick={() =>
                        setOpenSections((current) => ({
                          ...current,
                          [group.heading]: !isOpen
                        }))
                      }
                    >
                      <span className="text-heading-sm text-[#FFFFFF]">
                        {group.heading}
                      </span>
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-secondary-100">
                        <Icon
                          type={isOpen ? 'icon-remove' : 'icon-add'}
                          size="sm"
                          className="text-shades-almost-black"
                          ariaHidden
                        />
                      </div>
                    </button>
                    <div
                      id={`${sectionId}-content`}
                      className={twMerge('pb-m', isOpen ? 'block' : 'hidden')}
                    >
                      <ul className="space-y-xs">
                        {group.links.map((link, linkIndex) => (
                          <li key={createLinkKey(group, link, linkIndex)}>
                            <a
                              href={link.href}
                              onClick={handleLinkClick(link)}
                              target={link.isExternal ? '_blank' : undefined}
                              rel={link.isExternal ? 'noopener noreferrer' : undefined}
                              className="text-body text-shades-semi-dark transition-colors hover:text-shades-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-shades-almost-black"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-m">
            <div className="flex flex-col md:flex-row gap-m md:gap-[auto] justify-between md:items-center">
              <Logo size="lg" theme="dark" className="w-[270px] h-[57px] inline-flex" />
              <p className="text-body-sm text-[#87858E] flex md:text-right">{legalText}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

WebsiteFooter.displayName = 'WebsiteFooter';



import React from 'react';
import {Link} from "react-router-dom"
function AppIcon(props) {
  return (
    <Link to ="/">
    <svg width={props.width} height={props.height} viewBox="0 0 737 737" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="368.5" cy="368.5" r="368.5" fill="url(#paint0_linear)"/>
      <path d="M552.5 77.5L352.5 185L246.5 439L317 422L215.5 639L563.5 282L397 320.5L552.5 77.5Z" fill="white"/>
      <path d="M578.857 152.898C618.362 196.292 644.715 250.023 654.845 307.824C664.975 365.626 658.463 425.116 636.069 479.358C613.675 533.6 576.322 580.357 528.366 614.178C480.41 647.999 423.827 667.489 365.215 670.375L362.721 619.736C411.731 617.322 459.045 601.025 499.145 572.744C539.246 544.464 570.48 505.366 589.205 460.01C607.93 414.654 613.375 364.909 604.905 316.576C596.435 268.244 574.398 223.315 541.365 187.029L578.857 152.898Z" fill="white"/>
      <path d="M364.222 646.287L366.994 696.84L300.343 648.874L361.45 595.735L364.222 646.287Z" fill="white"/>
      <path d="M168.787 607.943C123.957 570.076 90.8152 520.245 73.2275 464.26C55.6398 408.275 54.3308 348.444 69.4531 291.743C84.5754 235.042 115.506 183.809 158.637 144.018C201.769 104.228 255.324 77.5186 313.057 67.0064L322.14 116.887C273.864 125.678 229.082 148.011 193.016 181.284C156.95 214.556 131.087 257.396 118.442 304.808C105.797 352.221 106.891 402.251 121.598 449.064C136.304 495.878 164.017 537.546 201.503 569.209L168.787 607.943Z" fill="white"/>
      <path d="M317.186 90.7585L307.839 41L380.181 79.8559L326.533 140.517L317.186 90.7585Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear" x1="233" y1="130.5" x2="516" y2="691" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5DF029"/>
        <stop offset="1" stopColor="#27DC65"/>
      </linearGradient>
      </defs>
    </svg>
    </Link>
  );
}

export default AppIcon;

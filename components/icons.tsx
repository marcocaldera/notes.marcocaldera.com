import { Linkedin, LucideProps, Moon, SunMedium, Twitter } from "lucide-react"

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  linkedin: Linkedin,
  goodreads: (props: LucideProps) => (
    <svg
      // style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
      viewBox="0 0 1024 1024"
      width="24"
      height="24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M663.8 382.4c10.2 74.6-9.4 158-71.8 201.4-44.6 31-105.6 28.2-141.6 11.4-74.2-34.6-99-117.2-93.6-194.4 8.6-121.8 81.8-175.8 150.6-175 93.8-0.4 143.6 63.6 156.4 156.6zM960 176v672c0 61.8-50.2 112-112 112H176c-61.8 0-112-50.2-112-112V176c0-61.8 50.2-112 112-112h672c61.8 0 112 50.2 112 112zM724 626.4s-0.2-68-0.2-434.6h-58v80.6c-1.6 0.6-2.4-1-3.2-2.4-19.2-41.4-71.8-92.6-152-92-103.8 0.8-174.4 62.4-201.2 155.6-8.6 29.8-11.6 60.2-11 91.2 3.4 155.8 90.2 235.6 224.8 230.4 57.8-2.2 109-34 138-90.4 1-2 2.2-3.8 3.4-5.8 0.4 0.2 0.8 0.2 1.2 0.4 0.6 7.6 0.4 61.4 0.2 69-0.4 29.6-4 59-14.4 87-15.6 42-44.6 69.4-89 79-35.6 7.8-71.2 7.6-106.4-2.4-43-12.2-73-38-82.2-83.6-0.6-3.2-2.6-2.6-4.6-2.6h-53.6c1.6 21.2 6.4 40.6 17 58.4 48.4 81 165.4 97 256.4 74.8 99.8-24.6 134.6-109.8 134.8-212.6z"
        fill="currentColor"
      />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 1023 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M512 1024C794.77 1024 1024 794.77 1024 512C1024 495.283 1023.2 478.753 1021.63 462.447C1007.85 466.847 994.299 471.879 981.023 477.582C951.295 490.262 923.044 506.398 897.771 526.228C872.381 546.035 849.82 569.059 830.574 594.8C826.368 599.928 822.773 605.345 819.223 610.695L819.214 610.708C818.444 611.869 817.675 613.027 816.903 614.178C812.828 619.974 808.954 626.608 805.081 633.241C804.718 633.862 804.356 634.483 803.993 635.104L800.893 640.443L798.011 645.567L791.746 656.912C789.023 661.892 786.043 666.717 783.05 671.564C781.487 674.094 779.921 676.631 778.386 679.198C759.541 708.133 737.222 735.614 710.307 758.9C683.34 782.067 651.993 801.087 617.358 813.004C600.138 819.01 582.223 823.134 564.003 825.374C554.782 826.471 545.492 827.162 536.155 827.162C531.486 827.233 526.722 827.162 521.934 826.828L521.352 826.788L520.819 826.751L520.817 826.751L520.816 826.75C516.205 826.433 512.306 826.165 506.239 825.017L486.18 821.585L485.536 799.299C484.631 763.143 486.99 727.749 490.872 692.688C492.873 675.193 495.208 657.818 497.902 640.443C499.757 628.192 501.782 616.299 504.14 604.048H572.1C567.764 619.635 563.619 636.105 559.999 652.217C556.307 668.615 552.972 684.966 549.851 701.34C545.397 726.271 541.729 751.44 539.608 776.251C546.159 776.585 552.734 776.585 559.427 776.251C574.219 775.37 589.107 773.034 603.711 769.006C632.865 761.021 660.568 746.864 685.391 728.178C710.307 709.467 732.124 686.11 751.204 660.488C759.629 649.279 767.284 637.048 775.12 624.526L775.121 624.525L775.121 624.525C785.032 608.688 795.234 592.384 807.659 577.091C829.025 549.944 854.037 525.657 881.859 505.087C909.467 484.471 940.052 468.001 971.781 455.297C987.257 449.114 1002.97 443.792 1018.88 439.278C983.565 190.951 770.082 0 512 0C229.23 0 0 229.23 0 512C0 520.785 0.221268 529.519 0.658533 538.196C32.2374 537.122 63.8044 536.203 95.3697 535.284C104.585 535.015 113.8 534.747 123.015 534.475C124.754 527.015 126.683 519.912 128.996 512.785C131.256 505.084 134.063 497.606 136.879 490.106L136.879 490.105L136.88 490.104L136.88 490.103L136.881 490.102L136.881 490.1L136.881 490.099C137.742 487.806 138.604 485.511 139.451 483.207C140.753 480.269 142.006 477.3 143.259 474.327L143.26 474.326L143.26 474.326L143.26 474.325L143.262 474.322C146.066 467.673 148.876 461.01 152.266 454.653C153.435 452.384 154.584 450.099 155.734 447.812L155.734 447.812C159.271 440.778 162.817 433.726 166.987 427.053C168.155 425.087 169.308 423.111 170.46 421.136L170.462 421.133C174.576 414.082 178.69 407.033 183.473 400.406C185.511 397.54 187.464 394.608 189.419 391.677C193.265 385.906 197.112 380.135 201.598 374.856C203.812 372.101 205.998 369.316 208.185 366.531L208.185 366.531L208.186 366.531L208.186 366.53L208.188 366.528C212.471 361.073 216.756 355.616 221.25 350.378L242.569 327.306C247.233 322.199 252.354 317.558 257.472 312.919L257.472 312.918L257.473 312.918L257.473 312.917L257.474 312.917C260.118 310.52 262.761 308.124 265.341 305.664L276.968 294.987C279.606 292.77 282.339 290.687 285.084 288.596C286.499 287.518 287.918 286.437 289.328 285.334L314.316 266.218L354 240.787C357.23 238.936 360.518 237.227 363.791 235.527L363.792 235.527L363.794 235.525L363.795 235.525C365.156 234.818 366.514 234.112 367.864 233.398L395.686 218.788C401.677 215.48 407.971 212.921 414.271 210.36L414.272 210.359C417.642 208.989 421.013 207.618 424.342 206.132L453.284 194L471.625 234.328C467.195 237.188 461.216 241.24 456.094 245.292C450.711 249.177 445.542 253.539 440.421 257.924C435.156 262.19 430.106 266.743 425.271 271.534C423.446 273.342 421.563 275.076 419.685 276.807L419.683 276.809L419.682 276.81C416.559 279.687 413.447 282.555 410.621 285.739C408.785 287.702 406.938 289.654 405.092 291.605C397.547 299.577 390.012 307.539 383.276 316.271L370.246 332.121L358.431 348.948C357.053 350.943 355.646 352.918 354.238 354.893L354.238 354.893L354.238 354.894L354.238 354.894L354.236 354.896C351.677 358.486 349.117 362.078 346.735 365.799L336.231 383.508L325.704 401.169L316.676 419.688C315.255 422.657 313.792 425.609 312.327 428.563L312.325 428.567C307.7 437.896 303.066 447.243 299.738 457.18C298.013 461.793 296.215 466.378 294.417 470.963L294.416 470.966L294.416 470.967C291.198 479.174 287.98 487.38 285.184 495.744L273.726 535.452C270.785 544.076 269.093 553.109 267.402 562.134L267.402 562.134L267.402 562.134L267.402 562.135L267.402 562.135L267.402 562.136L267.402 562.137L267.401 562.137L267.401 562.138C266.546 566.706 265.691 571.271 264.674 575.78L261.173 593.298C266.127 581.667 271.513 570.179 277.037 558.738L277.492 557.84L277.866 557.1L278.516 555.816C284.02 544.943 289.521 534.075 295.665 523.487C301.102 513.523 307.081 503.855 313.061 494.185L313.061 494.184L313.062 494.183L313.063 494.182L313.063 494.181C314.077 492.541 315.091 490.902 316.102 489.261L316.668 488.409C323.863 477.562 331.051 466.726 338.827 456.298C344.951 447.609 351.679 439.327 358.398 431.057L358.398 431.057C360.12 428.937 361.842 426.818 363.552 424.693C364.312 423.829 365.071 422.963 365.831 422.097L365.831 422.097L365.831 422.097C373.883 412.918 381.955 403.716 390.684 395.091C397.745 387.529 405.359 380.521 412.98 373.508C415.231 371.436 417.483 369.364 419.721 367.276C422.852 364.698 425.941 362.07 429.031 359.441L429.031 359.441L429.031 359.441L429.032 359.441L429.032 359.441C436.167 353.371 443.303 347.3 450.949 341.845L467.099 329.832L483.893 318.75C491.141 313.732 498.789 309.381 506.447 305.024L506.45 305.022C510.468 302.736 514.49 300.448 518.458 298.061L630.959 230.276L549.71 335.243L540.683 346.874L531.724 359.173C525.795 367.443 520.052 375.881 514.549 384.461C503.497 401.55 493.183 419.116 483.845 437.04C482.665 439.427 481.461 441.809 480.256 444.193C476.915 450.806 473.568 457.431 470.696 464.211C467.256 471.417 464.401 478.772 461.548 486.123C460.805 488.036 460.063 489.949 459.31 491.859C458.514 494.33 457.683 496.799 456.852 499.266C454.527 506.176 452.201 513.083 450.639 520.055C450.401 521.105 450.123 522.146 449.843 523.195C449.678 523.813 449.512 524.433 449.353 525.06L520.477 526.22C523.104 520.165 645.995 240.09 915.561 221.591L915.612 221.576L915.597 221.588L915.613 221.587L915.581 221.601L915.555 221.621L915.613 221.587L915.615 221.587C914.677 222.326 913.75 223.089 912.833 223.876C912.616 224.068 912.4 224.263 912.184 224.461L912.015 224.603L911.622 224.934C852.084 277.891 838.477 429.116 838.477 429.116C832.002 394.486 830.734 365.807 832.482 342.262L832.482 342.203V342.155C832.455 339.462 832.646 336.816 832.982 334.17C833.127 332.976 833.245 331.782 833.363 330.589L833.363 330.585V330.584C833.591 328.278 833.818 325.975 834.242 323.683L836.314 313.363C836.631 311.836 837.049 310.33 837.514 308.865C845.277 276.12 858.951 258.417 865.981 251.084H865.97L862.278 252.395C859.249 253.578 856.172 254.641 853.096 255.703C847.002 257.808 840.91 259.912 835.195 262.953L808.897 275.18C802.118 277.991 795.781 281.74 789.455 285.483L789.449 285.487L789.448 285.487C787.462 286.662 785.477 287.836 783.481 288.98C780.551 290.768 777.583 292.474 774.618 294.178C769.241 297.268 763.876 300.352 758.779 303.901L735.388 320.728C730.036 324.213 725.253 328.446 720.479 332.671L720.477 332.673C718.069 334.803 715.664 336.932 713.189 338.961C712.652 339.425 712.113 339.888 711.575 340.35L710.81 341.007L710.493 341.28C704.121 346.748 697.786 352.185 692.106 358.41C689.722 360.89 687.289 363.321 684.857 365.75L684.856 365.751L684.854 365.753L684.852 365.754C680.532 370.07 676.216 374.381 672.195 378.955L653.755 400.811C649.952 405.735 646.321 410.77 642.691 415.804L642.688 415.808L642.687 415.809L642.686 415.811L642.685 415.812C640.746 418.5 638.807 421.188 636.843 423.859C633.188 428.886 629.929 434.176 626.675 439.459C624.945 442.267 623.217 445.074 621.431 447.837C618.183 452.934 615.335 458.242 612.489 463.548L612.488 463.55L612.487 463.552L612.486 463.554L612.485 463.556C610.847 466.609 609.21 469.661 607.496 472.672C603.247 480.942 599.341 489.418 595.464 497.831L595.229 498.342C594.443 500.269 593.644 502.194 592.844 504.122L592.843 504.123C590.033 510.897 587.214 517.692 584.915 524.631C581.699 533.235 578.936 542.721 576.863 550.563L573.1 564.983L398.952 567.867L404.69 526.609C405.144 522.382 406.071 518.36 407.003 514.318L407.004 514.314C407.343 512.842 407.683 511.366 408.001 509.878C409.646 501.348 412.069 493.216 414.495 485.077C415.268 482.48 416.042 479.883 416.791 477.272C417.629 474.936 418.454 472.595 419.28 470.254C422.159 462.085 425.034 453.928 428.439 446.073C431.87 437.468 435.729 429.163 439.59 420.853L440.23 419.474C436.252 423.382 432.3 427.315 428.558 431.51C421.863 438.34 415.655 445.658 409.458 452.964L409.458 452.964C407.783 454.938 406.11 456.91 404.428 458.872C402.661 461.109 400.878 463.335 399.094 465.563L399.094 465.563L399.094 465.563L399.094 465.563L399.094 465.564C393.256 472.853 387.412 480.151 382.085 487.855C375.291 496.985 369.055 506.551 362.839 516.088L362.136 517.166L361.48 518.172C360.403 519.941 359.322 521.707 358.241 523.472L358.241 523.473L358.24 523.475C352.915 532.172 347.6 540.854 342.829 549.848C337.263 559.573 332.252 569.635 327.254 579.672L327.254 579.672C326.776 580.631 326.299 581.59 325.821 582.549C320.509 593.655 315.364 604.858 310.648 616.227C305.907 627.596 301.289 639.06 297.141 650.691C292.806 662.227 288.923 674.001 285.279 685.802C277.918 709.395 271.654 733.349 266.461 757.496C263.936 769.604 261.485 781.685 259.434 793.793C257.433 805.71 255.575 818.509 254.527 829.404L199.526 830L197.12 785.856C196.891 780.566 196.578 775.292 196.267 770.023C195.708 760.572 195.149 751.139 195.071 741.667L196.358 697.335C196.486 694.013 196.579 690.691 196.673 687.371V687.371C196.996 675.902 197.318 664.451 199.073 653.03L204.221 608.838L205.528 597.779L207.744 586.839L212.27 564.983L216.843 543.127C218.153 535.786 220.13 528.635 222.417 521.533L235.687 478.75C238.989 469.496 242.769 460.377 246.548 451.263L246.548 451.262L246.548 451.262L246.548 451.262L246.548 451.262L246.55 451.256C248.493 446.569 250.435 441.884 252.312 437.183C256.283 426.397 261.576 416.174 266.863 405.963L266.866 405.957C268.459 402.879 270.052 399.803 271.608 396.712L281.873 376.762L293.711 357.671L305.574 338.627C308.387 334.47 311.382 330.419 314.372 326.375L314.373 326.374C315.839 324.391 317.304 322.409 318.746 320.418L332.038 302.304L332.85 301.398L312.698 315.818L300.857 324.374L289.686 333.765C287.044 336.081 284.322 338.319 281.598 340.558L281.598 340.559L281.597 340.56L281.597 340.56C276.781 344.519 271.962 348.481 267.58 352.88L246.761 373.378C242.586 377.823 238.616 382.435 234.646 387.047C232.252 389.828 229.858 392.609 227.419 395.353C223.038 400.019 219.263 405.171 215.495 410.314L215.495 410.314C213.488 413.054 211.483 415.79 209.39 418.449C204.58 424.477 200.404 430.931 196.237 437.373L196.237 437.373L196.235 437.376L196.234 437.378L196.232 437.38L196.231 437.383C195.095 439.139 193.959 440.895 192.811 442.641C188.678 448.611 185.135 454.936 181.59 461.264L181.59 461.264L181.588 461.267L181.586 461.27L181.584 461.274L181.583 461.277C180.347 463.483 179.111 465.689 177.849 467.881C174.747 473.049 172.14 478.46 169.529 483.877L169.529 483.878C167.89 487.279 166.25 490.682 164.486 494.028C163.563 496.145 162.623 498.258 161.683 500.371L161.683 500.372C158.642 507.206 155.598 514.047 153.124 521.056C149.529 530.042 146.597 539.671 144.287 548.275L141.619 558.142L132.665 557.904C124.877 557.676 117.089 557.45 109.3 557.224L109.293 557.224C73.4278 556.184 37.5547 555.143 1.69172 553.924C23.0187 817.084 243.345 1024 512 1024Z"
        fill="currentColor"
      />
    </svg>
  ),
  logoBig: (props: LucideProps) => (
    <svg
      width={200}
      height={40}
      fill="none"
      viewBox="0 0 1022 167"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M279.612 13.834s-15.151 11.267-8.354 47.594c0 0 3.715-41.269 20.167-54.223"
        fill="currentColor"
      />
      <path
        d="m283.775 9.353-7.539 2.119c-2.482.775-5.082 1.267-7.488 2.321l-7.312 2.883c-2.5.872-4.78 2.176-7.134 3.352-2.328 1.236-4.75 2.304-6.998 3.688l-6.689 4.237c-2.289 1.331-4.271 3.11-6.409 4.674-2.102 1.605-4.248 3.182-6.151 5.034-1.933 1.812-3.955 3.548-5.8 5.454l-5.424 5.85c-1.717 2.026-3.337 4.144-5.005 6.216-1.671 2.078-3.086 4.344-4.635 6.518-1.536 2.176-2.809 4.526-4.231 6.793-1.326 2.315-2.553 4.69-3.786 7.07-1.132 2.433-2.311 4.842-3.3 7.365a74.557 74.557 0 0 0-1.516 3.977l-24.83-.407c.111-.438.234-.873.334-1.31.556-2.47 1.472-4.912 2.264-7.36.96-2.419 1.845-4.855 2.974-7.228 1.027-2.41 2.278-4.747 3.443-7.102a171.883 171.883 0 0 1 8.027-13.74 153.59 153.59 0 0 1 4.489-6.601l2.341-3.217 2.362-3.042 21.245-27.426-29.42 17.716c-3.005 1.808-6.144 3.405-9.035 5.402l-4.388 2.9-4.221 3.139c-2.863 2.041-5.459 4.41-8.165 6.64-2.562 2.39-5.199 4.712-7.594 7.27-2.496 2.465-4.786 5.115-7.094 7.735-2.19 2.726-4.45 5.403-6.459 8.263-2.093 2.787-4.012 5.7-5.939 8.61-1.829 2.954-3.689 5.895-5.349 8.943-1.745 3.012-3.304 6.114-4.869 9.207-1.443 2.99-2.85 5.992-4.15 9.033l.919-4.577c.795-3.51 1.211-7.141 2.369-10.54l2.994-10.379c1.136-3.401 2.548-6.709 3.798-10.07 1.154-3.419 2.891-6.566 4.434-9.799l2.358-4.837 2.752-4.615 2.747-4.63c.964-1.5 2.044-2.929 3.061-4.405l3.088-4.389 3.408-4.143c2.19-2.842 4.704-5.365 7.146-7.977 1.188-1.33 2.56-2.455 3.825-3.71a54.614 54.614 0 0 1 3.965-3.558c1.34-1.15 2.691-2.288 4.099-3.304 1.337-1.055 2.9-2.112 4.059-2.864L170.554-.001l-7.564 3.17c-2.5 1.111-5.096 1.98-7.495 3.304l-7.275 3.816c-1.204.642-2.429 1.247-3.621 1.931l-3.463 2.213-6.913 4.434-6.536 4.99c-1.077.85-2.188 1.648-3.236 2.53l-3.035 2.786c-1.976 1.89-4.097 3.631-5.95 5.652l-5.576 6.027c-1.779 2.075-3.43 4.268-5.142 6.396-1.764 2.085-3.156 4.457-4.733 6.676-1.607 2.216-2.919 4.615-4.312 6.963-1.447 2.317-2.605 4.797-3.85 7.218-1.282 2.402-2.246 4.972-3.351 7.458-.947 2.57-1.959 5.1-2.732 7.73a68.776 68.776 0 0 0-1.564 5.663c-13.612.397-27.231.775-40.847 1.293-14.448.466-28.904 1.108-43.359 1.728 14.455.623 28.911 1.267 43.359 1.735 14.46.55 28.905.943 43.365 1.368l2.347.064.699-2.58c.602-2.25 1.368-4.767 2.308-7.115.848-2.398 1.949-4.718 2.97-7.057 1.198-2.27 2.171-4.635 3.491-6.835 1.277-2.218 2.459-4.486 3.915-6.592 1.405-2.136 2.737-4.321 4.337-6.321 1.576-2.001 2.959-4.164 4.708-6.037 1.696-1.907 3.311-3.876 5.06-5.739l5.443-5.36c1.797-1.801 3.864-3.317 5.782-4.995l2.919-2.453 3.091-2.232 5.274-3.77-.209.24-3.481 4.729c-1.147 1.582-2.348 3.136-3.442 4.756l-3.105 4.982-3.095 4.984-2.681 5.212c-1.76 3.49-3.697 6.906-5.043 10.576-1.449 3.619-3.045 7.199-4.352 10.864l-3.461 11.174c-.603 1.858-1.12 3.728-1.464 5.644l-1.192 5.713-1.183 5.709-.582 2.856-.339 2.887-1.353 11.551c-.587 3.846-.56 7.713-.704 11.574l-.338 11.591c.036 3.849.37 7.683.538 11.54l.628 11.533 14.38-.152c.276-2.853.758-6.194 1.285-9.304.536-3.165 1.173-6.325 1.833-9.484a213.35 213.35 0 0 1 4.918-18.738 171.897 171.897 0 0 1 3.104-9.172c1.081-3.039 2.292-6.034 3.529-9.004 1.239-2.971 2.584-5.895 3.972-8.799 1.433-2.873 2.845-5.76 4.444-8.543 1.503-2.832 3.209-5.54 4.876-8.278 1.745-2.676 3.481-5.36 5.388-7.923 1.813-2.63 3.867-5.07 5.839-7.572 2.07-2.412 4.084-4.884 6.309-7.148.977-1.099 2.013-2.125 3.057-3.15-1.07 2.298-2.145 4.578-3.088 6.953-1.144 2.64-2.056 5.416-3.04 8.152-.814 2.825-1.738 5.584-2.306 8.521-.308 1.452-.696 2.863-.858 4.372l-.626 4.46-.882 6.32 6.444-.108 35.2-.58 3.891-.064.984-3.77c.539-2.054 1.263-4.526 2.099-6.78.777-2.325 1.774-4.587 2.704-6.867 1.034-2.244 2.072-4.498 3.206-6.704 1.22-2.152 2.3-4.396 3.642-6.487 1.344-2.083 2.566-4.259 4.032-6.27 1.472-2 2.893-4.049 4.416-6.022l4.82-5.71c1.65-1.869 3.484-3.563 5.212-5.365 1.686-1.862 3.61-3.446 5.509-5.08 1.931-1.586 3.699-3.396 5.804-4.766l6.117-4.396c2.066-1.444 4.302-2.587 6.458-3.898 2.182-1.256 4.31-2.644 6.642-3.61l6.879-3.196c2.247-1.196 4.719-1.836 7.076-2.756l1.163-.414a58.929 58.929 0 0 0-2.53 3.64c-.968 1.58-1.884 3.198-2.658 4.875-.424.819-.747 1.693-1.082 2.553-.353.856-.677 1.719-.922 2.611-.243.892-.568 1.755-.758 2.664l-.542 2.701c-.168.903-.215 1.827-.323 2.739-.121.907-.169 1.819-.121 2.741.022.914-.008 1.827.049 2.732l.335 2.723c.181 1.808.804 3.516 1.182 5.284-.233-1.788-.714-3.56-.725-5.355l-.101-2.672c.021-.885.125-1.781.176-2.668.033-.889.145-1.772.346-2.637.186-.872.29-1.755.53-2.607l.741-2.542c.252-.847.633-1.651.943-2.476.296-.83.682-1.622 1.092-2.406.386-.792.757-1.582 1.222-2.334.848-1.532 1.815-3.002 2.832-4.436 1.04-1.402 2.139-2.779 3.326-4.066a37.315 37.315 0 0 1 3.688-3.588l6.082-5.113-7.649 2.15z"
        fill="currentColor"
      />
      <path
        d="M482.588 82.99v2.065c-7.239-2.415-14.515-4.743-21.877-6.864-16.667-4.83-33.594-8.783-50.722-11.49-17.105-2.647-34.414-4.045-51.604-3.23-17.165.788-34.269 3.928-49.862 10.62-7.771 3.315-15.155 7.53-21.76 12.71a94.517 94.517 0 0 0-17.57 17.923c-1.341 1.627-2.442 3.371-3.574 5.059-1.166 1.66-2.27 3.577-3.379 5.466l-.808 1.395-.755 1.341-1.637 2.967c-1.077 1.977-2.323 3.867-3.489 5.82-4.924 7.559-10.768 14.744-17.799 20.824-7.053 6.053-15.248 11.023-24.3 14.137a67.2 67.2 0 0 1-13.955 3.231c-2.412.293-4.833.468-7.276.468a41.87 41.87 0 0 1-3.721-.087c-1.341-.088-2.388-.149-4.107-.469l-5.241-.903-.165-5.816c-.235-9.456.378-18.702 1.392-27.864.525-4.568 1.13-9.108 1.832-13.649a260.807 260.807 0 0 1 1.633-9.512h17.769a272.256 272.256 0 0 0-3.164 12.595 393.746 393.746 0 0 0-2.646 12.833c-1.166 6.515-2.123 13.089-2.682 19.573 1.718.091 3.432.091 5.18 0a56.593 56.593 0 0 0 11.584-1.889c7.616-2.095 14.859-5.791 21.35-10.675 6.517-4.89 12.217-10.994 17.209-17.684 4.981-6.636 8.94-14.636 14.756-21.789a101.45 101.45 0 0 1 19.4-18.817c7.221-5.385 15.215-9.69 23.508-13.008 16.667-6.66 34.469-9.425 52.103-9.86 17.622-.38 35.169 1.456 52.408 4.568 17.222 3.14 34.189 7.563 50.826 12.796 7.12 2.241 14.134 4.686 21.143 7.216zm-294.479 3.837s32.06-74.745 103.316-79.622l-33.377 13.908L241.3 30.54l-12.582 11.266-14.184 15.735-11.654 24.283-6.41 12.042h-9.524l1.163-7.04z"
        fill="currentColor"
      />
      <path
        d="M338.609 109.786c-1.724 0-3.092.768-3.927 2.166l-18.465 28.318-18.52-28.302c-.896-1.421-2.224-2.182-3.827-2.182-2.328 0-3.776 1.458-3.776 3.786v48.327c0 2.344 1.448 3.792 3.776 3.792 2.318 0 3.759-1.448 3.759-3.792V125.52l14.7 22.396c1.145 1.759 2.661 2.13 3.732 2.13 1.671 0 3.043-.735 3.921-2.112l14.639-22.292v36.257c0 2.344 1.449 3.792 3.783 3.792 2.308 0 3.749-1.448 3.749-3.792v-48.327c0-2.328-1.36-3.786-3.544-3.786zm51.999 34.156h-18.302l9.156-21.595 9.146 21.595zm-5.16-31.481c-.708-1.682-2.063-2.631-4.114-2.675-1.862 0-3.24.967-3.906 2.675l-20.282 47.956c-.829 2.129-.044 4.014 2.091 4.954.591.234 1.156.354 1.685.354.842 0 2.379-.31 3.24-2.371l5.008-11.877h24.604l5.008 11.837c.826 2.101 2.362 2.411 3.215 2.411.535 0 1.093-.12 1.724-.376 2.095-.918 2.869-2.82 1.984-4.97l-20.257-47.918zm66.401 13.126v2.448c0 2.975-.62 5.104-1.87 6.347-1.242 1.24-3.378 1.88-6.345 1.88h-15.371v-18.931h15.371c2.967 0 5.103.62 6.345 1.863 1.25 1.25 1.87 3.394 1.87 6.393zm-2.62 17.543c2.946-.802 5.284-2.274 6.981-4.396 2.107-2.627 3.18-6.231 3.18-10.699v-2.448c0-5.083-1.36-9.024-4.048-11.723-2.691-2.708-6.629-4.078-11.708-4.078h-19.12c-2.337 0-3.787 1.458-3.787 3.786v48.327c0 2.344 1.45 3.792 3.787 3.792 2.311 0 3.749-1.448 3.749-3.792v-18.103h12.474l12.941 20.602c.609.93 1.395 1.498 2.309 1.708l.699.066c.68 0 1.395-.204 2.095-.618.99-.57 1.61-1.328 1.842-2.24.236-.934.044-1.934-.585-2.968l-10.809-17.216zm35.62-21.575c.637-1.481 1.664-2.52 3.137-3.156 1.64-.706 3.941-1.068 6.828-1.068h9.896c3.344 0 5.82.554 7.164 1.594 1.267.984 1.991 2.94 2.156 5.881.223 2.273 1.664 3.628 3.86 3.628 1.459 0 2.32-.576 2.785-1.061.499-.515 1.062-1.456.879-2.887-.259-5.052-1.819-8.812-4.611-11.189-2.741-2.328-6.854-3.511-12.233-3.511h-9.896c-6.293 0-11.016 1.525-14.027 4.527-3.025 2.985-4.552 7.741-4.552 14.137v18.587c0 6.326 1.536 11.069 4.562 14.094 3.024 3.024 7.774 4.56 14.093 4.56h9.82c5.379 0 9.492-1.181 12.233-3.516 2.792-2.37 4.352-6.137 4.602-11.052.192-1.498-.354-2.438-.842-2.966-.476-.507-1.348-1.112-2.813-1.112-2.196 0-3.637 1.353-3.86 3.698-.165 2.87-.889 4.827-2.156 5.811-1.344 1.051-3.82 1.603-7.164 1.603h-9.82c-2.913 0-5.224-.36-6.851-1.086-1.482-.656-2.526-1.69-3.182-3.172-.715-1.648-1.079-3.948-1.079-6.862V128.45c0-2.929.353-5.248 1.071-6.895m89.213 35.516c-1.639.724-3.932 1.086-6.819 1.086h-9.812c-2.913 0-5.221-.362-6.85-1.086-1.483-.656-2.527-1.69-3.184-3.172-.714-1.648-1.084-3.948-1.084-6.862v-18.631c0-2.903.37-5.231 1.084-6.884.668-1.492 1.692-2.527 3.156-3.167 1.56-.68 3.75-1.024 6.518-1.024h10.172c2.887 0 5.18.36 6.802 1.102 1.492.664 2.533 1.708 3.196 3.19.718 1.647 1.077 3.947 1.077 6.827v18.587c0 2.914-.359 5.214-1.077 6.862-.652 1.482-1.698 2.516-3.179 3.172zm-6.819-47.285H557.01c-6.092 0-10.697 1.503-13.672 4.46-3.025 3.015-4.561 7.773-4.561 14.16v18.631c0 6.326 1.536 11.069 4.561 14.093 3.019 3.025 7.767 4.561 14.093 4.561h9.812c6.327 0 11.07-1.536 14.067-4.561 3.028-3.024 4.555-7.767 4.555-14.093V128.45c0-6.325-1.527-11.068-4.546-14.093-3.006-3.035-7.749-4.571-14.076-4.571m73.893 11.769c.64-1.481 1.664-2.52 3.139-3.156 1.637-.706 3.939-1.068 6.829-1.068h9.887c3.353 0 5.827.554 7.173 1.594 1.267.984 1.992 2.94 2.154 5.881.225 2.273 1.664 3.628 3.862 3.628 1.456 0 2.318-.576 2.783-1.061.501-.515 1.061-1.456.883-2.887-.27-5.052-1.819-8.812-4.616-11.189-2.738-2.328-6.85-3.511-12.239-3.511h-9.887c-6.292 0-11.018 1.525-14.026 4.527-3.024 2.985-4.551 7.741-4.551 14.137v18.587c0 6.326 1.532 11.069 4.561 14.094 3.015 3.024 7.774 4.56 14.1 4.56h9.803c5.389 0 9.501-1.181 12.239-3.516 2.797-2.37 4.346-6.137 4.605-11.052.189-1.498-.353-2.438-.844-2.966-.476-.507-1.345-1.112-2.811-1.112-2.198 0-3.637 1.353-3.869 3.698-.155 2.87-.88 4.827-2.147 5.811-1.346 1.051-3.82 1.603-7.173 1.603h-9.803c-2.92 0-5.221-.36-6.861-1.086-1.483-.656-2.527-1.69-3.18-3.172-.713-1.648-1.089-3.948-1.089-6.862V128.45c0-2.929.376-5.248 1.078-6.895m83.295 22.387h-18.298l9.15-21.595 9.148 21.595zm-5.167-31.492c-.708-1.671-2.069-2.62-4.111-2.664-1.845 0-3.24.96-3.906 2.675l-20.286 47.962c-.828 2.156-.058 4.002 2.096 4.942.586.24 1.152.36 1.684.36.835 0 2.379-.31 3.24-2.371l5.014-11.877h24.602l5.006 11.844c.834 2.094 2.364 2.404 3.22 2.404.525 0 1.084-.12 1.717-.376 2.095-.918 2.863-2.82 1.98-4.97l-20.256-47.929zm66.034 45.707h-23.215v-44.584c0-2.328-1.435-3.787-3.747-3.787-2.33 0-3.792 1.459-3.792 3.787v48.326c0 2.344 1.462 3.792 3.792 3.792h26.962c2.324 0 3.786-1.448 3.786-3.792 0-2.312-1.462-3.742-3.786-3.742zm49.974-1.328c-2.002.879-4.776 1.328-8.226 1.328H811.1v-40.826h15.946c3.45 0 6.218.448 8.212 1.345 1.867.828 3.166 2.139 3.987 3.991.877 2.008 1.335 4.782 1.335 8.232v13.689c0 3.473-.458 6.259-1.335 8.267-.821 1.856-2.12 3.145-3.973 3.974zm-8.226-47.044h-19.692c-2.344 0-3.793 1.46-3.793 3.787v48.327c0 2.345 1.449 3.792 3.793 3.792h19.692c7.188 0 12.558-1.724 15.959-5.136 3.383-3.399 5.1-8.779 5.1-15.967v-13.689c0-7.188-1.717-12.567-5.1-15.972-3.401-3.406-8.771-5.142-15.959-5.142zm74.55 7.546c2.337 0 3.785-1.448 3.785-3.758 0-2.328-1.448-3.787-3.785-3.787h-30.592c-2.345 0-3.793 1.459-3.793 3.787v48.326c0 2.344 1.448 3.792 3.793 3.792h30.592c2.337 0 3.785-1.448 3.785-3.792 0-2.312-1.448-3.742-3.785-3.742h-26.853v-16.974h17.206c2.338 0 3.792-1.456 3.792-3.782 0-2.311-1.454-3.754-3.792-3.754h-17.206v-16.316h26.853zm50.749 8.256v2.448c0 2.968-.628 5.104-1.88 6.347-1.24 1.24-3.382 1.88-6.354 1.88h-15.358v-18.931h15.358c2.972 0 5.114.62 6.354 1.863 1.252 1.25 1.88 3.394 1.88 6.393zm-2.622 17.543c2.938-.802 5.275-2.274 6.974-4.386 2.114-2.63 3.178-6.232 3.178-10.709v-2.448c0-5.083-1.36-9.024-4.049-11.723-2.687-2.708-6.628-4.078-11.715-4.078h-19.112c-2.338 0-3.786 1.458-3.786 3.786v48.327c0 2.344 1.448 3.792 3.786 3.792 2.311 0 3.754-1.448 3.754-3.792v-18.103h12.469l12.94 20.602c.62.922 1.388 1.498 2.312 1.708l.707.066c.688 0 1.388-.204 2.088-.618.997-.57 1.617-1.328 1.853-2.24.229-.934.04-1.923-.599-2.968l-10.8-17.216zm56.357.812h-18.294l9.149-21.595 9.145 21.595zm15.11 16.437-20.26-47.929c-.71-1.671-2.075-2.62-4.11-2.664-1.866 0-3.254.967-3.906 2.675l-20.286 47.956c-.836 2.156-.08 3.997 2.09 4.954.585.234 1.152.354 1.676.354.849 0 2.38-.31 3.241-2.371l5.02-11.877h24.605l5 11.837c.82 2.101 2.36 2.411 3.21 2.411.54 0 1.1-.12 1.72-.376 2.11-.918 2.88-2.814 2-4.97z"
        fill="currentColor"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}

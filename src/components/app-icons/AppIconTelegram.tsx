interface IProps {
  size: string;
}

export function AppIconTelegram({ size }: IProps) {
  return (
    <svg
      fill="none"
      height={size}
      width={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="m5 0h22c2.7614 0 5 2.23858 5 5v22c0 2.7614-2.2386 5-5 5h-22c-2.76142 0-5-2.2386-5-5v-22c0-2.76142 2.23858-5 5-5zm11.6919 12.0074c-1.433.596-4.297 1.8297-8.59198 3.7009-.69744.2773-1.06278.5487-1.09604.814-.05621.4483.50527.6249 1.26986.8653.104.0327.21176.0666.32224.1025.75224.2445 1.76412.5306 2.29022.542.4771.0103 1.0097-.1864 1.5977-.5902 4.0129-2.7088 6.0844-4.078 6.2144-4.1075.0918-.0208.2189-.047.3051.0295.0861.0766.0777.2216.0685.2605-.0556.2371-2.2596 2.2862-3.4002 3.3466-.3556.3305-.6078.565-.6593.6186-.1155.12-.2333.2334-.3464.3425-.6988.6737-1.2229 1.1789.029 2.0039.6017.3965 1.0831.7243 1.5634 1.0514.5245.3572 1.0476.7135 1.7245 1.1572.1725.113.3372.2304.4976.3448.6104.4352 1.1588.8261 1.8363.7638.3937-.0362.8004-.4064 1.0069-1.5105.4881-2.6092 1.4475-8.2626 1.6692-10.5922.0194-.2041-.005-.4654-.0246-.58-.0197-.1147-.0607-.2781-.2097-.399-.1766-.1432-.4491-.17345-.5709-.1714-.5542.0099-1.4043.3055-5.4958 2.0073z"
        fill="var(--headers-clr)"
        fill-rule="evenodd"
      />
    </svg>
  );
}

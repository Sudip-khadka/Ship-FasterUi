import { useEffect, useState } from 'react';
import '@/index.css';

const Spinner = ({label,containerClass, className="text-primary w-12 h-12" }: {containerClass:string; className?: string ;label?:React.ReactNode}) => {
  const [activeRect,setActiveRect]=useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
        setActiveRect(prev=>prev===8?1:prev+1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"w-fit flex items-center justify-center gap-2 flex-col"+containerClass}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      >
      <rect
        x="22"
        width="4"
        height="12"
        rx="2"
        fill={activeRect===5?"currentColor":"#D9D9D9"}
        className={`spinner-rect`}
        />
      <rect x="22" y="36" width="4" height="12" rx="2" fill={activeRect===2?"currentColor":"#D9D9D9"} />
      <rect
        y="26"
        width="4"
        height="12"
        rx="2"
        transform="rotate(-90 0 26)"
        fill={activeRect===4?"currentColor":"#D9D9D9"}
        />
      <rect
        x="36"
        y="26"
        width="4"
        height="12"
        rx="2"
        transform="rotate(-90 36 26)"
        fill={activeRect===7?"currentColor":"#D9D9D9"}
        />
      <rect
        x="5.61523"
        y="8.44336"
        width="4"
        height="12"
        rx="2"
        transform="rotate(-45 5.61523 8.44336)"
        fill={activeRect===5?"currentColor":"#D9D9D9"}
        />
      <rect
        x="31.071"
        y="33.8994"
        width="4"
        height="12"
        rx="2"
        transform="rotate(-45 31.071 33.8994)"
        fill={activeRect===8?"currentColor":"#D9D9D9"}
        />
      <rect
        x="8.4436"
        y="42.3848"
        width="4"
        height="12"
        rx="2"
        transform="rotate(-135 8.4436 42.3848)"
        fill={activeRect===3?"currentColor":"#D9D9D9"}
        />
      <rect
        x="33.8994"
        y="16.9287"
        width="4"
        height="12"
        rx="2"
        transform="rotate(-135 33.8994 16.9287)"
        fill={activeRect===6?"currentColor":"#D9D9D9"}
        />
    </svg>
    {label&&<div >{label}</div>}
    </div>
  );
};

export default Spinner;
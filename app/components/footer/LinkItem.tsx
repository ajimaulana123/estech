import React from 'react'

interface LinkItemProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const LinkItem = ({ children, className, icon }: LinkItemProps) => {
  return (
    <div className="relative flex items-center gap-2 text-background text-sm md:text-base mt-1 cursor-pointer w-fit before:content-[''] before:w-full before:h-[0.5px] before:bg-background before:absolute before:bottom-0 before:left-0 before:transition-transform before:duration-300 before:ease-in-out before:origin-right before:scale-x-0 before:hover:scale-x-100 before:hover:origin-left">
      {icon}
      {children}
    </div>
  );
};

export default LinkItem
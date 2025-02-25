import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
    title
  }) => {
    return (
      <div className={cn("max-w-7xl mx-auto", className)}>
        {title && <h2 className="text-5xl font-bold text-center mb-8">{title}</h2>}
        <div className="grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-4 gap-4 mb-20 ">
          {children}
        </div>
      </div>
    );
  };

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  imageOpacity = 100

}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}>
      {image && <img src={image} alt={title} className={`w-full h-32 object-cover rounded-xl mb-4 opacity-${imageOpacity}`} />}
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 text-2xl dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-[16px] dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>)
  );
};

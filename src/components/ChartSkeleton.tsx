const ChartSkeleton = ({ title }: { title: string }) => {
  return (
    <div className="bg-(--card) transition-all duration-500 ease-in-out rounded-xl shadow-xl p-5 flex flex-col items-center justify-center">
      <div className="text-2xl font-semibold p-2">{title}</div>
      <div className="h-[20vh] lg:h-[50vh] w-[30vw] rounded-2xl bg-gray-500 animate-pulse text-center"></div>
    </div>
  );
};

export default ChartSkeleton;

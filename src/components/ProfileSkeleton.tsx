const ProfileSkeleton = () => {
  return (
    <div className=" bg-(--card) transition-all duration-500 ease-in-out shadow-lg rounded-xl p-7">
      <div className="flex flex-col md:flex-row items-center gap-2 shrink-0">
        <div className="h-[150px] w-[150px] rounded-full overflow-hidden bg-gray-500 animate-pulse"></div>
        <div className="space-y-2">
          <div className="bg-gray-500 animate-pulse w-[300px] rounded-2xl h-7"></div>
          <div className="bg-gray-500 animate-pulse w-[200px] h-5 rounded-2xl"></div>
          <div className="bg-gray-500 animate-pulse w-[200px] h-5 rounded-2xl"></div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center pt-7 text-lg">
        <div className="bg-gray-500 animate-pulse w-20 h-5 rounded-2xl"></div>
        <div className="bg-gray-500 animate-pulse w-20 h-5 rounded-2xl"></div>
        <div className="bg-gray-500 animate-pulse w-20 h-5 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;

import Logo from "components/Logo";

export default function AppLoader() {
  return (
    <div className="h-screen w-screen fixed top-0 right-0 left-0 bottom-0 flex items-center flex-col gap-5 justify-center bg-white text-center">
      <Logo theme="light" className="animate-pulse" />
      <p className="text-lg font-bold text-gray-500 animate-pulse">
        Loading Your Tasks...
      </p>
    </div>
  );
}

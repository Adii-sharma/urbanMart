import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to urbanMart  
            <h2 className="mt-1" > (Unleash Your Style) </h2>
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        {/* This outlet component is used to Renders the child route's element, if there is one. */}
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

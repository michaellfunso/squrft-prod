import { usePathname } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import {
  Building,
  FileText,
  Heart,
  Home,
  LogOut,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "aws-amplify/auth";

const AppSidebar = ({ userType }: AppSidebarProps) => {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  const navLinks =
    userType === "manager"
      ? [
          { icon: Building, label: "Properties", href: "/managers/properties" },
          {
            icon: FileText,
            label: "Applications",
            href: "/managers/applications",
          },
          { icon: Settings, label: "Settings", href: "/managers/settings" },
        ]
      : [
          { icon: Heart, label: "Favorites", href: "/tenants/favorites" },
          {
            icon: FileText,
            label: "Applications",
            href: "/tenants/applications",
          },
          { icon: Home, label: "Residences", href: "/tenants/residences" },
          { icon: Settings, label: "Settings", href: "/tenants/settings" },
        ];

   const handleSignOut = async () => {
     await signOut();
     window.location.href = "/";
   }

  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 bg-white shadow-lg"
      style={{
        top: `${NAVBAR_HEIGHT}px`,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex min-h-[56px] w-full items-center pt-3 mb-3",
                open ? "justify-between px-6" : "justify-center"
              )}
            >
              {open ? (
                <><Image src="/squrft_icon_logo_blue.svg" alt="Logo" width={42} height={42} />
                  <h1 className="text-xl font-bold text-gray-800">
                    {userType === "manager" ? "Manager" : "User"}
                  </h1>
                  <button
                    className="hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => toggleSidebar()}
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </>
              ) : (
                <button
                  className="hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => toggleSidebar()}
                >
                  <Menu className="h-6 w-6 text-gray-600" />
                </button>
              )}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="flex flex-col justify-between h-full">
  <SidebarMenu>
    {navLinks.map((link) => {
      const isActive = pathname === link.href;

      return (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            className={cn(
              "flex items-center px-7 py-7",
              isActive
                ? "bg-gray-100"
                : "text-gray-600 hover:bg-gray-100",
              open ? "text-blue-600" : "ml-[5px]"
            )}
          >
            <Link href={link.href} className="w-full" scroll={false}>
              <div className="flex items-center gap-3">
                <link.icon
                  className={`h-5 w-5 ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                <span
                  className={`font-medium ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    })}
  </SidebarMenu>

  {/* --- Logout Button Section at Bottom --- */}
  <div className="pt-2 pb-4 px-4">
    <SidebarMenu>
      <SidebarMenuItem>
        <button
          onClick={handleSignOut}
          className="flex items-center text-sm text-red-500 font-semibold px-4 py-3 hover:bg-red-50 transition-all w-full rounded-xl"
        >
          <LogOut className="h-5 w-5 mr-2" />
          {open && <span>Logout</span>}
        </button>
      </SidebarMenuItem>
    </SidebarMenu>
  </div>
</SidebarContent>

    </Sidebar>
  );
};

export default AppSidebar;

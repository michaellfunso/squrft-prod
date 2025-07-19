"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Plus, MessageCircle, Bell } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineInfoCircle, AiOutlineFileText, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();

  const isDashboardPage = pathname.includes("/managers") || pathname.includes("/tenants");

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navLinks = [
    { name: "How it Works", href: "/how-it-works" },
    { name: "Properties", href: "/properties" },
    { name: "FAQ", href: "/faq" },
    { name: "Feedback", href: "/feedback" },
  ];

  return (
    <div className="w-full bg-blue-600 py-3 rounded-b-2xl">
      {/* Top Nav */}
      <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 rounded-b-2xl">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isDashboardPage && (
            <div className = "md:hidden">
              <SidebarTrigger />
            </div>
          )}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/squrft_logo_blue.svg" alt="Logo" width={92} height={92} />
          </Link>
          {isDashboardPage && authUser && (
            <Button
             variant="secondary"
             className="md:ml-4 bg-primary-50 text-primary-700 hover:bg-secondary-500 hover:text-primary-50"
             onClick={() =>
              router.push(
                authUser.userRole?.toLowerCase() === "manager"
                ? "/managers/newproperty"
                : "/search"
              )
             }>
              {authUser.userRole?.toLowerCase() === "manager" ? (
                <>
                <Plus className="h-4 w-4" />
                <span className="hidden md:block ml-2">Add New Property</span>
                </>
              ) : (
                <>
                 <Search className="h-4 w-4" />
                 <span className="hidden md:block ml-2">Search Properties</span>
                </>
              )}
             </Button>
          )}

          {/* Desktop nav */}
          {!isDashboardPage && (<nav className="hidden lg:flex items-center gap-8">
            <Link href="/how-it-works" className="text-sm font-medium text-black hover:text-blue-600">
              How it Works
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="text-sm font-medium text-black hover:text-blue-600 flex items-center gap-1"
              >
                Solutions <FiChevronDown />
              </button>
              {solutionsOpen && (
                <div className="absolute mt-3 right-0 w-96 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col gap-4 z-50">
                  <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-black font-semibold">
                      <Link href="/solutions/for-tenants" className="text-sm font-medium text-black hover:text-blue-600"> <AiOutlineUser /> Squrft for Tenants </Link>
                       
                      </div>
                      <p className="text-sm text-gray-500">Find verified homes to rent or buy fast and hassle-free.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-black font-semibold">
                      <Link href="/solutions/for-owners" className="text-sm font-medium text-black hover:text-blue-600"> <AiOutlineHome /> Squrft for Owners </Link>
                       
                      </div>
                      <p className="text-sm text-gray-500">List your properties and connect directly with real tenants.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-black font-medium cursor-pointer hover:text-blue-600">
                    💬 Contact Us ↗
                  </div>
                </div>
              )}
            </div>

            <Link href="/properties" className="text-sm font-medium text-black hover:text-blue-600">
              Properties
            </Link>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="text-sm font-medium text-black hover:text-blue-600 flex items-center gap-1"
              >
                About <FiChevronDown />
              </button>
              {aboutOpen && (
                <div className="absolute mt-3 right-0 w-60 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-4 flex flex-col gap-3 z-50">
                  <Link href="/about/why-squrft" className="flex items-center gap-2 text-sm text-black font-medium hover:text-blue-600">
                    <AiOutlineInfoCircle /> Why Squrft
                  </Link>
                  <Link href="/about/legal" className="flex items-center gap-2 text-sm text-black font-medium hover:text-blue-600">
                    <AiOutlineFileText /> Legal
                  </Link>
                </div>
              )}
            </div>

            <Link href="/faq" className="text-sm font-medium text-black hover:text-blue-600">
              FAQ
            </Link>
            <Link href="/feedback" className="text-sm font-medium text-black hover:text-blue-600">
              Feedback
            </Link>
          </nav>)}

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {authUser ? (
              <>
                <div className="relative hidden md:block">
                  <MessageCircle className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400"/>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
                </div>
                <div className="relative hidden md:block">
                  <Bell className="w-6 h-6 cursor-pointer text-primary-200 hover:text-primary-400"/>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-700 rounded-full"></span>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                    <Avatar>
                      <AvatarImage src={authUser.userInfo?.image} />
                      <AvatarFallback className="bg-primary-600">
                        {authUser.userRole?.[0].toUpperCase()}
                      </AvatarFallback>
                     
                    </Avatar>
                    <p className="text-primary-200 hidden md:block">{authUser.userInfo?.name}</p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white text-primary-700">
                    <DropdownMenuItem className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold" onClick={()=> router.push(
                      authUser.userRole?.toLowerCase() === "manager" ? "/managers/properties" : "/tenants/favorites",
                      { scroll: false }
                    )}>
                      Go to Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-primary-200" />
                    <DropdownMenuItem className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100" onClick={()=> router.push(
                      `/${authUser.userRole?.toLowerCase()}s/settings`, 
                      { scroll: false }
                    )}>
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100" onClick={handleSignOut}>
                      Sign Out
                    </DropdownMenuItem>

                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
            <>
            <button className="text-black p-2 hover:bg-gray-100 rounded-full hidden md:block">
              <Search size={18} />
            </button>

            <Link href="/signin" className="text-black text-sm font-medium">
              Sign In
            </Link>

            <Link href="/signup" className="text-blue-600 text-sm font-medium">
              Sign Up
            </Link>

            <Button className="bg-black text-white rounded-full px-4 py-2 text-sm">
            List a Property
            </Button>

            </>)}
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/how-it-works" className="text-black hover:text-blue-600">
                How it Works
              </Link>
              <Link href="/solutions" className="text-black hover:text-blue-600">
                Solutions
              </Link>
              <Link href="/properties" className="text-black hover:text-blue-600">
                Properties
              </Link>
              <Link href="/about" className="text-black hover:text-blue-600">
                About
              </Link>
              <Link href="/faq" className="text-black hover:text-blue-600">
                FAQ
              </Link>
              <Link href="/feedback" className="text-black hover:text-blue-600">
                Feedback
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Hero Banner */}
      {!isDashboardPage && (<div className="mt-16 w-full bg-blue-600 text-white text-sm font-medium text-center py-3 rounded-b-2xl">
      <span className="font-bold text-lg">Discover a Better Way to Find & List Homes on Squrft: </span>  
      Whether you&apos;re renting, looking for tenant-to-tenant deals, or selling — connect directly, reserve instantly, no hidden fees. Zero agent drama! 
      </div>)}
    </div>
  );
};

export default Navbar;

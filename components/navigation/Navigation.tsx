import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/components/providers/AuthProvider";
import { CreateFormButton } from "../common/CreateFormButton";
import { NavDropdown } from "./NavDropdown";
import { ProductsMenu } from "./ProductsMenu";
import { IndustriesMenu } from "./IndustriesMenu";
import { ResourcesMenu } from "./ResourcesMenu";
import { TemplatesMenu } from "./TemplatesMenu";
import { MobileMenu } from "./MobileMenu";
import { AvatarDropdown } from "./AvatarDropdown";
import { Logo } from "@/components/common/Logo";
import { Bell, CheckCircle, AlertTriangle, Clock, Menu } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "success" | "warning" | "info";
  timestamp: string;
  read: boolean;
}

const dummyNotifications: Notification[] = [
  {
    id: "1",
    title: "New Form Response",
    message: "Customer Feedback Survey received a new response",
    type: "success",
    timestamp: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    title: "Form Shared",
    message: "Jane Smith shared Event Registration Form with you",
    type: "info",
    timestamp: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    title: "Response Limit Warning",
    message: "Job Application Form is approaching response limit",
    type: "warning",
    timestamp: "3 hours ago",
    read: true,
  },
  {
    id: "4",
    title: "New Comment",
    message: "Mike left a comment on Product Survey",
    type: "info",
    timestamp: "5 hours ago",
    read: true,
  },
];

export function Navigation() {
  const { user, logout } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(dummyNotifications);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "info":
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <nav className="shadow-md bg-gradient-to-b bg-[#F2F2F2] rounded-b-2xl font-blmelody font-semibold text-[#282828]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className="hidden lg:flex lg:ml-10 lg:space-x-8">
              <NavDropdown
                title="Products"
                isOpen={activeDropdown === "products"}
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <ProductsMenu />
              </NavDropdown>

              <NavDropdown
                title="Industries"
                isOpen={activeDropdown === "industries"}
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <IndustriesMenu />
              </NavDropdown>

              <NavDropdown
                title="Templates"
                isOpen={activeDropdown === "templates"}
                onMouseEnter={() => handleMouseEnter("templates")}
                onMouseLeave={handleMouseLeave}
              >
                <TemplatesMenu />
              </NavDropdown>

              <NavDropdown
                title="Resources"
                isOpen={activeDropdown === "resources"}
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <ResourcesMenu />
              </NavDropdown>

              <Link
                to="/pricing"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Notifications Dropdown */}
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Bell className="w-6 h-6" />
                      {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
                      )}
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="py-1 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-96"
                      sideOffset={5}
                      align="end"
                    >
                      <div className="px-4 py-3 border-b border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900">
                          Notifications
                        </h3>
                      </div>
                      <div className="overflow-y-auto max-h-96">
                        {notifications.map((notification) => (
                          <DropdownMenu.Item
                            key={notification.id}
                            className="focus:outline-none"
                            onSelect={() => markAsRead(notification.id)}
                          >
                            <div
                              className={`px-4 py-3 hover:bg-gray-50 ${
                                !notification.read ? "bg-indigo-50" : ""
                              }`}
                            >
                              <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                  {getNotificationIcon(notification.type)}
                                </div>
                                <div className="flex-1 w-0 ml-3">
                                  <p className="text-sm font-medium text-gray-900">
                                    {notification.title}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {notification.message}
                                  </p>
                                  <p className="mt-1 text-xs text-gray-400">
                                    {notification.timestamp}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </DropdownMenu.Item>
                        ))}
                      </div>
                      <div className="px-4 py-3 border-t border-gray-200">
                        <Link
                          to="/notifications"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View all notifications
                        </Link>
                      </div>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>

                <CreateFormButton />
                <AvatarDropdown user={user} onLogout={logout} />
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md bg-[#FFFFFF] hover:text-black"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-900"
                >
                  Get started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="flex items-center ml-4 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
        onLogout={logout}
      />
    </nav>
  );
}

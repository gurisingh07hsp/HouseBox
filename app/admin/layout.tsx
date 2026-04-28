"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import {
  LayoutDashboard,
  CalendarCheck,
  FileText,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";
import axios from "axios";

const navItems = [
  { title: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { title: "Houses", path: "/admin/houses", icon: Home },
  { title: "Bookings", path: "/admin/bookings", icon: CalendarCheck },
  { title: "Blog Posts", path: "/admin/blog", icon: FileText },
];

const SIDEBAR_WIDTH = 256;
const SIDEBAR_COLLAPSED_WIDTH = 80;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  useEffect(()=> {
    const isAdmin = async() => {
      const response = await axios.get('/api/auth/me', {withCredentials: true});
      if(response.status === 200){
        if(response?.data?.user?.role !== 'admin'){
          router.push('/');
        }
        else{
          setLoading(false);
        }
      }else{
          router.push('/');
        }
    }
    isAdmin();
  },[])

  // Detect mobile vs desktop
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/admin") return pathname === "/admin";
    return pathname.startsWith(path);
  };

  // Compute sidebar transform
  const sidebarTranslate = isMobile
    ? mobileOpen
      ? "translateX(0)"
      : "translateX(-100%)"
    : "translateX(0)";

  // Compute sidebar width
  const sidebarWidth = isMobile
    ? SIDEBAR_WIDTH
    : desktopCollapsed
    ? SIDEBAR_COLLAPSED_WIDTH
    : SIDEBAR_WIDTH;

  // Compute main content left margin (only on desktop)
  const mainMarginLeft = isMobile
    ? 0
    : desktopCollapsed
    ? SIDEBAR_COLLAPSED_WIDTH
    : SIDEBAR_WIDTH;

  // Whether to show text labels
  const showLabels = isMobile || !desktopCollapsed;

  if(loading){
    return (
      <div>
        <p className="text-center mt-20 text-gray-500">Checking admin access...</p>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>

      {/* ── Mobile backdrop ── */}
      {isMobile && mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 40,
          }}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: sidebarWidth,
          transform: sidebarTranslate,
          transition: isMobile
            ? "transform 0.3s ease"
            : "width 0.3s ease",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #d1d5db",
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            height: 64,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
            borderBottom: "1px solid #d1d5db",
            flexShrink: 0,
          }}
        >
          <Link
            href="/admin"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              minWidth: 0,
              textDecoration: "none",
              color: "inherit",
            }}
          >
       
            {showLabels && (
                     <img
              src="/assets/img/logo/logo3.png"
              style={{ height: 40, width: 130, flexShrink: 0 }}
              alt="logo"
            />
            )}
          </Link>

          {/* Desktop: collapse/expand toggle */}
          {!isMobile && (
            <button
              onClick={() => setDesktopCollapsed(!desktopCollapsed)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                flexShrink: 0,
              }}
            >
              {desktopCollapsed ? <Menu size={20} /> : <X size={20} />}
            </button>
          )}

          {/* Mobile: close button */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                flexShrink: 0,
              }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 14,
                textDecoration: "none",
                color: isActive(item.path) ? "#ffffff" : "#374151",
                backgroundColor: isActive(item.path) ? "var(--color-main, #1a47fb)" : "transparent",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.path))
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.path))
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              <item.icon size={20} style={{ flexShrink: 0 }} />
              {showLabels && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #d1d5db",
            padding: 12,
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              textDecoration: "none",
              color: "#374151",
            }}
          >
            <LogOut size={20} style={{ flexShrink: 0 }} />
            {showLabels && <span>Back to Website</span>}
          </Link>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: mainMarginLeft,
          transition: "margin-left 0.3s ease",
          minWidth: 0,
        }}
      >
        {/* Top Bar */}
        <header
          style={{
            display: "flex",
            height: 64,
            alignItems: "center",
            borderBottom: "1px solid #d1d5db",
            padding: "0 24px",
            flexShrink: 0,
            backgroundColor: "#ffffff",
          }}
        >
          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                marginRight: 16,
                padding: 4,
              }}
            >
              <Menu size={22} />
            </button>
          )}

          <div
            style={{
              marginLeft: "auto",
              border: "1px solid #d1d5db",
              padding: 8,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                height: 32,
                width: 32,
                borderRadius: "50%",
                backgroundColor: "#e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              AD
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 500 }}>Admin</span>
              <span style={{ fontSize: 12, color: "#6b7280" }}>
                admin@housebox.com
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 24,
            backgroundColor: "#fafcfd",
          }}
        >
          {children}    
        </main>
      </div>
    </div>
  );
}
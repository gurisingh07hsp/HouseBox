'use client'
import HouseManagement from "@/components/admin/HouseManagement";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogManagement from "@/components/admin/BlogManagement";
export default function Page() {
    const {pagename} = useParams();

  return (
    <>
      {/* {pagename == 'bookings' && <Bookings/>}
      {pagename == 'customers' && <Customers/>} */}
      {pagename == 'houses' && <HouseManagement/>}
      {pagename == 'bookings' && <div>Bookings</div>}
      {pagename == 'blogs' && <BlogManagement/>}
      {/* {pagename == 'houses' && <div>House Management</div>} */}
    </>
  );
}
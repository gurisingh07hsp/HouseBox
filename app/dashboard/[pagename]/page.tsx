'use client'
import HouseManagement from "@/components/admin/HouseManagement";
import { useParams } from "next/navigation";
import BlogManagement from "@/components/admin/BlogManagement";
import MyProperty from "@/components/userdashboard/MyProperty";
import Message from "@/components/userdashboard/Message";
import MyFavorites from "@/components/userdashboard/MyFavouties";
import Reviews from "@/components/userdashboard/Reviews";
import MyProfile from "@/components/userdashboard/MyProfile";
import AddProperty from "@/components/userdashboard/AddProperty";
export default function Page() {
    const {pagename} = useParams();
    console.log("dashborad page: ", pagename);

  return (
    <>
      {pagename == 'my-property' && <MyProperty/>}
      {pagename == 'message' && <Message/>}
      {pagename == 'my-favorites' && <MyFavorites/>}
      {pagename == 'reviews' && <Reviews/>}
      {pagename == 'my-profile' && <MyProfile/>}
      {pagename == 'add-property' && <AddProperty/>}
    </>
  );
}

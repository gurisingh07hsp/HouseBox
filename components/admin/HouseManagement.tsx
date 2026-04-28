'use client'
import { Search, Plus, Edit, Trash2, Eye, Star } from "lucide-react";
// import TourFormModal from "./TourForm";
import { useEffect, useState } from "react";
import axios from "axios";
// import { ToursType } from "@/types/types";
const houses = [
  { id: 1, name: "Bali Paradise Escape", destination: "Bali, Indonesia", duration: "7 Days / 6 Nights", price: "$1,299", rating: 4.8, bookings: 245, status: "active" },
  { id: 2, name: "Romantic Paris Getaway", destination: "Paris, France", duration: "5 Days / 4 Nights", price: "$2,199", rating: 4.9, bookings: 198, status: "active" },
  { id: 3, name: "Tokyo Adventure Tour", destination: "Tokyo, Japan", duration: "8 Days / 7 Nights", price: "$2,499", rating: 4.7, bookings: 176, status: "active" },
  { id: 4, name: "Maldives Luxury Resort", destination: "Maldives", duration: "6 Days / 5 Nights", price: "$3,899", rating: 4.9, bookings: 154, status: "active" },
  { id: 5, name: "Dubai City Explorer", destination: "Dubai, UAE", duration: "5 Days / 4 Nights", price: "$1,799", rating: 4.6, bookings: 132, status: "draft" },
  { id: 6, name: "Italian Heritage Tour", destination: "Rome, Italy", duration: "10 Days / 9 Nights", price: "$2,899", rating: 4.8, bookings: 118, status: "inactive" },
];

const HouseManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [tours, setTours] = useState<any[]>([]);
  const [existingTour, setExistingTour] = useState<any>();

  const filtered = houses
  .filter((t: any) =>
    t.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(t.location).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTours = async()=> {
    const response = await axios.get('/api/tours');
    if(response.status === 200){
      setTours(response.data);
    }
    console.log(response.data);
  }

//   useEffect(()=>{
//     getTours();
//   },[]);

  const postData = async(data: any)=>{
    try{
      if(mode == 'create'){
        const response = await axios.post('/api/tours',data);
        console.log("data : ",response);
      }
      else{
        const respose = await axios.put(`/api/tours/${data._id}`, data);
        if(respose.status == 200){
          getTours();
        }
      }
    }
    catch(error){
      console.log(error);
    }
  }

const deleteTourPackage = async (id: string) => {
  const isConfirmed = confirm("Are you sure you want to delete this?");

  if (isConfirmed) {
    try {
      const response = await axios.delete(`/api/tours/${id}`);

      if (response.status === 200) {
        getTours();
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  }
};

  return (
    <div className="space-y-6">
    {/* <TourFormModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSubmit={(data) => postData(data)}   // connect to your API here
      mode={mode}
      initialData={existingTour}  // for edit mode
    /> */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">House Management</h1>
        <p className="text-muted-foreground text-sm">Create and manage Houses</p>
      </div>
      <button onClick={()=> setIsOpen(true)} className="bg-main cursor-pointer flex items-center justify-center p-2 rounded-lg hover:bg-primary/90">
        <Plus className="h-4 w-4 mr-2" /> Add House
      </button>
    </div>

    <div className="border border-gray-300 p-6 rounded-lg">
      <div className="pb-3">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search houses..." className="pl-9 w-full p-2 border border-gray-300 rounded-lg" />
        </div>
      </div>
      <div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg: any,index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow overflow-hidden">
              <div className="h-36 bg-muted flex items-center justify-center">
                {/* <span className="text-muted-foreground text-sm">Package Image</span> */}
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-fill" />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{pkg.title}</h3>
                    <p className="text-xs text-muted-foreground">{pkg.location}</p>
                  </div>
                  {/* <div
                    className={`text-xs capitalize px-2 py-1 rounded-2xl ${
                      pkg.status === "active" ? "bg-emerald-500/10 text-emerald-600 border-emerald-200" :
                      pkg.status === "draft" ? "bg-amber-500/10 text-amber-600 border-amber-200" :
                      "bg-muted text-muted-foreground"
                    }`}
                  >
                    {pkg.status}
                  </div> */}
                </div>
                {/* <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{pkg.duration}</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-300 text-amber-300" /> {pkg.rating || 0}
                  </span>
                </div> */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{pkg.price}</span>
                  {/* <span className="text-xs text-muted-foreground">{pkg.bookings || 0} bookings</span> */}
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 text-xs">
                    <Eye className="h-3 w-3 mr-1" /> View
                  </div>
                  <button onClick={()=> {setIsOpen(true); setMode('edit'); setExistingTour({...existingTour, ...pkg})}} className="h-8 cursor-pointer text-xs">
                    <Edit className="h-3 w-3" />
                  </button>
                  <button onClick={()=> deleteTourPackage(pkg._id)} className="h-8 text-xs cursor-pointer text-destructive hover:text-destructive">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}
export default HouseManagement;
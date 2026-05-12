'use client'
import { Search, Plus, Edit, Trash2, Eye, Star } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogType } from "@/types/types";
import BlogFormModal from "./BlogForm";

const BlogManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [existingBlog, setExistingBlog] = useState<BlogType>();

  const filtered = blogs
  .filter((t) =>
    t.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBlogs = async()=> {
    const response = await axios.get('/api/blogs');
    if(response.status === 200){
      setBlogs(response.data);
    }
    console.log(response.data);
  }

  useEffect(()=>{
    getBlogs();
  },[]);

  const postData = async(data: any)=>{
    try{
      if(mode == 'create'){
        const response = await axios.post('/api/blogs',data);
        console.log("data : ",response);
      }
      else{
        const respose = await axios.put(`/api/blogs/${data._id}`, data);
        if(respose.status == 200){
          getBlogs();
        }
      }
    }
    catch(error){
      console.log(error);
    }
  }

const deleteBlog = async (id: string) => {
  const isConfirmed = confirm("Are you sure you want to delete this?");

  if (isConfirmed) {
    try {
      const response = await axios.delete(`/api/blogs/${id}`);

      if (response.status === 200) {
        getBlogs();
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  }
};

  return (
    <div className="space-y-6">
    <BlogFormModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSubmit={(data) => postData(data)}   // connect to your API here
      mode={mode}
      initialData={existingBlog}  // for edit mode
    />
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Blog Management</h1>
        <p className="text-muted-foreground text-sm">Create and manage Blogs</p>
      </div>
      <button style={{borderRadius: '8px'}} onClick={()=> setIsOpen(true)} className="bg-[#cbcd30] text-black cursor-pointer flex items-center justify-center p-2 rounded-lg hover:bg-primary/90">
        <Plus className="h-4 w-4 mr-2" /> Add Blog
      </button>
    </div>

    <div style={{padding: 20}} className="border border-gray-300 mt-2 rounded-lg">
      <div className="pb-3">
        <div className="relative max-w-md">
          {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search blogs..." className="pl-9 w-full p-2 border border-gray-300 rounded-lg" />
        </div>
      </div>
      <div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg) => (
            <div key={pkg._id} className="border border-gray-300 rounded-lg shadow overflow-hidden">
              <div className="h-36 bg-muted flex items-center justify-center">
                {/* <span className="text-muted-foreground text-sm">Package Image</span> */}
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-fill" />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{pkg.title}</h3>
                    <p className="text-xs text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div
                    className={`text-xs capitalize px-2 py-1 rounded-2xl ${
                      pkg.isPublished ? "bg-emerald-500/10 text-emerald-600 border-emerald-200" :
                      "bg-amber-500/10 text-amber-600 border-amber-200"
                    }`}
                  >
                    {pkg.isPublished ? 'Active' : 'Draft'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  {/* <span>{pkg.duration}</span> */}
                  <span className="flex items-center gap-1">
                    {/* <Star className="h-3 w-3 fill-amber-300 text-amber-300" /> {pkg.rating || 0} */}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  {/* <span className="text-lg font-bold text-foreground">{pkg.price}</span>
                  <span className="text-xs text-muted-foreground">{pkg.bookings || 0} bookings</span> */}
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-8 text-xs">
                    <Eye className="h-3 w-3 mr-1" /> View
                  </div>
                  <button onClick={()=> {setIsOpen(true); setMode('edit'); setExistingBlog({...existingBlog, ...pkg})}} className="h-8 cursor-pointer text-xs">
                    <Edit className="h-3 w-3" />
                  </button>
                  <button onClick={()=> deleteBlog(pkg._id)} className="h-8 text-xs cursor-pointer text-destructive hover:text-destructive">
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
export default BlogManagement;


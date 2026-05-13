'use client';
import LineChart from "@/components/elements/line-chart";
import Layout from "@/components/layout/Layout";
import { RootState } from "@/features/store";
import axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useUser } from "@/context/UserContext";
import { PropertyListItem } from "@/types/types";
import PropertyFormModal from "@/components/elements/PropertyFormModal";
import { useEffect, useState } from "react";
import { IndianRupeeIcon } from "lucide-react";
import { PropertySlugify } from "@/utils/functions-utils";

interface PropertyForm {
    name: string;
    images: any[];
    video: string;
    description: string;
    address: string;
    zipCode: string;
    country: string;
    state: string;
    city: string;
    sold: boolean;
    status: string;
    agent: string;
    propertyPrices: {
        propertyPrice: number;
        unitPrice: number;
        beforePriceLabel: number;
        afterPriceLabel: number;
    };
    additionalInformation: {
        propertySize: string;
        landArea: string;
        rooms: number;
        bedrooms: number;
        bathrooms: number;
        garages: number;
        garageSize: string;
        yearBuilt: string;
    };
    amenities: string[];
    floors: {
        floorNumber: number;
        floorImage: string;
        floorPrice: number;
        floorSize: number;
        bedrooms: number;
        bathrooms: number;
    }[];
}
export default function Page() {
          const {user} = useUser();
        const [properties, setProperties] = useState<PropertyListItem[]>([]);
        const [total, setTotal] = useState(0);
        const [open, setOpen] = useState(false);
        const [loading, setLoading] = useState(true);
    const [propertyFilter, setPropertyFilter] = useState({
        keyword: "",
    });
            const [propertyForm, setPropertyForm] = useState<PropertyForm>({
                name: '',
                images: [],
                video: '',
                description: '',
                address: '',
                zipCode: '',
                country: '',
                state: '',
                city: '',
                sold: false,
                status: '',
                agent: '',
                propertyPrices: {
                    propertyPrice: 0,
                    unitPrice: 0,
                    beforePriceLabel: 0,
                    afterPriceLabel: 0,
                },
                additionalInformation: {
                    propertySize: '',
                    landArea: '',
                    rooms: 0,
                    bedrooms: 0,
                    bathrooms: 0,
                    garages: 0,
                    garageSize: '',
                    yearBuilt: ''
                },
                amenities: [],
                floors: [{
                    floorNumber: 0,
                    floorImage: '',
                    floorPrice: 0,
                    floorSize: 0,
                    bedrooms: 0,
                    bathrooms: 0,
                }],
            });
        const { propertySort } = useSelector((state: RootState) => state.filter);
       const fetchProperties = async() => {
        setLoading(true);
        try{
            // const response = await axios.get('/api/properties');
            const response = await axios.get("/api/properties", {
            params: {
                filter: JSON.stringify(propertyFilter),
                pagination: JSON.stringify(propertySort),
                // agentId: user?._id,
            },
            });
            if(response.status == 200){
                console.log("Response Data : ", response.data);
                setProperties(response.data.properties);
                setTotal(response.data.total);
            }
        }catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProperties();
    },[user, propertyFilter]);

            const handleEdit = (property: PropertyListItem) => {
         setPropertyForm((prev) => ({
            ...prev,
            ...property,

            propertyPrices: {
            ...prev.propertyPrices,
            ...property.propertyPrices,
            },

            additionalInformation: {
            ...prev.additionalInformation,
            ...property.additionalInformation,
            },

            amenities: property.amenities || [],

            floors: property.floors || [],
        }));

    }


    const handleDelete = async(PropertyId: string) => {
        try{
            confirm("Are you sure you want to delete this property?") && await axios.delete(`/api/properties/${PropertyId}`, {withCredentials: true});
            fetchProperties();
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div>
         <div>
            
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== DASHBOARD AREA STARTS =======*/}
                    <div className="dashboard-section-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 m-auto">
                                    <div className="heading1 text-center">
                                        <h2>Dashboard</h2>
                                    </div>
                                    <div className="space40" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="dash1-box">
                                        <div className="icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div className="text">
                                            <span>Your All Listing</span>
                                            <div className="space12" />
                                            <h3>
                                                {total}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="dash1-box">
                                        <div className="icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                                            </svg>
                                        </div>
                                        <div className="text">
                                            <span>All Pending</span>
                                            <div className="space12" />
                                            <h3>
                                                0 <span>/Pending</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="dash1-box">
                                        <div className="icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.9996 0.5L16.2256 6.68342L23.4123 8.7918L18.8374 14.7217L19.053 22.2082L11.9996 19.6897L4.94617 22.2082L5.16179 14.7217L0.586914 8.7918L7.7736 6.68342L11.9996 0.5ZM11.9996 4.044L9.02186 8.40151L3.95659 9.887L7.18152 14.0655L7.02859 19.34L11.9996 17.566L16.9696 19.34L16.8177 14.0655L20.0416 9.887L14.9773 8.40151L11.9996 4.044ZM9.99959 12C9.99959 13.1046 10.895 14 11.9996 14C13.1042 14 13.9996 13.1046 13.9996 12H15.9996C15.9996 14.2091 14.2087 16 11.9996 16C9.79045 16 7.99959 14.2091 7.99959 12H9.99959Z"></path>
                                            </svg>
                                        </div>
                                        <div className="text">
                                            <span>Our Favourite</span>
                                            <div className="space12" />
                                            <h3>
                                                0 <span>/Favourite</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="dash1-box">
                                        <div className="icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124 8.72757 13.8128 9.81283 12.7276 11.124 12 9.81283 11.2724 8.72757 10.1872 8 8.87601 7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"></path>
                                            </svg>
                                        </div>
                                        <div className="text">
                                            <span>All Reviews</span>
                                            <div className="space12" />
                                            <h3>0</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space30" />
                                    <div className="dashboad-all-details-section">
                                        <h3>New Listing</h3>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="input-area">
                                                    <form>
                                                        <input type="text" />
                                                        <button>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="input-area">
                                                    <form>
                                                        <input type="date" />
                                                    </form>
                                                </div>
                                            </div> */}
                                            <div className="col-lg-4 col-md-6">
                                                 <div className="input-area">
                                                    <form>
                                                        <input type="text" placeholder="City"/>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="space28" />
                                            <h4 className="found">{total} Result Found</h4>
                                            <div className="space20" />
                                            <div className="table-container">
                                                {/* Header */}
                                                <div className="table-header">
                                                    <div>Listing</div>
                                                    <div>Status</div>
                                                    <div>Action</div>
                                                </div>
                                                {/* Row 1 */}
                                                     {properties.map((property)=> (
                                                    <div key={property._id} className="table-row">
                                                        <div className="listing">
                                                            <img src="/assets/img/all-images/others/dash-img1.png" alt="Apartment Complex" />
                                                            <div className="details">
                                                                <Link href="/property-details-v1">{property.name}</Link>
                                                                <div className="space18" />
                                                                <p>
                                                                    <span>
                                                                        <img src="/assets/img/icons/bed1.svg" alt="housebox" /> x{property.additionalInformation.bedrooms}
                                                                    </span>
                                                                    <span>
                                                                        <img src="/assets/img/icons/bath1.svg" alt="housebox" /> x{property.additionalInformation.bathrooms}
                                                                    </span>
                                                                    <span>
                                                                        <img src="/assets/img/icons/sqare1.svg" alt="housebox" /> {property.additionalInformation.propertySize} sq
                                                                    </span>
                                                                </p>
                                                                <div className="space16" />
                                                                <Link href={`/property-details/${PropertySlugify(property)}`} style={{display: 'flex', alignItems: 'center', width: 'fit-content'}} className="price"><IndianRupeeIcon size={16}  /> {property.propertyPrices.propertyPrice.toLocaleString()}</Link>
                                                            </div>
                                                        </div>
                                                        <div className="status">
                                                            <Link href="/property-details-v1" className="status-badge approved">
                                                                Approved
                                                            </Link>
                                                        </div>
                                                        <div className="actions">
                                                                    <button onClick={() => { handleEdit(property); setOpen(true)}} className="edit flex gap-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z" />
                                                                    </svg>{" "}
                                                                    Edit
                                                                </button>
                                                                
                                                            <button className="sold flex gap-1 mt-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M7.0943 5.68009L18.3199 16.9057C19.3736 15.5506 20 13.8491 20 12C20 7.58172 16.4183 4 12 4C10.1509 4 8.44939 4.62644 7.0943 5.68009ZM16.9057 18.3199L5.68009 7.0943C4.62644 8.44939 4 10.1509 4 12C4 16.4183 7.58172 20 12 20C13.8491 20 15.5506 19.3736 16.9057 18.3199ZM4.92893 4.92893C6.73748 3.12038 9.23885 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7611 20.8796 17.2625 19.0711 19.0711C17.2625 20.8796 14.7611 22 12 22C6.47715 22 2 17.5228 2 12C2 9.23885 3.12038 6.73748 4.92893 4.92893Z" />
                                                                </svg>{" "}
                                                                Sold
                                                            </button>
                                                            <button onClick={()=> handleDelete(property._id || "")} className="delete flex gap-1 mt-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z" />
                                                                </svg>{" "}
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>

                                                ))}
                        
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="pagination-area" style={{ textAlign: "start" }}>
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination">
                                                            <li className="page-item">
                                                                <Link className="page-link" href="#" aria-label="Previous">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                                                                    </svg>
                                                                </Link>
                                                            </li>
                                                            <li className="page-item">
                                                                <Link className="page-link active" href="#">
                                                                    1
                                                                </Link>
                                                            </li>
                                                            <li className="page-item">
                                                                <Link className="page-link" href="#">
                                                                    2
                                                                </Link>
                                                            </li>
                                                            <li className="page-item">
                                                                <Link className="page-link" href="#">
                                                                    ....
                                                                </Link>
                                                            </li>
                                                            <li className="page-item">
                                                                <Link className="page-link" href="#">
                                                                    12
                                                                </Link>
                                                            </li>
                                                            <li className="page-item">
                                                                <Link className="page-link" href="#" aria-label="Next">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                                                    </svg>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space30" />
                                    <div className="dashboardboxarea">
                                        <h3>Page Inside</h3>
                                        <div className="space28" />
                                        <div className="wd-filter-date">
                                            <div className="left">
                                                <div className="dates active">Day</div>
                                                <div className="dates">Week</div>
                                                <div className="dates">Month</div>
                                                <div className="dates">Year</div>
                                            </div>
                                            <div className="right">
                                                <div className="ip-group icon">
                                                    <input type="date" />
                                                </div>
                                                <div className="ip-group icon">
                                                    <input type="date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <div className="chart-box">
                                            <LineChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
    </div>
    // <Dashboard/>
  );
}
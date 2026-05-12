'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import type { RootState } from "@/features/store";
import { useDispatch, useSelector } from "react-redux"
import { PropertyListItem } from "@/types/types";
import PropertyFormModal from "@/components/elements/PropertyFormModal";
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


export default function MyProperty() {
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
                agentId: user?._id,
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
        <>
            <PropertyFormModal initialForm={propertyForm} mode={'edit'} open={open} setOpen={setOpen}/>
            <Layout headerStyle={3} footerStyle={3}>
                <div>
                    {/* <div className="hero-inner-section-area-sidebar">
                        <img src="/assets/img/all-images/hero/hero-img1.png" alt="housebox" className="hero-img1" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="hero-header-area text-center">
                                        <Link href="/">
                                            Home{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                            </svg>{" "}
                                            My Properties
                                        </Link>
                                        <div className="space24" />
                                        <h1>My Properties</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== DASHBOARD AREA STARTS =======*/}
                    <div className="dashboard-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="space30" />
                                    <div className="dashboad-all-details-section">
                                        <h3>New Listing</h3>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="input-area">
                                                    <form>
                                                        <input type="text" value={propertyFilter.keyword} onChange={(e)=> setPropertyFilter({...propertyFilter, keyword: e.target.value})} />
                                                        <button>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
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
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="input-area">
                                                    <div className="nice-select" tabIndex={0}>
                                                        <span className="current">Select</span>
                                                        <ul className="list">
                                                            <li data-value={1} className="option">
                                                                Today
                                                            </li>
                                                            <li data-value={2} className="option selected">
                                                                Yesterday
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
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
                                                                <Link href={`/property-details/${PropertySlugify(property)}`} className="price" style={{display: 'flex', alignItems: 'center', width: 'fit-content'}}><IndianRupeeIcon size={16}/>{property.propertyPrices.propertyPrice.toLocaleString()}</Link>
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
                                                                <button className="bg-[#f2f3f3] w-13 rounded-2xl me-3" aria-label="Previous">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                                                                    </svg>
                                                                </button>
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
                                                                <button className="bg-[#f2f3f3] w-13 rounded-2xl" aria-label="Next">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                                                    </svg>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== DASHBOARD AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    {/* <div className="cta1-section-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-bg-area" style={{ backgroundImage: "url(assets/img/all-images/bg/cta-bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="cta-header">
                                                    <h2 className="text-anime-style-3">Step Into Your Dream Home with HouseBox</h2>
                                                    <div className="space16" />
                                                    <p data-aos="fade-left" data-aos-duration={1000}>
                                                        At HouseBox, we believe your next home is more than just a place – it’s where your future begins you’re buy.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-2" />
                                            <div className="col-lg-5" data-aos="zoom-in" data-aos-duration={1000}>
                                                <div className="btn-area1 text-center">
                                                    <Link href="/property-halfmap-grid" className="theme-btn1">
                                                        Find Your Dream Home{" "}
                                                        <span className="arrow1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                            </svg>
                                                        </span>
                                                        <span className="arrow2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Layout>
        </>
    );
}

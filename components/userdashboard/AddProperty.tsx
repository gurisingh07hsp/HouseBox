'use client'
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

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

export default function AddProperty() {
    const {user} = useUser();
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
        agent: user?._id || '',
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
    })

    useEffect(()=> {
        if(user){
            setPropertyForm({...propertyForm, agent: user._id || ""})
        }
    },[user]);


    const postData = async()=> {
        const response = await axios.post('/api/properties', propertyForm, {withCredentials: true});
        if(response.status == 200){
            alert('Property Added!')
            console.log(response.data);
        }
    }

    const amenitiesList = [
  "airCondition",
  "windowType",
  "petFriendly",
  "floor",
  "furnishing",
  "sellingHeight",
  "elevator",
  "parking",
  "renovation",
  "garden",
  "heating",
  "firePlace",
  "disabledAccess",
  "cableTV",
  "wifi",
];

    return (
        <>
            {/* <Layout headerStyle={3} footerStyle={3}> */}
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
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                            </svg>{" "}
                                            Add Property
                                        </Link>
                                        <div className="space24" />
                                        <h1>Add Property</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== DASHBOARD AREA STARTS =======*/}
                    <div className="add-property-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="heading1">
                                        <h2>Add Property</h2>
                                        {/* <div className="space32" /> */}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    {/* <div className="property-main-boxarea">
                                        <h3>Upload Media</h3>
                                        <div className="space38" />
                                        <div className="box-uploadfile text-center">
                                            <div className="uploadfile">
                                                <div className="btn-upload theme-btn1 text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                                                    </svg>
                                                    Select Property Photos
                                                    <input type="file" className="ip-file" />
                                                </div>
                                                <p className="file-name fw-5">
                                                    or drag photos here <br />
                                                    <span>(Up to 10 photos)</span>
                                                </p>
                                            </div>
                                            <div className="space20" />
                                            <div className="box-img-upload">
                                                <div className="item-upload file-delete">
                                                    <img src="/assets/img/all-images/others/add-img1.png" alt="housebox" />
                                                    <span className="remove-file">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="item-upload file-delete">
                                                    <img src="/assets/img/all-images/others/add-img2.png" alt="housebox" />
                                                    <span className="remove-file">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="item-upload file-delete">
                                                    <img src="/assets/img/all-images/others/add-img3.png" alt="housebox" />
                                                    <span className="remove-file">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="item-upload file-delete">
                                                    <img src="/assets/img/all-images/others/add-img4.png" alt="housebox" />
                                                    <span className="remove-file">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="space60" />
                                    <div className="upload-main-boxarea">
                                        <h3>Property Details</h3>
                                        <div className="space32" />
                                        <div className="input-area">
                                            <h5>Full Name*</h5>
                                            <div className="space16" />
                                            <input type="text" value={propertyForm.name} onChange={(e)=> setPropertyForm({...propertyForm, name: e.target.value})} placeholder="Property Name" />
                                        </div>
                                        <div className="space28" />
                                        <div className="input-area">
                                            <h5>Description</h5>
                                            <div className="space16" />
                                            <textarea value={propertyForm.description} onChange={(e)=> setPropertyForm({...propertyForm, description: e.target.value})} placeholder="Property Description" />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Full Address*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.address} onChange={(e)=> setPropertyForm({...propertyForm, address: e.target.value})} type="text" placeholder="Property Full Address*" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Zip Code*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.zipCode} onChange={(e)=> setPropertyForm({...propertyForm, zipCode: e.target.value})} type="text" placeholder="Property Zip Code" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Country*</h5>
                                                    <div className="space16" />
                                                    <div className="input-area" tabIndex={0}>
                                                        <input value={propertyForm.country} onChange={(e)=> setPropertyForm({...propertyForm, country: e.target.value})} type="text" placeholder="Country" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>City</h5>
                                                    <div className="space16" />
                                                    <div className="input-area" tabIndex={0}>
                                                        <input value={propertyForm.city} onChange={(e)=> setPropertyForm({...propertyForm, city: e.target.value.toLowerCase()})} type="text" placeholder="City" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Province/State*</h5>
                                                    <div className="space16" />
                                                    <div className="input-area" tabIndex={0}>
                                                        <input value={propertyForm.state} onChange={(e)=> setPropertyForm({...propertyForm, state: e.target.value})} type="text" placeholder="State" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Neighborhood:</h5>
                                                    <div className="space16" />
                                                    <input type="text" placeholder="None" />
                                                </div>
                                            </div> */}
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Location*</h5>
                                                    <div className="space16" />
                                                    <input type="text" placeholder="Property Zip Code" />
                                                </div>
                                            </div> */}
                                            <div className="col-lg-12">
                                                <div className="space48" />
                                                <div className="mapouter">
                                                    <div className="gmap_canvas">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space60" />
                                    <div className="upload-main-boxarea">
                                        <h3>Property Price</h3>
                                        <div className="space4" />
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Property Price*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.propertyPrices.propertyPrice} onChange={(e)=> setPropertyForm({...propertyForm, propertyPrices: {...propertyForm.propertyPrices, propertyPrice: Number(e.target.value)}})} type="number" placeholder="Price" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Unit Price*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.propertyPrices.unitPrice} onChange={(e)=> setPropertyForm({...propertyForm, propertyPrices: {...propertyForm.propertyPrices, unitPrice: Number(e.target.value)}})} type="number" placeholder="Price" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Before Price Label*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.propertyPrices.beforePriceLabel} onChange={(e)=> setPropertyForm({...propertyForm, propertyPrices: {...propertyForm.propertyPrices, beforePriceLabel: Number(e.target.value)}})} type="number" placeholder="Price" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>After Price Label*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.propertyPrices.afterPriceLabel} onChange={(e)=> setPropertyForm({...propertyForm, propertyPrices: {...propertyForm.propertyPrices, afterPriceLabel: Number(e.target.value)}})} type="number" placeholder="Price" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space60" />
                                    <div className="upload-main-boxarea">
                                        <h3>Additional Information</h3>
                                        <div className="space4" />
                                        <div className="row">
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Property Type*</h5>
                                                    <div className="space16" />
                                                    <div className="nice-select" tabIndex={0}>
                                                        <span className="current">Choose</span>
                                                        <ul className="list">
                                                            <li data-value={1} className="option">
                                                                Villa
                                                            </li>
                                                            <li data-value={2} className="option selected">
                                                                Studio
                                                            </li>
                                                            <li data-value={1} className="option">
                                                                Park
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Property Status*</h5>
                                                    <div className="space16" />
                                                    <div className="nice-select" tabIndex={0}>
                                                        <span className="current">Choose</span>
                                                        <ul className="list">
                                                            <li data-value={1} className="option">
                                                                For Rent
                                                            </li>
                                                            <li data-value={2} className="option selected">
                                                                For Sale
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Property Label*</h5>
                                                    <div className="space16" />
                                                    <div className="nice-select" tabIndex={0}>
                                                        <span className="current">Choose</span>
                                                        <ul className="list">
                                                            <li data-value={1} className="option">
                                                                New Listing
                                                            </li>
                                                            <li data-value={2} className="option selected">
                                                                Open House
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Size (SQFT)*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.propertySize} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, propertySize: e.target.value}})} type="text" placeholder="Size" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Land Area (SQFT)*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.landArea} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, landArea: e.target.value}})} type="text" placeholder="Land Area (SQFT)*" />
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Property ID*</h5>
                                                    <div className="space16" />
                                                    <input type="text" placeholder="Property ID*" />
                                                </div>
                                            </div> */}
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Rooms*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.rooms} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, rooms: Number(e.target.value)}})} type="number" placeholder="#" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Bedrooms*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.bedrooms} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, bedrooms: Number(e.target.value)}})} type="number" placeholder="#" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Bathrooms*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.bathrooms} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, bathrooms: Number(e.target.value)}})} type="number" placeholder="#" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Garages*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.garages} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, garages: Number(e.target.value)}})} type="number" placeholder="#" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Garages Size (SQFT)*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.garageSize} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, garageSize: e.target.value}})} type="text" placeholder="#" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Year Built*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.additionalInformation.yearBuilt} onChange={(e)=> setPropertyForm({...propertyForm, additionalInformation: {...propertyForm.additionalInformation, yearBuilt: e.target.value}})} type="text" placeholder="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space60" />
                                    <div className="upload-main-boxarea">
                                        <h3>Amenities*</h3>
                                        <div className="space16" />
                                        {/* <div className="row">
                                            <div className="col-lg-2 col-md-6">
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.airCondition} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, airCondition: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span  className="text-4">Air Condition </span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.sellingHeight} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, sellingHeight: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Selling Height </span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.heating} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, heating: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Heating</span>
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-2 col-md-6">
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.windowType} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, windowType: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Window Type</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.elevator} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, elevator: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Elevator</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.firePlace} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, firePlace: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Fire Place</span>
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-2 col-md-6">
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.petFriendly} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, petFriendly: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Pet Friendly</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.parking} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, parking: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Parking</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.disabledAccess} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, disabledAccess: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Disabled Access</span>
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-2 col-md-6">
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.floor} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, floor: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Floor</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.renovation} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, renovation: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Renovation</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.cableTV} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, cableTV: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Cable TV</span>
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-2 col-md-6">
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.furnishing} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, furnishing: e.target.checked}})}type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Furnishing</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.garden} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, garden: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Garden</span>
                                                    </label>
                                                </fieldset>
                                                <fieldset className="checkbox-item style-1">
                                                    <label>
                                                        <input checked={propertyForm.amenities.wifi} onChange={(e)=> setPropertyForm({...propertyForm, amenities: {...propertyForm.amenities, wifi: e.target.checked}})} type="checkbox" />
                                                        <span className="btn-checkbox" />
                                                        <span className="text-4">Wifi</span>
                                                    </label>
                                                </fieldset>
                                            </div>
                                        </div> */}
                                        <div className="row">
  {amenitiesList.map((item) => (
    <div className="col-lg-2 col-md-6" key={item}>
      <fieldset className="checkbox-item style-1">
        <label>
          <input
            type="checkbox"
            checked={propertyForm.amenities.includes(item)}
            onChange={(e) => {
              if (e.target.checked) {
                // Add amenity
                setPropertyForm({
                  ...propertyForm,
                  amenities: [...propertyForm.amenities, item],
                });
              } else {
                // Remove amenity
                setPropertyForm({
                  ...propertyForm,
                  amenities: propertyForm.amenities.filter(
                    (amenity) => amenity !== item
                  ),
                });
              }
            }}
          />

          <span className="btn-checkbox" />

          <span className="text-4">
            {item.replace(/([A-Z])/g, " $1")}
          </span>
        </label>
      </fieldset>
    </div>
  ))}
</div>
                                    </div>
                                    {/* <div className="space60" /> */}
                                    {/* <div className="upload-main-boxarea">
                                        <h3>Virtual Your 360°</h3>
                                        <div className="space16" />
                                        <div className="radio-area">
                                            <fieldset className="checkbox-item style-1">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                    <span className="text-4">Embedded Code</span>
                                                </label>
                                            </fieldset>
                                            <fieldset className="checkbox-item style-1">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                    <span className="text-4">Upload Image</span>
                                                </label>
                                            </fieldset>
                                        </div>
                                        <div className="input-area">
                                            <div className="space28" />
                                            <h5>Description</h5>
                                            <div className="space16" />
                                            <textarea placeholder="####" />
                                        </div>
                                    </div> */}
                                    <div className="space60" />
                                    <div className="upload-main-boxarea">
                                        <h3>Videos</h3>
                                        <div className="space4" />
                                        <div className="input-area">
                                            <div className="space28" />
                                            <h5>Video URL:</h5>
                                            <div className="space16" />
                                            <input value={propertyForm.video} onChange={(e)=> setPropertyForm({...propertyForm, video: e.target.value})} type="text" placeholder="yourtube.com" />
                                        </div>
                                    </div>
                                    <div className="space60" />
                                    <div className="upload-main-boxarea">
                                        <h3>Enable Floor Plan</h3>
                                        <div className="space16" />
                                    
                                        {/* <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Floor Name*</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.floors[0].floorNumber} onChange={(e)=> setPropertyForm({...propertyForm,
                                                        floors: propertyForm.floors.map((floor, index) =>index === 0
                                                        ? {...floor,floorNumber: Number(e.target.value),}: floor),
                                                    })} type="number" placeholder="Floor Name*" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Floor Price (Only Digits):</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.floors[0].floorPrice} onChange={(e)=> setPropertyForm({...propertyForm,
                                                        floors: propertyForm.floors.map((floor, index) =>index === 0
                                                        ? {...floor,floorPrice: Number(e.target.value),}: floor),
                                                    })} type="number" placeholder="#" />
                                                </div>
                                            </div>
                                
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Floor Size (Only Digits):</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.floors[0].floorSize} onChange={(e)=>  setPropertyForm({...propertyForm,
                                                        floors: propertyForm.floors.map((floor, index) =>index === 0
                                                        ? {...floor,floorSize: Number(e.target.value),}: floor),
                                                    })} type="number" placeholder="#" />
                                                </div>
                                            </div>
                                
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Bedrooms:</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.floors[0].bedrooms} onChange={(e)=> setPropertyForm({...propertyForm,
                                                        floors: propertyForm.floors.map((floor, index) =>index === 0
                                                        ? {...floor,bedrooms: Number(e.target.value),}: floor),
                                                    })} type="number" placeholder="#" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Bathrooms:</h5>
                                                    <div className="space16" />
                                                    <input value={propertyForm.floors[0].bathrooms} onChange={(e)=> setPropertyForm({...propertyForm,
                                                        floors: propertyForm.floors.map((floor, index) =>index === 0
                                                        ? {...floor,bathrooms: Number(e.target.value),}: floor),
                                                    })} type="number" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space28" />
                                                <div className="input-area">
                                                    <h5>Floor Image</h5>
                                                    <div className="space16" />
                                                    <div className="box-floor-img uploadfile">
                                                        <div className="btn-upload theme-btn1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                                                            </svg>
                                                            Choose File
                                                            <input type="file" className="ip-file" />
                                                        </div>
                                                        <p className="file-name">Or drop file here to upload</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}




                                        <div className="row">
  {propertyForm.floors.map((floor, index) => (
    <div key={index} className="border rounded p-3 mb-4">

      <h4 className="mb-3">Floor {index + 1}</h4>

      <div className="row">

        {/* Floor Number */}
        <div className="col-lg-12 col-md-12">
          <div className="space28" />
          <div className="input-area">
            <h5>Floor Number*</h5>
            <div className="space16" />

            <input
              value={floor.floorNumber}
              onChange={(e) => {
                const updatedFloors = [...propertyForm.floors];

                updatedFloors[index].floorNumber = Number(e.target.value);

                setPropertyForm({
                  ...propertyForm,
                  floors: updatedFloors,
                });
              }}
              type="number"
              placeholder="Floor Name*"
            />
          </div>
        </div>

        {/* Floor Price */}
        <div className="col-lg-6 col-md-6">
          <div className="space28" />
          <div className="input-area">
            <h5>Floor Price</h5>
            <div className="space16" />

            <input
              value={floor.floorPrice}
              onChange={(e) => {
                const updatedFloors = [...propertyForm.floors];

                updatedFloors[index].floorPrice = Number(e.target.value);

                setPropertyForm({
                  ...propertyForm,
                  floors: updatedFloors,
                });
              }}
              type="number"
              placeholder="#"
            />
          </div>
        </div>

        {/* Floor Size */}
        <div className="col-lg-6 col-md-6">
          <div className="space28" />
          <div className="input-area">
            <h5>Floor Size</h5>
            <div className="space16" />

            <input
              value={floor.floorSize}
              onChange={(e) => {
                const updatedFloors = [...propertyForm.floors];

                updatedFloors[index].floorSize = Number(e.target.value);

                setPropertyForm({
                  ...propertyForm,
                  floors: updatedFloors,
                });
              }}
              type="number"
              placeholder="#"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div className="col-lg-6 col-md-6">
          <div className="space28" />
          <div className="input-area">
            <h5>Bedrooms</h5>
            <div className="space16" />

            <input
              value={floor.bedrooms}
              onChange={(e) => {
                const updatedFloors = [...propertyForm.floors];

                updatedFloors[index].bedrooms = Number(e.target.value);

                setPropertyForm({
                  ...propertyForm,
                  floors: updatedFloors,
                });
              }}
              type="number"
              placeholder="#"
            />
          </div>
        </div>

        {/* Bathrooms */}
        <div className="col-lg-6 col-md-6">
          <div className="space28" />
          <div className="input-area">
            <h5>Bathrooms</h5>
            <div className="space16" />

            <input
              value={floor.bathrooms}
              onChange={(e) => {
                const updatedFloors = [...propertyForm.floors];

                updatedFloors[index].bathrooms = Number(e.target.value);

                setPropertyForm({
                  ...propertyForm,
                  floors: updatedFloors,
                });
              }}
              type="number"
              placeholder="#"
            />
          </div>
        </div>

                <div className="col-lg-6 col-md-6">
                <div className="space28" />
                <div className="input-area">
                    <h5>Floor Image</h5>
                    <div className="space16" />
                    <div className="box-floor-img uploadfile">
                        <div className="btn-upload theme-btn1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                            </svg>
                            Choose File
                            <input type="file" className="ip-file" />
                        </div>
                        <p className="file-name">Or drop file here to upload</p>
                    </div>
                </div>
            </div>

      </div>

      {/* Remove Floor Button */}
      {propertyForm.floors.length > 1 && (
        <button
          type="button"
          onClick={() => {
            const updatedFloors = propertyForm.floors.filter(
              (_, i) => i !== index
            );

            setPropertyForm({
              ...propertyForm,
              floors: updatedFloors,
            });
          }}
          className="btn btn-danger mt-3"
        >
          Remove Floor
        </button>
      )}
    </div>
  ))}
</div>

{/* Add Floor Button */}
<button
  type="button"
  onClick={() => {
    setPropertyForm({
      ...propertyForm,
      floors: [
        ...propertyForm.floors,
        {
          floorNumber: 0,
          floorImage: "",
          floorPrice: 0,
          floorSize: 0,
          bedrooms: 0,
          bathrooms: 0,
        },
      ],
    });
  }}
  className="btn btn-primary mt-4"
>
  + Add Floor
</button>


                                    </div>
                                    {/* <div className="space60" /> */}
                                    {/* <div className="upload-main-boxarea">
                                        <h3>Agent Information</h3>
                                        <div className="space28" />
                                        <div className="input-area">
                                            <h5>Choose type agent information?</h5>
                                        </div>
                                        <div className="radio-area">
                                            <fieldset className="checkbox-item style-1">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                    <span className="text-4">Embedded Code</span>
                                                </label>
                                            </fieldset>
                                            <fieldset className="checkbox-item style-1">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                    <span className="text-4">Upload Image</span>
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div> */}
                                    <div className="space48" />
                                    <div className="btn-area1 text-center flex justify-center">
                                        <button onClick={postData} className="theme-btn1">
                                            Add Property{" "}
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
                                        </button>
                                        {/* <Link href="#" className="theme-btn1 btn2">
                                            Save And Preview{" "}
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
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== DASHBOARD AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area">
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
                                                <div className="btn-area text-center">
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
                    </div>
                </div>
            {/* </Layout> */}
        </>
    );
}

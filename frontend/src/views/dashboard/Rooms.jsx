
import React, { useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import { useAuthStore } from "../../store/auth";
import { addRoom, login, register } from "../../utils/auth";

function Rooms() {
  console.log("xd");
  const userId = useUserData()?.user_id;
  const handleAddNewRoom = async(e)=>{
  const error = await addRoom("nowy pokój",userId);
  if(error){
    alert(JSON.stringify(error));
  }
  {
    navigate("/");
  }
  }
  return (
    <>
    <Header />
    <section className="py-4">
        <div className="container">
            <div className="row g-4">
                <div className="col-12">
                    <div className="card border bg-transparent rounded-3">
                        <div className="card-header bg-transparent border-bottom p-3">
                            <div className="d-sm-flex justify-content-between align-items-center">
                                <h5 className="mb-2 mb-sm-0">
                                    All Rooms <span className="badge bg-primary bg-opacity-10 text-primary">5</span>
                                </h5>
                                <a href="Rooms()" className="btn btn-sm btn-primary mb-0">
                                    Add New Room <i className="fas fa-plus"></i>
                                </a>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3 align-items-center justify-content-between mb-3">
                                <div className="col-md-8">
                                    <form className="rounded position-relative">
                                        <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search Articles" aria-label="Search" />
                                        <button className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                                            <i className="fas fa-search fs-6 " />
                                        </button>
                                    </form>
                                </div>
                                <div className="col-md-3">
                                    <form>
                                        <select className="form-select z-index-9 bg-transparent" aria-label=".form-select-sm">
                                            <option value="">Sort by</option>
                                            <option>Newest</option>
                                            <option>Oldest</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            {/* Search and select END */}
                            {/* Blog list table START */}
                            <div className="table-responsive border-0">
                                <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                                    {/* Table head */}
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col" className="border-0 rounded-start">
                                                Room name
                                            </th>
                                            <th scope="col" className="border-0">
                                                Users
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody className="border-top-0">
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</>
);
}
export default Rooms;

import React from 'react'
import { FaSearch } from "react-icons/fa";
{/* this file is to create search bar*/}

export default function Search() {
  return (
    <form>
        <div className="input-group">
            <input
              type="text"
              placeholder="Search your favourite restaurant.."
              id="search_field"
              className="form-control"
            />
            {/*it is used to place search icon*/}
            <div className="input-group-append">
                <button id="search_btn" className="btn">
                    <FaSearch  className="fa fa-search"/> {/*it is imported from react icons*/}
                </button>
            </div>
        </div>
    </form>
  )
}

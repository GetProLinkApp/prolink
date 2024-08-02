// SearchModal.js
import React from 'react';

const SearchModal = () => {
  return (
    <div className="modal fade" id="searchBoxModal" tabIndex="-1" aria-labelledby="searchBoxModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="searchBoxModalLabel">Search</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="d-flex">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary ms-2" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

import React from 'react';

const Pagination = ({ totalPages, pageNumber, handlePageNumberClick }) => {
  const pages = [...Array(totalPages).keys()].map(number => number + 1);
  console.log("Pages: ", pages);

  return (
      <>
        <div className='page-links'>
            {
              pages.map((number) => (
                <a 
                  href="/#"
                  key={number}
                  onClick={() => handlePageNumberClick(number)}
                  className={`${pageNumber === number &&  'active-page-link'}`}
                >
                  {number}
                </a>
              ))
            }
        </div>
      </>
  );
};

export default Pagination;

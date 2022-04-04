import React from 'react';
import styled from 'styled-components';

const PageLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(251, 79, 188);
  padding: 0.5rem;
  max-height: 1rem;
`

// const ActivePageLink = styled.a`
//   .active-page-link {
//   background-color: #444;
//   color: rgb(251, 79, 188);
// }
// `

const Pagination = ({ totalPages, pageNumber, handlePageNumberClick }) => {
  const pages = [...Array(totalPages).keys()].map(number => number + 1);

  return (
      <>
        <PageLinks>
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
        </PageLinks>
      </>
  );
};

export default Pagination;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import NumberFormat from 'react-number-format';
import {
  StyledContainer2,
  ImageContainer,
  StyledImage3,
  PriceContainer,
  StyledPrice,
  StyledPrice2,
  StyledA,
} from './AmazonProductsStyling';

const Details = styled.div`
  p {
    margin: 1rem;
    margin-bottom: 2rem;
  }
`;

const AmazonProductAPI = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const showDetailsHandler = () => {
    setShowDetails(prev => !prev);
  };

  const amazonPrice =
    item.OfferSummary &&
    item.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0];
  const ourPrice =
    amazonPrice && parseFloat(amazonPrice.split('$')[1]) * 1.1 + 20;
  const itemName = item.ItemAttributes[0].Title[0];

  return (
    <StyledContainer2 onClick={showDetailsHandler}>
      <h4>
        {itemName.length <= 65 ? itemName : `${itemName.substring(0, 65)}...`}
      </h4>

      {showDetails ? (
        <Details>
          <p>Checkout on Amazon!</p>
          <p>
            Price w/ Shipping: {` `}
            <StyledPrice2>
              <NumberFormat
                value={ourPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </StyledPrice2>
          </p>
          <StyledA
            target="_blank"
            rel="noopener noreferrer"
            href={item.DetailPageURL[0]}
          >
            Checkout
          </StyledA>
        </Details>
      ) : (
        <>
          <PriceContainer>
            <StyledPrice>{amazonPrice}</StyledPrice>
          </PriceContainer>
          <ImageContainer>
            <StyledImage3
              src={item.MediumImage[0].URL}
              alt={item.ItemAttributes[0].Title[0]}
            />
          </ImageContainer>
        </>
      )}
    </StyledContainer2>
  );
};

export default AmazonProductAPI;

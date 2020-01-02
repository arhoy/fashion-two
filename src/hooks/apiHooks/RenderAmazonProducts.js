import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getAmazonProductAPI } from './amazonproducts';
import { Section } from '../../components/reusableStyles/sections/Sections';
import { ProductLayout1 } from '../../components/products/ProductContainerStyles/ProductContainerStyle';
import {
  Bold,
  H2Centered,
} from '../../components/reusableStyles/typography/Typography';
import AmazonProductAPI from '../../components/amazonproducts/AmazonProductAPI';

import { StyledA } from '../../components/amazonproducts/AmazonProductsStyling';

const CustomH2 = styled(H2Centered)`
  font-size: 4.2rem;
  color: ${props => props.theme.colors.primary};
  text-shadow: -3px 3px 0 rgba(10, 14, 39, 0.1);
  text-transform: uppercase;
`;

const CustomSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || props.theme.colors.white};
  padding: ${props => props.padding || '2rem'};
`;

const RenderAmazonProducts = ({
  keyword,
  title,
  subtitle,
  href,
  limit,
  background,
  padding,
}) => {
  const [results, setResults] = useState({}); // set results to empty array

  try {
    useEffect(() => {
      const fetchData = async () => {
        const results = await getAmazonProductAPI(keyword);

        setResults(results);
      };
      fetchData();
    }, [keyword]); // only run on componentDidMount and componentUnmount and query state change
  } catch (error) {
    console.error(error);
  }
  if (results.data) {
    return (
      <CustomSection padding={padding} background={background}>
        <CustomH2>
          <Bold>{title}</Bold>
        </CustomH2>

        <ProductLayout1>
          {results.data.length > 0 &&
            results.data
              .slice(0, limit || 9)
              .map(result => (
                <AmazonProductAPI key={result.ASIN} item={result} />
              ))}
        </ProductLayout1>
        {subtitle && (
          <StyledA target="_blank" rel="noopener noreferrer" href={href}>
            {subtitle}
          </StyledA>
        )}
      </CustomSection>
    );
  } else {
    return null;
  }
};
export default RenderAmazonProducts;

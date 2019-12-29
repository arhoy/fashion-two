// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  MegaMenuUl,
  MegaMenuLi,
  MegaMenuA,
  MegaMenuSpan,
  MegaMenuPicture,
  MegaMenuPictureContainer,
} from './ListStyles';

import ListHeader from './ListHeader';

const SuperStoreList1 = () => {
  const data = useStaticQuery(graphql`
    {
      picture1: file(
        relativePath: { eq: "megaMenu/electronics/laptop-1.jpg" }
      ) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture2: file(relativePath: { eq: "megaMenu/electronics/phone-1.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      picture3: file(relativePath: { eq: "megaMenu/electronics/tv-2.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <MegaMenuUl>
        <ListHeader title="Phones & Electronics" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture1.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=70946deb3528bf5207529d283c1d4ceb&camp=15121&creative=330641&node=2690975011"
          >
            TV &amp; Video
          </a>
          <img
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
            alt="TV and Video"
          />
          <MegaMenuSpan spanColor="primary">Popular</MegaMenuSpan>
        </MegaMenuLi>

        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b/ref=s9_acss_bw_cg_cegrid_4e1_w?ie=UTF8&amp;node=1233055011&amp;pf_rd_m=A1IM4EOPHS76S7&amp;pf_rd_s=merchandised-search-5&amp;pf_rd_r=YAJAGGM7TT54JRH4HEYB&amp;pf_rd_t=101&amp;pf_rd_p=b9e32caa-5256-44d9-b8e3-a1f9f08d50d4&amp;pf_rd_i=667823011&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=0070cb21283f4e5580604ee4c3cf75a9&camp=15121&creative=330641"
          >
            Gaming
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
          <MegaMenuSpan spanColor="red">Hot</MegaMenuSpan>
        </MegaMenuLi>

        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=c5d0c1e9f28e541eb9da5de926544d83&camp=15121&creative=330641&node=677230011"
          >
            Photography
          </a>
          <img
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
            alt="Photography"
          />
        </MegaMenuLi>

        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=7aa43072d82b1fe68314d1917bff3d38&camp=15121&creative=330641&node=677212011"
          >
            Audio &amp; Theatre
          </a>
          <img
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
            alt="Audio & Theatre"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=d0d51c1e9e9124a1d3f6fa3658a164a4&camp=15121&creative=330641&node=2404990011"
          >
            Computers
          </a>
          <img
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
            alt=""
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=709d5cbe22703c482347f67a74d214a9&camp=15121&creative=330641&node=3379552011"
          >
            Cell Phones
          </a>
          <img
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
            alt="Phones & Accessories"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuA
            target="_blank"
            rel="noopener noreferrer"
            href="/computers"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=db579a9a612555ba26a81646c9d8cf09&camp=15121&creative=330641&node=680468011"
            >
              Headphones
            </a>
            <img
              src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
              alt="Headphones"
            />
          </MegaMenuA>
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=f95ac8c31280c8d8165ab077eb889adc&camp=15121&creative=330641&node=677253011"
          >
            GPS &amp; Navigation
          </a>
          <img
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
            alt="GPS"
          />
        </MegaMenuLi>

        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b?_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=2e0f1f0095d751f2c07c096289a56094&camp=15121&creative=330641&node=667823011"
          >
            Best Selling Electronics
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Clothing & Fashion" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture2.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?k=&amp;ref=nb_sb_noss&amp;rh=n%3A10287217011&amp;url=node%3D10287217011&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=c97ad9939d6a7f896fc062334f0f82be&camp=15121&creative=330641"
          >
            Men's Fashion
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b/ref=s9_acss_bw_cg_xglcnav_2a1_w?node=10287465011&amp;pf_rd_m=A1IM4EOPHS76S7&amp;pf_rd_s=merchandised-search-11&amp;pf_rd_r=75TMS2C7M287A7CPNQ0G&amp;pf_rd_t=101&amp;pf_rd_p=470c3056-0709-5cc2-9656-bafc0f069047&amp;pf_rd_i=8604903011&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=080565f884e7ca1e79eebd1e8b741202&camp=15121&creative=330641"
          >
            Women's Fashion
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
          <MegaMenuSpan>Hot</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?i=sporting&amp;k=&amp;ref=nb_sb_noss&amp;url=search-alias%3Dsporting&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=bc91ff85590807472dbd3bcaedac5615&camp=15121&creative=330641"
          >
            Sports & Outdoors
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?k=&amp;ref=nb_sb_noss&amp;rh=n%3A2439094011&amp;url=node%3D2439094011&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=6a7021918a19a541b7cdcc3140352d26&camp=15121&creative=330641"
          >
            Woman's Yoga Wear
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?k=lingerie&amp;ref=nb_sb_noss&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=1861037225cc8c9fb6c768183c9f0ca2&camp=15121&creative=330641"
          >
            Lingerie
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?i=jewelry&amp;k=&amp;ref=nb_sb_noss&amp;url=search-alias%3Djewelry&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=e6df69eb63e2eaf3136f7bc926ac879b&camp=15121&creative=330641"
          >
            Jewelry
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?k=fit+watch&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=36af510933b65afe746ffe2d99132a1f&camp=15121&creative=330641"
          >
            Wearable Tech
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Health & Lifestyle" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.picture3.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?i=baby&amp;k=&amp;ref=nb_sb_noss_2&amp;url=search-alias%3Dbaby&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=124678217f477d56011f7e46c7c384de&camp=15121&creative=330641"
          >
            Baby Shop
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&amp;field-keywords=&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=57ca9f41a8e5110ab19039bc820af047&camp=15121&creative=330641"
          >
            Book Store
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b/?_encoding=UTF8&amp;node=6369740011&amp;bbn=6205177011&amp;ref_=Oct_CateC_6205177011_5&amp;pf_rd_p=033e876d-06f3-56a4-bfe4-f0a34860e752&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_t=101&amp;pf_rd_i=6205177011&amp;pf_rd_m=A3DWYIK6Y9EEQB&amp;pf_rd_r=WV0R3X1PN5XAHYSF5VSH&amp;pf_rd_r=WV0R3X1PN5XAHYSF5VSH&amp;pf_rd_p=033e876d-06f3-56a4-bfe4-f0a34860e752&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=782c122befa9d9a6dbb1335da3785751&camp=15121&creative=330641"
          >
            Diet &amp; Nutrition
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/b/?_encoding=UTF8&amp;node=15452195011&amp;bbn=6205177011&amp;ref_=Oct_CateC_6205177011_7&amp;pf_rd_p=033e876d-06f3-56a4-bfe4-f0a34860e752&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_t=101&amp;pf_rd_i=6205177011&amp;pf_rd_m=A3DWYIK6Y9EEQB&amp;pf_rd_r=WV0R3X1PN5XAHYSF5VSH&amp;pf_rd_r=WV0R3X1PN5XAHYSF5VSH&amp;pf_rd_p=033e876d-06f3-56a4-bfe4-f0a34860e752&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=e982d7d8d0654dc72983414283d7d634&camp=15121&creative=330641"
          >
            Wellness
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s/ref=lp_6371179011_ex_n_1?rh=n%3A6205124011&amp;bbn=6205124011&amp;ie=UTF8&amp;qid=1577411748&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=bbe52f6e1ede145131ce9d2edcb99178&camp=15121&creative=330641"
          >
            Beauty Shop
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/gp/bestsellers/hpc/?ie=UTF8&amp;ref_=sv_hpc_2&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=6f6c8b50dc7864b2194242d93ca5cadc&camp=15121&creative=330641"
          >
            Best Sellers
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?i=amazon-devices&amp;ref=nb_sb_noss&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=14c3c4ec6341a488d2feb89aabe22f32&camp=15121&creative=330641"
          >
            Amazon Products
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s/ref=nb_sb_noss?url=search-alias%3Dtools&amp;field-keywords=&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=997b8b1f057e3d094b9e91630fd0a507&camp=15121&creative=330641"
          >
            Tools
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default SuperStoreList1;

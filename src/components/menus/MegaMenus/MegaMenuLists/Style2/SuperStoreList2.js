// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  MegaMenuUl,
  MegaMenuLi,
  MegaMenuSpan,
  MegaMenuPicture,
  MegaMenuPictureContainer,
} from './ListStyles';

import ListHeader from './ListHeader';

const SuperStoreList2 = () => {
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
      bag: file(relativePath: { eq: "megaMenu/bags-monnet-limegreen.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fashion: file(relativePath: { eq: "superstore/fashion.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lion: file(relativePath: { eq: "superstore/lion.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      drone: file(relativePath: { eq: "superstore/drone.jpg" }) {
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
        <ListHeader title="Top Brands in Electronics" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.drone.childImageSharp.fixed} />
        </MegaMenuPictureContainer>

        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?bbn=2404990011&amp;rh=n%3A667823011%2Cn%3A%21677211011%2Cn%3A2404990011%2Cp_89%3AApple&amp;dc&amp;fst=as%3Aoff&amp;qid=1577412564&amp;rnid=7590290011&amp;ref=sr_in_a_p_89_755&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=ca2d0539cbb81de337f8e8d939c7d381&camp=15121&creative=330641"
          >
            Apple
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
          <MegaMenuSpan spanColor="primary">Popular</MegaMenuSpan>
        </MegaMenuLi>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?k=asus&amp;ref=nb_sb_noss&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=188a06d044dd1136765456572765b801&camp=15121&creative=330641"
          >
            ASUS
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
            href="https://www.amazon.ca/s?bbn=667823011&amp;rh=n%3A667823011%2Cp_89%3AApple%7CBOSE&amp;dc&amp;fst=as%3Aoff&amp;qid=1577472913&amp;rnid=7590290011&amp;ref=sr_in_-2_p_89_9&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=be56de2d53e20e4388c249df5e6ffb08&camp=15121&creative=330641"
          >
            Bose
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
            href="https://www.amazon.ca/s?bbn=677235011&amp;rh=n%3A667823011%2Cn%3A%21677211011%2Cn%3A677230011%2Cn%3A677235011%2Cp_89%3ACanon&amp;dc&amp;fst=as%3Aoff&amp;qid=1577473540&amp;rnid=7590290011&amp;ref=lp_677235011_nr_p_89_0&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=16ae019b57a4f12bcc41c49a44c1cb85&camp=15121&creative=330641"
          >
            Canon
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
            href="https://www.amazon.ca/s?i=electronics&amp;bbn=667823011&amp;rh=n%3A667823011%2Cp_89%3AFitbit&amp;dc&amp;fst=as%3Aoff&amp;qid=1577473110&amp;rnid=7590290011&amp;ref=sr_nr_p_89_8&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=146b7f99379e1114c22befeee1f53946&camp=15121&creative=330641"
          >
            Fitbit
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
            href="https://www.amazon.ca/s?i=electronics&amp;bbn=667823011&amp;rh=n%3A667823011%2Cp_89%3AGarmin&amp;dc&amp;fst=as%3Aoff&amp;qid=1577473275&amp;rnid=7590290011&amp;ref=sr_nr_p_89_8&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=702bfd1cb76711b53b888a0f28d7d335&camp=15121&creative=330641"
          >
            Garmin
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
            href="https://www.amazon.ca/s?k=huawei&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=13e6ead3bcdac1bb169fcc6b98c45107&camp=15121&creative=330641"
          >
            Huawei
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
            href="https://www.amazon.ca/s?k=lenovo&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=cc5b445e29d2f48e51048137b348d708&camp=15121&creative=330641"
          >
            Lenovo
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
            href="https://www.amazon.ca/s?i=electronics&amp;bbn=667823011&amp;rh=n%3A667823011%2Cp_89%3ALogitech&amp;dc&amp;fst=as%3Aoff&amp;qid=1577473322&amp;rnid=7590290011&amp;ref=sr_nr_p_89_8&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=9c460fb58c3625daa0199e220411877b&camp=15121&creative=330641"
          >
            Logitech
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
            href="https://www.amazon.ca/s?i=electronics&amp;bbn=667823011&amp;rh=n%3A667823011%2Cp_89%3ASamsung&amp;dc&amp;fst=as%3Aoff&amp;qid=1577473395&amp;rnid=5690384011&amp;ref=sr_nr_p_85_1&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=c6eb034950b76e27986aedab526470db&camp=15121&creative=330641"
          >
            Samsung
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Top Fashion Brands" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.fashion.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/s?k=adidas&amp;i=apparel&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=9a101e33ce5faecdf1eb8104508857af&camp=15121&creative=330641"
          >
            Adidas
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
            href="https://www.amazon.ca/s?k=Aldo&amp;i=apparel&amp;ref=nb_sb_noss&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=31c6754ba10f2f89582f8331536f5654&camp=15121&creative=330641"
          >
            Aldo
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
            href="https://www.amazon.ca/s?k=calvin+klein&amp;i=apparel&amp;rh=p_89%3ACalvin+Klein&amp;dc&amp;crid=3SFJG5W47HLLN&amp;qid=1577474599&amp;rnid=7590290011&amp;sprefix=Calvin%2Capparel%2C202&amp;ref=sr_nr_p_89_1&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=7717bf229776daeec0cd832aec78b294&camp=15121&creative=330641"
          >
            Calvin Klein
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
            href="https://www.amazon.ca/s?k=fossil&amp;i=apparel&amp;ref=nb_sb_noss&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=2b1b5af99daca79d03cd320e2f165d04&camp=15121&creative=330641"
          >
            Fossil
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
            href="https://www.amazon.ca/s?k=hugo+boss&amp;i=apparel&amp;crid=36WXXERBQ5BE2&amp;sprefix=Hugo%2Capparel%2C358&amp;ref=nb_sb_ss_i_1_4&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=328b8b7712ca3728e065b55c97d5452f&camp=15121&creative=330641"
          >
            Hugo Boss
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
            href="https://www.amazon.ca/s?k=levis&amp;i=apparel&amp;ref=nb_sb_noss_1&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=37ad46325fc34f8ce8f2d40af5c0c1bb&camp=15121&creative=330641"
          >
            Levis
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
            href="https://www.amazon.ca/s?k=nike&amp;i=apparel&amp;ref=nb_sb_noss&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=81415362c4b51acb01e397fb4cbc58d5&camp=15121&creative=330641"
          >
            Nike
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
            href="https://www.amazon.ca/s?k=stuart+weitzman&amp;crid=1DHNLWBBT2JOU&amp;sprefix=stuart+w%2Capparel%2C193&amp;ref=nb_sb_ss_fb_1_8&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=ab0be8b0efbe61d4d3a7a32c44885ca9&camp=15121&creative=330641"
          >
            Stuart weitzman
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
            href="https://www.amazon.ca/s?k=under+armour&amp;i=apparel&amp;crid=3LV12GLRZ98NC&amp;sprefix=under%2Capparel%2C199&amp;ref=nb_sb_ss_i_1_5&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=a5cfb87a026520e0e15cc0efc9e96b0b&camp=15121&creative=330641"
          >
            Under Armour
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
            href="https://www.amazon.ca/s?k=zara&amp;i=apparel&amp;dc&amp;qid=1577474527&amp;rnid=7590290011&amp;ref=sr_nr_p_89_1&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=8e9a3cde430083170102f517dba02c03&camp=15121&creative=330641"
          >
            Zara
          </a>
          <img
            alt=""
            src="//ir-ca.amazon-adsystem.com/e/ir?t=fashionfive-20&l=ur2&o=15"
          />
        </MegaMenuLi>
      </MegaMenuUl>
      <MegaMenuUl>
        <ListHeader title="Popular Items This Week" />
        <MegaMenuPictureContainer>
          <MegaMenuPicture fixed={data.lion.childImageSharp.fixed} />
        </MegaMenuPictureContainer>
        <MegaMenuLi>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.ca/Echo-Dot-3rd-gen-Charcoal/dp/B07PDHT5XP/ref=sr_1_1?keywords=echo+dot&amp;qid=1577475254&amp;smid=A3DWYIK6Y9EEQB&amp;sr=8-1&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=e37ac336f420dbb1998bb75bfc71d0f7&camp=15121&creative=330641"
          >
            Echo Dot
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
            href="https://www.amazon.ca/Fire-TV-Stick-with-All-New-Alexa-Voice-Remote/dp/B0791Z1G6W/ref=sr_1_2_sspa?crid=SGCI65WC9FQ8&amp;keywords=fire+stick+tv&amp;qid=1577475339&amp;smid=A3DWYIK6Y9EEQB&amp;sprefix=fire+%2Caps%2C204&amp;sr=8-2-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFFTzYzRVFLVFdWMTMmZW5jcnlwdGVkSWQ9QTA0Nzg5NjVXS1QwMFRLSVdXQ0cmZW5jcnlwdGVkQWRJZD1BMDc2MjE2MEUzVkY5S1JIR1VMSSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=d7b50c9520cb557bf7a08dad76615d67&camp=15121&creative=330641"
          >
            Fire Stick
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
            href="https://www.amazon.ca/W%C3%ADnd%D0%BEws-Professional-Download-Lifetime-Activation/dp/B07M9VX6W8/ref=sr_1_3?keywords=windows+10&amp;qid=1577475431&amp;sr=8-3&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=cd6234d6f9092b613751376e77e6d08b&camp=15121&creative=330641"
          >
            Window 10
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
            href="https://www.amazon.ca/Game-Thrones-Season-8-DVD/dp/B07QDKKF14/ref=sr_1_2?crid=290CLNTF6OEOJ&amp;keywords=game+of+thrones+season+8&amp;qid=1577475491&amp;sprefix=Game+of+throne%2Caps%2C198&amp;sr=8-2&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=69c0911a3c78b8ef5e8f6d8c4a820775&camp=15121&creative=330641"
          >
            Game of Thrones S8
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
            href="https://www.amazon.ca/Huawei-Honor-Factory-Unlocked-Smartphone/dp/B07L14D7F7/ref=sr_1_3?keywords=huawei&amp;qid=1577475631&amp;sr=8-3&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=11b4564ebbcf9483361be7654b81ecec&camp=15121&creative=330641"
          >
            Huawei Honor
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
            href="https://www.amazon.ca/Samsung-A10-Infinity-V-Unlocked-International/dp/B07Q77JLXX/ref=sr_1_5?keywords=samsung+Galaxy&amp;qid=1577475562&amp;sr=8-5&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=605a44869d20ab548b52cd4e8b4369e5&camp=15121&creative=330641"
          >
            Samsung Galaxy
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
            href="https://www.amazon.ca/Apple-iPhone-GSM-Unlocked-32GB/dp/B01N9YOF3R/ref=sr_1_2?keywords=iphone&amp;qid=1577475794&amp;sr=8-2&amp;th=1&_encoding=UTF8&tag=fashionfive-20&linkCode=ur2&linkId=ccb38cfc8295bba1047115373e2673af&camp=15121&creative=330641"
          >
            Apple iPhone
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

export default SuperStoreList2;

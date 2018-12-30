import React from 'react'
import ContentMeta from './ContentMeta'
import styled from 'styled-components'
import Image from 'gatsby-image'

const HeroContainer = styled.div`
  display: flex;
`

const BgImage = styled(Image)`
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 400px; // or whatever
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  flex:1
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  vertical-align: middle;
`

const Hero = ({ title, tags, date, heroImg = undefined }) => {
  return (
    <HeroContainer>
      {heroImg && <BgImage fluid={heroImg} />}
      <TitleContainer>
        <HeroTitle>{title}</HeroTitle>
        {(tags || date) && <ContentMeta date={date} tags={tags} />}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero

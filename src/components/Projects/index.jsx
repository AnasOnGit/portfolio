import React from "react";
// import Carousel, { CarouselItem } from "../Carousel/index";
import Carousel, { CarouselItem } from "../Carousel/index";
import Window from "./../Window/index";
export default function Projects() {
  return (
    <Carousel width="100">
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Online wishing cards"
          url="https://card4u.netlify.app/"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Food Blogging Website"
          url="https://akp.vercel.app"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Extract Video Meta Data.mp4"
          url="https://ytvidinfo.netlify.app"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Online wishing cards.git"
          url="https://wishes4u.netlify.app/"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Generate Names for TikTok"
          url="https://tiktoknamegenerator.netlify.app/"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Generate Names for YouTube"
          url="https://youtubenamegenerator.netlify.app/"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Tasbeeh Counter"
          url="https://tasbeeh.netlify.app/"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Video Downloader"
          url="https://yt-codestick-downloader.netlify.app/"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Search Colors"
          url="https://anasongit.github.io/color_search/"
        />
      </CarouselItem>
    </Carousel>
  );
}

export function AndroidApps() {
  return (
    <Carousel width="100">
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Paint The Wall - Game"
          url="https://play.google.com/store/apps/details?id=com.cardboxstudio.paintthewall"
          img="https://play-lh.googleusercontent.com/d3WNFwFvgUcfn9GZzC6pr6JWM3OEtR50iVWNN06JOOJDNpRvXDSFy050qUmR1lhZYXEr=w2560-h1440-rw"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Six Kalmas App"
          url="https://play.google.com/store/apps/details?id=com.cardboxstudio.sixkalmas"
          img="https://play-lh.googleusercontent.com/hKOYRap_iGQORmdTRufS7VVhmEFrz0U0ioQf3jPDzmxgOFEmaxrel1d6HOSP_YI9V6nu=w2560-h1440-rw"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="99 Name of Allah App"
          url="https://play.google.com/store/apps/details?id=com.cardboxstudio.namesofallah"
          img="https://play-lh.googleusercontent.com/mqVcxlu9OLUi2k1Eqqfq2vwpMO9xyCWBR712yK_utzeYco1fTNT4IGTfp1H-tN7f6I4=w2560-h1440-rw"
        />
      </CarouselItem>
      <CarouselItem disableMarginRight={true}>
        <Window
          width="100%"
          title="Quran App"
          url="https://play.google.com/store/apps/details?id=com.cardboxstudio.quran"
          img="https://play-lh.googleusercontent.com/1m48Ja62lCZk1ZjudnVYBzpTRVtuzyfpyLUP5wtoqAYqKI3FLAKawG08lasH1qPmHw=w2560-h1440-rw"
        />
      </CarouselItem>
    </Carousel>
  );
}

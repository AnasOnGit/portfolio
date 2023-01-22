import "./languageCard.css";
import Carousel, { CarouselItem } from "../Carousel/index";

export function LanguageCard({ pic, name, year, url, language }) {
  let difference = new Date().getFullYear() - year;
  return (
    <div className="language-card-container">
      <div className="language-card-img-container">
        {/* <div
          style={{ backgroundImage: `url(${pic})` }}
          className="img-effect"
        ></div> */}
        <img src={pic} alt={name} />
      </div>
      <div className="language-card-name">{language}</div>
      <div className="language-card-year">
        {difference === 0 ? "LESS THAN A" : difference} YEAR
        {difference === 0 ? "" : "S"} <br /> OF EXPERIENCE.
      </div>
      <a className="language-card-github-link" target="_blank" href={url}>
        VIEW ON GITHUB
      </a>
    </div>
  );
}

export default function LanguageCardContainer() {
  return (
    <Carousel width="150" sign="px">
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="Javascript"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=javascript"
          pic="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          year="2018"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="React"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=javascript"
          pic="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          year="2019"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="R Language"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=rlang&sort="
          pic="data:image/jpeg;base64,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"
          year="2022"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="GD Script"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=gdscript&sort="
          pic="https://cdn.conceptartempire.com/images/08/6123/00-featured-godot-logo.jpg"
          year="2022"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="SQL"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=sql&sort="
          pic="data:image/png;base64,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"
          year="2018"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="Node JS"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=javascript"
          pic="https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png"
          year="2019"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="React Native"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=javascript"
          pic="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"
          year="2021"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="HTML"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=html"
          pic="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
          year="2018"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="CSS"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=css"
          pic="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          year="2018"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="Python"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=python"
          pic="https://www.pngfind.com/pngs/m/62-626208_python-logo-png-transparent-background-python-logo-png.png"
          year="2018"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="PHP"
          url="https://github.com/SyedAnasIkhlas?tab=repositories&q=&type=&language=php&sort="
          pic="https://e7.pngegg.com/pngimages/666/502/png-clipart-brand-php-logo-computer-file-product-breeze-blue-text-thumbnail.png"
          year="2018"
        />
      </CarouselItem>
      <CarouselItem wsidth="50%">
        <LanguageCard
          language="C"
          url="https://github.com/AnasOnGit?tab=repositories&q=&type=&language=c"
          pic="https://toppng.com/uploads/preview/c-programming-icon-c-programming-language-logo-11562945679duaxtn3yq0.png"
          year="2023"
        />
      </CarouselItem>
    </Carousel>
  );
}

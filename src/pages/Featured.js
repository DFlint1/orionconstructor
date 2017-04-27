import React from "react";

import Article from "../Components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "How do you select the RIGHT contractor? Try these Tips!",
      "Are You Looking for Land to Build a New Home?",
      "Land Shopping?",
      "Do you Hire an Architect or a Builder First? Why not Both.",
      "Some Article",
      "Inspection Report Confusion?",
      "San Antonio the Solar Hub",
      "Fed up with the Way Big Banks Treat you and your Money?",
      "Having my house solid into rock helped me feel the earthquake better this morning!",
      "Trump Follows Me on Twitter!",
      "Love your Land and Home Too",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}

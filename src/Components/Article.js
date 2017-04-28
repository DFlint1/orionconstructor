import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-3">
        <h4>{title}</h4>
        <p>Before deciding who to hire for your next project by looking at lowest bid and quickest timeframe, ask yourself if you want in done right, or want to spend the next 15 years WISHING it was done right!
We do it right for you. We want your business, but we won't sacrifice time and money to deliver poor quality. You will be super happy with your home if you call us. New construction, remodel, repairs, or maintenance, we will deliver top rate service.</p>
<h4>{title}</h4><p> Need help with your hunny-do list or other handyman items? I am gearing up to handle all types of minor home repairs and services, so call me with your needs so we can keep my guy BUSY! Thank you.</p><h4>{title}></h4><p> Take advantage of builder pricing on your regular routine maintenance and repairs by calling me!
I saved a neighbor $2000 on a water heater replacement. His retail quote from a major service company was $3000, but with my connections I got the job done for him at $1000, including my fee!! Don't you be the next story of someone paying too much for services that I can help you with. If it relates to your house, I can help you fix it.
2 Likes</p>

        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
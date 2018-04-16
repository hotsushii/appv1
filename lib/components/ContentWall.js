import React from 'react';


const QuoteBanner = (props) => {
  const author = props.author;
  const body = props.body;
  const id = props.id;
  return(
    <div>
      {id} <br />
      {body} <br />
      {author}
    </div>
  );
};



const ContentWall = (props) => {
  return(
    <div>
      <QuoteBanner id={props.quote.id} body={props.quote.quote} author={props.quote.author}/>
    </div>
  );

};

export default ContentWall;

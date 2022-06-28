import React from 'react'

const Newsitem = (props) => {
  let { title, description, imgUrl, url, date, source } = props;
  return (
    <div>
      <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1 }}>
          {source}
        </span>
        <img src={imgUrl ? imgUrl : 'https://cdn.wallpapersafari.com/49/28/vDFNZl.jpg'} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
          <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}
export default Newsitem

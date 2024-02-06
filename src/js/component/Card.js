import React from 'react'

const Card = (props) => {
  return (
    <div className="card col-12 col-md-6 col-lg-3 px-0">
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.link} className="btn btn-primary">Find Out More!</a>
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function News(props){

        function calculateDate(time) {
            const date = new Date(time);
            // date.toGMTString();
            // const date = time.toString().slice(0, 10);
            // var dateOffset = (24 * 60 * 60 * 1000) * 5; //5 days
            // var myDate = new Date();
            // myDate.setTime(myDate.getTime() - dateOffset);
            // console.log(date.toGMTString());
            return date.toGMTString();;
        }

        let { title, description, imageUrl, url, author, time, source } = props;
        return (
            // <div className="card" style={{ width: "18rem" }}>

            <div className="card">
                <div style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0',
                }}>
                    <span className="badge rounded-pill bg-danger" style={{ marginLeft: '-50px', zIndex: '1' }}>{source}</span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="not available for this item" />
                <div className="card-body">
                    <h5 className="card-title">{title === null ? "title not available" : title.length > 45 ? title.slice(0, 45) : title}...</h5>
                    <p className="card-text">{description === null ? "description not available" : description.length > 88 ? description.slice(0, 88) : description}...</p>

                    <p className='card-text my-0'><small className='text-muted'>Published on: {time === null ? "--" : calculateDate(time)}</small></p>
                    <div className='d-flex justify-content-between my-0'>
                        <div>
                            <p className='card-text my-0'><small className='text-muted'>By: {author === null ? "unknown" : author} </small></p>
                        </div>

                        <div>
                            <a href={url} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div >
        )

}

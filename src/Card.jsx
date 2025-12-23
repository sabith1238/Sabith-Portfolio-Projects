export default function Card({img, title, text, link}) {
    return (
        <>
            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
                <div className="card card-custom" style={{width: "25rem"}}>
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="table-group-divider"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {text}
                        </p>
                        <a
                            href={link}
                            className="btn btn-primary"
                            target="_blank"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}
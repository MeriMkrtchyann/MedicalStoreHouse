import "./NotFoundPage.css"

export default function NotFoundPage(){
    return(
        <div className="notfound">
          <img src ={process.env.PUBLIC_URL + "img/notFoundPage.jpg"} alt="notFoundPage"/> 
        </div>
    )
}
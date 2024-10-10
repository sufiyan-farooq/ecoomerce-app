import "../home.css"


export default function Collection(){
    return(
        <section id="collection">
  <div className="collections container">
    <div className="content">
      <img src="https://i.postimg.cc/Xqmwr12c/clothing.webp" alt="img" />
      <div className="img-content">
        <p>Clothing Collections</p>
        <button>
          <a href="#sellers">SHOP NOW</a>
        </button>
      </div>
    </div>
    <div className="content2">
      <img src="https://i.postimg.cc/8CmBZH5N/shoes.webp" alt="img" />
      <div className="img-content2">
        <p>Shoes Spring</p>
        <button>
          <a href="#sellers">SHOP NOW</a>
        </button>
      </div>
    </div>
    <div className="content3">
      <img src="https://i.postimg.cc/MHv7KJYp/access.webp" alt="img" />
      <div className="img-content3">
        <p>Accessories</p>
        <button>
          <a href="#sellers">SHOP NOW</a>
        </button>
      </div>
    </div>
  </div>
</section>

    )
}
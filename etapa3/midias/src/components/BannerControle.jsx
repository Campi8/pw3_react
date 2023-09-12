import banner2 from '../assets/img/3.png'

const BannerControle = () => {
    const imgPadrao = {
        w: 600,
        h: 240
    }
    return(
        <div>
            <img src={banner2} alt="Banner de promoções 2" width={imgPadrao.w} height={imgPadrao.h} />
        </div>
    )
}

export default BannerControle
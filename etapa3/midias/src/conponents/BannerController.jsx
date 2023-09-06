import banner2 from '../assets/img/2.png'

const BannerController = () => {

    const imgPadrao = (
        w=600,
        h=240
    )
    return(
        <div>
            <img src={banner2} alt="Banner de promoçoes 2" width={imgPadrao.w} height={imgPadrao.h}/>
        </div>
    )
}

export default BannerController
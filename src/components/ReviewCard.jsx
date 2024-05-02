import {star} from "../assets/icons/index.js";

export const ReviewCard = ({review}) => {
    let imgURL = review.imgURL
    let customerName = review.customerName
    let rating = review.rating
    let feedback = review.feedback

    return (
        <div className={'flex justify-center items-center flex-col'}>
            <img src={imgURL} alt={customerName} className={'rounded-full object-center w[[120px] h-[120px]'}/>
            <p className={'mt-6 max-w-sm text-center info-text'}>{feedback}</p>
            <div className={'mt-3 flex justify-center items-center gap-2.5'}>
                <img src={star} alt={'rating'} className={'object-contain m-0'}/>
                <p className={'text-xl font-montserrat text-slate-gray'}>({rating})</p>
            </div>
            <h3 className={'mt-1 font-palanquin text-3xl text-center font-bold'}>{customerName}</h3>
        </div>
    )
}

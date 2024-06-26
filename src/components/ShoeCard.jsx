export const ShoeCard = ({shoe, changeBigShoeImage, selectedShoe}) => {
    const handleClick = () => {
        if (selectedShoe !== shoe.bigShoe) {
            changeBigShoeImage(shoe.bigShoe)
        }
    }

    return (
        <div
            className={`border-2 rounded-xl ${selectedShoe === shoe.bigShoe ? 'border-coral-red' : 'border-transparent cursor-pointer'} max-sm:flex-1`}
            onClick={handleClick}>
            <div className={'flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'}>
                <img src={shoe.bigShoe} alt={'shoe collection'} width={127} height={103} className={'object-contain'}/>
            </div>
        </div>
    )
}

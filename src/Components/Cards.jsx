function Cards({cardImage, cardName, cardType, cardText}){


    return(
        <>
    <div className="block">
        <div className="flex flex-col items-center">
                <div className="flex items-center object-cover h-90 w-66 bg-gray-500">
                <img src={cardImage} alt="cardImage" />
                </div>
                <h3 class="text-slate-900 mt-5 text-base font-bold">{cardName}</h3>
                <div className="flex justify-center items-center flex-col">
                <p class="text-slate-500mt-2 text-sm opacity-55">
                {cardType}
                </p>
                <p class="text-slate-500mt-2 text-sm">
                {cardText}
                </p>
               </div>
        </div>
    </div>

        </>
        )
}

export default Cards


export default function TextSection ({Description} : any) {

    const text = `${Description}`

    return(
        <div className="w-full justify-between p-8 rounded-lg bg-darkDarkColor">
            <p className="text-2xl font-normal leading-[30px] text-grayTextColor">{text}</p>
        </div> 
    )
}

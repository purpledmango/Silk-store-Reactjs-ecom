const CommentCard = ({ props }) => {
    return (
        <div className="w-[96%] md:w-[90%] shadow-3xl border-2 border-gray-900 my-5">
            <div className="flex p-5 flex-col justify-center items-start space-y-3">
                <h5 className="text-lg font-extrabold text-gray-800 ">{props.name}</h5>
                <div className="py-6">
                    <span className="text-2xl font-extralight ">"</span><span className="text-light text-gray-900 italic tracking-wider"> {props.comment}  </span><span className="text-2xl font-extralight">"</span>
                </div>
                <div className="text-xs tracking-wider font-light flex gap-2 justify-start items-center text-typography-accent">
                    <span>Commented on - </span>
                    <span className="font-bold">{props.date}</span>

                </div>
            </div>
        </div>
    )
}

export default CommentCard
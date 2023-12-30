const CommentCard =({props})=>{
    return (
        <div className="w-[90%] shadow-xl border-2 border-gray-700 my-5">
        <div className="flex p-5 flex-col justify-center items-start space-y-3">
            <h5 className="font-xl font-extrabold underline">{props.name}  </h5>
            <div>
            <span className="text-2xl font-semibold">"</span><span> {props.comment}  </span><span className="text-2xl font-semibold">"</span>
            </div>
            <span className="text-xs tracking-wider font-light">{props.date}</span>
        </div>
        </div>
        )
}

export default CommentCard
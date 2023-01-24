const Card = ({ icon, title }) => {

    return (
        <div className="flex flex-col items-center justify-center p-6 border border-blue-300 rounded-2xl hover:border-zoom-blue hover:shadow-lg hover:shadow-zoom-blue/25">
            {icon}
            <div className="flex justify-center text-center">{title}</div>
        </div>

    )
}

export default Card;
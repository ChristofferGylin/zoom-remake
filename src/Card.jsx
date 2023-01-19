const Card = ({ icon, title }) => {

    return (
        <div className="flex flex-col p-6 border border-zoom-blue rounded-xl">
            {icon}
            <div>{title}</div>
        </div>

    )
}

export default Card;